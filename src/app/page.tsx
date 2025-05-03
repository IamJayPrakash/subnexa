import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import PopularToolsSection from '@/components/home/PopularToolbar';
import TestimonialsSection from '@/components/home/TestimonialSection';
import CtaSection from '@/components/home/CtaSection';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SubNexa - Free Online Tools Collection',
  description:
    'Access hundreds of free online tools for developers, content creators, and marketers. Text manipulation, code formatting, converters, generators, and more - all in one place.',
  keywords:
    'free online tools, web tools, developer tools, text tools, converters, generators, utilities',
  openGraph: {
    title: 'SubNexa - Free Online Tools Collection',
    description:
      'Access hundreds of free online tools for developers, content creators, and marketers.',
    url: 'https://subnexa.vercel.app',
    siteName: 'SubNexa',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PopularToolsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
