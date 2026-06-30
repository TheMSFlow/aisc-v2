import "./globals.css";

import { LocationProvider } from "@/context/LocationContext";
import { CohortProvider } from "@/context/CohortContext";

import { Inter, PT_Sans_Narrow } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ptsans = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptsans",
  display: "swap",
});

export const metadata = {
  title: "AISC | The AI Stakeholder Challenge",
  description:
    "A system for leaders who want judgment, not tools. Become a positioned AI stakeholder, claim untapped territory, and lead your people well in an AI-shaped world.",

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL
  ),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/aisc_favicon.svg",
    apple: "/aisc-192.png",
  },

  openGraph: {
    title: "AISC | The AI Stakeholder Challenge",
    description:
      "Lead with judgment in an AI-shaped world. A guided system that turns experienced leaders into positioned AI stakeholders.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "AI Stakeholder Challenge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "AISC | The AI Stakeholder Challenge",
    description:
      "Lead with judgment in an AI-shaped world. Become a positioned AI stakeholder.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#010579",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Michael Steve Clarity Studio",
              url: process.env.NEXT_PUBLIC_SITE_URL,
              description:
                "The AI Stakeholder Challenge. A system for leading with judgment and claiming value in an AI-shaped world.",
              sameAs: ["https://linkedin.com/in/themichaelsteve"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${ptsans.variable} antialiased ms-scrollbar`}
      >
        <LocationProvider>
          <CohortProvider>{children}</CohortProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
