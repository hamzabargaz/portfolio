import { NavigationHeader, Section } from "@/components";
import "../assets/styles/globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import cx from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hamza Bargaz - Software Engineer",
  description:
    "Software Engineer based in Morocco, passionate about web development and open source.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme") || { value: "dark" };

  return (
    <html lang='en' className={theme?.value}>
      <body
        className={cx(
          inter.className,
          "bg-gray-50 dark:bg-primary h-full text-primary dark:text-tertiary",
          "antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 lg:mx-auto "
        )}
      >
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <NavigationHeader theme={theme} />
          <Section>{children}</Section>
        </main>
      </body>
    </html>
  );
}
