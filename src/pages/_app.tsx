import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/style.css";
import type { AppProps } from "next/app";
import { Lato } from "@next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={lato.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
