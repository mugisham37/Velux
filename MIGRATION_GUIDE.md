# HTML to Next.js Migration Guide - Not Selling Liquid

## Overview
This guide provides step-by-step instructions to migrate the HTML document to Next.js by copying specific lines to designated files and components.

## Phase 1: Layout and Metadata Setup

### Step 1: Update `src/app/layout.tsx`

#### 1.1 Replace the metadata object
**From HTML lines 6-42** (meta tags in head), copy and convert to:

```typescript
export const metadata: Metadata = {
  title: "Not selling liquid - We build, manage, and grow fashion brands",
  description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
  keywords: "shopify plus, fashion ecommerce, digital agency, amsterdam",
  authors: [{ name: "Not selling liquid" }],
  creator: "Not selling liquid",
  publisher: "Not selling liquid",
  robots: "index, follow",
  openGraph: {
    title: "Not selling liquid - We build, manage, and grow fashion brands",
    description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
    url: "https://www.notsellingliquid.com/",
    siteName: "Not selling liquid",
    images: [
      {
        url: "https://www.notsellingliquid.com/cdn/shop/files/shareimage.png?v=1686743284",
        width: 1200,
        height: 630,
        alt: "Not selling liquid"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Not selling liquid - We build, manage, and grow fashion brands",
    description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
    site: "@#"
  },
  other: {
    "facebook-domain-verification": "zmldjp8gcb793tx5vains4wbdq7b26"
  }
}
```

#### 1.2 Update the HTML lang attribute
**From HTML line 1**, change:
```typescript
<html lang="en">
```

#### 1.3 Add viewport and theme-color meta tags
**From HTML lines 4-5**, add to head:
```typescript
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="theme-color" content="" />
```

### Step 2: Update Font Configuration

#### 2.1 Replace Geist fonts with custom fonts
**From HTML lines 82-103** (font-face declarations), update the font imports:

```typescript
import localFont from 'next/font/local'

const aeonik = localFont({
  src: [
    {
      path: './fonts/Aeonik-Regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-aeonik',
  display: 'swap',
})

const ppEditorialOld = localFont({
  src: [
    {
      path: './fonts/PPEditorialOld-Light.woff2',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-pp-editorial',
  display: 'swap',
})
```

#### 2.2 Update body className
Replace the current body className with:
```typescript
className={`${aeonik.variable} ${ppEditorialOld.variable} antialiased`}
```

## Phase 2: Global Styles Setup

### Step 3: Update `src/app/globals.css`

#### 3.1 Keep existing font-face declarations (lines 4-32)
The font-face declarations are already correctly copied.

#### 3.2 Add missing CSS from HTML
**From HTML lines 104-147** (CSS variables and reset), the CSS is already present.

#### 3.3 Add additional styles from HTML head
**From HTML lines 148-154**, add:
```css
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}
```

## Phase 3: Component Creation

### Step 4: Create Loading Animation Component

#### 4.1 Create `src/components/LoadingAnimation.tsx`
**From HTML lines 158-200** (snippet-loading-animation div and its contents):

```typescript
'use client'
import { useEffect, useState } from 'react'

export default function LoadingAnimation() {
  const [currentValue, setCurrentValue] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const targetValue = 100
    const updatePercentage = () => {
      setCurrentValue(prev => {
        if (prev < targetValue) {
          return prev + 1
        }
        return prev
      })
    }

    const interval = setInterval(updatePercentage, 20)
    
    if (currentValue >= targetValue) {
      clearInterval(interval)
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }

    return () => clearInterval(interval)
  }, [currentValue])

  if (!isVisible) return null

  return (
    <div className="snippet-loading-animation">
      <div className="loading-line">
        <span 
          style={{ 
            transform: `scaleX(${currentValue / 100})`, 
            transformOrigin: currentValue < 100 ? "left" : "right center" 
          }}
        ></span>
      </div>
      <div className="loading-logo" style={{ display: currentValue >= 100 ? 'block' : 'none' }}>
        {/* SVG content from lines 162-185 */}
        <svg width="1400" height="176" viewBox="0 0 1400 176" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Copy the entire SVG content from HTML lines 163-184 */}
        </svg>
      </div>
      <div className="loading-overlay">&nbsp;</div>
      <div className="loading-images" style={{ display: 'none' }}>
        {/* Copy img tags from HTML lines 187-196 */}
      </div>
      <div className="loadin-percentage">{currentValue}%</div>
    </div>
  )
}
```

