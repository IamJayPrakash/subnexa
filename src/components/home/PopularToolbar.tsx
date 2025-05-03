import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code2, FileText, Type, FileJson, RefreshCw, Hash, Key, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const popularTools = [
  {
    name: 'Base64 Encoder/Decoder',
    description: 'Quickly encode or decode Base64 strings with this simple tool',
    icon: Code2,
    color: 'bg-blue-500',
    href: '/tools/base64',
    category: 'Encoders',
  },
  {
    name: 'JSON Formatter',
    description: 'Format and validate your JSON data with syntax highlighting',
    icon: FileJson,
    color: 'bg-amber-500',
    href: '/tools/json-formatter',
    category: 'Formatters',
  },
  {
    name: 'Text Case Converter',
    description: 'Convert text to uppercase, lowercase, title case, and more',
    icon: Type,
    color: 'bg-emerald-500',
    href: '/tools/text-case-converter',
    category: 'Text Tools',
  },
  {
    name: 'URL Encoder/Decoder',
    description: 'Encode or decode URLs to ensure proper formatting',
    icon: RefreshCw,
    color: 'bg-purple-500',
    href: '/tools/url-encoder',
    category: 'Encoders',
  },
  {
    name: 'MD5 Generator',
    description: 'Create MD5 hash values from any text input',
    icon: Hash,
    color: 'bg-red-500',
    href: '/tools/md5-generator',
    category: 'Generators',
  },
  {
    name: 'Word Counter',
    description: 'Count words, characters, and paragraphs in your text',
    icon: FileText,
    color: 'bg-orange-500',
    href: '/tools/word-counter',
    category: 'Text Tools',
  },
  {
    name: 'Password Generator',
    description: 'Create strong, secure passwords with custom parameters',
    icon: Key,
    color: 'bg-teal-500',
    href: '/tools/password-generator',
    category: 'Generators',
  },
  {
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for your designs and layouts',
    icon: BarChart3,
    color: 'bg-indigo-500',
    href: '/tools/lorem-ipsum',
    category: 'Generators',
  },
];

export default function PopularToolsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Most Popular Tools</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our most-used utilities that help thousands of users every day
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map((tool, index) => (
            <Link
              href={tool.href}
              key={tool.name}
              className={cn(
                'group flex flex-col p-6 rounded-xl border border-border',
                'bg-card hover:bg-accent/5 transition-colors duration-200',
                'animate-fade-up',
              )}
              style={{ animationDelay: `${100 * (index % 4)}ms` }}
            >
              <div className="flex items-start justify-between">
                <div
                  className={cn(
                    'w-10 h-10 rounded-lg flex items-center justify-center',
                    tool.color,
                  )}
                >
                  <tool.icon size={20} className="text-white" />
                </div>
                <span className="text-xs font-medium uppercase text-muted-foreground px-2 py-1 bg-muted rounded-full">
                  {tool.category}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground flex-grow">{tool.description}</p>

              <div className="mt-4 pt-4 border-t border-border flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className="group-hover:text-primary transition-colors"
                >
                  Use Tool →
                </Button>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="text-primary border-primary/30 hover:bg-primary/10"
            asChild
          >
            <Link href="/tools">View All 100+ Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
