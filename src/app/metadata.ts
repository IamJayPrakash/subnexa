import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subnexa: Free Online Tools for Developers, Marketers & Everyone',
  description:
    'Subnexa is your all-in-one free online toolbox. Format JSON, encode Base64, test regex, analyze SEO, convert text, and much more. Fast, free, and privacy-friendly tools for developers, SEO experts, students, and content creators.',
  keywords: [
    // Branding & name variations
    'Subnexa',
    'subnexa tools',
    'subnexa online tools',
    'subnexa utilities',
    'subnexa free tools',
    'subnexa dev tools',
    'subnexa SEO tools',
    'subnexa formatter',
    'subnexa JSON tools',
    // General purpose
    'free online tools',
    'online utilities',
    'developer tools',
    'web development tools',
    'digital tools',
    'coding tools online',
    'online text tools',
    'text utilities online',
    // JSON tools
    'JSON formatter',
    'JSON validator',
    'online JSON formatter',
    'free JSON tools',
    'JSON pretty print',
    'subnexa JSON validator',
    'JSON beautifier',
    // Encoding & decoding
    'Base64 encoder',
    'Base64 decoder',
    'text encoder',
    'text decoder',
    'URL encoder',
    'URL decoder',
    'HTML encoder',
    'HTML decoder',
    'base64 converter',
    // Text tools
    'text manipulation tools',
    'text converter',
    'text analyzer',
    'word counter',
    'character counter',
    'case converter',
    'uppercase to lowercase',
    'remove line breaks',
    // Productivity & SEO
    'SEO analyzer',
    'SEO audit tool',
    'website analyzer',
    'keyword density checker',
    'meta tag generator',
    'open graph checker',
    'robots.txt tester',
    // Other utilities
    'IP lookup',
    'regex tester',
    'online regex tester',
    'color picker',
    'secure password generator',
    'lorem ipsum generator',
    'markdown viewer',
    // Search relevance
    'best online toolbox',
    'online developer tools',
    'free tools for coders',
    'web tools',
    'free tools for SEO',
    'no-login tools',
    'fast developer utilities',
    'privacy-friendly developer tools',
    // Long-tail SEO
    'subnexa online JSON formatter',
    'subnexa base64 encoder decoder',
    'subnexa SEO audit tools',
    'subnexa text manipulation',
    'subnexa regex tester',
    'subnexa lorem ipsum',
    'subnexa dev toolkit',
    // Branding duplicates for Google NLP
    'Subnexa toolbox',
    'Subnexa tools',
    'Subnexa utilities',
    'Subnexa online',
    'Subnexa developer tools',
    'Subnexa formatter tools',
    'Subnexa productivity tools',
  ],
  applicationName: 'Subnexa',
  generator: 'Next.js',
  authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
  creator: 'Jay Prakash',
  publisher: 'Subnexa',
  openGraph: {
    title: 'Subnexa: Free Online Tools for Developers, Marketers & Everyone',
    description:
      'Subnexa provides free and fast tools like JSON formatter, SEO analyzer, Base64 encoder, and more. Built for productivity with privacy in mind—no login, no tracking.',
    url: 'https://subnexa.vercel.app',
    siteName: 'Subnexa',
    images: [
      {
        url: 'https://subnexa.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subnexa - Free Online Tools for Developers and Marketers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subnexa: Free Online Tools for Developers & SEO Experts',
    description:
      'Use Subnexa for fast, free developer tools: JSON formatter, SEO analyzer, Base64 encoder, text tools, and more. Privacy-first, no login needed.',
    images: ['https://subnexa.vercel.app/og-image.png'],
    creator: '@yourhandle', // Replace with your Twitter handle
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
    canonical: 'https://subnexa.vercel.app',
    languages: {
      'en-US': 'https://subnexa.vercel.app/en-US',
    },
  },
  other: {
    'google-site-verification': '1mlwv5pCe6_Ncql6DKNDstpFNiDWNEt8FPKblJ0fAI0',
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

export default metadata;
