import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Code, ArrowRight, Star, Clock } from 'lucide-react';
import { ENCODER_TOOLS } from '@/constants';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Encoders & Decoders | SubNexa',
  description:
    'Free online encoder and decoder tools to help you encode or decode content in various formats.',
  keywords: 'encoders, decoders, base64, url encoder, jwt decoder, hash encoder, html encoder',
  openGraph: {
    title: 'Encoders & Decoders | SubNexa',
    description:
      'Free online encoder and decoder tools to help you encode or decode content in various formats.',
    url: 'https://subnexa.com/tools/encoders',
    siteName: 'SubNexa',
    type: 'website',
  },
};

export default function EncodersPage() {
  // Filter tools by popular and new
  const popularTools = ENCODER_TOOLS.filter((tool) => tool.popular);
  const newTools = ENCODER_TOOLS.filter((tool) => tool.new);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex mb-4 p-2 rounded-full bg-primary/10">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Encoders & Decoders</h1>
        <p className="text-lg text-foreground/80">
          A collection of {ENCODER_TOOLS.length} free online encoder and decoder tools to help you
          encode or decode content in various formats.
        </p>
      </div>

      {/* Popular Tools */}
      {popularTools.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold">Popular Encoders & Decoders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/encoders/${tool.id}`}
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
            <h2 className="text-xl font-bold">New Encoders & Decoders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/encoders/${tool.id}`}
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
        <h2 className="text-xl font-bold mb-6">All Encoders & Decoders</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ENCODER_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/encoders/${tool.id}`}
              className="bg-background border border-border rounded-lg p-5 hover:shadow-md transition-all hover:border-primary/50 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="font-semibold mb-2 hover:text-primary">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>

              <div className="flex items-center justify-end mt-4 text-primary text-sm">
                Use Tool <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Related Categories */}
      <div className="mt-16 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Related Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/tools/security"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Security Tools</h3>
            <p className="text-sm text-muted-foreground">Enhance your security</p>
          </Link>

          <Link
            href="/tools/converters"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Converters</h3>
            <p className="text-sm text-muted-foreground">Transform data formats</p>
          </Link>

          <Link
            href="/tools/web"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Web Tools</h3>
            <p className="text-sm text-muted-foreground">Useful tools for web development</p>
          </Link>

          <Link
            href="/tools/text"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Text Tools</h3>
            <p className="text-sm text-muted-foreground">Manipulate and analyze text</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
