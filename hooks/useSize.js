'use client';

import { useState, useLayoutEffect } from 'react';

export function useSize(target) {
  const [size, setSize] = useState(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return; // Guard for SSR

    if (!target?.current) return;

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (rect) {
        setSize({
          width: rect.width,
          height: rect.height,
        });
      }
    });

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return size;
}