### Step 5: Create Header Component

#### 5.1 Create `src/components/Header.tsx`
**From HTML lines 235-350** (header section):

```typescript
'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="section-header section-id-header transparent-header">
        <div className="d-none mb-header-head">
          <p className="xs-body text-center">Browser + Notch</p>
        </div>
        <div className="container">
          <div className="header-row grid">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/" title="Not selling liquid">
                  {/* Copy SVG from HTML lines 244-265 */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="286" height="36" viewBox="0 0 286 36" fill="none">
                    {/* Copy paths from HTML */}
                  </svg>
                </Link>
              </div>
              <div className="header-logo scrolled_logo">
                <Link href="/" title="Not selling liquid">
                  {/* Copy SVG from HTML lines 268-275 */}
                </Link>
              </div>
            </div>
            <div className="header-center">
              <div className="snippet-header-nav">
                <ul className="list-menu" role="list">
                  {/* Copy navigation items from HTML lines 280-297 */}
                  <li><Link href="/pages/services">Services</Link></li>
                  <li><Link href="/pages/about-us">About us</Link></li>
                  <li><Link href="/pages/case-studies">Cases</Link></li>
                  <li><Link href="/pages/clients">Clients</Link></li>
                  <li><Link href="/blogs/inside-the-industry">Articles</Link></li>
                  <li><Link href="/pages/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="header-breadcrumb">
                <div className="snippet-breadcrumb">
                  <p>Home</p>
                </div>
              </div>
            </div>
            <div className="header-right">
              <Link href="/pages/contact" className="link-arrow link-pure-cacao sheader-right">
                {/* Copy content from HTML lines 302-312 */}
              </Link>
              <div className="d-block d-lg-none">
                <button 
                  className="menu-burger"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {/* Copy SVG from HTML lines 315-322 */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Drawer from HTML lines 325-350 */}
      <div className={`snippet-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Copy mobile menu content */}
      </div>
    </>
  )
}
```

## Phase 4: Main Content Sections

### Step 6: Create Main Page Sections

#### 6.1 Create `src/components/IntroSection.tsx`
**From HTML lines 355-380** (main intro section):

```typescript
export default function IntroSection() {
  return (
    <section className="section-intro section-id-template--26430796759383__5068ab18-3ac5-4273-b159-c935f9d1f90a">
      <style jsx>{`
        .section-id-template--26430796759383__5068ab18-3ac5-4273-b159-c935f9d1f90a {
          background: #262424;
        }
      `}</style>
      <div className="container">
        <div className="intro-wrap grid">
          <div className="intro-left grid-4-fcol d-none d-lg-block">
            <p className="s-body">Intro</p>
          </div>
          <div className="intro-right grid-7-lcol">
            <div className="intro-rightinr">
              <h2>
                We build, manage and grow the presence of purpose-led brands
                in the digital space.
              </h2>
              <div className="n-body">
                <p>
                  The Shopify Premier agency for brands aiming to grow
                  sustainably
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="intro_overly" style={{ opacity: 0 }}>&nbsp;</div>
      </div>
    </section>
  )
}
```

#### 6.2 Create `src/components/BannerSection.tsx`
**From HTML lines 390-420** (main banner section):

```typescript
import Image from 'next/image'

