import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { AlignLeft, Star, Clock } from 'lucide-react';

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

// Formatter tools data
const FORMATTER_TOOLS = [
  {
    id: 'json',
    name: 'JSON Formatter',
    description: 'Format and validate JSON data with customizable indentation.',
    popular: true,
    new: false,
  },
  {
    id: 'xml',
    name: 'XML Formatter',
    description: 'Format and validate XML documents with customizable indentation.',
    popular: true,
    new: false,
  },
  {
    id: 'html',
    name: 'HTML Formatter',
    description: 'Format and beautify HTML code with customizable options.',
    popular: true,
    new: false,
  },
  {
    id: 'css',
    name: 'CSS Formatter',
    description: 'Format and beautify CSS code for better readability.',
    popular: true,
    new: false,
  },
  {
    id: 'javascript',
    name: 'JavaScript Formatter',
    description: 'Format and beautify JavaScript code with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'sql',
    name: 'SQL Formatter',
    description: 'Format SQL queries for better readability and understanding.',
    popular: false,
    new: false,
  },
  {
    id: 'yaml',
    name: 'YAML Formatter',
    description: 'Format and validate YAML files with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'typescript',
    name: 'TypeScript Formatter',
    description: 'Format and beautify TypeScript code with customizable options.',
    popular: false,
    new: true,
  },
  {
    id: 'markdown',
    name: 'Markdown Formatter',
    description: 'Format and beautify Markdown documents for improved readability.',
    popular: false,
    new: false,
  },
  {
    id: 'php',
    name: 'PHP Formatter',
    description: 'Format and beautify PHP code with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'csv',
    name: 'CSV Formatter',
    description: 'Format and clean CSV data with various options.',
    popular: false,
    new: false,
  },
  {
    id: 'python',
    name: 'Python Formatter',
    description: 'Format Python code according to PEP 8 and other style guides.',
    popular: false,
    new: true,
  },
  {
    id: 'java',
    name: 'Java Formatter',
    description: 'Format and beautify Java code with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'c-sharp',
    name: 'C# Formatter',
    description: 'Format and beautify C# code with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'toml',
    name: 'TOML Formatter',
    description: 'Format and validate TOML configuration files.',
    popular: false,
    new: false,
  },
];

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
