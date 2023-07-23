"use client";
import { useState } from "react";
import { Theme } from "@types";
import { Sun, Moon } from "@assets/icons";

interface Props {
  theme: Theme;
}

export default function ThemeSwitcher({ theme }: Props) {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toggleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle(Theme.dark);
    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
      document.cookie = `theme=${Theme.dark}`;
    } else {
      setTheme(Theme.light);
      document.cookie = `theme=${Theme.light}`;
    }
  };

  return (
    <button
      type='button'
      aria-label='Toggle Dark Mode'
      className='ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4'
      onClick={toggleTheme}
    >
      {_theme == Theme.dark ? (
        <Sun className='text-gray-900 dark:text-gray-100' />
      ) : (
        <Moon className='text-gray-900 dark:text-gray-100' />
      )}
    </button>
  );
}
