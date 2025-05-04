import React from 'react';
import Link from 'next/link';
import { CheckCircle, Clock, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

import { metadata } from './metadata';
import { roadmapMilestones } from '@/constants';
export { metadata };

const getStatusIconAndColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return {
        icon: CheckCircle,
        color: 'text-green-500 dark:text-green-400',
        bgColor: 'bg-green-500/20',
      };
    case 'In Progress':
      return {
        icon: Clock,
        color: 'text-yellow-500 dark:text-yellow-400',
        bgColor: 'bg-yellow-500/20',
      };
    case 'Planned':
      return {
        icon: Target,
        color: 'text-purple-500 dark:text-purple-400',
        bgColor: 'bg-purple-500/20',
      };
    default:
      return { icon: Target, color: 'text-gray-500', bgColor: 'bg-gray-500/20' };
  }
};

export default function RoadmapPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Subnexa Roadmap</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Explore our journey and see what’s coming next as we continue to grow and improve Subnexa.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-violet-500 opacity-30 hidden sm:block" />

        {roadmapMilestones.map((milestone, index) => {
          const { icon: StatusIcon, color, bgColor } = getStatusIconAndColor(milestone.status);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={milestone.id}
              className={cn(
                'relative flex items-center mb-12 sm:mb-16 animate-slide-in',
                isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse',
                'flex-col sm:flex-row',
              )}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Milestone Card */}
              <div
                className={cn(
                  'w-full sm:w-5/12 bg-card dark:bg-gray-800 border border-border dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300',
                  isLeft ? 'sm:mr-auto' : 'sm:ml-auto',
                  bgColor,
                )}
              >
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {milestone.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {milestone.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {milestone.date}
                  </span>
                  <div className="flex items-center space-x-2">
                    <StatusIcon size={16} className={cn(color, 'animate-pulse')} />
                    <span className={cn('text-xs sm:text-sm font-medium', color)}>
                      {milestone.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 border-4 border-gray-100 dark:border-gray-900 z-10 items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-200" />
              </div>

              {/* Spacer for Mobile */}
              <div className="sm:hidden w-full h-8 flex justify-center">
                <div className="w-1 h-full bg-gradient-to-b from-purple-500 to-violet-500 opacity-30" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center mt-12 sm:mt-16">
        <p className="text-base sm:text-lg text-muted-foreground mb-6">
          Have ideas for Subnexa? Let us know what features or tools you’d like to see next!
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-lg hover:from-purple-600 hover:to-violet-600 transition-all duration-300"
        >
          Share Your Feedback
        </Link>
      </div>
    </div>
  );
}
