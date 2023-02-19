import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@/icons";

type Props = {};

export default function ThemeSwitch({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle Dark Mode"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted && isDark ? (
        <Sun className="text-gray-900 dark:text-gray-100" />
      ) : (
        <Moon className="text-gray-900 dark:text-gray-100" />
      )}
    </button>
  );
}
