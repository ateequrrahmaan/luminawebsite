import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumina-agency.com"),
  title: {
    default: "Lumina Design Agency | Modern Digital Solutions",
    template: "%s | Lumina Design Agency",
  },
  description: "Innovative design and development agency specializing in UI/UX, branding, and web development. We build digital experiences that matter.",
  keywords: ["Design Agency", "UI/UX Design", "Web Development", "Branding", "Digital Marketing"],
  authors: [{ name: "Lumina Agency" }],
  creator: "Lumina Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumina-agency.com",
    siteName: "Lumina Design Agency",
    title: "Lumina Design Agency | Modern Digital Solutions",
    description: "Innovative design and development agency specializing in UI/UX, branding, and web development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumina Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Design Agency | Modern Digital Solutions",
    description: "Innovative design and development agency specializing in UI/UX, branding, and web development.",
    images: ["/og-image.jpg"],
    creator: "@luminaagency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300"
      >
        <Providers>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
