'use client';

import { useState, useLayoutEffect } from 'react';

export const useSize = (target) => {
  const [size, setSize] = useState(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (!(target?.current instanceof Element)) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    if (target.current) {
      resizeObserver.observe(target.current);
    }

    return () => {
      if (target.current) {
        resizeObserver.unobserve(target.current);
      }
      resizeObserver.disconnect();
    };
  }, [target]);

  return size;
};
