'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] 
          bg-gradient-radial from-primary/20 to-transparent opacity-50 blur-3xl"
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] 
          bg-gradient-radial from-violet-500/20 to-transparent opacity-50 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative flex flex-col items-center text-center">
        {/* Main heading with animation */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto animate-fade-up">
          <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
            Free Online Tools
          </span>{' '}
          for Developers & Marketers
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-100">
          Access our growing suite of 100+ browser-based tools for text manipulation, conversion,
          encoding, and more — no installation required.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="mt-10 w-full max-w-2xl animate-fade-up animate-delay-200"
        >
          <div className="flex items-center w-full relative rounded-lg shadow-sm border border-border">
            <div className="absolute left-3 text-muted-foreground">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search for tools like 'Base64 encoder', 'JSON formatter'..."
              className={cn(
                'w-full py-3 pl-10 pr-20 bg-background rounded-lg',
                'text-foreground placeholder:text-muted-foreground',
                'focus:outline-none focus:ring-2 focus:ring-primary/50',
              )}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="absolute right-2 my-1">
              Search
            </Button>
          </div>
        </form>

        {/* Featured categories pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 animate-fade-up animate-delay-300">
          {['Text Tools', 'Encoders', 'Formatters', 'Converters', 'Generators', 'SEO Tools'].map(
            (category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full hover:bg-primary/10 border-primary/20"
                onClick={() => router.push(`/tools/${category.toLowerCase().replace(' ', '-')}`)}
              >
                {category}
              </Button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
