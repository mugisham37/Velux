import type { Metadata } from "next";
import LoadingAnimation from '../../components/Routes/Landing/LoadingAnimation'
import Header from '../../components/Layout/Header'
import ServicesMainSection from '../../components/Routes/Services/ServicesMainSection'
import Footer from '../../components/Layout/Footer'

export const metadata: Metadata = {
  title: "Services – Not selling liquid",
  description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="transition_div">&nbsp;</div>
      <a className="skip-to-content-link visually-hidden" href="#MainContent">
        Skip to content
      </a>
      <LoadingAnimation />
      <Header currentPage="services" />
      <main id="MainContent" role="main" tabIndex={-1} style={{ paddingTop: '65px' }}>
        <div className="template-page">
          <ServicesMainSection />
        </div>
      </main>
      <Footer />
    </>
  )
}