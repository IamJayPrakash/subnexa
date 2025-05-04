import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subnexa Privacy Policy: Your Data, Our Commitment',
  description:
    'Read Subnexa’s Privacy Policy to understand how we collect, use, and protect your data while using our free online tools for developers and marketers.',
  keywords: [
    'Subnexa privacy policy',
    'Subnexa data privacy',
    'Subnexa user data',
    'Subnexa cookies policy',
    'Subnexa data security',
    'privacy-friendly tools',
    'developer tools privacy',
    'SEO tools privacy',
    'Subnexa privacy practices',
    'Subnexa user rights',
    'Subnexa third-party services',
    'Subnexa analytics policy',
    'Subnexa data protection',
    'online tools privacy',
    'Subnexa privacy commitment',
  ],
  applicationName: 'Subnexa',
  generator: 'Next.js',
  authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
  creator: 'Jay Prakash',
  publisher: 'Subnexa',
  openGraph: {
    title: 'Subnexa Privacy Policy: Protecting Your Data',
    description:
      'Learn how Subnexa ensures your privacy with our free online tools. Understand our data practices, cookies, and user rights.',
    url: 'https://subnexa.vercel.app/privacy',
    siteName: 'Subnexa',
    images: [
      {
        url: 'https://subnexa.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subnexa Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subnexa Privacy Policy: Protecting Your Data',
    description:
      'Discover Subnexa’s commitment to privacy. Learn about our data practices and user rights with our free tools.',
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
    canonical: 'https://subnexa.vercel.app/privacy',
    languages: {
      'en-US': 'https://subnexa.vercel.app/en-US/privacy',
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
