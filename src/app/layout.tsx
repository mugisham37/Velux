import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import LoadingAnimation from '../components/Layout/LoadingAnimation'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

export const metadata: Metadata = {
  title: "Not selling liquid - We build, manage, and grow fashion brands",
  description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
  metadataBase: new URL("https://www.notsellingliquid.com"),
  alternates: {
    canonical: "https://www.notsellingliquid.com/",
  },
  openGraph: {
    siteName: "Not selling liquid",
    url: "https://www.notsellingliquid.com/",
    title: "Not selling liquid - We build, manage, and grow fashion brands",
    type: "website",
    description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
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
    title: "Not selling liquid - We build, manage, and grow fashion brands",
    description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="" />
        <link rel="preconnect" href="https://cdn.shopify.com" crossOrigin="" />
      </head>
      <body className="antialiased">
        
          <div className="transition_div">&nbsp;</div>
          <a className="skip-to-content-link visually-hidden" href="#MainContent">
            Skip to content
          </a>
          <LoadingAnimation />
          <Header />
          <main id="MainContent" role="main" tabIndex={-1} style={{ paddingTop: '65px' }}>
            {children}
          </main>
          <Footer />
        
        {/* Scripts converted to Next.js Script components */}
        <Script
          src="https://static.rechargecdn.com/static/js/recharge.js?shop=not-selling-liquid.myshopify.com"
          strategy="afterInteractive"
        />
        <Script
          src="//www.notsellingliquid.com/cdn/s/trekkie.storefront.4b0d51228c8d1703f19d66468963c9de55bf59b0.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.leadinfo.net/ping.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://connect.facebook.net/signals/config/386004036593066?v=2.9.248&r=stable&domain=www.notsellingliquid.com&hme=17590b9a2e1b26755cdc9ecb401f9f46bca979d3ccce95d786db0936167af731&ex_m=94%2C156%2C134%2C20%2C67%2C68%2C127%2C63%2C43%2C128%2C72%2C62%2C10%2C141%2C80%2C15%2C93%2C28%2C122%2C115%2C70%2C73%2C121%2C138%2C102%2C143%2C7%2C3%2C4%2C6%2C5%2C2%2C81%2C91%2C144%2C224%2C167%2C57%2C226%2C227%2C50%2C183%2C27%2C69%2C232%2C231%2C170%2C30%2C56%2C9%2C59%2C87%2C88%2C89%2C95%2C118%2C29%2C26%2C120%2C117%2C116%2C135%2C71%2C137%2C136%2C45%2C55%2C111%2C14%2C140%2C40%2C213%2C215%2C177%2C23%2C24%2C25%2C17%2C18%2C39%2C35%2C37%2C36%2C76%2C82%2C86%2C100%2C126%2C129%2C41%2C101%2C21%2C19%2C107%2C64%2C33%2C131%2C130%2C132%2C123%2C22%2C32%2C54%2C99%2C139%2C65%2C16%2C133%2C104%2C31%2C193%2C163%2C284%2C211%2C154%2C196%2C189%2C164%2C97%2C119%2C75%2C109%2C49%2C44%2C103%2C42%2C108%2C114%2C53%2C60%2C113%2C48%2C51%2C47%2C90%2C142%2C0%2C112%2C13%2C110%2C11%2C1%2C52%2C83%2C58%2C61%2C106%2C79%2C78%2C145%2C146%2C84%2C85%2C8%2C92%2C46%2C124%2C77%2C74%2C66%2C105%2C96%2C38%2C125%2C34%2C98%2C12%2C147"
          strategy="afterInteractive"
        />
        <Script
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jwplayer.com/libraries/HBojKYbu.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//www.notsellingliquid.com/cdn/shop/t/39/assets/jquery.min.js?v=118972937870852736831758090047"
          strategy="beforeInteractive"
        />
        <Script
          src="//www.notsellingliquid.com/cdn/shop/t/39/assets/theme.js?v=52259930801849237631758090047"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
