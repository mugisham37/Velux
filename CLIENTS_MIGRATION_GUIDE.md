# Clients Page Migration Guide

## Overview
This guide provides step-by-step instructions to migrate the clients.html page to the Next.js project structure. The clients page features an interactive client list with hover effects and image displays.

## Analysis of HTML Structure

### Key Sections Identified:
1. **Header Section** - Already migrated in layout
2. **Main Content Area** - Contains case studies header and client list
3. **Client Interactive Section** - Left image display + Right client list
4. **Scripts** - jQuery interactions for image hover effects

## Required Files to Create

### 1. Create Clients Page Route
**File:** `src/app/clients/page.tsx`

### 2. Create Client Components
**File:** `src/components/Routes/Clients/ClientsMainSection.tsx`
**File:** `src/components/Routes/Clients/ClientsList.tsx`

### 3. Create CSS File
**File:** `src/app/clients/clients.css`

## Step-by-Step Migration Instructions

### Step 1: Create the Clients Route Directory
```bash
mkdir src/app/clients
```

### Step 2: Create clients.css file
**File:** `src/app/clients/clients.css`

Copy the CSS from the HTML head section (lines 1-200 approximately) and add client-specific styles. You'll need to extract styles from the `<link>` tags and inline styles.

### Step 3: Create the Main Clients Page
**File:** `src/app/clients/page.tsx`

```tsx
import type { Metadata } from "next";
import ClientsMainSection from '../../components/Routes/Clients/ClientsMainSection'
import './clients.css'

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
};

export default function ClientsPage() {
  return (
    <div className="template-page">
      <ClientsMainSection />
    </div>
  )
}
```

### Step 4: Create the Main Section Component
**File:** `src/components/Routes/Clients/ClientsMainSection.tsx`

Copy from HTML lines 1150-1200 (the section with class "section-case-studies"):

```tsx
'use client'
import ClientsList from './ClientsList'

export default function ClientsMainSection() {
  return (
    <>
      {/* Header Section - Copy from lines 1150-1180 */}
      <div id="shopify-section-template--26430797775191__f32a1c2e-c486-4763-9d59-ecf248ea3345" 
           className="shopify-section" 
           style={{ marginTop: '-61.1px' }}>
        <section className="section-case-studies section-id-template--26430797775191__f32a1c2e-c486-4763-9d59-ecf248ea3345 relative-sec">
          <style>
            {`
              .section-id-template--26430797775191__f32a1c2e-c486-4763-9d59-ecf248ea3345 {
                background: #c0bbae;
              }
              .section-id-template--26430797775191__f32a1c2e-c486-4763-9d59-ecf248ea3345 .case-studies {
                padding-top: 144px;
                padding-bottom: 0px;
              }
              @media(min-width:992px) {
                .section-id-template--26430797775191__f32a1c2e-c486-4763-9d59-ecf248ea3345 .case-studies {
                  padding-top: 200px;
                  padding-bottom: 0px;
                }
              }
            `}
          </style>
          <div className="container">
            <div className="case-studies">
              <div className="cs-header grid">
                <div className="grid-6-fcol">
                  <h3>Together with our clients, we&apos;re changing the way to do e-commerce.</h3>
                </div>
                <div className="grid-4-lcol">
                  <p className="s-caption">Enhancing each other, positively influencing one another,
                    uncovering new possible territories in the digital space and in the minds of
                    their communities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Clients Interactive Section - Copy from lines 1200-1400 */}
      <ClientsList />
    </>
  )
}
```

### Step 5: Create the Clients List Component
**File:** `src/components/Routes/Clients/ClientsList.tsx`

Copy from HTML lines 1200-1400 (the main client section):

