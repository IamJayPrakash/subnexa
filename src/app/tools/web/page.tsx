import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Globe, Sparkles, Clock } from 'lucide-react';

// SEO metadata
export const metadata: Metadata = {
  title: 'Web Tools | SubNexa',
  description:
    'Essential web tools for developers and designers — including HTTP header checker, IP lookup, user agent parser, and more.',
  keywords:
    'web tools, http header checker, ip lookup, user agent parser, port scanner, http status checker, DNS lookup',
  openGraph: {
    title: 'Web Tools | SubNexa',
    description:
      'Essential web tools for developers and designers — including HTTP header checker, IP lookup, user agent parser, and more.',
    url: 'https://subnexa.com/tools/web',
    siteName: 'SubNexa',
    type: 'website',
  },
};

// Web tools data
const WEB_TOOLS = [
  {
    id: 'http-header-checker',
    name: 'HTTP Header Checker',
    description: 'Inspect and analyze HTTP headers for any URL.',
    popular: true,
    new: false,
  },
  {
    id: 'ip-address-lookup',
    name: 'IP Address Lookup',
    description: 'Get geolocation and ISP info from any IP address.',
    popular: true,
    new: false,
  },
  {
    id: 'user-agent-parser',
    name: 'User Agent Parser',
    description: 'Decode user-agent strings to identify browser and device.',
    popular: false,
    new: false,
  },
  {
    id: 'http-status-code-checker',
    name: 'HTTP Status Code Checker',
    description: 'Check the HTTP response code of any URL.',
    popular: false,
    new: true,
  },
  {
    id: 'dns-lookup',
    name: 'DNS Lookup',
    description: 'Retrieve DNS records for a domain name.',
    popular: false,
    new: true,
  },
  {
    id: 'port-scanner',
    name: 'Port Scanner',
    description: 'Scan for open ports on a given IP address.',
    popular: false,
    new: false,
  },
];

export default function WebToolsPage() {
  const popularTools = WEB_TOOLS.filter((tool) => tool.popular);
  const newTools = WEB_TOOLS.filter((tool) => tool.new);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex mb-4 p-2 rounded-full bg-primary/10">
          <Globe className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Web Tools</h1>
        <p className="text-lg text-foreground/80">
          Explore {WEB_TOOLS.length} essential tools for web developers, testers, and tech
          enthusiasts.
        </p>
      </div>

      {/* Popular Tools */}
      {popularTools.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold">Popular Web Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/web/${tool.id}`}
                className="bg-background border border-border rounded-lg p-5 hover:shadow-md transition-all hover:border-primary/50"
              >
                <h3 className="font-semibold mb-2 hover:text-primary">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* New Tools */}
      {newTools.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Clock className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="text-xl font-bold">New Web Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/web/${tool.id}`}
                className="bg-background border border-border rounded-lg p-5 hover:shadow-md transition-all hover:border-primary/50 relative"
              >
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
                <h3 className="font-semibold mb-2 hover:text-primary">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Tools */}
      <div>
        <h2 className="text-xl font-bold mb-6">All Web Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WEB_TOOLS.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/web/${tool.id}`}
              className="bg-background border border-border rounded-lg p-5 hover:shadow-md transition-all hover:border-primary/50"
            >
              <h3 className="font-semibold mb-2 hover:text-primary">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
