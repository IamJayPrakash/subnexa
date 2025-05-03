import React from 'react';
import Link from 'next/link';
import { Type, RefreshCw, Code2, FileText, FileJson, Search, BarChart, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  {
    name: 'Text Tools',
    icon: Type,
    color: 'from-blue-500 to-indigo-500',
    description: 'Manipulate and analyze text with our powerful utilities',
    tools: ['Word Counter', 'Case Converter', 'Text Sorter', 'Lorem Ipsum Generator'],
    href: '/tools/text',
  },
  {
    name: 'Converters',
    icon: RefreshCw,
    color: 'from-green-500 to-emerald-500',
    description: 'Convert between various formats and units',
    tools: ['Color Converter', 'Number Base Converter', 'Unit Converter', 'Time Converter'],
    href: '/tools/converters',
  },
  {
    name: 'Encoders & Decoders',
    icon: Code2,
    color: 'from-red-500 to-rose-500',
    description: 'Encode or decode data in various formats',
    tools: ['Base64', 'URL Encoder', 'HTML Entities', 'JWT Decoder'],
    href: '/tools/encoders',
  },
  {
    name: 'Formatters',
    icon: FileText,
    color: 'from-amber-500 to-yellow-500',
    description: 'Format and beautify your code and data',
    tools: ['JSON Formatter', 'XML Formatter', 'HTML Formatter', 'CSS Formatter'],
    href: '/tools/formatters',
  },
  {
    name: 'Generators',
    icon: FileJson,
    color: 'from-purple-500 to-fuchsia-500',
    description: 'Generate various types of content and data',
    tools: ['Password Generator', 'UUID Generator', 'Hash Generator', 'QR Code Generator'],
    href: '/tools/generators',
  },
  {
    name: 'SEO Tools',
    icon: Search,
    color: 'from-orange-500 to-amber-500',
    description: 'Optimize and analyze your website',
    tools: ['Meta Tag Generator', 'Keyword Density', 'Robots.txt Generator', 'Sitemap Generator'],
    href: '/tools/seo',
  },
  {
    name: 'Data Tools',
    icon: BarChart,
    color: 'from-cyan-500 to-teal-500',
    description: 'Analyze and manipulate data',
    tools: ['CSV to JSON', 'JSON to CSV', 'Excel to JSON', 'Data Cleaner'],
    href: '/tools/data',
  },
  {
    name: 'Web Tools',
    icon: Globe,
    color: 'from-violet-500 to-purple-500',
    description: 'Utilities for web development and analysis',
    tools: ['HTML Minifier', 'CSS Minifier', 'JS Minifier', 'Image Optimizer'],
    href: '/tools/web',
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Tool Categories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our comprehensive collection of tools organized by category
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className={cn(
                'group relative overflow-hidden rounded-xl border border-border bg-card',
                'p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1',
                'animate-fade-up',
              )}
              style={{ animationDelay: `${100 * (index % 4)}ms` }}
            >
              {/* Background gradient */}
              <div
                className={cn(
                  'absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full',
                  'blur-2xl opacity-20 transition-opacity group-hover:opacity-30',
                  `bg-gradient-to-br ${category.color}`,
                )}
              />

              <div className="relative">
                <div
                  className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
                    `bg-gradient-to-br ${category.color}`,
                  )}
                >
                  <category.icon size={24} className="text-white" />
                </div>

                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>

                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="text-sm font-medium mb-2">Popular Tools:</h4>
                  <ul className="space-y-1">
                    {category.tools.map((tool, i) => (
                      <li
                        key={tool}
                        className={cn(
                          'text-sm text-muted-foreground',
                          i > 1 && 'hidden md:block', // Hide 3rd and 4th on mobile
                        )}
                      >
                        • {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
