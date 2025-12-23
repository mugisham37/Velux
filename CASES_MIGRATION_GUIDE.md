# Cases Page Migration Guide

## Overview
This guide provides step-by-step instructions to migrate the cases.html file to a Next.js page structure. The cases page contains case studies with video backgrounds and interactive elements.

## Analysis of HTML Structure

### 1. Page Metadata (Lines 1-150)
The HTML head contains:
- Meta tags for SEO and social media
- Facebook Pixel tracking
- LinkedIn tracking
- Hotjar tracking
- Apollo tracking
- Various Shopify-specific scripts
- CSS font definitions and variables

### 2. Body Structure (Lines 151-end)
The body contains:
- Loading animation (already migrated)
- Header (already migrated)
- Main content section with case studies
- Various tracking scripts

## Migration Steps

### Step 1: Create the Cases Page Route
Create a new file: `src/app/cases/page.tsx`

```typescript
import type { Metadata } from "next";
import CasesMainSection from '../../components/Routes/Cases/CasesMainSection'

export const metadata: Metadata = {
  title: "Case Studies – Not selling liquid",
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
};

export default function CasesPage() {
  return (
    <div className="template-page">
      <CasesMainSection />
    </div>
  )
}
```

### Step 2: Create the Main Cases Component
Create a new file: `src/components/Routes/Cases/CasesMainSection.tsx`

Copy the following sections from the HTML:

