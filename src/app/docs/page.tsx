'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: `
      <p>Welcome to Subnexa’s documentation! Subnexa is a platform offering free, browser-based tools for developers, designers, and digital professionals. This guide will help you get started with using our tools effectively.</p>
      <h2>Accessing Subnexa Tools</h2>
      <p>All Subnexa tools are available directly on our website at <a href="https://subnexa.vercel.app" class="text-primary dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300">subnexa.vercel.app</a>. No account or login is required—just visit the <Link href="/tools">Tools</Link> page to explore our offerings.</p>
      <h3>First Steps</h3>
      <ol>
        <li>Navigate to the Tools page from the homepage.</li>
        <li>Browse categories or search for a specific tool (e.g., "JSON Formatter").</li>
        <li>Use the tool directly in your browser—no installation needed.</li>
      </ol>
    `,
  },
  {
    id: 'tools-overview',
    title: 'Tools Overview',
    content: `
      <p>Subnexa offers a wide range of tools to simplify your workflow. Here’s an overview of some popular categories:</p>
      <h2>Text Manipulation</h2>
      <p>Tools like Case Converter, Whitespace Remover, and Duplicate Line Remover help you clean and format text quickly.</p>
      <h2>Code Utilities</h2>
      <p>Beautify JSON, format HTML, or test regular expressions with our developer-focused utilities.</p>
      <h2>Security Tools</h2>
      <p>Generate secure passwords, encode/decode Base64, or hash data with tools designed for safety and convenience.</p>
    `,
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    content: `
      <p>Subnexa provides an API for developers to integrate our tools into their applications. This section outlines the available endpoints and usage.</p>
      <h2>Authentication</h2>
      <p>The API uses API keys for authentication. Request a key by contacting us via the <Link href="/contact">Contact</Link> page.</p>
      <h2>Endpoints</h2>
      <p>Here’s an example of how to use the JSON Formatter endpoint:</p>
      <pre><code class="language-bash">curl -X POST https://api.subnexa.com/format-json \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"json": "{\"key\": \"value\"}"}'</code></pre>
      <p>Response:</p>
      <pre><code class="language-json">{
  "formatted": "{\n  \"key\": \"value\"\n}"
}</code></pre>
    `,
  },
];

export default function DocsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path fill="url(#patternGradient)" d="M0 0h200v200H0z" />
          <defs>
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <circle cx="20" cy="20" r="2" className="fill-purple-500 dark:fill-purple-400" />
            </pattern>
            <linearGradient id="patternGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row gap-8 animate-fade-in">
        {/* Sidebar (Mobile Menu Toggle) */}
        <button
          className="lg:hidden fixed top-20 right-4 z-50 p-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-full"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <aside
          className={`
            lg:w-64 fixed lg:sticky top-0 lg:top-20 h-auto lg:h-[calc(100vh-5rem)] z-40
            bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 shadow-lg
            transition-all duration-300
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Documentation</h2>
          <nav className="space-y-3">
            {docSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-sm sm:text-base text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 relative group"
              >
                {section.title}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 relative inline-block">
              Subnexa Documentation
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Everything you need to know about using Subnexa’s tools and APIs effectively.
            </p>

            {docSections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-12 sm:mb-16 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <div
                  className="prose prose-sm sm:prose-base dark:prose-invert text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </div>

          {/* Call to Action */}
          <div className="max-w-3xl mx-auto text-center mt-12 sm:mt-16">
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Need help or have suggestions? Reach out to us!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-lg hover:from-purple-600 hover:to-violet-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
