'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { categories, navigationLinks } from '@/constants/index';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Theme toggling function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              Subnexa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 hover:text-primary">
                      {link.name} <ChevronDown size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {categories.map((category) => (
                      <DropdownMenuItem key={category.name}>
                        <Link href={category.href} className="w-full">
                          {category.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-foreground/80 hover:text-primary transition-colors',
                    pathname === link.href && 'text-primary font-medium',
                  )}
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/categories">View All Tools</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="relative z-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/98 backdrop-blur-md md:hidden z-40 overflow-y-auto"
          onClick={closeMobileMenu}
        >
          <div className="min-h-screen p-4 pt-20" onClick={(e) => e.stopPropagation()}>
            <nav className="flex flex-col space-y-6">
              {navigationLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="flex flex-col">
                    <span className="text-lg font-medium mb-3">{link.name}</span>
                    <div className="flex flex-col space-y-3 pl-4 border-l-2 border-primary/20">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="text-foreground/80 hover:text-primary transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'text-lg font-medium transition-colors',
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-primary',
                    )}
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <div className="pt-6">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/categories" onClick={closeMobileMenu}>
                    View All Tools
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
