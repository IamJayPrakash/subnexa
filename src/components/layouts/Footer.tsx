import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Github, Heart, Twitter } from 'lucide-react';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'All Tools', href: '/tools' },
      { name: 'Categories', href: 'categories' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'API', href: '/api-docs' },
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Use', href: '/terms' },
      { name: 'Report Issue', href: '/report-issue' },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/IamJayPrakash/subnexa', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="mt-16 relative overflow-hidden">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full h-16">
        <svg
          className="w-full h-full fill-gray-100 dark:fill-black-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,100 C360,0 720,150 1080,50 C1260,0 1440,100 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* Geometric Background Pattern */}
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gray-100 dark:bg-black shadow-lg rounded-t-3xl animate-fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent transition-all duration-300 hover:brightness-125">
                Subnexa
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
              Subnexa is your all-in-one platform offering powerful, browser-based tools for text,
              code, security, and productivity — 100% free and fast.
            </p>
            <div className="mt-6 sm:mt-8 flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gradient-to-r hover:border-transparent hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon
                      size={20}
                      className="text-gray-700 dark:text-gray-300 group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white tracking-wide">
                {column.title}
              </h3>
              <ul className="mt-4 sm:mt-6 space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-light relative group transition-colors duration-300 text-sm sm:text-base"
                    >
                      {link.name}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-200 dark:border-gray-700/50 flex flex-col items-center text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm font-light">
              © {new Date().getFullYear()} Subnexa. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm font-light flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500 animate-pulse" /> by
              <a
                href="https://heyjayprakash.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                JP and Team!
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
