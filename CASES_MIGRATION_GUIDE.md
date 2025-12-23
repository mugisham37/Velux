# Cases Page Migration Guide

## Overview
This guide provides detailed instructions for migrating the `htmls/cases.html` file to the Next.js project structure. The cases page contains a case studies section with video backgrounds and case study cards.

## Analysis Summary

### What's Already Migrated:
- ✅ Layout structure (Header, Footer, LoadingAnimation)
- ✅ Basic page routing structure
- ✅ Meta tags and SEO setup in layout
- ✅ Global styles and scripts
- ✅ Header navigation with active states

### What Needs to be Migrated:
- 🔄 Cases page-specific metadata
- 🔄 Case studies main section component
- 🔄 Case studies CSS styles
- 🔄 Video components with autoplay functionality
- 🔄 Case study cards with content

## Migration Steps

### Step 1: Create the Cases Page Route

**File to create:** `src/app/cases/page.tsx`

```typescript
import type { Metadata } from "next";
import CaseStudiesMainSection from '../../components/Routes/Cases/CaseStudiesMainSection'

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
      <CaseStudiesMainSection />
    </div>
  )
}
```

### Step 2: Update Header Component for Cases Page

**File to update:** `src/components/Layout/Header.tsx`

**Lines to modify:** Update the navigation link for cases to point to `/cases` instead of `/pages/case-studies`

**Change this line:**
```typescript
<Link href="/pages/case-studies">Cases</Link>
```

**To:**
```typescript
<Link href="/cases" className={currentPage === 'cases' ? 'active' : ''}>Cases</Link>
```

**Also update the mobile navigation:**
```typescript
<li><Link href="/cases" className={`mob_link ${currentPage === 'cases' ? 'active' : ''}`}>Cases</Link></li>
```

**And update the breadcrumb logic to handle 'cases' as 'Case Studies':**
```typescript
{currentPage !== 'home' && (
  <>
    <span>/</span>
    <span className="capitalize">
      {currentPage === 'cases' ? 'Case Studies' : currentPage}
    </span>
  </>
)}
```

### Step 3: Create the Main Cases Component Directory

**Directory to create:** `src/components/Routes/Cases/`

### Step 4: Create the Main Case Studies Section Component

**File to create:** `src/components/Routes/Cases/CaseStudiesMainSection.tsx`

**Content to copy from HTML (lines 1090-1200 approximately):**

