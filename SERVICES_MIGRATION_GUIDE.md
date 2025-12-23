# Services Page Migration Guide

## Overview
This guide provides step-by-step instructions to migrate the `htmls/services.html` file to the Next.js project structure. The services page contains a unique animated SVG section with service categories and requires specific components.

## Analysis of HTML Structure

### 1. Head Section Analysis
The services.html has the same head structure as the landing page, but with specific metadata for the services page:
- Title: "Services – Not selling liquid"
- Same meta tags and scripts as landing page
- Same CSS and font loading

### 2. Body Structure Analysis
The services page has these main sections:
1. **Loading Animation** (same as landing page)
2. **Header** (same as landing page but with "Services" as active nav and breadcrumb)
3. **Main Content** with Services Section
4. **Footer** (not present in this HTML but will be needed)

### 3. Services Section Analysis
The main content contains:
- A services section with animated SVG graphics
- Left side: Animated SVG with dotted circles and moving dots
- Right side: Service descriptions and content
- Responsive design with different SVGs for desktop/mobile

## Migration Steps

### Step 1: Create Services Page Route
Create the services page file:

**File:** `src/app/services/page.tsx`

```tsx
import LoadingAnimation from '../../components/Routes/Landing/LoadingAnimation'
import Header from '../../components/Layout/Header'
import ServicesMainSection from '../../components/Routes/Services/ServicesMainSection'
import Footer from '../../components/Layout/Footer'

export const metadata = {
  title: "Services – Not selling liquid",
  description: "As a certified Shopify Premier agency, Not selling liquid provides a service that builds, manages, and grows the presence of purpose-led brands in the digital space, powered by Shopify Plus. With our intrinsic appreciation of the fashion industry, our team creates specialist solutions for longevity in a dynamic space.",
}

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
```

### Step 2: Update Header Component
The header needs to show active state for "Services" and display breadcrumb.

**File:** `src/components/Layout/Header.tsx`

**Add this prop interface at the top:**
```tsx
interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
```

**Update the navigation links section (around line 60-80):**
```tsx
<li>
  <Link href="/services" className={currentPage === 'services' ? 'active' : ''}>Services</Link>
</li>
```

**Update the breadcrumb section (around line 90-100):**
```tsx
<div className="header-breadcrumb">
  <div className="hb-blk block-id-3409d0e4-c257-4ab0-b955-4355fab3e254">
    <p className="xs-body">
      <Link href="/">Home</Link> 
      {currentPage !== 'home' && (
        <>
          <span>/</span>
          <span className="capitalize">{currentPage}</span>
        </>
      )}
    </p>
  </div>
</div>
```

**Update mobile navigation (around line 120-140):**
```tsx
<li><Link href="/services" className={`mob_link ${currentPage === 'services' ? 'active' : ''}`}>Services</Link></li>
```

### Step 3: Create Services Main Section Component

**File:** `src/components/Routes/Services/ServicesMainSection.tsx`

Copy the entire services section from the HTML:

**From HTML lines 1090-1200 (approximately), copy this structure:**

```tsx
'use client'

export default function ServicesMainSection() {
  return (
    <div id="shopify-section-template--26430798102871__4ab5e4a7-939e-45c9-894c-6bb23491b3c1"
         className="shopify-section services-main" 
         style={{ marginTop: '-65px' }}>
      <section className="section-services section-id-template--26430798102871__4ab5e4a7-939e-45c9-894c-6bb23491b3c1 relative-sec">
        <style jsx>{`
          .section-id-template--26430798102871__4ab5e4a7-939e-45c9-894c-6bb23491b3c1 {
            background: #e5e2de;
          }
        `}</style>
        <div className="container">
          <div className="services-wrap grid">
            <div className="services-left grid-8-fcol">
              <div className="services-rightinr d-block d-lg-none">
                <p className="n-body">Services</p>
                <h2>We operate as your e-commerce team to power unique stories.</h2>
              </div>
              <div className="services-leftinr">
                {/* Desktop SVG - Copy from HTML lines ~1100-1150 */}
                <svg width="700" height="560" viewBox="0 0 700 560" fill="none"
                     xmlns="http://www.w3.org/2000/svg" className="d-none d-lg-block">
                  {/* Copy the entire SVG content from the HTML */}
                </svg>
                
                {/* Mobile SVG - Copy from HTML lines ~1150-1200 */}
                <svg width="370" height="407" viewBox="0 0 370 407" fill="none"
                     xmlns="http://www.w3.org/2000/svg" className="d-block d-lg-none">
                  {/* Copy the entire mobile SVG content from the HTML */}
                </svg>
              </div>
            </div>
            
            {/* Right side content - will be added in next step */}
          </div>
        </div>
      </section>
    </div>
  )
}
```

