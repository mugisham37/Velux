import type { Metadata } from "next";
import ServicesMainSection from "@/src/components/Routes/Services/ServicesMainSection";
import ServicesTextBannerSection from "@/src/components/Routes/Services/ServicesTextBannerSection";
import ServicesVideoSection from "@/src/components/Routes/Services/ServicesVideoSection";
import LogosSectionsSection from "@/src/components/Routes/Services/LogosSectionsSection";

export const metadata: Metadata = {
  title: "Services – Not selling liquid",
  description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <div className="">
          <ServicesTextBannerSection/>
          <ServicesVideoSection/>
          <ServicesMainSection />
          <LogosSectionsSection/>
        </div>
      </main>
    </>
  )
}

