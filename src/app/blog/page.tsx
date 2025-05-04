import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { metadata } from './metadata';
import { indexBlogPosts } from '@/constants';
export { metadata };

export default function BlogsPage() {
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

      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 relative inline-block">
            Subnexa Blog
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Stay updated with the latest tips, tricks, and updates from the Subnexa team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {indexBlogPosts.map((post, index) => (
            <div
              key={post.id}
              className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 leading-tight">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed font-light line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <Link
                  href={post.slug}
                  className="group flex items-center text-primary dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24">
        <svg
          className="w-full h-full fill-gray-100 dark:fill-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C360,100 720,-50 1080,50 C1260,100 1440,0 1440,0 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </div>
  );
}
