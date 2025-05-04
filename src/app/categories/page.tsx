// app/categories/page.tsx
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  FileText,
  ArrowRightLeft,
  Code,
  AlignLeft,
  Wand2,
  Search,
  Globe,
  Lock,
  ChevronRight,
} from 'lucide-react';

import { metadata } from './metadata';
export { metadata };

// Category data
const CATEGORIES = [
  {
    title: 'Text Tools',
    description: 'Transform, analyze, and manipulate text with our powerful text utilities.',
    icon: FileText,
    href: '/tools/text',
    color: 'bg-blue-500',
    popular: ['Text Case Converter', 'Word Counter', 'Text Diff Tool'],
  },
  {
    title: 'Converters',
    description: 'Convert between different formats, units, and file types effortlessly.',
    icon: ArrowRightLeft,
    href: '/tools/converters',
    color: 'bg-green-500',
    popular: ['JSON to CSV', 'Markdown to HTML', 'Image Format Converter'],
  },
  {
    title: 'Encoders/Decoders',
    description: 'Encode or decode content in various formats including Base64, URL, and more.',
    icon: Code,
    href: '/tools/encoders',
    color: 'bg-purple-500',
    popular: ['Base64 Encoder/Decoder', 'URL Encoder/Decoder', 'JWT Decoder'],
  },
  {
    title: 'Formatters',
    description: 'Clean, format, and beautify code, text, and data structures.',
    icon: AlignLeft,
    href: '/tools/formatters',
    color: 'bg-orange-500',
    popular: ['JSON Formatter', 'XML Formatter', 'SQL Formatter'],
  },
  {
    title: 'Generators',
    description: 'Generate random data, dummy text, secure passwords, and more.',
    icon: Wand2,
    href: '/tools/generators',
    color: 'bg-pink-500',
    popular: ['Password Generator', 'Lorem Ipsum Generator', 'UUID Generator'],
  },
  {
    title: 'SEO Tools',
    description: 'Analyze and optimize your website for better search engine visibility.',
    icon: Search,
    href: '/tools/seo',
    color: 'bg-yellow-500',
    popular: ['Meta Tag Analyzer', 'Keyword Density Checker', 'SERP Preview'],
  },
  {
    title: 'Web Tools',
    description: 'Useful utilities for web developers, designers, and digital professionals.',
    icon: Globe,
    href: '/tools/web',
    color: 'bg-indigo-500',
    popular: ['CSS Minifier', 'Image Optimizer', 'Color Picker'],
  },
  {
    title: 'Security Tools',
    description:
      'Enhance your security with hash generators, password strength checkers, and more.',
    icon: Lock,
    href: '/tools/security',
    color: 'bg-red-500',
    popular: ['Hash Generator', 'Password Strength Checker', 'Encryption Tool'],
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Tool Categories</h1>
        <p className="text-lg text-foreground/80">
          Explore our collection of {CATEGORIES.length} categories with over 200 free online tools
          to solve your everyday tasks.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {CATEGORIES.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group bg-background border border-border rounded-xl p-6 hover:shadow-md transition-all hover:border-primary/50"
          >
            <div className="flex items-center mb-4">
              <div className={`p-2 rounded-lg ${category.color} bg-opacity-20 mr-3`}>
                <category.icon className={`h-5 w-5 ${category.color} text-opacity-100`} />
              </div>
              <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                {category.title}
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">{category.description}</p>
            <div className="space-y-2">
              <p className="text-sm font-medium">Popular Tools:</p>
              <ul className="space-y-1">
                {category.popular.map((tool) => (
                  <li key={tool} className="text-sm text-foreground/80 flex items-center">
                    <ChevronRight className="h-3 w-3 text-primary mr-1 flex-shrink-0" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex justify-end">
              <span className="text-primary text-sm font-medium group-hover:underline flex items-center">
                Explore Category <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Popular Tools Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Most Popular Tools</h2>
        <div className="bg-background border border-border rounded-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* You can extend or dynamically render these blocks in the future */}
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Text Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/text/case-converter" className="text-sm hover:text-primary">
                    Text Case Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/text/word-counter" className="text-sm hover:text-primary">
                    Word Counter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/text/lorem-ipsum" className="text-sm hover:text-primary">
                    Lorem Ipsum Generator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/text/text-diff" className="text-sm hover:text-primary">
                    Text Diff Tool
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Converters</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/converters/json-to-csv" className="text-sm hover:text-primary">
                    JSON to CSV
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/converters/markdown-to-html"
                    className="text-sm hover:text-primary"
                  >
                    Markdown to HTML
                  </Link>
                </li>
                <li>
                  <Link href="/tools/converters/xml-to-json" className="text-sm hover:text-primary">
                    XML to JSON
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/converters/yaml-to-json"
                    className="text-sm hover:text-primary"
                  >
                    YAML to JSON
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Formatters</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/formatters/json" className="text-sm hover:text-primary">
                    JSON Formatter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/formatters/html" className="text-sm hover:text-primary">
                    HTML Formatter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/formatters/css" className="text-sm hover:text-primary">
                    CSS Formatter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/formatters/sql" className="text-sm hover:text-primary">
                    SQL Formatter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Encoders/Decoders</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/encoders/base64" className="text-sm hover:text-primary">
                    Base64 Encoder/Decoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/encoders/url" className="text-sm hover:text-primary">
                    URL Encoder/Decoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/encoders/jwt" className="text-sm hover:text-primary">
                    JWT Decoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/encoders/html" className="text-sm hover:text-primary">
                    HTML Encoder/Decoder
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Generators</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/generators/password" className="text-sm hover:text-primary">
                    Password Generator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/generators/uuid" className="text-sm hover:text-primary">
                    UUID Generator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/generators/lorem-ipsum" className="text-sm hover:text-primary">
                    Lorem Ipsum Generator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/generators/qr-code" className="text-sm hover:text-primary">
                    QR Code Generator
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">SEO Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/seo/meta-tags" className="text-sm hover:text-primary">
                    Meta Tag Generator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/seo/keyword-density" className="text-sm hover:text-primary">
                    Keyword Density Checker
                  </Link>
                </li>
                <li>
                  <Link href="/tools/seo/serp-preview" className="text-sm hover:text-primary">
                    SERP Preview
                  </Link>
                </li>
                <li>
                  <Link href="/tools/seo/xml-sitemap" className="text-sm hover:text-primary">
                    XML Sitemap Generator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
