import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import SupabaseLintener from "./components/SupabaseLintener";

export const metadata: Metadata = {
  title: "Next.js13 MyBlog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body className="container mx-auto bg-indigo-400 text-slate-50 ">
        <div className="flex flex-col min-h-screen ">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
