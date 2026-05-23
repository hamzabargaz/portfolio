"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // Track Core Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Track Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log("LCP:", lastEntry.startTime);
          // You can send this to your analytics service
        }
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // Track First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as PerformanceEventTiming[];
        entries.forEach((entry) => {
          console.log("FID:", entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // Track Cumulative Layout Shift (CLS)
      type LayoutShiftEntry = PerformanceEntry & {
        value: number;
        hadRecentInput: boolean;
      };
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as LayoutShiftEntry[];
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log("CLS:", clsValue);
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });

      // Track Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as PerformanceNavigationTiming[];
        entries.forEach((entry) => {
          if (entry.entryType === "navigation") {
            console.log("TTFB:", entry.responseStart - entry.requestStart);
          }
        });
      });
      navigationObserver.observe({ entryTypes: ["navigation"] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        navigationObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
