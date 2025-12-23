# Cases Page Migration Guide

## Overview
This guide provides step-by-step instructions to migrate the Cases HTML page to Next.js. The page contains a case studies section with video backgrounds and case study cards.

## Analysis of HTML Structure

### 1. Page Structure
- **Main Container**: `<main id="MainContent">` with `template-page` wrapper
- **Section**: Case studies section with background styling
- **Content**: Header text + cases grid with video backgrounds

### 2. Key Components Identified
1. **Cases Header Section** - Title and description
2. **Cases Grid** - Container for case study items
3. **Case Study Cards** - Individual case items with videos and content

### 3. Existing Components Status
✅ **Already Implemented:**
- Layout structure (Header, Footer, LoadingAnimation)
- Main page wrapper structure
- Navigation with active states for cases route

❌ **Need to Create:**
- Cases page component
- Cases main section component
- Individual case study card components

## Migration Steps

### Step 1: Create the Cases Page Route
**File**: `src/app/cases/page.tsx`

```typescript
import type { Metadata } from "next";
import CasesMainSection from '../../components/Routes/Cases/CasesMainSection'

export const metadata: Metadata = {
  title: "Case Studies – Not selling liquid",
  description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
};

export default function CasesPage() {
  return (
    <>
      <div className="template-page">
        <CasesMainSection />
      </div>
    </>
  )
}
```

### Step 2: Create Cases Components Directory
Create directory: `src/components/Routes/Cases/`

### Step 3: Create Main Cases Section Component
**File**: `src/components/Routes/Cases/CasesMainSection.tsx`

**Copy from HTML lines 1-50 (section opening and styling):**
```html
<!-- Copy from line 1 to line 50 of the main section -->
<section class="section-case-studies section-id-template--26430797545815__ae9d7d70-dbe0-4046-9916-e0fbe50d8c2e relative-sec">
    <style>
        .section-id-template--26430797545815__ae9d7d70-dbe0-4046-9916-e0fbe50d8c2e {
            background: #c0bbae;
        }
        /* ... rest of styles ... */
    </style>
```

**Transform to React component structure:**
```typescript
'use client'
import CaseStudyCard from './CaseStudyCard'

export default function CasesMainSection() {
  return (
    <section 
      className="section-case-studies relative-sec"
      style={{ 
        background: '#c0bbae',
        marginTop: '-65.55px'
      }}
    >
      {/* Add internal styles as CSS module or styled-jsx */}
      <div className="container">
        <div className="case-studies" style={{ paddingTop: '200px', paddingBottom: '40px' }}>
          {/* Header section */}
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
          
          {/* Cases Grid */}
          <div className="cases-grid">
            {/* Case study cards will go here */}
          </div>
        </div>
      </div>
    </section>
  )
}
```

### Step 4: Create Case Study Card Component
**File**: `src/components/Routes/Cases/CaseStudyCard.tsx`

**Copy from HTML lines 51-150 (first case study card):**
```html
<div class="cases-gridinr block-id-case_mxteQP full-width">
    <div class="cases-gridwrap">
        <video playsinline="true" autoplay="autoplay" muted="muted" loop="loop" preload="metadata"
            class="fullvideo d-none d-lg-block"
            poster="//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207">
            <source src="//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0" type="video/mp4">
        </video>
        <!-- Mobile video -->
        <video playsinline="true" autoplay="autoplay" muted="muted" loop="loop" preload="metadata" 
            class="fullvideo d-block d-lg-none"
            poster="//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207">
            <source src="//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0" type="video/mp4">
        </video>
        
        <div class="cases-content banner-content">
            <div class="cases-coninr">
                <div class="cases-btag">
                    <p class="xs-body tag">Build</p>
                    <p class="xs-body tag">Manage</p>
                    <p class="xs-body tag">Grow</p>
                </div>
                <div class="cases-logo d-none d-lg-block text-center"></div>
                <div class="cases-btext">
                    <div class="cases-btextinr">
                        <p class="s-body">Fabienne Chapot</p>
                        <div class="s-caption">
                            <p>A new digital home for Fabienne Chapot: Artfully balancing creativity with commercial goals</p>
                        </div>
                    </div>
                    <div class="cases-bbtn desk_right">
                        <a href="/pages/fabienne-chapot-shopify-new-site" class="cases-bbtninr">
                            <div class="link-arrow">
                                <!-- Arrow SVG content -->
                                <span class="label">view full case</span>
                                <!-- Arrow SVG content -->
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Transform to React component:**
```typescript
import Link from 'next/link'

interface CaseStudyCardProps {
  id: string
  title: string
  description: string
  tags: string[]
  link: string
  desktopVideoSrc: string
  mobileVideoSrc: string
  posterImage: string
  width: 'full-width' | 'half-width'
}

