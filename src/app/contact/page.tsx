import type { Metadata } from "next";
import ContactMainSection from '../../components/Routes/Contact/ContactMainSection'

export const metadata: Metadata = {
  title: "Contact - Not selling liquid",
  description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
  metadataBase: new URL("https://www.notsellingliquid.com"),
  alternates: {
    canonical: "https://www.notsellingliquid.com/pages/contact",
  },
  openGraph: {
    siteName: "Not selling liquid",
    url: "https://www.notsellingliquid.com/pages/contact",
    title: "Contact",
    type: "website",
    description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
    images: [
      {
        url: "http:https://www.notsellingliquid.com/cdn/shop/files/shareimage.png?v=1686743284",
        secureUrl: "https://www.notsellingliquid.com/cdn/shop/files/shareimage.png?v=1686743284",
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    site: "@#",
    card: "summary_large_image",
    title: "Contact",
    description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
  },
};

export default function ContactPage() {
  return (
    <>
      <main>
        <div className="">
          <ContactMainSection />
        </div>
      </main>
    </>
  )
}

