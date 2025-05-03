import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, PenTool, Rocket, Star } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet-500/20 opacity-40" />
          <div className="absolute inset-0 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative py-12 px-6 md:py-16 md:px-10 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Streamline Your Workflow?</h2>

              <p className="mt-4 text-lg text-foreground/80 md:text-xl">
                Explore our extensive collection of free tools and simplify your development,
                content creation, and digital marketing tasks.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90  flex items-center gap-2"
                  asChild
                >
                  <Link href="/tools">
                    Explore All Tools <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/20 hover:bg-primary/5 flex items-center gap-2"
                  asChild
                >
                  <Link href="/contact">
                    Request a Tool <PenTool className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Additional Benefits */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Rocket className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">Boost Productivity</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Access all tools in one place to accelerate your workflow
                  </p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <ExternalLink className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">No Sign-up Required</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Use all tools instantly without registration or downloads
                  </p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Star className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">Always Free</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    All tools are completely free and updated regularly
                  </p>
                </div>
              </div>

              {/* Newsletter signup - optional */}
              <div className="mt-12 bg-background/30 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                <h3 className="font-semibold text-lg">Stay Updated</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get notified when we add new tools and features
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-background/70 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
