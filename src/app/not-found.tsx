'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <span className="text-4xl font-bold text-primary">404</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>

        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved,
          deleted, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" className="flex items-center gap-2">
            <Link href="/">
              <Home className="h-4 w-4" /> Go Home
            </Link>
          </Button>

          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/tools">
              <Search className="h-4 w-4" /> Browse Tools
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-semibold mb-4">Looking for something specific?</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link href="/tools/text" className="text-primary hover:underline">
              Text Tools
            </Link>
            <Link href="/tools/converters" className="text-primary hover:underline">
              Converters
            </Link>
            <Link href="/tools/encoders" className="text-primary hover:underline">
              Encoders
            </Link>
            <Link href="/tools/formatters" className="text-primary hover:underline">
              Formatters
            </Link>
            <Link href="/tools/generators" className="text-primary hover:underline">
              Generators
            </Link>
            <Link href="/tools/seo" className="text-primary hover:underline">
              SEO Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
