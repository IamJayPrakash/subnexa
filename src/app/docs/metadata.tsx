import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subnexa Documentation: Tools & API Guide',
  description:
    'Explore Subnexa’s documentation for our free online tools and APIs. Learn how to get started, use our tools, and integrate with our API for developers.',
  keywords: [
    'Subnexa documentation',
    'Subnexa tools guide',
    'Subnexa API reference',
    'free online tools docs',
    'developer tools documentation',
    'Subnexa API guide',
    'Subnexa developer tools',
    'Subnexa text tools docs',
    'Subnexa security tools docs',
    'Subnexa SEO tools docs',
    'Subnexa getting started',
    'Subnexa API integration',
    'Subnexa tools overview',
    'developer API documentation',
    'online tools guide',
    'Subnexa help docs',
  ],
  applicationName: 'Subnexa',
  generator: 'Next.js',
  authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
  creator: 'Jay Prakash',
  publisher: 'Subnexa',
  openGraph: {
    title: 'Subnexa Documentation: Guide to Tools & API',
    description:
      'Access Subnexa’s documentation to learn how to use our free tools and integrate with our API. Perfect for developers and digital professionals.',
    url: 'https://subnexa.vercel.app/docs',
    siteName: 'Subnexa',
    images: [
      {
        url: 'https://subnexa.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subnexa Documentation - Tools & API Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subnexa Documentation: Guide to Tools & API',
    description:
      'Learn how to use Subnexa’s free tools and API with our detailed documentation. Ideal for developers and digital pros.',
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
    canonical: 'https://subnexa.vercel.app/docs',
    languages: {
      'en-US': 'https://subnexa.vercel.app/en-US/docs',
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
