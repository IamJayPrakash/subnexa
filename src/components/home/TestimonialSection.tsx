'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Devanshi Pathak',
    role: 'Full-Stack Developer',
    content:
      'Subnexa has become my go-to resource for quick text transformations and encodings. The Base64 and JSON formatter tools save me so much time!',
    rating: 5,
  },
  {
    name: 'Chirag Arora',
    role: 'Senior SEO Specialist',
    content:
      "As a Senior SEO Specialist, I use Subnexa's tools daily. The meta tag generator and keyword density analyzer are incredible time-savers that deliver professional results.",
    rating: 5,
  },
  {
    name: 'Sanjeev kr',
    role: 'UI/UX Designer',
    content:
      'The color converter and Lorem Ipsum generator are essential parts of my design workflow. Clean interface, fast results, and all free!',
    rating: 4,
  },
  {
    name: 'Anisha Patel',
    role: 'Content Creator',
    content:
      'I love how Subnexa makes technical tools accessible. The word counter and case converter help me polish my content before publishing.',
    rating: 5,
  },
  {
    name: 'Pratham Gupta',
    role: 'Security Analyst',
    content:
      'The hash generators and encoding tools are reliable and secure. I appreciate that all processing happens client-side so sensitive data stays private.',
    rating: 5,
  },
  {
    name: 'Dipanshu Kaira',
    role: 'Performance Marketing Specialist',
    content:
      'Subnexa is a game-changer for marketers. The URL shortener and QR code generator are perfect for campaigns. I can create custom links in seconds!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Calculate how many testimonials to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      if (direction === 'right') {
        nextSlide();
      } else {
        prevSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplay, direction, itemsToShow]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1));
    setDirection('right');
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1));
    setDirection('left');
  };

  // Get visible testimonials based on current index and items to show
  const visibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thousands of developers, marketers, and creators trust Subnexa for their daily needs
          </p>
        </div>

        <div className="mt-12 relative">
          {/* Testimonial cards */}
          <div className="flex overflow-hidden">
            {visibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className={cn(
                  'flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 transition-transform duration-500',
                  'animate-fade',
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-full p-6 rounded-xl border border-border bg-card flex flex-col">
                  {/* Rating stars */}
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={`${testimonial.name}-star-${i}`}
                        size={18}
                        className={cn(
                          i < testimonial.rating
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-muted stroke-muted',
                        )}
                      />
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <p className="text-foreground italic flex-grow">{`"${testimonial.content}"`}</p>

                  {/* Author info */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="mt-10 flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              onMouseEnter={() => {
                setAutoplay(false);
                setDirection('left');
              }}
              onMouseLeave={() => setAutoplay(true)}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              onMouseEnter={() => {
                setAutoplay(false);
                setDirection('right');
              }}
              onMouseLeave={() => setAutoplay(true)}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
