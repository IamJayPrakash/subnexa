'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <span className="text-red-600 dark:text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>

        <p className="text-muted-foreground mb-3">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        {error.digest && (
          <p className="text-xs text-muted-foreground mb-8">Error ID: {error.digest}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="default" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" /> Try Again
          </Button>

          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/">
              <Home className="h-4 w-4" /> Go Home
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            If this issue persists, please{' '}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>{' '}
            and provide the Error ID above.
          </p>
        </div>
      </div>
    </div>
  );
}