export default function BannerSection() {
  return (
    <section className="section-banner section-id-template--26430796759383__f1214721-46d5-4d18-93ff-183e7995facb relative-sec">
      <div className="banner-wrap">
        <div className="snippet-banner block-id-e2167cfe-0cac-4332-a4c6-2bae7bb09dec full-width">
          <div className="mainbnr_wrap banner img_banner">
            <Image
              src="/images/53A584C0-4882-460F-885B-0134EAB6E6BD-m.jpg"
              alt=""
              className="full-image d-none d-lg-block"
              width={2164}
              height={1440}
            />
            <Image
              src="/images/Bram_s_Fruit_HS25_30-10-241072_copy.jpg"
              alt=""
              className="full-image d-block d-lg-none"
              width={1080}
              height={1350}
            />
            <div className="banner-con desk_right mob_right deskver_bottom mobver_bottom">
              <div className="banner-coninr deskhor_right mobhor_right"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```
#### 6.3 Create `src/components/CasesSection.tsx`
**From HTML lines 421-550** (cases section with videos):

```typescript
'use client'
import Link from 'next/link'

export default function CasesSection() {
  return (
    <section className="section-cases section-id-template--26430796759383__9f9ca3cf-e41c-42ad-9384-b5b5e7edb7d2 relative-sec">
      <style jsx>{`
        .section-id-template--26430796759383__9f9ca3cf-e41c-42ad-9384-b5b5e7edb7d2 {
          background: #e5e2de;
        }
      `}</style>
      <div className="container">
        <div className="mb-space-border lt-space">
          <div className="cases-header grid half-grid">
            <div className="cases-hl">
              <p className="n-body">
                We're moved by the diverse stories of fashion
              </p>
              <h3>
                We help ambitious brands, ones with heart, soul and
                character.
              </h3>
            </div>
            <div className="cases-hr desk_right d-none d-lg-block">
              <Link href="/pages/case-studies" className="link-arrow link-pure-cacao">
                {/* Copy arrow SVG and text from HTML lines 440-450 */}
                <span className="label">all case studies</span>
              </Link>
            </div>
          </div>
          <div className="cases-grid mbscroll-hide">
            {/* Case 1: Fabienne Chapot - Copy from HTML lines 453-490 */}
            <div className="cases-gridinr block-id-cc988556-356d-4e32-914e-0736ecb03fce">
              <div className="cases-gridwrap">
                <video 
                  playsInline 
                  autoPlay 
                  muted 
                  loop 
                  preload="metadata" 
                  className="fullvideo d-none d-lg-block"
                  poster="/images/preview_d4d832f6fceb43a989e0c497805ddf2d.jpg"
                >
                  <source src="/videos/d4d832f6fceb43a989e0c497805ddf2d.mp4" type="video/mp4" />
                </video>
                <video 
                  playsInline 
                  autoPlay 
                  muted 
                  loop 
                  preload="metadata" 
                  className="fullvideo d-block d-lg-none"
                >
                  <source src="/videos/d4d832f6fceb43a989e0c497805ddf2d.mp4" type="video/mp4" />
                </video>
                <div className="cases-content banner-content">
                  <div className="cases-coninr">
                    <div className="cases-btag">
                      <p className="xs-body tag">Build</p>
                      <p className="xs-body tag">Manage</p>
                      <p className="xs-body tag">Grow</p>
                    </div>
                    <div className="cases-logo d-none d-lg-block text-center"></div>
                    <div className="cases-btext">
                      <div className="cases-btextinr">
                        <p className="s-body">Fabienne Chapot</p>
                        <div className="s-caption">
                          <p>
                            A new digital home for Fabienne Chapot: Artfully
                            balancing creativity with commercial goals
                          </p>
                        </div>
                      </div>
                      <div className="cases-bbtn desk_right">
                        <Link href="/pages/fabienne-chapot-shopify-new-site" className="cases-bbtninr">
                          <div className="link-arrow">
                            <span className="label">View Full Case</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case 2: Hang Eleven - Copy from HTML lines 491-528 */}
            <div className="cases-gridinr block-id-2b5e97f2-175a-4e35-bc05-188ebc9a150e">
              {/* Similar structure as Case 1, copy content */}
            </div>
            
            {/* Case 3: Arte Antwerp - Copy from HTML lines 529-566 */}
            <div className="cases-gridinr block-id-6f57a988-fe08-43b2-b827-454c7e538aa0">
              {/* Similar structure, copy content */}
            </div>
          </div>
          
          <div className="cases-mb-btn desk_right d-block d-lg-none">
            <Link href="/pages/case-studies" className="button button-stone">
              <span className="label">all case studies</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### 6.4 Create `src/components/ShopifyPlusSection.tsx`
**From HTML lines 567-700** (Shopify Plus section with rotating logos):

```typescript
'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ShopifyPlusSection() {
  const [logoData] = useState([
    { src: "/images/merrachi.png", height: "28" },
    { src: "/images/logo-oqium.svg", height: "18" },
    { src: "/images/blush-gold-jewels.jpg", height: "18" },
    { src: "/images/logo-rinopelle.svg", height: "17" },
    { src: "/images/maha-logo.png", height: "38" },
    { src: "/images/Viktor_Rolf_Logo.png", height: "25" },
    { src: "/images/logo-fabiennechapot.svg", height: "28" },
    { src: "/images/Four.png", height: "17" },
    { src: "/images/olaf.png", height: "50" }
  ])

  return (
    <section className="section-shopify-plus section-id-template--26430796759383__b7c8b597-4f0c-454b-8ffd-e2c4d58acaa6 relative-sec">
      <div className="container">
        <div className="shopify-plus grid">
          <div className="sp-left grid-4-fcol">
            {/* Copy Shopify Plus SVG logo from HTML lines 575-620 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="56" viewBox="0 0 160 56" fill="none">
              {/* Copy all SVG paths from HTML */}
            </svg>
          </div>
          <div className="sp-right grid-8-lcol">
            <div className="sp-rightinr">
              <div className="sp-right-content">
                <div className="n-caption">
                  <p>
                    As a certified Shopify Premier partner, we're creating a
                    space where e-commerce expertise is combined with an
                    intrinsic fashion mindset to grow next-generation brands
                    in the digital landscape.<br />
                  </p>
                </div>
                <Link href="/pages/services" className="button button-stone">
                  <span className="label">Our Services</span>
                </Link>
              </div>
              <div className="sp-logo logoblk">
                {logoData.map((logo, index) => (
                  <div key={index} className="sp-logoinr logoblkinr">
                    <Image
                      src={logo.src}
                      alt={`Partner logo ${index}`}
                      width={100}
                      height={parseInt(logo.height)}
                      style={{ maxHeight: `${logo.height}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### 6.5 Create `src/components/TestimonialSection.tsx`
**From HTML lines 701-740** (testimonial section):

```typescript
import Image from 'next/image'

export default function TestimonialSection() {
  return (
    <section className="section-testimonial section-id-template--26430796759383__38f6249f-94cf-42a2-8903-5a33c0e1258e relative-sec">
      <div className="container">
        <div className="testimonial-wrap grid">
          <div className="testimonial-left grid-4-fcol">
            <div className="testimonial-leftinr">
              <p className="n-body">Testimonial</p>
            </div>
          </div>
          <div className="testimonial-right grid-8-lcol">
            <div className="testimonial-rightinr">
              <Image
                src="/images/Arte_logo.png"
                alt="Shopify Plus Agency Case - Arte Antwerp"
                width={320}
                height={116}
              />
              <div className="n-caption">
                <p>
                  "Our decision to partner up with the NSL team has really
                  brought our online perfomance to the next level. We are
                  very pleased with how our collaboration is evolving and
                  looking forward to what we can achieve together in the
                  future."
                </p>
              </div>
              <p className="n-body">Bertony Da Silva</p>
              <span className="n-body">Founder at Arte Antwerp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### 6.6 Create `src/components/TextMediaSection.tsx`
**From HTML lines 741-780** (text media section):

```typescript
import Image from 'next/image'
import Link from 'next/link'

export default function TextMediaSection() {
  return (
    <section className="section-text-media section-id-template--26430796759383__b10263d9-eedc-4a4e-bc38-9db463307219 relative-sec">
      <div className="tb-mspace">
        <div className="container">
          <div className="tm-main grid half-grid">
            <div className="tm-content">
              <div className="tm-contentinr">
                <h2>
                  A story-led digital agency that leads next generation
                  brands to define the fashion e-commerce landscape.
                </h2>
                <div className="tm-content-btn">
                  <Link href="/pages/about-us" className="button button-dark-stone">
                    <span className="label">More about us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tm-media">
              <div className="tm-mediainr">
                <Image
                  src="/images/Mask_group2.webp"
                  alt=""
                  className="full-image d-none d-lg-block"
                  width={1401}
                  height={800}
                />
                <Image
                  src="/images/Mask_group2.webp"
                  alt=""
                  className="full-image d-block d-lg-none"
                  width={1401}
                  height={800}
                />
                <div className="tm-mediatext">
                  <p className="n-body">Fabienne Chapot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Step 7: Create Footer Component

#### 7.1 Create `src/components/Footer.tsx`
**From HTML lines 781-900** (footer section):

```typescript
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="section-footer section-id-footer">
      <style jsx>{`
        .section-id-footer {
          background: #262424;
        }
      `}</style>
      <div className="container">
        <div className="footer-main">
          <div className="footer-top">
            <div className="footer-topinr text-center">
              <h2 className="h1">We power the stories of fashion</h2>
              <Link href="/pages/contact" className="button button-glacier">
                <span className="label">let's talk</span>
              </Link>
            </div>
          </div>
          
          <div className="ft-mb-menu d-block d-lg-none mob_center">
            <ul className="ft-mb-menuinr">
              <li><Link href="/pages/services" className="s-body">Services</Link></li>
              <li><Link href="/pages/about-us" className="s-body">About us</Link></li>
              <li><Link href="/pages/shopify-plus-agency-amsterdam" className="s-body">Shopify Plus</Link></li>
              <li><Link href="/pages/case-studies" className="s-body">Cases</Link></li>
              <li><Link href="/pages/clients" className="s-body">Clients</Link></li>
              <li><Link href="/blogs/inside-the-industry" className="s-body">Articles</Link></li>
              <li><Link href="https://careers.notsellingliquid.com/" className="s-body">Careers</Link></li>
              <li><Link href="/pages/contact" className="s-body">Contact</Link></li>
              <li><Link href="https://www.linkedin.com/company/not-selling-liquid" className="s-body">LinkedIn</Link></li>
            </ul>
          </div>
          
          <div className="footer-center mob_center">
            <div className="ft-left">
              <div className="ft-leftinr">
                <div className="footer-logo">
                  <Link href="/" title="Not selling liquid">
                    {/* Copy footer logo SVG from HTML lines 820-830 */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="133" height="52" viewBox="0 0 133 52" fill="none">
                      {/* Copy SVG paths */}
                    </svg>
                  </Link>
                </div>
                <div className="d-none d-lg-block">
                  <div className="l-caption">
                    <p>
                      We build, manage and grow the presence of purpose-led
                      brands in the digital sphere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ft-center d-none d-lg-block">
              <div className="ftc-menupart">
                {/* Copy footer menu columns from HTML lines 835-875 */}
                <div className="footer-menu-column">
                  <p className="xs-body ftc-title">info</p>
                  <ul>
                    <li><Link href="/pages/about-us" className="xs-body">About us</Link></li>
                    <li><Link href="/pages/services" className="xs-body">Services</Link></li>
                    <li><Link href="/pages/clients" className="xs-body">Clients</Link></li>
                    <li><Link href="/pages/case-studies" className="xs-body">Case studies</Link></li>
                  </ul>
                </div>
                {/* Repeat for other columns */}
              </div>
            </div>
            
            <div className="ft-right">
              <div className="ft-rightinr">
                <p className="xs-body">General</p>
                <div className="n-caption enable_click">
                  <p>
                    <Link href="mailto:hello@notsellingliquid.com">hello@notsellingliquid.com</Link><br />
                    <Link href="tel:0202101913">+31 (0) 20 21 01 913</Link>
                  </p>
                </div>
              </div>
              <div className="ft-rightinr">
                <p className="xs-body">New Business</p>
                <div className="n-caption enable_click">
                  <p>
                    <Link href="mailto:new@notsellingliquid.com">new@notsellingliquid.com</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom mob_center">
            <div className="footer-bottominr">
              <p className="xxs-body d-none d-lg-block">
                Official Shopify Premier Partner &amp; Klaviyo Gold Master
              </p>
              <p className="xxs-body">© 2025 Not selling liquid</p>
              <p className="xxs-body d-none d-lg-block">
                Danzigerkade 15 A5, 1013 AP Amsterdam, Netherlands
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

## Phase 5: Update Main Page

### Step 8: Update `src/app/page.tsx`

Replace the entire content with:

```typescript
import LoadingAnimation from '@/components/LoadingAnimation'
import Header from '@/components/Header'
import IntroSection from '@/components/IntroSection'
import BannerSection from '@/components/BannerSection'
import CasesSection from '@/components/CasesSection'
import ShopifyPlusSection from '@/components/ShopifyPlusSection'
import TestimonialSection from '@/components/TestimonialSection'
import TextMediaSection from '@/components/TextMediaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <Header />
      <main id="MainContent" role="main" tabIndex={-1} style={{ paddingTop: '65px' }}>
        <IntroSection />
        <BannerSection />
        <CasesSection />
        <ShopifyPlusSection />
        <TestimonialSection />
        <TextMediaSection />
      </main>
      <Footer />
    </>
  )
}
```

## Phase 6: Add Required CSS Styles

### Step 9: Add Component-Specific Styles

#### 9.1 Add to `src/app/globals.css`
**From HTML lines 148-200** and various `<style>` tags throughout the document, add:

```css
/* Loading Animation Styles */
.snippet-loading-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #262424;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading-line {
  width: 200px;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
}

.loading-line span {
  display: block;
  height: 100%;
  background: white;
  transition: transform 0.1s ease;
}

.loading-logo {
  margin: 20px 0;
}

.loadin-percentage {
  color: white;
  font-size: 14px;
  margin-top: 20px;
}

/* Header Styles */
.section-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(38, 36, 36, 0.9);
  backdrop-filter: blur(10px);
}

.transparent-header {
  background: transparent;
}

.header-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 15px 0;
}

