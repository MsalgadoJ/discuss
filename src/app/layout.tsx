import type { Metadata } from "next";
import { Gruppo } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import Head from "next/head";

const inter = Gruppo({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discuss",
  description: "Share your thoughts",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
