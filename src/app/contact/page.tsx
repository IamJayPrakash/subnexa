import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Github, Twitter, BookOpen, CheckCircle, AlertOctagon } from 'lucide-react';

import { metadata } from './metadata';
import { CONTACT_METHODS, FAQS } from '@/constants';
import AnimatedBackground from '@/components/AnimatedBackground';
export { metadata };

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Animated WebGL Background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-foreground/80">
            Have a question, suggestion, or feedback? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-20 bg-background/80 backdrop-blur-md border border-border rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-md bg-background/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-border rounded-md bg-background/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-border rounded-md bg-background/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="bug">Bug Report</option>
                <option value="suggestion">Tool Suggestion</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="How can we help you?"
                className="w-full px-4 py-2 border border-border rounded-md bg-background/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              ></textarea>
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              We&apos;ll get back to you within 48 hours. Your information will never be shared with
              third parties.
            </p>
          </form>
        </div>

        {/* Alternative Contact Methods */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Other Ways to Reach Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTACT_METHODS.map((method) => (
              <div
                key={method.name}
                className="bg-background/80 backdrop-blur-md border border-border rounded-lg p-6 flex items-start space-x-4 hover:shadow-md transition-shadow"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{method.name}</h3>
                  <p className="text-muted-foreground mb-3">{method.description}</p>
                  <a
                    href={method.linkHref}
                    className="text-primary hover:underline font-medium flex items-center"
                  >
                    {method.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Times */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Response Commitment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/80 backdrop-blur-md border border-border rounded-lg p-6 flex items-start space-x-4">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Normal Inquiries</h3>
                <p className="text-muted-foreground">
                  We aim to respond to all general inquiries, feedback, and suggestions within{' '}
                  <strong>48 hours</strong> during business days.
                </p>
              </div>
            </div>

            <div className="bg-background/80 backdrop-blur-md border border-border rounded-lg p-6 flex items-start space-x-4">
              <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30">
                <AlertOctagon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Urgent Matters</h3>
                <p className="text-muted-foreground">
                  For critical bug reports and urgent issues, we strive to respond within{' '}
                  <strong>24 hours</strong> and address the problem as quickly as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="bg-background/80 backdrop-blur-md border border-border rounded-lg p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto bg-primary/20 backdrop-blur-md border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-muted-foreground mb-6">
            Check out our comprehensive documentation or explore our tools directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="default">
              <Link href="/docs">Browse Documentation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/tools">Explore Tools</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
