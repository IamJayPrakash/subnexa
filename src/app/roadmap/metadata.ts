import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subnexa Roadmap: Our Journey and Future Plans',
  description:
    'Discover Subnexa’s roadmap, including past milestones and future plans like API integration, mobile apps, and community features for our free online tools.',
  keywords: [
    'Subnexa roadmap',
    'Subnexa future plans',
    'Subnexa milestones',
    'Subnexa development journey',
    'Subnexa API integration',
    'Subnexa mobile app',
    'Subnexa community features',
    'Subnexa free tools roadmap',
    'developer tools roadmap',
    'Subnexa updates',
    'Subnexa new features',
    'Subnexa timeline',
    'Subnexa growth',
    'Subnexa platform launch',
    'Subnexa tool categories',
  ],
  applicationName: 'Subnexa',
  generator: 'Next.js',
  authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
  creator: 'Jay Prakash',
  publisher: 'Subnexa',
  openGraph: {
    title: 'Subnexa Roadmap: Journey & Upcoming Features',
    description:
      'Explore Subnexa’s roadmap to see our past achievements and future plans, including API support, mobile apps, and more for our free tools.',
    url: 'https://subnexa.vercel.app/roadmap',
    siteName: 'Subnexa',
    images: [
      {
        url: 'https://subnexa.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subnexa Roadmap - Journey and Future Plans',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subnexa Roadmap: Journey & Upcoming Features',
    description:
      'Check out Subnexa’s roadmap for our journey and upcoming features like API integration and mobile apps for our free tools.',
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
    canonical: 'https://subnexa.vercel.app/roadmap',
    languages: {
      'en-US': 'https://subnexa.vercel.app/en-US/roadmap',
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
