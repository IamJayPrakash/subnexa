'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Scale, Lock, Shield, BookOpen, Gavel, Globe, PenToolIcon } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-lg text-foreground/80">
          Please review our Terms and Conditions to understand the rules and guidelines for using
          SubNexa&apos;s services.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Introduction</h2>
        </div>
        <div className="ml-11">
          <p className="mb-4">
            Welcome to Subnexa. By accessing or using our services, you agree to comply with and be
            bound by these Terms and Conditions. These terms govern your use of our website and
            tools, ensuring a fair and secure experience for all users.
          </p>
        </div>
      </div>

      {/* Use of Service */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <Scale className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Use of Service</h2>
        </div>
        <div className="ml-11">
          <p className="mb-4">
            You agree to use Subnexa for lawful purposes only and in a manner consistent with all
            applicable laws and regulations. Any misuse or unauthorized use of our tools may result
            in restricted access.
          </p>
        </div>
      </div>

      {/* Intellectual Property */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <Lock className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Intellectual Property</h2>
        </div>
        <div className="ml-11">
          <p className="mb-4">
            All content on this website, including but not limited to text, images, and graphics,
            are the property of Subnexa and are protected by intellectual property laws. You may not
            reproduce or distribute our content without permission.
          </p>
        </div>
      </div>

      {/* Privacy Policy */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Privacy Policy</h2>
        </div>
        <div className="ml-11">
          <p className="mb-4">
            Our privacy practices are governed by our Privacy Policy. By using Subnexa, you consent
            to the collection and use of your data as described in the{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Limitations of Liability */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Limitations of Liability</h2>
        </div>
        <div className="ml-11">
          <p className="mb-4">
            Subnexa makes no warranties regarding the accuracy or completeness of any information on
            the site. We are not liable for any damages arising from the use of our services,
            including direct or indirect losses.
          </p>
        </div>
      </div>

      {/* Termination */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <Gavel className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Termination</h2>
        </div>
        <div className="ml-11">
          <p className="mb-4">
            We reserve the right to suspend or terminate access to our services at any time without
            notice for violations of these terms or for any other reason at our discretion.
          </p>
        </div>
      </div>

      {/* Governing Law */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Governing Law</h2>
        </div>
        <div className="ml-11">
          <p className="mb-4">
            These terms are governed by the laws of the jurisdiction in which Subnexa operates. Any
            disputes will be handled in the appropriate courts of that jurisdiction.
          </p>
        </div>
      </div>

      {/* Changes to Terms */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 rounded-full bg-primary/10">
            <PenToolIcon className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Changes to Terms</h2>
        </div>
        <div className="ml-11">
          <p className="mb-4">
            Subnexa reserves the right to update or change these Terms at any time. We encourage you
            to periodically review this page for any updates. Continued use of our services
            constitutes acceptance of any changes.
          </p>
        </div>
      </div>

      {/* Contact Us */}
      <div className="max-w-3xl mx-auto bg-background border border-border rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Questions?</h2>
        <p className="text-muted-foreground mb-6">
          If you have any questions or concerns regarding these Terms, please reach out to us at{' '}
          <a href="mailto:support@subnexa.com" className="text-primary hover:underline">
            support@subnexa.com
          </a>
        </p>
        <Button asChild>
          <Link href="/tools">Explore All Tools</Link>
        </Button>
      </div>
    </div>
  );
}
