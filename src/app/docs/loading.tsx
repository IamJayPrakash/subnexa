import React from 'react';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-ping h-16 w-16 rounded-full bg-primary/20"></div>
        <div className="relative h-12 w-12 rounded-full bg-primary/50 animate-pulse flex items-center justify-center">
          <div className="h-8 w-8 rounded-full bg-primary"></div>
        </div>
      </div>

      <h2 className="mt-8 text-xl font-medium animate-pulse">Loading...</h2>

      <div className="mt-6 max-w-md w-full">
        <div className="h-4 bg-foreground/10 rounded animate-pulse mb-4"></div>
        <div className="h-4 bg-foreground/10 rounded animate-pulse mb-4 w-3/4"></div>
        <div className="h-4 bg-foreground/10 rounded animate-pulse w-1/2"></div>
      </div>
    </div>
  );
}
