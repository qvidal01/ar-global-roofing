import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import { organizationSchema, localBusinessSchema } from "@/src/lib/schema";
import { Analytics } from "@/src/components/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AR Global Roofing - Premium Roofing Services in North Texas",
  description: "The Last Roof Your Home Will Ever Need. Premium roofing services for discerning homeowners in Prosper, Frisco, Plano, McKinney, Allen, and Tyler, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable} ${libreBaskerville.variable}`}>
      <head>
        {/* Schema.org Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
