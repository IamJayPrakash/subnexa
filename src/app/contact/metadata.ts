import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Subnexa: Get in Touch with Our Team',
  description:
    'Have questions or feedback? Contact the Subnexa team for support, suggestions, or inquiries about our free online tools for developers and marketers.',
  keywords: [
    'contact Subnexa',
    'Subnexa support',
    'Subnexa team contact',
    'Subnexa feedback',
    'Subnexa inquiries',
    'free online tools support',
    'developer tools support',
    'SEO tools support',
    'Subnexa customer service',
    'Subnexa help',
    'Subnexa contact us',
    'Subnexa get in touch',
    'Subnexa suggestions',
    'Subnexa developer support',
    'Subnexa marketer support',
  ],
  applicationName: 'Subnexa',
  generator: 'Next.js',
  authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
  creator: 'Jay Prakash',
  publisher: 'Subnexa',
  openGraph: {
    title: 'Contact Subnexa: Reach Out to Our Team',
    description:
      'Get in touch with the Subnexa team for support, feedback, or inquiries about our free, privacy-friendly tools for developers and marketers.',
    url: 'https://subnexa.vercel.app/contact',
    siteName: 'Subnexa',
    images: [
      {
        url: 'https://subnexa.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Subnexa - Free Online Tools Support',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Subnexa: Reach Out to Our Team',
    description:
      'Have questions or suggestions? Contact Subnexa for support with our free tools for developers and marketers.',
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
    canonical: 'https://subnexa.vercel.app/contact',
    languages: {
      'en-US': 'https://subnexa.vercel.app/en-US/contact',
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
