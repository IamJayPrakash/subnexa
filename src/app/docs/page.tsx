'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { docSections } from '@/constants';

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
