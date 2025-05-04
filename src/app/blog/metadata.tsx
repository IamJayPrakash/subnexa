import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subnexa Blog: Tips, Guides & Insights for Developers',
  description:
    'Explore the Subnexa blog for expert tips, guides, and insights on developer tools, productivity, SEO strategies, and more. Stay updated with the latest trends.',
  keywords: [
    'Subnexa blog',
    'developer blog',
    'free online tools blog',
    'developer tools articles',
    'productivity tips',
    'SEO strategies',
    'web development guides',
    'Subnexa insights',
    'Subnexa articles',
    'Subnexa developer tips',
    'Subnexa productivity blog',
    'Subnexa SEO blog',
    'coding tutorials',
    'online tools guides',
    'developer productivity',
    'SEO for developers',
    'Subnexa web tools blog',
    'best developer blog',
    'online tools tutorials',
    'Subnexa coding blog',
  ],
  applicationName: 'Subnexa',
  generator: 'Next.js',
  authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
  creator: 'Jay Prakash',
  publisher: 'Subnexa',
  openGraph: {
    title: 'Subnexa Blog: Tips & Guides for Developers & Marketers',
    description:
      'Read the Subnexa blog for tips, guides, and insights on developer tools, productivity, and SEO. Stay informed with the latest trends and tutorials.',
    url: 'https://subnexa.vercel.app/blog',
    siteName: 'Subnexa',
    images: [
      {
        url: 'https://subnexa.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subnexa Blog - Tips and Guides for Developers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subnexa Blog: Tips & Guides for Developers & Marketers',
    description:
      'Discover expert tips, guides, and insights on the Subnexa blog. Learn about developer tools, productivity, and SEO strategies with our latest articles.',
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
  category: 'blog',
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
    canonical: 'https://subnexa.vercel.app/blog',
    languages: {
      'en-US': 'https://subnexa.vercel.app/en-US/blog',
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
