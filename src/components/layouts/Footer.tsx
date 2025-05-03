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
    <footer className="bg-card mt-16">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                Subnexa
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Subnexa is your all-in-one platform offering powerful, browser-based tools for text,
              code, security, and productivity — 100% free and fast.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Subnexa. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by
            <a
              href="https://heyjayprakash.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:text-primary transition-colors"
            >
              JP and Team!
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