export default function CaseStudyCard({
  id,
  title,
  description,
  tags,
  link,
  desktopVideoSrc,
  mobileVideoSrc,
  posterImage,
  width
}: CaseStudyCardProps) {
  return (
    <div className={`cases-gridinr block-id-${id} ${width}`}>
      <div className="cases-gridwrap">
        {/* Desktop Video */}
        <video 
          playsInline 
          autoPlay 
          muted 
          loop 
          preload="metadata"
          className="fullvideo d-none d-lg-block"
          poster={posterImage}
        >
          <source src={desktopVideoSrc} type="video/mp4" />
          <img src={posterImage} alt="" />
        </video>
        
        {/* Mobile Video */}
        <video 
          playsInline 
          autoPlay 
          muted 
          loop 
          preload="metadata"
          className="fullvideo d-block d-lg-none"
          poster={posterImage}
        >
          <source src={mobileVideoSrc} type="video/mp4" />
          <img src={posterImage} alt="" />
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

### Step 5: Update CasesMainSection with Case Data
**Add to `src/components/Routes/Cases/CasesMainSection.tsx`:**

```typescript
const caseStudiesData = [
  {
    id: "case_mxteQP",
    title: "Fabienne Chapot",
    description: "A new digital home for Fabienne Chapot: Artfully balancing creativity with commercial goals",
    tags: ["Build", "Manage", "Grow"],
    link: "/pages/fabienne-chapot-shopify-new-site",
    desktopVideoSrc: "//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0",
    mobileVideoSrc: "//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0",
    posterImage: "//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207",
    width: "full-width" as const
  },
  {
    id: "case_afCcHY",
    title: "Hang Eleven",
    description: "Launching a refreshed webshop for Hang Eleven to grow internationally",
    tags: ["Build", "Grow"],
    link: "/pages/hang-eleven-webshop-international-growth",
    desktopVideoSrc: "//www.notsellingliquid.com/cdn/shop/videos/c/vp/c511976946554306bd997337c1ab7992/c511976946554306bd997337c1ab7992.HD-1080p-7.2Mbps-35760312.mp4?v=0",
    mobileVideoSrc: "//www.notsellingliquid.com/cdn/shop/videos/c/vp/1b7fc4accae94cf79b2598c5b2b37a20/1b7fc4accae94cf79b2598c5b2b37a20.HD-1080p-7.2Mbps-35760313.mp4?v=0",
    posterImage: "//www.notsellingliquid.com/cdn/shop/files/preview_images/c511976946554306bd997337c1ab7992.thumbnail.0000000000_small.jpg?v=1727946458",
    width: "half-width" as const
  }
]

// In the JSX, replace the cases-grid content with:
<div className="cases-grid">
  {caseStudiesData.map((caseStudy) => (
    <CaseStudyCard key={caseStudy.id} {...caseStudy} />
  ))}
</div>
```

### Step 6: Add Required CSS
**File**: `src/components/Routes/Cases/cases.module.css`

**Copy CSS from HTML lines 10-30 (the style block):**
```css
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

/* Add other case-studies specific styles from the original CSS */
```

### Step 7: Update Layout for Cases Page
**In `src/app/layout.tsx`:**

The layout already handles the cases route correctly with the Header component's navigation logic.

### Step 8: Handle Body Class
**Update `src/app/cases/page.tsx`:**

Add the body class handling if needed:
```typescript
export default function CasesPage() {
  return (
    <>
      <div className="template-page">
        <CasesMainSection />
      </div>
    </>
  )
}
```

## Files to Create

1. **`src/app/cases/page.tsx`** - Main cases page route
2. **`src/components/Routes/Cases/CasesMainSection.tsx`** - Main section component
3. **`src/components/Routes/Cases/CaseStudyCard.tsx`** - Individual case card component
4. **`src/components/Routes/Cases/cases.module.css`** - Component-specific styles

## Key Migration Notes

### HTML Elements to Convert:
- `class` → `className`
- `playsinline` → `playsInline`
- `autoplay` → `autoPlay`
- Self-closing tags need proper closing
- `href` links → Next.js `Link` components

### Styling Approach:
- Extract inline styles to CSS modules or styled-jsx
- Maintain responsive classes (`d-none d-lg-block`, etc.)
- Keep original class names for consistency

### Video Handling:
- Maintain autoplay, muted, loop attributes
- Keep poster images for loading states
- Preserve responsive video switching

### Data Structure:
- Extract case study data to a structured format
- Make component reusable with props
- Maintain original URLs and content

## Testing Checklist

- [ ] Page loads at `/cases` route
- [ ] Videos autoplay and loop correctly
- [ ] Responsive design works (desktop/mobile videos)
- [ ] Navigation shows active state for cases
- [ ] Links work correctly
- [ ] Styling matches original design
- [ ] Mobile menu functions properly

## Additional Considerations

1. **Performance**: Consider lazy loading for videos
2. **SEO**: Ensure proper meta tags are set
3. **Accessibility**: Add proper alt texts and ARIA labels
4. **Error Handling**: Add fallbacks for video loading failures
5. **TypeScript**: Ensure proper typing for all props and data structures

This migration maintains the original functionality while converting to a modern Next.js structure with reusable components.