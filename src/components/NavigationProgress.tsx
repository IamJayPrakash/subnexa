'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

// Create a separate component that uses useSearchParams
function NavigationProgressInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Configure NProgress
    NProgress.configure({
      showSpinner: false,
      minimum: 0.1,
      easing: 'ease',
      speed: 300,
    });

    // Start the progress bar
    NProgress.start();

    // Complete the progress bar when navigation is done
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => {
      clearTimeout(timer);
      NProgress.remove();
    };
  }, [pathname, searchParams]);

  return null;
}

// Wrapper component with Suspense
export function NavigationProgress() {
  return (
    <Suspense fallback={null}>
      <NavigationProgressInner />
    </Suspense>
  );
}
