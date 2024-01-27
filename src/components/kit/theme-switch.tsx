"use client";
import { Sun, Moon } from "@assets/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    }
    if (resolvedTheme === "dark") {
      setTheme("light");
    }
  };

  useEffect(() => setMounted(true), []);

  return (
    <button
      type='button'
      aria-label='Toggle Dark Mode'
      className='ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 shrink-0'
      onClick={toggleTheme}
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Sun className='text-gray-900 dark:text-gray-100' />
        ) : (
          <Moon className='text-gray-900 dark:text-gray-100' />
        )
      ) : (
        <span className='animate-pulse'>...</span>
      )}
    </button>
  );
}