.header-logo svg {
  height: 36px;
  width: auto;
}

.snippet-header-nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.snippet-header-nav a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.link-arrow {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
}

.menu-burger {
  background: none;
  border: none;
  cursor: pointer;
}

/* Mobile Menu */
.snippet-menu-drawer {
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  background: #262424;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 999;
}

.snippet-menu-drawer.open {
  transform: translateY(0);
}

/* Section Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.grid {
  display: grid;
}

.half-grid {
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.grid-4-fcol {
  grid-column: span 4;
}

.grid-7-lcol {
  grid-column: span 7;
}

.grid-8-lcol {
  grid-column: span 8;
}

/* Typography */
.h1 {
  font-family: var(--font-heading-family);
  font-size: var(--desktop-h1-font);
  line-height: 1.1;
}

.n-body {
  font-family: var(--font-body-family);
  font-size: 14px;
  line-height: 1.4;
}

.s-body {
  font-family: var(--font-body-family);
  font-size: 12px;
  line-height: 1.4;
}

.xs-body {
  font-family: var(--font-body-family);
  font-size: 10px;
  line-height: 1.4;
}

.xxs-body {
  font-family: var(--font-body-family);
  font-size: 9px;
  line-height: 1.4;
}

.n-caption {
  font-family: var(--font-body-family);
  font-size: 16px;
  line-height: 1.5;
}

