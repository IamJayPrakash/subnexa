import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Wand2, Sparkles, Clock } from 'lucide-react';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Generators | SubNexa',
  description:
    'Free online generators to help you create text, code snippets, random strings, hashes, and more.',
  keywords:
    'generators, text generators, hash generators, uuid generator, random string, password generator, dummy text, lorem ipsum',
  openGraph: {
    title: 'Generators | SubNexa',
    description:
      'Free online generators to help you create text, code snippets, random strings, hashes, and more.',
    url: 'https://subnexa.com/tools/generators',
    siteName: 'SubNexa',
    type: 'website',
  },
};

// Generator tools data
const GENERATOR_TOOLS = [
  {
    id: 'uuid',
    name: 'UUID Generator',
    description: 'Generate universally unique identifiers (UUID v4) instantly.',
    popular: true,
    new: false,
  },
  {
    id: 'password',
    name: 'Password Generator',
    description: 'Create secure, random passwords with customizable options.',
    popular: true,
    new: false,
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate dummy placeholder text for design and layout.',
    popular: true,
    new: false,
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate MD5, SHA1, SHA256, and other cryptographic hashes.',
    popular: false,
    new: false,
  },
  {
    id: 'random-string',
    name: 'Random String Generator',
    description: 'Generate random alphanumeric strings for testing or use cases.',
    popular: false,
    new: false,
  },
  {
    id: 'slug-generator',
    name: 'Slug Generator',
    description: 'Convert titles or sentences into clean, SEO-friendly slugs.',
    popular: false,
    new: false,
  },
  {
    id: 'text-repeater',
    name: 'Text Repeater',
    description: 'Repeat text or phrases multiple times with custom settings.',
    popular: false,
    new: true,
  },
  {
    id: 'number-sequence',
    name: 'Number Sequence Generator',
    description: 'Generate customizable number sequences for math and testing.',
    popular: false,
    new: false,
  },
  {
    id: 'base64-generator',
    name: 'Base64 Generator',
    description: 'Generate Base64-encoded strings from plain text.',
    popular: false,
    new: true,
  },
];

export default function GeneratorsPage() {
  const popularTools = GENERATOR_TOOLS.filter((tool) => tool.popular);
  const newTools = GENERATOR_TOOLS.filter((tool) => tool.new);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex mb-4 p-2 rounded-full bg-primary/10">
          <Wand2 className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Generators</h1>
        <p className="text-lg text-foreground/80">
          A curated collection of {GENERATOR_TOOLS.length} free online generators to help you create
          UUIDs, hashes, text, and more in seconds.
        </p>
      </div>

      {/* Popular Tools */}
      {popularTools.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold">Popular Generators</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/generators/${tool.id}`}
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
            <h2 className="text-xl font-bold">New Generators</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/generators/${tool.id}`}
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
        <h2 className="text-xl font-bold mb-6">All Generators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GENERATOR_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/generators/${tool.id}`}
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
