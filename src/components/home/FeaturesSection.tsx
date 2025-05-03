import React from 'react';
import { cn } from '@/lib/utils';
import { Zap, Lock, Globe, LineChart, LayoutGrid, Clock, Code, Smile } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Process your data instantly with our optimized and efficient tools',
    icon: Zap,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Privacy First',
    description: 'All processing happens in your browser - your data never leaves your device',
    icon: Lock,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Available Everywhere',
    description: 'Access from any device with a browser - no downloads or installations required',
    icon: Globe,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'SEO Friendly',
    description: 'Optimize your content with our specialized SEO tools and analyzers',
    icon: LineChart,
    color: 'from-red-500 to-rose-500',
  },
  {
    title: '100+ Tools',
    description: 'A comprehensive collection of utilities for every development need',
    icon: LayoutGrid,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Save Time',
    description: 'Streamline your workflow with our intuitive and easy-to-use interface',
    icon: Clock,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Developer Focused',
    description: 'Built by developers, for developers, with the features you need most',
    icon: Code,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Completely Free',
    description: 'All tools available at no cost, with no account required',
    icon: Smile,
    color: 'from-orange-500 to-amber-500',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Subnexa?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform offers powerful tools designed to make your development and content work
            faster, easier, and more efficient.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'p-6 rounded-xl border border-border bg-card',
                'transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                'animate-fade-up',
              )}
              style={{ animationDelay: `${150 * (index % 4)}ms` }}
            >
              <div
                className={cn(
                  'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
                  'bg-gradient-to-br',
                  feature.color,
                )}
              >
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
