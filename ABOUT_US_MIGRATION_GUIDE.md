# About Us Page Migration Guide

## Overview
This guide provides step-by-step instructions to migrate the About Us HTML page to Next.js. The page contains several distinct sections that should be broken down into reusable components.

## Current Project Structure Analysis

### What's Already Migrated:
- ✅ Layout structure (Header, Footer, LoadingAnimation)
- ✅ Landing page with component-based architecture
- ✅ Services page with main section component
- ✅ Header navigation with breadcrumb support
- ✅ Global styles and scripts setup

### What Needs to Be Created:
- 🔄 About Us page route (`src/app/about-us/page.tsx`)
- 🔄 About Us specific components
- 🔄 Update Header component for About Us breadcrumb

## HTML Document Analysis

The About Us HTML contains these main sections:

1. **Head Section** (Lines 1-300): Meta tags, scripts, styles
2. **About Intro Section** (Lines 301-350): Hero section with title and description
3. **Banner Section** (Lines 351-380): Empty banner wrapper
4. **About Steps Section** (Lines 381-500+): Values section with image and text blocks

## Migration Steps

### Step 1: Create About Us Page Route

**File to create:** `src/app/about-us/page.tsx`

```typescript
import type { Metadata } from "next";
import AboutIntroSection from '../../components/Routes/AboutUs/AboutIntroSection'
import AboutBannerSection from '../../components/Routes/AboutUs/AboutBannerSection'
import AboutStepsSection from '../../components/Routes/AboutUs/AboutStepsSection'

export const metadata: Metadata = {
  title: "About Us – Not selling liquid",
  description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
};

export default function AboutUsPage() {
  return (
    <div className="template-page">
      <AboutIntroSection />
      <AboutBannerSection />
      <AboutStepsSection />
    </div>
  )
}
```

### Step 2: Update Header Component

**File to update:** `src/components/Layout/Header.tsx`

**Lines to modify:** Around line 15-20 in the `getCurrentPage()` function

**Add this condition:**
```typescript
if (pathname === '/about-us') return 'about-us'
```

**Lines to modify:** Around line 45 in the navigation menu

**Change this line:**
```typescript
<Link href="/pages/about-us">About us</Link>
```

**To:**
```typescript
<Link href="/about-us" className={currentPage === 'about-us' ? 'active' : ''}>About us</Link>
```

**Lines to modify:** Around line 65 in the breadcrumb section

**Update the breadcrumb logic to handle about-us:**
```typescript
{currentPage !== 'home' && (
  <>
    <span>/</span>
    <span className="capitalize">
      {currentPage === 'cases' ? 'Case Studies' : 
       currentPage === 'clients' ? 'Clients' : 
       currentPage === 'articles' ? 'Blog' : 
       currentPage === 'contact' ? 'Contact' : 
       currentPage === 'about-us' ? 'About Us' : currentPage}
    </span>
  </>
)}
```

**Lines to modify:** Around line 85 in mobile navigation

**Change:**
```typescript
<li><Link href="/pages/about-us" className="mob_link">About us</Link></li>
```

**To:**
```typescript
<li><Link href="/about-us" className={`mob_link ${currentPage === 'about-us' ? 'active' : ''}`}>About us</Link></li>
```

### Step 3: Create About Us Components Directory

**Create directory:** `src/components/Routes/AboutUs/`

### Step 4: Create AboutIntroSection Component

**File to create:** `src/components/Routes/AboutUs/AboutIntroSection.tsx`

**Copy from HTML lines 301-350 (the about_intro section):**

