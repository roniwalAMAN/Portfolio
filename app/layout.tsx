import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Aman Roniwal | Full Stack Developer";
const description =
  "Full Stack Developer specialized in real-time systems, scalable backends, and performant React/Next.js experiences.";
const ogImage =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80";

export const metadata: Metadata = {
  metadataBase: new URL("https://amanroniwal.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://amanroniwal.dev",
    images: [
      {
        url: ogImage,
        width: 1600,
        height: 900,
        alt: title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  alternates: {
    canonical: "https://amanroniwal.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <AppThemeProvider>
          <div className="bg-grid relative min-h-screen">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
            <div className="relative">{children}</div>
          </div>
        </AppThemeProvider>
      </body>
    </html>
  );
}
