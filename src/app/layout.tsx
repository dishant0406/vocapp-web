import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Plus_Jakarta_Sans({
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: {
    default: "Vocapp - Create Amazing Podcasts from Your Ideas",
    template: "%s | Vocapp"
  },
  description: "AI-powered podcasts creation tool that enables personalized learning and quick audio generation from your ideas in minutes.",
  applicationName: "Vocapp",
  keywords: ["podcast", "AI podcast", "audio creation", "personalized learning", "voice assistant", "educational content", "audio learning", "podcast creator"],
  authors: [{ name: "Vocapp Team" }],
  creator: "Vocapp",
  publisher: "Vocapp",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://vocapp.live"),
  alternates: {
    canonical: "https://vocapp.live",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vocapp.live",
    title: "Vocapp - Create Amazing Podcasts from Your Ideas",
    description: "AI-powered podcasts creation tool that enables personalized learning and quick audio generation from your ideas in minutes.",
    siteName: "Vocapp",
    images: [
      {
        url: "/og.webp",
        width: 800,
        height: 600,
        alt: "Vocapp - AI Podcast Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vocapp - Create Amazing Podcasts from Your Ideas",
    description: "AI-powered podcasts creation tool that enables personalized learning and quick audio generation from your ideas in minutes.",
    images: ["/og.webp"],
    creator: "@vocapp",
  },
  appleWebApp: {
    capable: true,
    title: "Vocapp",
    statusBarStyle: "black-translucent",
  },
  category: "Technology",
  classification: "Podcast Creation Tools",
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/vocapp.svg",
    apple: "/vocapp.svg",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="d5716e85-f127-4121-8bd4-d89a728c2ceb"></script>
      </body>
    </html>
  );
}
