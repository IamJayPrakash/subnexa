'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/constants';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Calculate how many testimonials to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // Progress indicator - fixed calculation
  const progress = (currentIndex / (testimonials.length - itemsToShow)) * 100;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
        setIsMobile(false);
      } else {
        setItemsToShow(3);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animateSlide = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  const goToNextSlide = useCallback(() => {
    if (currentIndex >= testimonials.length - itemsToShow) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
    animateSlide();
  }, [currentIndex, itemsToShow, animateSlide]);

  const goToPrevSlide = useCallback(() => {
    if (currentIndex <= 0) {
      setCurrentIndex(testimonials.length - itemsToShow);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
    animateSlide();
  }, [currentIndex, itemsToShow, animateSlide]);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplay, isAnimating, itemsToShow, goToNextSlide]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > 100) {
      goToNextSlide();
    }
    if (touchStart - touchEnd < -100) {
      goToPrevSlide();
    }
  }, [touchStart, touchEnd, goToNextSlide, goToPrevSlide]);

  // Get dots count for pagination
  const getDotsCount = useCallback(() => {
    return Math.ceil(testimonials.length / itemsToShow);
  }, [itemsToShow]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute -left-20 top-1/2 w-72 h-72 rounded-full bg-violet-500 blur-3xl"></div>
        <div className="absolute right-10 bottom-10 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent inline-block">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thousands of developers, marketers, and creators trust Subnexa for their daily needs
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-6xl mx-auto mt-8 px-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div
          className="mt-10 relative max-w-6xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Testimonial cards container */}
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={`${testimonial.name}-${idx}`}
                  className={cn(
                    'px-3 transition-all duration-500 flex-shrink-0',
                    isMobile ? 'w-full' : itemsToShow === 2 ? 'w-1/2' : 'w-1/3',
                  )}
                >
                  <div
                    className="h-full p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 
                    flex flex-col relative group backdrop-blur-sm bg-opacity-60 shadow-sm hover:shadow-lg dark:hover:shadow-primary/5"
                  >
                    {/* Quote icon */}
                    <div className="absolute -top-4 -left-1 text-primary/10 dark:text-primary/20">
                      <Quote size={40} className="rotate-180 opacity-80" />
                    </div>

                    {/* Rating stars */}
                    <div className="flex mb-4 relative z-10">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={`${testimonial.name}-star-${i}`}
                          size={16}
                          className={cn(
                            'transition-all',
                            i < testimonial.rating
                              ? 'text-amber-500 fill-amber-500 dark:text-amber-400 dark:fill-amber-400'
                              : 'text-muted stroke-muted',
                          )}
                        />
                      ))}
                    </div>

                    {/* Testimonial content */}
                    <p className="text-foreground line-clamp-5 flex-grow leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author info */}
                    <div className="mt-6 pt-4 border-t border-border flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium leading-tight">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 rounded-br-2xl bg-gradient-to-br from-transparent to-primary/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - larger screens */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevSlide}
              disabled={currentIndex === 0}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              className="rounded-full absolute -left-5 top-1/2 -translate-y-1/2 border-border shadow-md bg-background/80 backdrop-blur-sm hover:bg-background/95 z-10 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNextSlide}
              disabled={currentIndex >= testimonials.length - itemsToShow}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              className="rounded-full absolute -right-5 top-1/2 -translate-y-1/2 border-border shadow-md bg-background/80 backdrop-blur-sm hover:bg-background/95 z-10 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Dot navigation - mobile friendly */}
          <div className="flex justify-center space-x-1.5 mt-8 md:mt-10">
            {Array.from({ length: getDotsCount() }).map((_, idx) => (
              <button
                key={`dot-${idx}`}
                onClick={() => {
                  setCurrentIndex(idx * itemsToShow);
                  animateSlide();
                }}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300 cursor-pointer',
                  currentIndex >= idx * itemsToShow && currentIndex < (idx + 1) * itemsToShow
                    ? 'bg-primary w-6'
                    : 'bg-border hover:bg-primary/50',
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Mobile navigation buttons */}
          <div className="flex justify-center space-x-4 mt-6 md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevSlide}
              disabled={currentIndex === 0}
              className="rounded-full cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} className="mr-1" /> Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToNextSlide}
              disabled={currentIndex >= testimonials.length - itemsToShow}
              className="rounded-full cursor-pointer"
              aria-label="Next testimonial"
            >
              Next <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
