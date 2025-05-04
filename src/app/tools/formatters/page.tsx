import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { AlignLeft, Star, Clock } from 'lucide-react';
import { FORMATTER_TOOLS } from '@/constants';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Formatters | SubNexa',
  description:
    'Free online formatter tools to help you clean, format, and beautify code, text, and data structures.',
  keywords:
    'formatters, code formatters, json formatter, xml formatter, html formatter, css formatter, sql formatter',
  openGraph: {
    title: 'Formatters | SubNexa',
    description:
      'Free online formatter tools to help you clean, format, and beautify code, text, and data structures.',
    url: 'https://subnexa.com/tools/formatters',
    siteName: 'SubNexa',
    type: 'website',
  },
};

export default function FormattersPage() {
  const popularTools = FORMATTER_TOOLS.filter((tool) => tool.popular);
  const newTools = FORMATTER_TOOLS.filter((tool) => tool.new);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex mb-4 p-2 rounded-full bg-primary/10">
          <AlignLeft className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Formatters</h1>
        <p className="text-lg text-foreground/80">
          A collection of {FORMATTER_TOOLS.length} free online formatter tools to help you clean,
          format, and beautify code, text, and data structures.
        </p>
      </div>

      {/* Popular Tools */}
      {popularTools.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold">Popular Formatters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/formatters/${tool.id}`}
                className="bg-background border border-border rounded-lg p-5 hover:shadow-md transition-all hover:border-primary/50"
              >
                <h3 className="font-semibold mb-2 hover:text-primary">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* New Tools */}
      {newTools.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Clock className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="text-xl font-bold">New Formatters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/formatters/${tool.id}`}
                className="bg-background border border-border rounded-lg p-5 hover:shadow-md transition-all hover:border-primary/50 relative"
              >
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
                <h3 className="font-semibold mb-2 hover:text-primary">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Tools */}
      <div>
        <h2 className="text-xl font-bold mb-6">All Formatters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FORMATTER_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/formatters/${tool.id}`}
              className="bg-background border border-border rounded-lg p-5 hover:shadow-md transition-all hover:border-primary/50"
            >
              <h3 className="font-semibold mb-2 hover:text-primary">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