### Step 4: Copy SVG Content

**For Desktop SVG (lines 1100-1150 in HTML):**
Copy everything between the `<svg>` tags including:
- `<g id="dotted-lines">` section with all paths
- `<g id="dots">` section with animated circles
- `<g id="line-masks">` section with service labels
- `<g id="logo">` section with NSL logo

**For Mobile SVG (lines 1150-1200 in HTML):**
Copy the mobile version SVG content with similar structure but different dimensions.

### Step 5: Add Services CSS

**File:** `src/app/globals.css`

Add these styles at the end of the file:

```css
/* Services Page Styles */
.services-main {
  position: relative;
}

.section-services {
  padding: 80px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.services-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.services-left {
  position: relative;
}

.services-leftinr {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-leftinr svg {
  max-width: 100%;
  height: auto;
}

.services-rightinr h2 {
  font-family: var(--font-heading-family);
  font-size: var(--desktop-h2-font);
  color: var(--pure-cacao);
  line-height: 1.1;
  margin: 20px 0 0 0;
}

.services-rightinr .n-body {
  color: var(--pure-cacao);
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.grid-8-fcol {
  grid-column: span 8;
}

/* Responsive Design for Services */
@media (max-width: 991px) {
  .services-wrap {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .services-rightinr h2 {
    font-size: var(--mobile-h2-font);
  }
  
  .section-services {
    padding: 60px 0;
  }
}

@media (max-width: 768px) {
  .services-leftinr svg {
    width: 100%;
    max-width: 370px;
  }
}
```

### Step 6: Update Landing Page Header Call

**File:** `src/app/page.tsx`

Update the Header component call:
```tsx
<Header currentPage="home" />
```

### Step 7: Add Right Side Content (if needed)

If there's additional content on the right side of the services section that's not visible in the provided HTML, create a separate component:

**File:** `src/components/Routes/Services/ServicesContent.tsx`

```tsx
export default function ServicesContent() {
  return (
    <div className="services-right grid-4-fcol">
      <div className="services-rightinr d-none d-lg-block">
        <p className="n-body">Services</p>
        <h2>We operate as your e-commerce team to power unique stories.</h2>
      </div>
      {/* Add any additional content here */}
    </div>
  )
}
```

Then import and use it in ServicesMainSection.

## Important Notes

### 1. SVG Animation
The SVG contains CSS animations with `animateMotion` elements. These should work in Next.js without modification.

### 2. CSS Variables
The SVG uses CSS custom properties like `var(--pure-cacao)` and `var(--channel-orange)` which are already defined in globals.css.

### 3. Responsive Design
The HTML uses utility classes like `d-none d-lg-block` and `d-block d-lg-none` for responsive visibility, which are already defined in globals.css.

### 4. Grid System
The services section uses a custom grid system with classes like `grid-8-fcol` which need to be defined in CSS.

## Testing Checklist

After migration, verify:
- [ ] Services page loads at `/services`
- [ ] Header shows "Services" as active
- [ ] Breadcrumb shows "Home / Services"
- [ ] SVG animations work on desktop
- [ ] Mobile SVG displays correctly
- [ ] Responsive design works
- [ ] All CSS variables resolve correctly
- [ ] Loading animation works
- [ ] Mobile menu functions properly

## File Structure After Migration

```
src/
├── app/
│   ├── services/
│   │   └── page.tsx (new)
│   ├── layout.tsx (existing)
│   ├── page.tsx (update)
│   └── globals.css (update)
└── components/
    ├── Layout/
    │   └── Header.tsx (update)
    └── Routes/
        └── Services/
            ├── ServicesMainSection.tsx (new)
            └── ServicesContent.tsx (new, if needed)
```

This migration maintains the exact visual appearance and functionality of the original HTML while adapting it to Next.js best practices.