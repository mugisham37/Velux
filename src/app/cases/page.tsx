import type { Metadata } from "next";
import CasesMainSection from '../../components/Routes/Cases/CasesMainSection'
import WhyShopifySection from '../../components/Routes/Cases/WhyShopifySection'

export const metadata: Metadata = {
  title: "Case Studies – Not selling liquid",
  description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
};

export default function CasesPage() {
  return (
    <>
      <div className="template-page">
        <CasesMainSection />
        <WhyShopifySection />
      </div>
    </>
  )
}