import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Users,
  Target,
  Clock,
  Heart,
  Code,
  Globe,
  Shield,
  PenToolIcon,
} from 'lucide-react';

import { metadata } from './metadata';
import { TEAM_MEMBERS } from '@/constants';
export { metadata };

export default function AboutPage() {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - startYear;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About SubNexa</h1>
        <p className="text-lg text-foreground/80">
          Providing free, high-quality online tools since {startYear}. Created by developers, for
          everyone.
        </p>
      </div>

      {/* Our Story */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <Target className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Our Story</h2>
        </div>

        <div className="ml-11">
          <p className="mb-4">
            SubNexa was born out of a simple idea: to create a comprehensive collection of free
            online tools that anyone could use without barriers. What started as a small project
            with just a handful of utilities has grown into a platform with hundreds of tools used
            by thousands of people daily.
          </p>
          <p className="mb-4">
            As developers ourselves, we often found ourselves searching for simple online tools to
            help with everyday tasks. But the experience was always fragmented - many sites were
            filled with ads, required sign-ups, or simply didn&apos;t work well. We wanted to change
            that.
          </p>
          <p>
            Today, after {yearsActive} {yearsActive === 1 ? 'year' : 'years'} of development,
            SubNexa offers a growing collection of tools across various categories, from text
            manipulation to developer utilities, all completely free and without requiring any
            registration.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <Heart className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Our Mission</h2>
        </div>

        <div className="ml-11">
          <p className="mb-4">
            We believe that useful utilities and tools should be accessible to everyone, regardless
            of technical expertise or budget. Our mission is to simplify everyday digital tasks by
            providing high-quality, ad-light tools that just work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-background border border-border rounded-lg p-5">
              <div className="flex items-center mb-3">
                <Code className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Developer-First</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Built by developers who understand what makes a tool truly useful in day-to-day
                work.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-5">
              <div className="flex items-center mb-3">
                <Globe className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Universally Accessible</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Available to everyone, everywhere, without registration or downloads.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-5">
              <div className="flex items-center mb-3">
                <Shield className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Privacy Focused</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We don&apos;t track your data or store your files - everything stays in your
                browser.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-5">
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">Fast & Reliable</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Optimized for speed and dependability, so you can get work done efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Team */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Meet the Team</h2>
        </div>

        <div className="ml-11">
          <p className="mb-6">
            SubNexa is built and maintained by a small team of passionate developers and designers
            who are committed to creating tools that make people&apos;s lives easier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-background border border-border rounded-lg p-6 flex flex-col"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {member.name
                      .split(' ')
                      .map((name) => name[0])
                      .join('')}
                  </span>
                </div>

                <h3 className="font-semibold text-center">{member.name}</h3>
                <p className="text-sm text-primary text-center mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{member.description}</p>

                <div className="flex justify-center space-x-3 mt-auto">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Stats */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <PenToolIcon className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Our Tools</h2>
        </div>

        <div className="ml-11">
          <p className="mb-6">
            We&apos;re constantly working to expand our collection and improve existing tools.
            Here&apos;s a quick overview of where we stand today:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-background border border-border rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-primary">200+</p>
              <p className="text-sm text-muted-foreground">Total Tools</p>
            </div>

            <div className="bg-background border border-border rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-primary">8</p>
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>

            <div className="bg-background border border-border rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-primary">10k+</p>
              <p className="text-sm text-muted-foreground">Daily Users</p>
            </div>

            <div className="bg-background border border-border rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Free Forever</p>
            </div>
          </div>

          <Button asChild>
            <Link href="/tools" className="flex items-center">
              Explore All Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Contact Us */}
      <div className="max-w-3xl mx-auto bg-background border border-border rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">
          Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you!
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