```typescript
import Link from 'next/link'

export default function AboutIntroSection() {
  return (
    <div id="shopify-section-template--26430796890455__e888cf0f-1c90-47ca-a12b-c0a1b957457e"
         className="shopify-section about_intro" 
         style={{ marginTop: '-67.775px' }}>
      <section className="section-about-intro section-id-template--26430796890455__e888cf0f-1c90-47ca-a12b-c0a1b957457e relative-sec">
        <style jsx>{`
          .section-id-template--26430796890455__e888cf0f-1c90-47ca-a12b-c0a1b957457e {
            background: #262424;
          }
        `}</style>
        <div className="container">
          <div className="about-intro grid">
            <div className="ai-left grid-6-fcol">
              <div className="ai-leftinr">
                <p className="n-body">About us</p>
                <h2>E-commerce is our language, fashion is our culture.</h2>
              </div>
            </div>
            <div className="ai-right grid-4-lcol">
              <div className="ai-rightinr">
                <div className="s-body d-none d-lg-block">
                  We've taken things we're passionate about - fashion, sneakers and all things digital - and made it our craft.
                </div>
                <div className="s-caption">
                  <p>We're creating a space where e-commerce expertise is combined with an intrinsic fashion mindset to grow next generation brands in the digital landscape.</p>
                </div>
                <Link href="/pages/manifesto" className="link-arrow">
                  <span className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="initial"></path>
                    </svg>
                  </span>
                  <span className="label">Read full manifesto</span>
                  <span className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="initial"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="intro_overly" style={{ opacity: 0 }}>&nbsp;</div>
        </div>
      </section>
    </div>
  )
}
```

### Step 5: Create AboutBannerSection Component

**File to create:** `src/components/Routes/AboutUs/AboutBannerSection.tsx`

**Copy from HTML lines 351-380 (the main_banner section):**

```typescript
export default function AboutBannerSection() {
  return (
    <div id="shopify-section-template--26430796890455__809c3410-f45b-4408-a2c4-a969ad86ae98"
         className="shopify-section main_banner">
      <section className="section-banner section-id-template--26430796890455__809c3410-f45b-4408-a2c4-a969ad86ae98 relative-sec">
        <style jsx>{`
          .section-id-template--26430796890455__809c3410-f45b-4408-a2c4-a969ad86ae98 .mainbnr_wrap img,
          .section-id-template--26430796890455__809c3410-f45b-4408-a2c4-a969ad86ae98 .mainbnr_wrap video {
            border-radius: 8px 8px 8px 8px;
          }

          .section-id-template--26430796890455__809c3410-f45b-4408-a2c4-a969ad86ae98 {
            padding-top: 10px;
            padding-bottom: 0px;
            margin-top: -15px;
            border-radius: 15px 15px 0px 0px;
            background: #f7f7f6;
          }

          @media(min-width:992px) {
            .section-id-template--26430796890455__809c3410-f45b-4408-a2c4-a969ad86ae98 {
              padding-top: 20px;
              padding-bottom: 0px;
            }
          }
        `}</style>
        <div className="container">
          <div className="banner-wrap"></div>
        </div>
      </section>
    </div>
  )
}
```

### Step 6: Create AboutStepsSection Component

**File to create:** `src/components/Routes/AboutUs/AboutStepsSection.tsx`

**Copy from HTML lines 381-500+ (the about-steps section):**

