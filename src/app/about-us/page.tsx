import type { Metadata } from "next";
import AboutIntroSection from '../../components/Routes/AboutUs/AboutIntroSection'
import AboutStepsSection from '../../components/Routes/AboutUs/AboutStepsSection'
import AboutRichTextSection from '../../components/Routes/AboutUs/AboutRichTextSection'

export const metadata: Metadata = {
  title: "About Us – Not selling liquid",
  description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
};

export default function AboutUsPage() {
  return (
    <main>
      <div className="">
        <AboutIntroSection />
        <AboutStepsSection />
        <AboutRichTextSection />
      </div>
    </main>
  )
}

