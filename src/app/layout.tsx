import "../assets/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Footer, NavigationHeader, Section } from "@/components";
import { Epilogue } from "next/font/google";
import cx from "classnames";
import { ThemeProvider } from "@/lib/theme-provider";
import { getAuthorAction, getTotalPostsAction } from "@/lib/actions";
import { GoogleAnalytics } from "@next/third-parties/google";

export async function generateMetadata() {
  const { seo } = await getAuthorAction();
  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(seo.url),
    openGraph: {
      ...seo.openGraph,
      images: seo.openGraph.images.map((image: any) => ({
        ...image,
        url: new URL(image.url, seo.url).href,
      })),
      locale: "en-US",
    },
    icons: {
      icon: [
        {
          media: "(prefers-color-scheme: light)",
          url: seo.icon_light.url,
        },
        {
          media: "(prefers-color-scheme: dark)",
          url: seo.icon_dark.url,
        },
      ],
    },
    twitter: {
      ...seo.twitter,
      image: seo.twitter.image.url,
    },
  };
}

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const gaID = process.env.GA_ID || "";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getAuthorAction();
  const total_posts = await getTotalPostsAction();
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cx(
          "bg-light-100 dark:bg-dark-100 h-full text-light-300 dark:text-dark-300",
          "antialiased max-w-screen-lg mx-4 lg:mx-auto overflow-auto relative"
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className='py-6 gap-y-2 mx-auto flex flex-col h-screen justify-between px-2 md:px-0'>
            <div className='grow flex flex-col'>
              <NavigationHeader
                total_posts={total_posts}
                title={data.full_name}
              />
              <Section className='h-full'>{children}</Section>
            </div>
            <Footer title={data.full_name} />
          </main>
        </ThemeProvider>
      </body>

      <GoogleAnalytics gaId={gaID} />
    </html>
  );
}
