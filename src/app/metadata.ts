// src/app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subnexa — All-in-One Online Tool Suite for Developers & Marketers',
  description:
    'Subnexa is your go-to toolbox offering text utilities, converters, encoders, and more — all in one place. Boost productivity with free, fast, and privacy-friendly tools.',
  keywords: [
    'Subnexa',
    'free online tools',
    'developer tools',
    'text utilities',
    'string tools',
    'encoding tools',
    'base64 encoder',
    'word counter',
    'IP lookup',
    'JSON formatter',
    'productivity tools',
    'SEO tools',
    'toolbox',
  ],
  applicationName: 'Subnexa',
  generator: 'Next.js',
  authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
  creator: 'Jay Prakash',
  publisher: 'Subnexa',
  openGraph: {
    title: 'Subnexa — Free Online Tools for Developers, Marketers & Everyone',
    description:
      'Access a growing suite of free online utilities including encoders, formatters, counters, and more. No login. No tracking. Just tools.',
    url: 'https://subnexa.vercel.app',
    siteName: 'Subnexa',
    images: [
      {
        url: 'https://subnexa.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subnexa - Free Online Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subnexa — Free Online Tools for Devs & SEO Experts',
    description:
      'Subnexa gives you fast, free, and reliable online tools to enhance your workflow. Use text analyzers, formatters, encoders, and more.',
    images: ['https://subnexa.vercel.app/og-image.png'],
    creator: '@yourhandle', // Optional: Replace with your Twitter handle
  },
  metadataBase: new URL('https://subnexa.vercel.app'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  category: 'utilities',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default metadata;
