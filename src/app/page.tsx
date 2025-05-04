import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import PopularToolsSection from '@/components/home/PopularToolbar';
import TestimonialsSection from '@/components/home/TestimonialSection';
import CtaSection from '@/components/home/CtaSection';
import React from 'react';

import metadata from './metadata';
export { metadata };

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
