import { NavigationHeader, Section } from "@/components";
import "../assets/styles/globals.css";
import { Inter, Darker_Grotesque, Epilogue } from "next/font/google";
import { cookies } from "next/headers";
import cx from "classnames";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700"],
});
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

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
  return (
    <html lang='en'>
      <body
        className={cx(
          // inter.className,
          // darkerGrotesque.className,
          epilogue.className,
          "bg-gray-50 dark:bg-black h-full text-[#212121CC] dark:text-[#EEEEEE",
          "antialiased max-w-screen-lg mx-4 lg:mx-auto"
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className='mt-6 mx-auto flex flex-col px-2 md:px-0'>
            <NavigationHeader />
            <Section>{children}</Section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
