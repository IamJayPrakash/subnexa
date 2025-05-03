'use client';

import { ShieldCheck, KeyRound, EyeOff, GlobeLock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const securityTools = [
  {
    name: 'Password Strength Checker',
    description: 'Check how secure your password is using entropy and common pattern analysis.',
    href: '/tools/security/password-strength-checker',
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Base64 Decoder',
    description: 'Safely decode Base64-encoded strings with browser-side privacy.',
    href: '/tools/encoders/base64-decode',
    icon: <KeyRound className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Text Obfuscator',
    description: 'Make your text unreadable to humans while keeping it recoverable.',
    href: '/tools/security/text-obfuscator',
    icon: <EyeOff className="h-5 w-5 text-primary" />,
  },
  {
    name: 'SSL Checker',
    description: 'Verify the SSL certificate and expiration date of any website.',
    href: '/tools/security/ssl-checker',
    icon: <GlobeLock className="h-5 w-5 text-primary" />,
  },
];

export default function SecurityToolsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🔐 Security Tools</h1>
        <p className="text-muted-foreground text-lg">
          Browser-based tools for enhancing digital safety, encryption, and privacy — all run
          client-side for maximum security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {securityTools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="group border border-border p-5 rounded-xl hover:shadow-lg transition bg-card hover:bg-muted/30"
          >
            <div className="flex items-center gap-3 mb-2">
              {tool.icon}
              <h2 className="text-xl font-semibold group-hover:text-primary">{tool.name}</h2>
            </div>
            <p className="text-muted-foreground">{tool.description}</p>
          </Link>
        ))}
      </div>

      <Separator className="my-16" />

      <div className="text-center">
        <p className="text-muted-foreground mb-4">Looking for more tools?</p>
        <Button asChild variant="outline">
          <Link href="/tools">Explore All Tools</Link>
        </Button>
      </div>
    </section>
  );
}
