import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Apple devices render SF Pro via -apple-system; everyone else gets Inter.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HireStern — Screened candidates in 72 hours",
  description:
    "HireStern finds and screens candidates for your open roles. Shortlist in 72 hours. 12% of fixed CTC.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