.l-caption {
  font-family: var(--font-body-family);
  font-size: 18px;
  line-height: 1.5;
}

.s-caption {
  font-family: var(--font-body-family);
  font-size: 14px;
  line-height: 1.4;
}

/* Button Styles */
.button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-family: var(--font-body-family);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-stone {
  background: var(--stone);
  color: var(--pure-cacao);
}

.button-dark-stone {
  background: var(--dark-stone);
  color: var(--pure-cacao);
}

.button-glacier {
  background: var(--glacier);
  color: var(--pure-cacao);
}

/* Responsive Design */
@media (max-width: 991px) {
  .d-lg-none {
    display: block !important;
  }
  
  .d-none.d-lg-block {
    display: none !important;
  }
  
  .d-block.d-lg-none {
    display: block !important;
  }
  
  .header-row {
    grid-template-columns: 1fr auto;
  }
  
  .header-center {
    display: none;
  }
}

@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }
  
  .d-none.d-lg-block {
    display: block !important;
  }
  
  .d-block.d-lg-none {
    display: none !important;
  }
}

/* Cases Section */
.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.cases-gridwrap {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.fullvideo {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.cases-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 20px;
}

.tag {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 10px;
}

/* Shopify Plus Section */
.sp-logo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  align-items: center;
  margin-top: 40px;
}

