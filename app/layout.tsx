
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib";

const f = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const title = "ARTZANLEX Plumbing & Sanitary Works | We Fix It Right!";
const description =
  "Your trusted plumbing & sanitary expert. Installations, repairs, pipe fitting, drainage, water tanks and more. WhatsApp +260 974533514.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,

  icons: {
    icon: "/images/artzanlex_website_favicon.png",
    shortcut: "/images/artzanlex_website_favicon.png",
    apple: "/images/artzanlex_website_favicon.png",
  },

  alternates: { canonical: "/" },

  openGraph: {
    title,
    description,
    url: "/",
    siteName: "ARTZANLEX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={f.variable + " font-sans"}>{children}</body>
    </html>
  );
}
