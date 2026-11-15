
import type { Metadata } from "next";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ServiceCTA from "@/components/ServiceCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import { PHONE_DISPLAY, SITE } from "@/lib";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ARTZANLEX | Plumbing and Sanitary Works",
  description:
    "ARTZANLEX Plumbing and Sanitary Works provides plumbing repairs, installations and sanitary solutions for homes and businesses. Clean Water | Safe Systems | Better Living.",
  openGraph: {
    title: "ARTZANLEX | Plumbing and Sanitary Works",
    description:
      "Professional plumbing, sanitary installations and reliable repair solutions. We Fix It Right!",
    url: SITE,
    siteName: "ARTZANLEX",
    type: "website",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${SITE}/#business`,
    name: "ARTZANLEX Plumbing and Sanitary Works",
    url: SITE,
    telephone: "+260974533514",
    description:
      "Plumbing repairs, installations and sanitary solutions for homes and businesses.",
    slogan: "We Fix It Right!",
  };

  return (
    <main>
      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

     <Header />
<Hero />
<WhyChooseUs />
<Services />
<Gallery />
<Reviews />
<Contact />
<Footer />
<FloatingWhatsApp />

{/* <WhatsAppButton/> */}
     
    </main>
  );
}
