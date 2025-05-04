import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subnexa Categories: Explore Free Online Tools by Category',
  description:
    'Browse Subnexa’s tool categories including converters, encoders, formatters, SEO, and more. Find free, privacy-friendly tools for developers and marketers.',
  keywords: [
    'Subnexa categories',
    'Subnexa tool categories',
    'free online tools',
    'developer tools',
    'marketer tools',
    'text utilities',
    'encoding tools',
    'SEO tools',
    'privacy-friendly tools',
    'Subnexa free tools',
    'Subnexa online utilities',
    'online toolbox',
    'free developer utilities',
    'web development tools',
    'Subnexa converters',
    'Subnexa encoders',
    'Subnexa formatters',
    'Subnexa generators',
    'Subnexa security tools',
    'Subnexa SEO tools',
    'Subnexa text tools',
    'Subnexa web tools',
    'best free tools for developers',
    'online productivity tools',
    'category of developer tools',
    'online tool categories',
  ],
  applicationName: 'Subnexa',
  generator: 'Next.js',
  authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
  creator: 'Jay Prakash',
  publisher: 'Subnexa',
  openGraph: {
    title: 'Subnexa Categories: Explore Free Tools by Category',
    description:
      'Discover Subnexa’s categories of free, privacy-focused tools for developers and marketers: converters, encoders, SEO tools, and more.',
    url: 'https://subnexa.vercel.app/categories',
    siteName: 'Subnexa',
    images: [
      {
        url: 'https://subnexa.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subnexa Categories - Free Online Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subnexa Categories: Explore Free Tools by Category',
    description:
      'Explore Subnexa’s tool categories: converters, encoders, SEO tools, and more. Free, fast, and privacy-friendly utilities for developers and marketers.',
    images: ['https://subnexa.vercel.app/og-image.png'],
    creator: '@yourhandle', // Replace with your Twitter handle if available
  },
  metadataBase: new URL('https://subnexa.vercel.app'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://subnexa.vercel.app/categories',
    languages: {
      'en-US': 'https://subnexa.vercel.app/en-US/categories',
    },
  },
  other: {
    'msapplication-TileImage': '/ms-icon.png',
    'theme-color': '#A855F7',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};
