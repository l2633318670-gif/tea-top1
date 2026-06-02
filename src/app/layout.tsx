import type { Metadata } from "next";
import { Geist, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "山茶 — Mountain Tea",
  description: "以茶为媒，归于自然。高端东方茶品牌。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSerifSC.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-warm-white text-charcoal font-[family-name:var(--font-serif)]">
        {children}
      </body>
    </html>
  );
}
