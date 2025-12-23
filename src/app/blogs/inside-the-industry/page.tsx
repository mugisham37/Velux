import type { Metadata } from "next";
import BlogBanner from '../../../components/Routes/Blog/BlogBanner';
import BlogMainSection from '../../../components/Routes/Blog/BlogMainSection';
import './blog.css';

export const metadata: Metadata = {
  title: "Inside the Industry – Not selling liquid",
  description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
  metadataBase: new URL("https://www.notsellingliquid.com"),
  alternates: {
    canonical: "https://www.notsellingliquid.com/blogs/inside-the-industry",
  },
  openGraph: {
    siteName: "Not selling liquid",
    url: "https://www.notsellingliquid.com/blogs/inside-the-industry",
    title: "Inside the Industry – Not selling liquid",
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
    title: "Inside the Industry – Not selling liquid",
    description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
  },
  other: {
    "facebook-domain-verification": "zmldjp8gcb793tx5vains4wbdq7b26",
  },
};

export default function BlogPage() {
  return (
    <div className="template-blog">
      <BlogBanner />
      <BlogMainSection />
    </div>
  );
}