```typescript
import Image from 'next/image'

export default function AboutStepsSection() {
  return (
    <div id="shopify-section-template--26430796890455__06691c3a-e084-4fa5-b1c6-05671a57f694"
         className="shopify-section">
      <section className="section-about-steps section-id-template--26430796890455__06691c3a-e084-4fa5-b1c6-05671a57f694 relative-sec">
        <style jsx>{`
          .section-id-template--26430796890455__06691c3a-e084-4fa5-b1c6-05671a57f694 {
            background: #f7f7f6;
          }
        `}</style>
        <div className="container">
          <div className="about-steps grid">
            <div className="as-left grid-6-fcol">
              <div className="as-leftinr">
                <h3 className="d-none d-xl-block">
                  Values are a guiding set of principles that keep us all grounded. Within our team and wider network, we maintain this balance for positive and peaceful collaboration.
                </h3>
                <div className="as-media">
                  <Image
                    src="//www.notsellingliquid.com/cdn/shop/files/INTRODUCING_91f45b7a-88c0-4dc3-be39-dd574d0b92a0.webp?v=1746016032"
                    alt=""
                    loading="lazy"
                    className="d-none d-lg-block"
                    width={2049}
                    height={1534}
                  />
                  <Image
                    src="//www.notsellingliquid.com/cdn/shop/files/INTRODUCING_91f45b7a-88c0-4dc3-be39-dd574d0b92a0.webp?v=1746016032"
                    alt=""
                    loading="lazy"
                    className="d-block d-lg-none"
                    width={2049}
                    height={1534}
                  />
                </div>
              </div>
            </div>
            <div className="as-right gridr-6-lcol">
              <h3 className="d-block d-xl-none">
                Values are a guiding set of principles that keep us all grounded. Within our team and wider network, we maintain this balance for positive and peaceful collaboration.
              </h3>
              <div className="as-rightinr mbscroll-hide">
                <div className="as-text block-id-2e8a48f2-c604-463e-9d9f-e4c753d33180">
                  <span className="xl-body">01</span>
                  <p className="m-body">Honesty &amp; Transparency</p>
                  <div className="s-caption">
                    <p>Numbers don't lie, and neither do we. We call things by their name and we don't sugarcoat. We believe honesty and transparency provide fertile ground for growth and prosperity.<br /><br />Only with all the knowledge, the good, the bad (and the ugly), can we empower the brands we work with through intentional solutions.</p>
                  </div>
                </div>
                {/* Add more value blocks here - continue copying from HTML */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

### Step 7: Add CSS Files

**Create CSS file:** `src/components/Routes/AboutUs/about-intro.css`
**Create CSS file:** `src/components/Routes/AboutUs/about-steps.css`

Copy the CSS from the original HTML `<link>` tags:
- `about-intro.css` from line ~302
- `about-steps.css` from line ~382

### Step 8: Import CSS in Components

Add these imports to the respective components:

**In AboutIntroSection.tsx:**
```typescript
import './about-intro.css'
```

**In AboutStepsSection.tsx:**
```typescript
import './about-steps.css'
```

## Important Notes

### HTML Structure Preservation
- Keep all `className` attributes exactly as they are
- Preserve all `id` attributes for styling compatibility
- Maintain the grid system classes (`grid-6-fcol`, `gridr-6-lcol`, etc.)

### Image Optimization
- Replace `<img>` tags with Next.js `Image` component
- Keep original `src` URLs for now
- Add proper `width` and `height` attributes
- Use `loading="lazy"` for performance

### Styling Approach
- Use `styled-jsx` for component-specific styles (as shown in examples)
- Import external CSS files for complex styling
- Preserve all original CSS class names

### Link Conversion
- Replace `<a href="">` with Next.js `Link` component
- Update internal links to use Next.js routing
- Keep external links as regular `<a>` tags with `target="_blank"`

### Missing Sections
The HTML document appears to be truncated. You may need to:
1. Check for additional value blocks in the AboutStepsSection
2. Look for any footer sections specific to About Us
3. Add any missing interactive elements or animations

### Testing Checklist
After migration:
- [ ] Page loads without errors
- [ ] Navigation breadcrumb shows "About Us"
- [ ] Active state works in navigation
- [ ] Mobile menu works correctly
- [ ] All images load properly
- [ ] Responsive design works on all screen sizes
- [ ] Links work correctly
- [ ] Styling matches original design

## File Structure After Migration

```
src/
├── app/
│   ├── about-us/
│   │   └── page.tsx
├── components/
│   ├── Layout/
│   │   └── Header.tsx (updated)
│   └── Routes/
│       └── AboutUs/
│           ├── AboutIntroSection.tsx
│           ├── AboutBannerSection.tsx
│           ├── AboutStepsSection.tsx
│           ├── about-intro.css
│           └── about-steps.css
```

This migration maintains the component-based architecture established in the project while preserving the original design and functionality.