.sp-logoinr img {
  max-width: 100%;
  height: auto;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.sp-logoinr:hover img {
  opacity: 1;
}

/* Footer Styles */
.section-footer {
  background: var(--pure-cacao);
  color: white;
  padding: 60px 0 20px;
}

.footer-top {
  text-align: center;
  margin-bottom: 60px;
}

.footer-top h2 {
  color: white;
  margin-bottom: 30px;
}

.footer-center {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.ftc-menupart {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.footer-menu-column ul {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
}

.footer-menu-column li {
  margin-bottom: 8px;
}

.footer-menu-column a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-menu-column a:hover {
  color: white;
}

.ftc-title {
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.2);
  padding-top: 20px;
}

.footer-bottominr {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottominr p {
  margin: 0;
  color: rgba(255,255,255,0.6);
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.relative-sec {
  position: relative;
}

.full-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.enable_click {
  cursor: pointer;
}

.enable_click a {
  color: inherit;
  text-decoration: none;
}

.enable_click a:hover {
  text-decoration: underline;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-center {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .ftc-menupart {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-bottominr {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
```

## Phase 7: Asset Management

### Step 10: Download and Organize Assets

#### 10.1 Create asset directories:
```bash
mkdir -p public/images
mkdir -p public/videos
mkdir -p public/fonts
```

#### 10.2 Download images from HTML:
From the HTML, identify and download these images to `public/images/`:
- `53A584C0-4882-460F-885B-0134EAB6E6BD-m.jpg` (line 408)
- `Bram_s_Fruit_HS25_30-10-241072_copy.jpg` (line 410)
- `Mask_group2.webp` (lines 770, 775)
- All logo images referenced in the Shopify Plus section
- `Arte_logo.png` for testimonial section

#### 10.3 Download videos:
From the HTML, download these videos to `public/videos/`:
- `d4d832f6fceb43a989e0c497805ddf2d.mp4` (lines 456, 463)
- Other video files referenced in cases section

#### 10.4 Download fonts:
Download font files to `public/fonts/`:
- `Aeonik-Regular.woff2`
- `PPEditorialOld-Light.woff2`

## Phase 8: Scripts and Analytics (Optional)

### Step 11: Add Analytics Scripts

#### 11.1 Create `src/components/Analytics.tsx`:
**From HTML lines 43-81** (analytics scripts):

```typescript
'use client'
import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '386004036593066');
          fbq('track', 'PageView');
        `}
      </Script>
      
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EPVZR6W3SB" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EPVZR6W3SB');
        `}
      </Script>
      
      {/* LinkedIn Tracking */}
      <Script id="linkedin-tracking" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "2111228";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      
      {/* Hotjar */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6381770,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  )
}
```

#### 11.2 Add Analytics to layout.tsx:
Add `<Analytics />` component to the body of your layout.

## Phase 9: Final Steps

### Step 12: Testing and Refinement

1. **Test all components** individually
2. **Check responsive design** on different screen sizes
3. **Verify all links** are working correctly
4. **Test loading animation** functionality
5. **Ensure videos** are playing correctly
6. **Check font loading** and fallbacks
7. **Test mobile menu** functionality
8. **Verify analytics** are firing correctly

### Step 13: Performance Optimization

1. **Optimize images** using Next.js Image component
2. **Lazy load** non-critical components
3. **Minimize CSS** by removing unused styles
4. **Test Core Web Vitals** and optimize accordingly

## Completion Checklist

- [ ] Layout.tsx updated with metadata
- [ ] Fonts configured and loaded
- [ ] All components created
- [ ] Global CSS updated
- [ ] Assets downloaded and organized
- [ ] Page.tsx updated with component imports
- [ ] Analytics scripts added (optional)
- [ ] Mobile responsiveness tested
- [ ] All functionality working
- [ ] Performance optimized

This migration guide provides exact line references and copy-paste instructions to transform your HTML document into a fully functional Next.js application while maintaining all the original functionality and design.