#### Section 1: Main Container and Styling (Lines 1058-1080)
```typescript
'use client'

export default function CasesMainSection() {
  return (
    <section 
      className="section-case-studies section-id-template--26430797545815__ae9d7d70-dbe0-4046-9916-e0fbe50d8c2e relative-sec"
      style={{ background: '#c0bbae' }}
    >
      <style jsx>{`
        .section-case-studies {
          background: #c0bbae;
        }
        .case-studies {
          padding-top: 180px;
          padding-bottom: 40px;
        }
        @media(min-width:992px) {
          .case-studies {
            padding-top: 200px;
            padding-bottom: 40px;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="case-studies">
          {/* Header Section */}
          <div className="cs-header grid">
            <div className="grid-6-fcol">
              <h3>Together with our clients, we're changing the way to do e-commerce.</h3>
            </div>
            <div className="grid-4-lcol">
              <p className="s-caption">
                Enhancing each other, positively influencing one another, uncovering new possible territories in the digital space and in the minds of their communities.
              </p>
            </div>
          </div>
          
          {/* Cases Grid */}
          <div className="cases-grid">
            {/* Case 1: Fabienne Chapot - Full Width */}
            <CaseItem 
              type="full-width"
              videoDesktop="//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0"
              videoMobile="//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0"
              poster="//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207"
              tags={["Build", "Manage", "Grow"]}
              title="Fabienne Chapot"
              description="A new digital home for Fabienne Chapot: Artfully balancing creativity with commercial goals"
              link="/pages/fabienne-chapot-shopify-new-site"
            />
            
            {/* Case 2: Hang Eleven - Half Width */}
            <CaseItem 
              type="half-width"
              videoDesktop="//www.notsellingliquid.com/cdn/shop/videos/c/vp/c511976946554306bd997337c1ab7992/c511976946554306bd997337c1ab7992.HD-1080p-7.2Mbps-35760312.mp4?v=0"
              videoMobile="//www.notsellingliquid.com/cdn/shop/videos/c/vp/1b7fc4accae94cf79b2598c5b2b37a20/1b7fc4accae94cf79b2598c5b2b37a20.HD-1080p-7.2Mbps-35760313.mp4?v=0"
              posterDesktop="//www.notsellingliquid.com/cdn/shop/files/preview_images/c511976946554306bd997337c1ab7992.thumbnail.0000000000_small.jpg?v=1727946458"
              posterMobile="//www.notsellingliquid.com/cdn/shop/files/preview_images/1b7fc4accae94cf79b2598c5b2b37a20.thumbnail.0000000000_small.jpg?v=1727946455"
              tags={["Build", "Grow"]}
              title="Hang Eleven"
              description="Launching a refreshed webshop for Hang Eleven to grow internationally"
              link="/pages/hang-eleven-webshop-international-growth"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Step 3: Create the CaseItem Component
Create a new file: `src/components/Routes/Cases/CaseItem.tsx`

```typescript
'use client'
import Link from 'next/link'

interface CaseItemProps {
  type: 'full-width' | 'half-width';
  videoDesktop: string;
  videoMobile?: string;
  poster?: string;
  posterDesktop?: string;
  posterMobile?: string;
  tags: string[];
  title: string;
  description: string;
  link: string;
}

export default function CaseItem({
  type,
  videoDesktop,
  videoMobile,
  poster,
  posterDesktop,
  posterMobile,
  tags,
  title,
  description,
  link
}: CaseItemProps) {
  const containerClass = type === 'full-width' ? 'full-width' : 'half-width';
  
  return (
    <div className={`cases-gridinr block-id-case_${Math.random().toString(36).substr(2, 9)} ${containerClass}`}>
      <div className="cases-gridwrap">
        {/* Desktop Video */}
        <video 
          playsInline 
          autoPlay 
          muted 
          loop 
          preload="metadata"
          className="fullvideo d-none d-lg-block"
          poster={posterDesktop || poster}
        >
          <source src={videoDesktop} type="video/mp4" />
          <img src={posterDesktop || poster} alt="" />
        </video>
        
        {/* Mobile Video */}
        <video 
          playsInline 
          autoPlay 
          muted 
          loop 
          preload="metadata"
          className="fullvideo d-block d-lg-none"
          poster={posterMobile || poster}
        >
          <source src={videoMobile || videoDesktop} type="video/mp4" />
          <img src={posterMobile || poster} alt="" />
        </video>
        
        {/* Content Overlay */}
        <div className="cases-content banner-content">
          <div className="cases-coninr">
            {/* Tags */}
            <div className="cases-btag">
              {tags.map((tag, index) => (
                <p key={index} className="xs-body tag">{tag}</p>
              ))}
            </div>
            
            {/* Logo placeholder */}
            <div className="cases-logo d-none d-lg-block text-center"></div>
            
            {/* Text Content */}
            <div className="cases-btext">
              <div className="cases-btextinr">
                <p className="s-body">{title}</p>
                <div className="s-caption">
                  <p>{description}</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="cases-bbtn desk_right">
                <Link href={link} className="cases-bbtninr">
                  <div className="link-arrow">
                    <span className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="initial"></path>
                      </svg>
                    </span>
                    <span className="label">view full case</span>
                    <span className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="initial"></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### Step 4: Update Header Component
In `src/components/Layout/Header.tsx`, update the Cases link to use the new route:

**Line to change (around line 45):**
```typescript
// Change from:
<Link href="/pages/case-studies">Cases</Link>

// To:
<Link href="/cases" className={currentPage === 'cases' ? 'active' : ''}>Cases</Link>
```

**Also update the mobile menu (around line 85):**
```typescript
// Change from:
<li><Link href="/pages/case-studies" className="mob_link">Cases</Link></li>

// To:
<li><Link href="/cases" className={`mob_link ${currentPage === 'cases' ? 'active' : ''}`}>Cases</Link></li>
```

### Step 5: Update Layout to Handle Cases Page
In `src/app/layout.tsx`, update the body className to handle the cases page:

**Around line 50, update the body tag:**
```typescript
// Add conditional className for cases page
<body className={`antialiased ${pathname === '/cases' ? 'sticky-header case-studies' : ''}`}>
```

You'll need to import usePathname:
```typescript
'use client'
import { usePathname } from 'next/navigation'

// Then inside the component:
const pathname = usePathname()
```

### Step 6: Create CSS File for Cases
Create a new file: `src/app/cases/cases.css`

Copy the CSS from the HTML file (lines 1058-1080 and any additional case-studies specific styles from the original CSS files referenced in the HTML).

### Step 7: Import CSS in Cases Page
In `src/app/cases/page.tsx`, add:
```typescript
import './cases.css'
```

## Additional Notes

### Video Handling
- The original HTML uses autoplay videos with multiple sources
- Ensure video files are accessible and consider adding loading states
- Videos should be optimized for web delivery

### Responsive Design
- The layout uses different videos for desktop and mobile
- Ensure proper responsive behavior with CSS Grid
- Test on various screen sizes

### SEO Considerations
- The metadata is properly configured for social media sharing
- Canonical URLs are set correctly
- Open Graph and Twitter Card data is included

### Performance
- Consider lazy loading for videos not in viewport
- Optimize video file sizes
- Add proper error handling for failed video loads

## Files to Create/Modify

### New Files:
1. `src/app/cases/page.tsx`
2. `src/app/cases/cases.css`
3. `src/components/Routes/Cases/CasesMainSection.tsx`
4. `src/components/Routes/Cases/CaseItem.tsx`

### Files to Modify:
1. `src/components/Layout/Header.tsx` - Update navigation links
2. `src/app/layout.tsx` - Add conditional body classes

## Testing Checklist
- [ ] Page loads correctly at `/cases`
- [ ] Videos autoplay and loop properly
- [ ] Responsive design works on mobile and desktop
- [ ] Navigation highlights "Cases" when on the page
- [ ] All links work correctly
- [ ] SEO metadata is properly set
- [ ] Loading animation works
- [ ] Header breadcrumb shows correct path

This migration maintains the original functionality while adapting it to Next.js patterns and best practices.