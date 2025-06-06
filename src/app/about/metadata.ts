import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Subnexa: Free Online Tools for Developers & Marketers',
  description:
    'Learn about Subnexa, our mission, and our commitment to providing free, privacy-friendly online tools for developers, marketers, and digital professionals.',
  keywords: [
    'about Subnexa',
    'Subnexa mission',
    'Subnexa team',
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
    'Subnexa about us',
    'Subnexa story',
    'Subnexa privacy tools',
    'best free tools for developers',
    'online productivity tools',
  ],
  applicationName: 'Subnexa',
  generator: 'Next.js',
  authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
  creator: 'Jay Prakash',
  publisher: 'Subnexa',
  openGraph: {
    title: 'About Subnexa: Free Tools for Developers & Marketers',
    description:
      'Discover Subnexa’s mission to provide free, fast, and privacy-focused tools for developers, marketers, and more. Learn about our team and tools.',
    url: 'https://subnexa.vercel.app/about',
    siteName: 'Subnexa',
    images: [
      {
        url: 'https://subnexa.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Subnexa - Free Online Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Subnexa: Free Tools for Developers & Marketers',
    description:
      'Learn about Subnexa’s mission, team, and free online tools for developers and marketers. No login, no tracking—just productivity.',
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
    canonical: 'https://subnexa.vercel.app/about',
    languages: {
      'en-US': 'https://subnexa.vercel.app/en-US/about',
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
