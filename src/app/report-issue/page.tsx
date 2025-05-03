'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight } from 'lucide-react';

export default function ReportIssuePage() {
  // Redirect after a delay (optional)
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.open('https://github.com/IamJayPrakash/subnexa/issues/new', '_blank');
    }, 5000); // 5 second delay before auto-open
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
          <Github className="w-6 h-6" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Found a Bug or Have a Feature Request?
        </h1>
        <p className="text-lg text-muted-foreground">
          We’re constantly improving SubNexa. If you notice any bugs or want to suggest a new tool,
          please open a GitHub issue. You’ll be redirected shortly.
        </p>

        <div className="border border-dashed border-border p-4 rounded-lg bg-muted/40 text-left text-sm text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">📌 Before you submit:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Check if the issue already exists.</li>
            <li>Provide clear steps to reproduce the issue.</li>
            <li>Include screenshots or links if helpful.</li>
            <li>Use descriptive titles and tags.</li>
          </ul>
        </div>

        <Button
          variant="default"
          size="lg"
          className="mt-4"
          onClick={() =>
            window.open('https://github.com/IamJayPrakash/subnexa/issues/new', '_blank')
          }
        >
          Go to GitHub Issues
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>

        <p className="text-xs text-muted-foreground mt-6 italic">
          You’ll be redirected automatically in 5 seconds...
        </p>
      </div>
    </section>
  );
}
