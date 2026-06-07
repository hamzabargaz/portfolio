"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * A thin progress bar pinned to the top of the viewport that gives instant
 * feedback while a route transition is in flight. In the App Router a click on
 * an internal <Link> blocks on the server until the new page is ready, so we:
 *   1. start (and "trickle") the bar the moment an internal link is clicked
 *   2. snap it to 100% and fade it out once the new pathname commits
 */
export default function TopLoadingBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  const activeRef = useRef(false);
  const trickleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    if (trickleRef.current) {
      clearInterval(trickleRef.current);
      trickleRef.current = null;
    }
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const start = useCallback(() => {
    if (activeRef.current) return;
    activeRef.current = true;
    clearTimers();
    setFading(false);
    setVisible(true);
    setProgress(8);
    // Ease toward 90% so the bar keeps moving while we wait on the server.
    trickleRef.current = setInterval(() => {
      setProgress((p) => (p >= 90 ? p : p + (90 - p) * 0.1));
    }, 220);
  }, []);

  const finish = useCallback(() => {
    if (!activeRef.current) return;
    activeRef.current = false;
    clearTimers();
    setProgress(100);
    timersRef.current.push(
      setTimeout(() => setFading(true), 180),
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
        setFading(false);
      }, 520)
    );
  }, []);

  // Kick off the bar on any same-origin link click that changes the path.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;

      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");
      if (!href || (target && target !== "_self")) return;
      if (anchor.hasAttribute("download")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      // Same path (hash links / current page) won't trigger a navigation.
      if (url.pathname === window.location.pathname) return;

      start();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [start]);

  // The route has committed once the pathname changes — complete the bar.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    finish();
  }, [pathname, finish]);

  useEffect(() => clearTimers, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className='fixed inset-x-0 top-0 z-[9999] h-[3px] pointer-events-none'
    >
      <div
        className='h-full rounded-r-full bg-light-300 dark:bg-dark-300 transition-[width,opacity] duration-200 ease-out'
        style={{
          width: `${progress}%`,
          opacity: fading ? 0 : 1,
          boxShadow:
            "0 0 8px rgba(13,13,13,0.45), 0 0 4px rgba(13,13,13,0.45)",
        }}
      />
    </div>
  );
}
