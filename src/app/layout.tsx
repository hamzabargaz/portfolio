import "../assets/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Footer, NavigationHeader, Section } from "@/components";
import { Epilogue } from "next/font/google";
import cx from "classnames";
import { ThemeProvider } from "@/lib/theme-provider";
import { getBlocks, getInfo } from "@/lib/notion";

const getData = async () => {
  const data: any = await getInfo();

  const page = data.find(
    (item: any) => item.properties?.slug.rich_text[0].plain_text === "metadata"
  );

  const info = await getBlocks(page.id);
  const data_table = info.find((item) => item.type === "table").children;
  const table = {
    title: data_table[0]?.table_row?.cells[1][0]?.plain_text || "",
    url: data_table[1]?.table_row?.cells[1][0]?.plain_text || "",
    description: data_table[2]?.table_row?.cells[1][0]?.plain_text || "",
    twitter: data_table[3]?.table_row?.cells[1][0]?.plain_text || "",
  };
  return table;
};

export async function generateMetadata() {
  const data = await getData();
  return {
    title: data.title,
    description: data.description,
    metadataBase: new URL(data.url),
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.url,
      siteName: data.title,
      // images: [
      //   {
      //     url: '/assets/thumbnail/thumbnail.png',
      //     width: 800,
      //     height: 600,
      //   },
      // ],
      locale: "en-US",
      type: "website",
    },
    // icons: {
    //   icon: '/assets/favicon/favicon-32x32.png',
    //   shortcut: '/assets/favicon/favicon.ico',
    //   apple: '/assets/favicon/apple-touch-icon.png',
    // },
    twitter: {
      card: "summary_large_image",
      creator: data.twitter,
      title: data.title,
      description: data.description,
      site: data.url,
      // images: '/assets/thumbnail/thumbnail.png',
    },
    // manifest: '/assets/favicon/site.webmanifest',
  };
}

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <html lang='en'>
      <body
        className={cx(
          epilogue.className,
          "bg-light-100 dark:bg-dark-100 h-full text-light-300 dark:text-dark-300",
          "antialiased max-w-screen-lg mx-4 lg:mx-auto overflow-auto relative"
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className='py-6 gap-y-2 mx-auto flex flex-col h-screen justify-between px-2 md:px-0'>
            <div className='grow flex flex-col'>
              <NavigationHeader title={data.title} />
              <Section className='h-full'>{children}</Section>
            </div>
            <Footer title={data.title} />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
