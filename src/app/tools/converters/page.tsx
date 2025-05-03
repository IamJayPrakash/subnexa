import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRightLeft, ArrowRight, Star, Clock } from 'lucide-react';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Converters | SubNexa',
  description:
    'Free online converter tools to help you transform data between different formats, units, and file types.',
  keywords:
    'converters, format converter, unit converter, file converter, json to csv, markdown to html',
  openGraph: {
    title: 'Converters | SubNexa',
    description:
      'Free online converter tools to help you transform data between different formats, units, and file types.',
    url: 'https://subnexa.com/tools/converters',
    siteName: 'SubNexa',
    type: 'website',
  },
};

// Converter tools data
const CONVERTER_TOOLS = [
  {
    id: 'json-to-csv',
    name: 'JSON to CSV',
    description: 'Convert JSON data to CSV format with customizable options.',
    popular: true,
    new: false,
  },
  {
    id: 'csv-to-json',
    name: 'CSV to JSON',
    description: 'Convert CSV data to JSON format with various configuration options.',
    popular: true,
    new: false,
  },
  {
    id: 'markdown-to-html',
    name: 'Markdown to HTML',
    description: 'Convert Markdown syntax to HTML with preview functionality.',
    popular: true,
    new: false,
  },
  {
    id: 'html-to-markdown',
    name: 'HTML to Markdown',
    description: 'Convert HTML code to Markdown syntax.',
    popular: false,
    new: false,
  },
  {
    id: 'xml-to-json',
    name: 'XML to JSON',
    description: 'Convert XML documents to JSON format.',
    popular: false,
    new: false,
  },
  {
    id: 'json-to-xml',
    name: 'JSON to XML',
    description: 'Convert JSON data to XML format.',
    popular: false,
    new: false,
  },
  {
    id: 'yaml-to-json',
    name: 'YAML to JSON',
    description: 'Convert YAML files to JSON format.',
    popular: false,
    new: false,
  },
  {
    id: 'json-to-yaml',
    name: 'JSON to YAML',
    description: 'Convert JSON data to YAML format.',
    popular: false,
    new: true,
  },
  {
    id: 'image-converter',
    name: 'Image Format Converter',
    description: 'Convert images between different formats (JPG, PNG, WebP, etc.).',
    popular: true,
    new: false,
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description:
      'Convert between different units of measurement (length, weight, temperature, etc.).',
    popular: false,
    new: false,
  },
  {
    id: 'color-converter',
    name: 'Color Code Converter',
    description: 'Convert between different color formats (HEX, RGB, HSL, etc.).',
    popular: false,
    new: false,
  },
  {
    id: 'number-base-converter',
    name: 'Number Base Converter',
    description: 'Convert numbers between different bases (binary, decimal, hexadecimal, etc.).',
    popular: false,
    new: true,
  },
  {
    id: 'date-time-converter',
    name: 'Date & Time Converter',
    description: 'Convert between different date and time formats and timezones.',
    popular: false,
    new: false,
  },
  {
    id: 'pdf-to-text',
    name: 'PDF to Text',
    description: 'Extract text content from PDF files.',
    popular: false,
    new: false,
  },
  {
    id: 'text-to-html',
    name: 'Text to HTML',
    description: 'Convert plain text to HTML with proper formatting.',
    popular: false,
    new: false,
  },
];

export default function ConvertersPage() {
  // Filter tools by popular and new
  const popularTools = CONVERTER_TOOLS.filter((tool) => tool.popular);
  const newTools = CONVERTER_TOOLS.filter((tool) => tool.new);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex mb-4 p-2 rounded-full bg-primary/10">
          <ArrowRightLeft className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Converters</h1>
        <p className="text-lg text-foreground/80">
          A collection of {CONVERTER_TOOLS.length} free online converter tools to help you transform
          data between different formats, units, and file types.
        </p>
      </div>

      {/* Popular Tools */}
      {popularTools.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold">Popular Converters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/converters/${tool.id}`}
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
            <h2 className="text-xl font-bold">New Converters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/converters/${tool.id}`}
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
        <h2 className="text-xl font-bold mb-6">All Converters</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONVERTER_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/converters/${tool.id}`}
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
            <p className="text-sm text-muted-foreground">Format and beautify your data</p>
          </Link>

          <Link
            href="/tools/encoders"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Encoders/Decoders</h3>
            <p className="text-sm text-muted-foreground">Encode or decode data</p>
          </Link>

          <Link
            href="/tools/text"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Text Tools</h3>
            <p className="text-sm text-muted-foreground">Transform and analyze text</p>
          </Link>

          <Link
            href="/tools/web"
            className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-all hover:border-primary/50 text-center"
          >
            <h3 className="font-semibold hover:text-primary">Web Tools</h3>
            <p className="text-sm text-muted-foreground">Useful utilities for web development</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
