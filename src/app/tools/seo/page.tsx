import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BarChart3, Sparkles, Clock } from 'lucide-react';
import { SEO_TOOLS } from '@/constants';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'SEO Tools | SubNexa',
  description:
    'Free online SEO tools to analyze and improve your website ranking, performance, and visibility.',
  keywords:
    'seo tools, meta tags analyzer, open graph tester, robots.txt checker, sitemap validator, keyword density, schema markup',
  openGraph: {
    title: 'SEO Tools | SubNexa',
    description:
      'Free online SEO tools to analyze and improve your website ranking, performance, and visibility.',
    url: 'https://subnexa.com/tools/seo',
    siteName: 'SubNexa',
    type: 'website',
  },
};

export default function SeoToolsPage() {
  const popularTools = SEO_TOOLS.filter((tool) => tool.popular);
  const newTools = SEO_TOOLS.filter((tool) => tool.new);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex mb-4 p-2 rounded-full bg-primary/10">
          <BarChart3 className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">SEO Tools</h1>
        <p className="text-lg text-foreground/80">
          Analyze, optimize, and improve your website’s SEO using {SEO_TOOLS.length} powerful free
          tools.
        </p>
      </div>

      {/* Popular Tools */}
      {popularTools.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold">Popular SEO Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/seo/${tool.id}`}
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
            <h2 className="text-xl font-bold">New SEO Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/seo/${tool.id}`}
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
        <h2 className="text-xl font-bold mb-6">All SEO Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SEO_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/seo/${tool.id}`}
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
