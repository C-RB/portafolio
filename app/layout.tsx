import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://camilo-rojas.dev";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Camilo Rojas Baeza",
  alternateName: ["camilo-rojas.dev"],
  url: SITE_URL,
};

export const metadata: Metadata = {
  title: "Camilo Rojas Baeza | Ingeniero en Informática",
  description:
    "Portafolio profesional de desarrollador full-stack especializado en React, Next.js, Python y arquitectura de software moderno.",
  keywords: ["desarrollador", "portfolio", "React", "Next.js", "Python", "TypeScript"],
  authors: [{ name: "C-RB" }],
  openGraph: {
    type: "website",
    title: "Camilo Rojas Baeza | Ingeniero en Informática",
    description: "Desarrollador full-stack construyendo productos digitales modernos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.classList.remove("dark");}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-[#09090b] dark:text-zinc-50 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
