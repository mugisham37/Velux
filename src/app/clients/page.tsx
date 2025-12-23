import type { Metadata } from "next";
import ClientsMainSection from '../../components/Routes/Clients/ClientsMainSection'

export const metadata: Metadata = {
  title: "Clients – Not selling liquid",
  description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
  metadataBase: new URL("https://www.notsellingliquid.com"),
  alternates: {
    canonical: "https://www.notsellingliquid.com/pages/case-studies",
  },
  openGraph: {
    siteName: "Not selling liquid",
    url: "https://www.notsellingliquid.com/pages/case-studies",
    title: "Case Studies",
    type: "website",
    description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
    images: [
      {
        url: "http://www.notsellingliquid.com/cdn/shop/files/shareimage.png?v=1686743284",
        secureUrl: "https://www.notsellingliquid.com/cdn/shop/files/shareimage.png?v=1686743284",
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    site: "@#",
    card: "summary_large_image",
    title: "Case Studies",
    description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
  },
  other: {
    "facebook-domain-verification": "zmldjp8gcb793tx5vains4wbdq7b26",
  },
  icons: {
    icon: {
      url: "//www.notsellingliquid.com/cdn/shop/files/Group_298.png?crop=center&height=32&v=1686287724&width=32",
      type: "image/png",
    },
  },
};

export default function ClientsPage() {
  return (
    <div className="template-page">
      <ClientsMainSection />
    </div>
  )
}