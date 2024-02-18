import type { Metadata } from "next";
import { Gruppo } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

const inter = Gruppo({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discuss",
  description: "Share your thoughts",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${inter.className} bg-wave`}>
        <Providers>
          <div className="min-h-screen w-full grid grid-rows-[auto_1fr_auto]">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
