import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav — Technology Enthusiast, Developer & Creator",
  description:
    "Personal digital portfolio of Gaurav — exploring artificial intelligence, building innovative digital products, and imagining the future of technology.",
  keywords: [
    "Gaurav",
    "Portfolio",
    "Developer",
    "AI/ML Enthusiast",
    "Creative Technologist",
    "Next.js",
    "Python",
    "Design"
  ],
  authors: [{ name: "Gaurav" }],
  creator: "Gaurav",
  openGraph: {
    title: "Gaurav — Technology Enthusiast, Developer & Creator",
    description: "Personal digital portfolio of Gaurav — exploring artificial intelligence, building innovative digital products.",
    type: "website",
    locale: "en_US",
    siteName: "Gaurav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav — Technology Enthusiast, Developer & Creator",
    description: "Personal digital portfolio of Gaurav — exploring artificial intelligence, building innovative digital products.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-[#F2EEE8] font-sans antialiased selection:bg-[#FF8752] selection:text-[#050505]">
        {children}
      </body>
    </html>
  );
}