```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Client {
  name: string;
  image: string;
  link?: string;
  isExternal?: boolean;
}

export default function ClientsList() {
  const [activeImage, setActiveImage] = useState<string>('')

  const clients: Client[] = [
    {
      name: 'AGR',
      image: '//www.notsellingliquid.com/cdn/shop/files/Clients-AGR2-portrait_7d32f7b4-a775-40db-8146-5ca4acad8c0f.jpg?v=1691759154'
    },
    {
      name: 'Ange Projects',
      image: '//www.notsellingliquid.com/cdn/shop/files/Sep_s_dinner_attire-_our_Summer_Blazer_and_Pleated_Denim_Trousers..jpg?v=1747413937'
    },
    {
      name: 'Arte antwerp',
      image: '//www.notsellingliquid.com/cdn/shop/files/Clients-Arte-square_2c8f3bfc-e15c-4961-805b-d5b0e33493cf.jpg?v=1691759155',
      link: '/pages/case-study-arte-antwerp-360-approach'
    },
    {
      name: 'Ateljé',
      image: '//www.notsellingliquid.com/cdn/shop/files/Atelje_63-1.jpg?v=1757587705',
      link: 'https://shopatelje.com',
      isExternal: true
    },
    {
      name: 'Binibamba',
      image: '//www.notsellingliquid.com/cdn/shop/files/binibamba.webp?v=1747413245'
    },
    {
      name: 'Bamboo Basics',
      image: '//www.notsellingliquid.com/cdn/shop/files/MAXTRAVEL-001-zwart_4666043d-c0bf-40ad-ba33-18fdb9137889.jpg?v=1728473963',
      link: '/pages/migrating-bamboo-basics-to-shopify'
    }
    // Continue with all clients from the HTML...
  ]

  return (
    <div className="padding_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe bg_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe relative-sec">
      <style>
        {`
          .padding_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe {
            padding-top: 20px;
            padding-bottom: 100px;
          }
          .bg_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe {
            background-color: #c0bbae
          }
          @media(max-width:991px) {
            .padding_template--26430797775191__186a8749-1a1c-44d5-8789-d7aeab5e2abe {
              padding-top: 0px;
              padding-bottom: 60px;
            }
          }
        `}
      </style>
      <div className="container">
        <div className="main_client">
          <div className="left_client">
            <figure>
              <img src={activeImage} alt="" />
            </figure>
          </div>
          <div className="right_client">
            <ul>
              {clients.map((client, index) => (
                <li key={index}>
                  {client.link ? (
                    client.isExternal ? (
                      <a 
                        className="link" 
                        target="_blank" 
                        href={client.link}
                        onMouseEnter={() => setActiveImage(client.image)}
                        rel="noopener noreferrer"
                      >
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                            fill="#262424"></path>
                        </svg> 
                        {client.name}
                      </a>
                    ) : (
                      <Link 
                        className="link" 
                        href={client.link}
                        onMouseEnter={() => setActiveImage(client.image)}
                      >
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                            fill="#262424"></path>
                        </svg> 
                        {client.name}
                      </Link>
                    )
                  ) : (
                    <p 
                      className="link"
                      onMouseEnter={() => setActiveImage(client.image)}
                    >
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.7031 5.23669L25.4664 15L15.7031 24.7633L14.3773 23.4375L21.8773 15.9375H4.92188V14.0625H21.8773L14.3773 6.56252L15.7031 5.23669Z"
                          fill="#262424"></path>
                      </svg> 
                      {client.name}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### Step 6: Update Header Component
**File:** `src/components/Layout/Header.tsx`

Update the navigation to include clients page active state:

1. **Line 15:** Update the getCurrentPage function:
```tsx
const getCurrentPage = () => {
  if (pathname === '/') return 'home'
  if (pathname === '/services') return 'services'
  if (pathname === '/cases') return 'cases'
  if (pathname === '/clients') return 'clients'  // Add this line
  return pathname.slice(1)
}
```

2. **Line 85:** Update the Clients link:
```tsx
<li>
  <Link href="/clients" className={currentPage === 'clients' ? 'active' : ''}>Clients</Link>
</li>
```

3. **Line 110:** Update breadcrumb logic:
```tsx
<span className="capitalize">
  {currentPage === 'cases' ? 'Case Studies' : 
   currentPage === 'clients' ? 'Clients' : currentPage}
</span>
```

4. **Line 150:** Update mobile navigation:
```tsx
<li><Link href="/clients" className={`mob_link ${currentPage === 'clients' ? 'active' : ''}`}>Clients</Link></li>
```

### Step 7: Update Layout Body Class
**File:** `src/app/layout.tsx`

**Line 45:** Update body className to be dynamic:
```tsx
<body className="antialiased sticky-header">
```

### Step 8: Complete Client Data
You need to extract all client data from the HTML (lines 1300-1600). Here's the complete list structure:

```tsx
const clients: Client[] = [
  // Copy each <li> item from the HTML and convert to this format
  // Example from HTML line 1320:
  {
    name: 'AGR',
    image: '//www.notsellingliquid.com/cdn/shop/files/Clients-AGR2-portrait_7d32f7b4-a775-40db-8146-5ca4acad8c0f.jpg?v=1691759154'
  },
  // Continue for all clients...
]
```

## Additional Notes

### CSS Extraction Required
1. Extract client-specific CSS from the HTML `<style>` tags
2. Convert inline styles to CSS classes
3. Ensure responsive design is maintained

### JavaScript Functionality
The original HTML uses jQuery for image hover effects. This has been converted to React state management using `useState` and `onMouseEnter` events.

### Image Optimization
Consider using Next.js Image component for better performance:
```tsx
import Image from 'next/image'
// Replace <img> with <Image> component
```

### Testing Checklist
- [ ] Page loads correctly at `/clients`
- [ ] Header navigation shows active state
- [ ] Breadcrumb displays correctly
- [ ] Image hover effects work
- [ ] External links open in new tab
- [ ] Internal links navigate correctly
- [ ] Mobile responsive design works
- [ ] CSS styles match original design

## Files Summary

**New Files to Create:**
1. `src/app/clients/page.tsx` - Main page component
2. `src/app/clients/clients.css` - Page-specific styles
3. `src/components/Routes/Clients/ClientsMainSection.tsx` - Main section
4. `src/components/Routes/Clients/ClientsList.tsx` - Interactive client list

**Files to Update:**
1. `src/components/Layout/Header.tsx` - Navigation active states

This migration maintains the original functionality while converting to modern React/Next.js patterns.