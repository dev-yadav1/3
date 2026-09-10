import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dev Yadav — AI/ML Portfolio",
  description:
    "AI/ML-focused Computer Science student with hands-on experience building and improving intelligent systems. Skilled in designing and testing AI workflows, adapting language models, and working with real-world datasets to improve performance and reliability. Experienced with Python, PyTorch, and Hugging Face, with a strong focus on practical implementation.",
  keywords: [
    "Dev Yadav",
    "AI",
    "Machine Learning",
    "Computer Science",
    "PyTorch",
    "Hugging Face",
    "WireGuard",
    "Docker",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Dev Yadav", url: "https://devyadav.me" }],
  creator: "Dev Yadav",
  metadataBase: new URL("https://devyadav.me"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devyadav.me",
    siteName: "Dev Yadav — AI/ML Portfolio",
    title: "Dev Yadav — AI/ML Portfolio",
    description:
      "AI/ML-focused Computer Science student with hands-on experience building and improving intelligent systems. Skilled in designing and testing AI workflows, adapting language models, and working with real-world datasets.",
    images: [
      {
        url: "https://devyadav.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dev Yadav — AI/ML Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Yadav — AI/ML Portfolio",
    description:
      "AI/ML-focused Computer Science student with hands-on experience building and improving intelligent systems.",
    creator: "@dev_ydv",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent/15 selection:text-accent">
        {children}
      </body>
    </html>
  );
}
