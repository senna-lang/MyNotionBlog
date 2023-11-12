import "./globals.scss";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ScrollToTop } from "./components/ScrollToTop";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";

const NoteSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

const PlayfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
  variable: "--font-PlayFairDisplay",
});

export const metadata: Metadata = {
  title: "Next.js13 MyBlog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body
        className={`container bg-slate-100 mx-auto text-black ${NoteSansJP.className} ${PlayfairDisplay.variable}`}
      >
        <MantineProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <div className="sticky bottom-0 py-4 text-right sp:p-2">
              <ScrollToTop />
            </div>
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}