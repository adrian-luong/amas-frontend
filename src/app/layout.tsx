import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PropsWithChildren } from "react";

import "./globals.css";
import Header from "@/components/header";
import ThemeProvider from "@/components/theme/theme.provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Messenger Assistant for Sellers",
  description: "Trợ lý AI giúp người mới tìm kiếm, phân tích, và bắt đầu copy trading trên Binance một cách nhanh chóng (dưới 5 phút).",
};

export default function RootLayout({ children, }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <div className="p-6">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
