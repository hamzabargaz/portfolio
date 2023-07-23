import { NavigationHeader, Section } from "@/components";
import "../assets/styles/globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

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
  const theme = cookies().get("theme");

  return (
    <html lang='en' className={theme?.value}>
      <body className={inter.className}>
        <div className='bg-gray-50 dark:bg-primary h-full text-primary dark:text-tertiary'>
          <div className='min-h-screen relative overflow-auto'>
            <NavigationHeader theme={theme} />
            <Section>{children}</Section>
          </div>
        </div>
      </body>
    </html>
  );
}