```typescript
'use client'
import CaseStudyCard from './CaseStudyCard'

export default function CaseStudiesMainSection() {
  return (
    <section className="section-case-studies section-id-template--26430797545815__ae9d7d70-dbe0-4046-9916-e0fbe50d8c2e relative-sec">
      <style jsx>{`
        .section-id-template--26430797545815__ae9d7d70-dbe0-4046-9916-e0fbe50d8c2e {
          background: #c0bbae;
        }
        .section-id-template--26430797545815__ae9d7d70-dbe0-4046-9916-e0fbe50d8c2e .case-studies {
          padding-top: 180px;
          padding-bottom: 40px;
        }
        @media(min-width:992px) {
          .section-id-template--26430797545815__ae9d7d70-dbe0-4046-9916-e0fbe50d8c2e .case-studies {
            padding-top: 200px;
            padding-bottom: 40px;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="case-studies">
          <div className="cs-header grid">
            <div className="grid-6-fcol">
              <h3>Together with our clients, we're changing the way to do e-commerce.</h3>
            </div>
            <div className="grid-4-lcol">
              <p className="s-caption">
                Enhancing each other, positively influencing one another,
                uncovering new possible territories in the digital space and in the minds of
                their communities.
              </p>
            </div>
          </div>
          
          <div className="cases-grid">
            <CaseStudyCard
              type="full-width"
              videoDesktop="//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0"
              videoMobile="//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0"
              poster="//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207"
              tags={["Build", "Manage", "Grow"]}
              title="Fabienne Chapot"
              description="A new digital home for Fabienne Chapot: Artfully balancing creativity with commercial goals"
              link="/pages/fabienne-chapot-shopify-new-site"
            />
            
            <CaseStudyCard
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

### Step 5: Create the Case Study Card Component

**File to create:** `src/components/Routes/Cases/CaseStudyCard.tsx`

**Content to extract from HTML (lines 1201-1350 approximately):**

```typescript
'use client'
import Link from 'next/link'

interface CaseStudyCardProps {
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

export default function CaseStudyCard({
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
}: CaseStudyCardProps) {
  const widthClass = type === 'full-width' ? 'full-width' : 'half-width';
  
  return (
    <div className={`cases-gridinr block-id-case_${Math.random().toString(36).substr(2, 9)} ${widthClass}`}>
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
        
        <div className="cases-content banner-content">
          <div className="cases-coninr">
            <div className="cases-btag">
              {tags.map((tag, index) => (
                <p key={index} className="xs-body tag">{tag}</p>
              ))}
            </div>
            
            <div className="cases-logo d-none d-lg-block text-center"></div>
            
            <div className="cases-btext">
              <div className="cases-btextinr">
                <p className="s-body">{title}</p>
                <div className="s-caption">
                  <p>{description}</p>
                </div>
              </div>
              
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

### Step 6: Add Case Studies CSS Styles

**File to create:** `src/app/cases/cases.css`

**Content to copy from HTML (lines 1050-1089 - the CSS link reference):**

You'll need to extract the CSS from the original Shopify CSS file:
`//www.notsellingliquid.com/cdn/shop/t/39/assets/case-studies.css?v=106501624443217175951758090047`

**Then import it in the page:**
```typescript
import './cases.css'
```

### Step 7: Update Layout to Handle Cases Page

**File to update:** `src/app/layout.tsx`

**Add body class handling for cases page:**

```typescript
// Add this to handle page-specific body classes
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* existing head content */}
      </head>
      <body className="antialiased sticky-header">
        {/* existing body content */}
      </body>
    </html>
  );
}
```

### Step 8: Update Header Component Usage

**File to update:** `src/app/cases/page.tsx`

**Import and use Header with current page:**

```typescript
import Header from '../../components/Layout/Header'

// In the component, pass the current page
<Header currentPage="cases" />
```

**But since Header is already in layout, you just need to detect the current page in the Header component itself using usePathname:**

**File to update:** `src/components/Layout/Header.tsx`

```typescript
'use client'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const currentPage = pathname === '/' ? 'home' : pathname.slice(1)
  
  // rest of component logic
}
```

## Additional Notes

### Video Handling
- The original HTML uses autoplay videos with multiple sources
- Ensure videos are optimized for web delivery
- Consider adding loading states for videos
- Test video playback across different browsers

### Responsive Design
- The layout uses CSS Grid and Flexbox
- Ensure mobile responsiveness is maintained
- Test on various screen sizes

### Performance Considerations
- Videos should be lazy-loaded when possible
- Consider using Next.js Image component for poster images
- Implement proper SEO meta tags

### CSS Classes to Preserve
Key CSS classes from the original that need to be maintained:
- `.section-case-studies`
- `.case-studies`
- `.cs-header`
- `.cases-grid`
- `.cases-gridinr`
- `.cases-gridwrap`
- `.fullvideo`
- `.cases-content`
- `.cases-btag`
- `.tag`
- `.cases-btext`
- `.cases-bbtn`
- `.link-arrow`

## Testing Checklist

After migration, test:
- [ ] Page loads correctly at `/cases`
- [ ] Videos autoplay and loop
- [ ] Mobile responsive design works
- [ ] Navigation highlights "Cases" as active
- [ ] Breadcrumb shows "Case Studies"
- [ ] Links to individual case studies work
- [ ] SEO meta tags are correct
- [ ] CSS animations and transitions work
- [ ] Mobile menu functions properly

## Files Created/Modified Summary

**New Files:**
- `src/app/cases/page.tsx`
- `src/app/cases/cases.css`
- `src/components/Routes/Cases/CaseStudiesMainSection.tsx`
- `src/components/Routes/Cases/CaseStudyCard.tsx`

**Modified Files:**
- `src/components/Layout/Header.tsx` (navigation links and active states)

This completes the migration of the cases page from the HTML document to the Next.js structure while maintaining all functionality and styling.