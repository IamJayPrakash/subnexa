import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Free Online Tools Collection | SubNexa',
  description:
    'Explore our comprehensive collection of free online tools for developers, content creators, and digital marketers. Find text tools, converters, formatters, generators, and more.',
  keywords:
    'online tools, web tools, free tools, development tools, text tools, converters, generators',
  openGraph: {
    title: 'Free Online Tools Collection | SubNexa',
    description:
      'Explore our comprehensive collection of free online tools for developers, content creators, and digital marketers.',
    url: 'https://subnexa.com/tools',
    siteName: 'SubNexa',
    type: 'website',
  },
};

// Tool categories with their icons and descriptions
const TOOL_CATEGORIES = [
  {
    name: 'Text Tools',
    slug: 'text',
    description: 'Manipulate, analyze, and transform text content easily',
    count: 42,
    popular: ['Text Case Converter', 'Lorem Ipsum Generator', 'String Utilities'],
  },
  {
    name: 'Developer Tools',
    slug: 'developer',
    description: 'Essential utilities for web development and coding',
    count: 38,
    popular: ['JSON Formatter', 'HTML Encoder/Decoder', 'CSS Minifier'],
  },
  {
    name: 'SEO Tools',
    slug: 'seo',
    description: 'Improve your website visibility and search rankings',
    count: 24,
    popular: ['Meta Tag Analyzer', 'Keyword Density Tool', 'SERP Preview'],
  },
  {
    name: 'Image Tools',
    slug: 'image',
    description: 'Process, convert, and optimize images online',
    count: 21,
    popular: ['Image Resizer', 'Image to Base64', 'Color Picker'],
  },
  {
    name: 'Security Tools',
    slug: 'security',
    description: 'Protect your data and enhance digital security',
    count: 18,
    popular: ['Password Generator', 'Hash Generator', 'Encryption Tools'],
  },
  {
    name: 'Content Tools',
    slug: 'content',
    description: 'Create and optimize digital content effectively',
    count: 27,
    popular: ['Headline Analyzer', 'Readability Checker', 'Word Counter'],
  },
  {
    name: 'Converters',
    slug: 'converters',
    description: 'Convert between various formats and units',
    count: 35,
    popular: ['Unit Converter', 'Number Base Converter', 'Date/Time Converter'],
  },
  {
    name: 'Formatters',
    slug: 'formatters',
    description: 'Format and beautify code and other content',
    count: 19,
    popular: ['JSON Formatter', 'XML Formatter', 'SQL Formatter'],
  },
];

// Popular tools across categories
const POPULAR_TOOLS = [
  { name: 'JSON Formatter', slug: 'json-formatter', category: 'developer' },
  { name: 'Password Generator', slug: 'password-generator', category: 'security' },
  { name: 'Text Case Converter', slug: 'text-case-converter', category: 'text' },
  { name: 'HTML Encoder/Decoder', slug: 'html-encoder-decoder', category: 'developer' },
  { name: 'URL Encoder/Decoder', slug: 'url-encoder-decoder', category: 'developer' },
  { name: 'Lorem Ipsum Generator', slug: 'lorem-ipsum-generator', category: 'content' },
  { name: 'Base64 Encoder/Decoder', slug: 'base64-encoder-decoder', category: 'developer' },
  { name: 'MD5 Hash Generator', slug: 'md5-hash-generator', category: 'security' },
  { name: 'Image Resizer', slug: 'image-resizer', category: 'image' },
  { name: 'Color Converter', slug: 'color-converter', category: 'converters' },
  { name: 'CSS Minifier', slug: 'css-minifier', category: 'developer' },
  { name: 'Word Counter', slug: 'word-counter', category: 'text' },
];

export default function ToolsPage() {
  // In a real app, you might fetch this data from an API or CMS
  const totalTools = TOOL_CATEGORIES.reduce((sum, category) => sum + category.count, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">All Online Tools</h1>
        <p className="text-lg text-foreground/80">
          Browse our collection of {totalTools}+ free online tools to help you with everyday tasks.
          No registration required, no downloads needed.
        </p>

        {/* Search Bar */}
        <div className="mt-8 relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input
            type="text"
            placeholder="Search for a tool..."
            className="w-full py-3 pl-10 pr-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
          <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" size="sm">
            Search
          </Button>
        </div>
      </div>

      {/* Tool Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Tool Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOL_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/tools/${category.slug}`}
              className="group bg-background border border-border hover:border-primary/50 rounded-xl p-6 transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-md">
                  {category.count}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.popular.slice(0, 2).map((tool) => (
                  <span
                    key={tool}
                    className="text-xs bg-background border border-border rounded-full px-2 py-1"
                  >
                    {tool}
                  </span>
                ))}
                <span className="text-xs text-primary font-medium flex items-center">
                  +{category.count - 2} more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tools */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular Tools</h2>
          <Link
            href="/tools/popular"
            className="text-primary hover:underline flex items-center text-sm font-medium"
          >
            View all popular tools <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {POPULAR_TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.category}/${tool.slug}`}
              className="bg-background border border-border hover:border-primary/50 rounded-lg p-4 transition-all hover:shadow-sm"
            >
              <h3 className="font-medium hover:text-primary transition-colors">{tool.name}</h3>
              <div className="mt-2 flex items-center">
                <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5">
                  {tool.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recently Added */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recently Added</h2>
          <Link
            href="/tools/new"
            className="text-primary hover:underline flex items-center text-sm font-medium"
          >
            View all new tools <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {POPULAR_TOOLS.slice(6, 10).map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.category}/${tool.slug}`}
              className="bg-background border border-border hover:border-primary/50 rounded-lg p-4 transition-all hover:shadow-sm"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium hover:text-primary transition-colors">{tool.name}</h3>
                <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full px-2 py-0.5">
                  New
                </span>
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5">
                  {tool.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Tools (A-Z) */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Tools (A-Z)</h2>

          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-1 gap-x-4">
          {POPULAR_TOOLS.concat(POPULAR_TOOLS)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((tool, index) => (
              <Link
                key={`${tool.slug}-${index}`}
                href={`/tools/${tool.category}/${tool.slug}`}
                className="py-2 px-1 hover:text-primary transition-colors border-b border-border/50 flex justify-between"
              >
                <span>{tool.name}</span>
                <span className="text-xs text-muted-foreground self-center">{tool.category}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
