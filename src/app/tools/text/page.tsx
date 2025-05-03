import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, ArrowRight, Star, Clock } from 'lucide-react';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Text Tools | SubNexa',
  description:
    'Free online text manipulation tools to help you transform, analyze, and process text content efficiently.',
  keywords:
    'text tools, text converter, word counter, text case converter, text formatter, text editor',
  openGraph: {
    title: 'Text Tools | SubNexa',
    description:
      'Free online text manipulation tools to help you transform, analyze, and process text content efficiently.',
    url: 'https://subnexa.com/tools/text',
    siteName: 'SubNexa',
    type: 'website',
  },
};

// Text tools data
const TEXT_TOOLS = [
  {
    id: 'case-converter',
    name: 'Text Case Converter',
    description:
      'Convert text between different cases: lowercase, UPPERCASE, Title Case, camelCase, and more.',
    popular: true,
    new: false,
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description:
      'Count words, characters, sentences, and paragraphs in your text with detailed statistics.',
    popular: true,
    new: false,
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text in various formats with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'text-diff',
    name: 'Text Diff Tool',
    description: 'Compare two texts and highlight the differences between them.',
    popular: true,
    new: false,
  },
  {
    id: 'remove-duplicates',
    name: 'Remove Duplicate Lines',
    description: 'Remove duplicate lines from your text while preserving the original order.',
    popular: false,
    new: false,
  },
  {
    id: 'sort-text',
    name: 'Sort Text Lines',
    description: 'Sort lines alphabetically, numerically, by length, or in reverse order.',
    popular: false,
    new: false,
  },
  {
    id: 'text-to-speech',
    name: 'Text to Speech',
    description: 'Convert your text to spoken words with various voice options.',
    popular: false,
    new: true,
  },
  {
    id: 'line-numbers',
    name: 'Add/Remove Line Numbers',
    description: 'Add or remove line numbers from your text content.',
    popular: false,
    new: false,
  },
  {
    id: 'find-replace',
    name: 'Find and Replace',
    description: 'Find and replace text with support for regular expressions.',
    popular: false,
    new: false,
  },
  {
    id: 'text-randomizer',
    name: 'Text Randomizer',
    description: 'Shuffle words, lines, or characters in your text randomly.',
    popular: false,
    new: false,
  },
  {
    id: 'white-space',
    name: 'White Space Remover',
    description: 'Remove extra spaces, tabs, and new lines from your text.',
    popular: false,
    new: false,
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Count specific characters or character types in your text.',
    popular: false,
    new: false,
  },
  {
    id: 'text-reverser',
    name: 'Text Reverser',
    description: 'Reverse characters, words, or lines in your text.',
    popular: false,
    new: false,
  },
  {
    id: 'text-splitter',
    name: 'Text Splitter',
    description: 'Split text by delimiter, character count, or line count.',
    popular: false,
    new: false,
  },
  {
    id: 'text-joiner',
    name: 'Text Joiner',
    description: 'Join multiple lines with a custom delimiter.',
    popular: false,
    new: true,
  },
];

export default function TextToolsPage() {
  // Filter tools by popular and new
  const popularTools = TEXT_TOOLS.filter((tool) => tool.popular);
  const newTools = TEXT_TOOLS.filter((tool) => tool.new);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex mb-4 p-2 rounded-full bg-primary/10">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Text Tools</h1>
        <p className="text-lg text-foreground/80">
          A collection of {TEXT_TOOLS.length} free online text manipulation tools to help you
          transform, analyze, and process text content efficiently.
        </p>
      </div>

      {/* Popular Tools */}
      {popularTools.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold">Popular Text Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/text/${tool.id}`}
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
            <h2 className="text-xl font-bold">New Text Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/text/${tool.id}`}
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
        <h2 className="text-xl font-bold mb-6">All Text Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEXT_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/text/${tool.id}`}
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
            href="/tools/formatters"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Formatters</h3>
            <p className="text-sm text-muted-foreground">Clean and beautify your text content</p>
          </Link>

          <Link
            href="/tools/encoders"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Encoders/Decoders</h3>
            <p className="text-sm text-muted-foreground">Encode or decode your text</p>
          </Link>

          <Link
            href="/tools/generators"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Generators</h3>
            <p className="text-sm text-muted-foreground">Generate various types of text</p>
          </Link>

          <Link
            href="/tools/converters"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Converters</h3>
            <p className="text-sm text-muted-foreground">Convert text to different formats</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
