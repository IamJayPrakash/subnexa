import type { Metadata } from 'next';

// Placeholder function to simulate fetching blog post data
// In a real app, you'd fetch this data from a CMS, database, or API
async function fetchBlogPost(slug: string) {
  // Simulated data based on slug
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const description = `Read our blog post "${title}" on Subnexa. Learn more about developer tools, productivity tips, and SEO strategies.`;

  return { title, description };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const { title, description } = await fetchBlogPost(slug);

  return {
    title: `Subnexa Blog: ${title}`,
    description,
    keywords: [
      'Subnexa blog',
      'developer blog',
      `${title.toLowerCase()}`,
      'free online tools blog',
      'developer tools articles',
      'productivity tips',
      'SEO strategies',
      'web development guides',
      'Subnexa insights',
      'Subnexa articles',
      `Subnexa ${title.toLowerCase()}`,
      'Subnexa developer tips',
      'Subnexa productivity blog',
      'Subnexa SEO blog',
      'coding tutorials',
      'online tools guides',
      'developer productivity',
      'SEO for developers',
      'Subnexa web tools blog',
      'best developer blog',
    ],
    applicationName: 'Subnexa',
    generator: 'Next.js',
    authors: [{ name: 'Jay Prakash', url: 'https://heyjayprakash.netlify.app' }],
    creator: 'Jay Prakash',
    publisher: 'Subnexa',
    openGraph: {
      title: `Subnexa Blog: ${title}`,
      description,
      url: `https://subnexa.vercel.app/blog/${slug}`,
      siteName: 'Subnexa',
      images: [
        {
          url: 'https://subnexa.vercel.app/og-image.png',
          width: 1200,
          height: 630,
          alt: `Subnexa Blog - ${title}`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Subnexa Blog: ${title}`,
      description,
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
      canonical: `https://subnexa.vercel.app/blog/${slug}`,
      languages: {
        'en-US': `https://subnexa.vercel.app/en-US/blog/${slug}`,
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
}
