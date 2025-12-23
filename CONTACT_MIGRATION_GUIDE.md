# Contact Page Migration Guide

## Overview
This guide provides step-by-step instructions to migrate the contact.html page to the Next.js project structure. The contact page contains a contact form with multiple sections and interactive elements.

## Analysis Summary

### What's Already Migrated:
- ✅ **Layout Structure**: Header, Footer, LoadingAnimation components exist
- ✅ **Navigation**: Header component already includes contact link
- ✅ **Base Styles**: Global CSS and theme structure
- ✅ **Scripts**: Most tracking and analytics scripts are in layout.tsx

### What Needs Migration:
- ❌ **Contact Page Route**: `/pages/contact` route doesn't exist
- ❌ **Contact Form Component**: Main contact form with interactive elements
- ❌ **Contact Info Component**: Left sidebar with contact information
- ❌ **Form Validation & Submission**: JavaScript functionality for form
- ❌ **Contact-specific CSS**: Styling for contact form layout

## Migration Steps

### Step 1: Create Contact Page Route

**Create file:** `src/app/contact/page.tsx`

```typescript
import type { Metadata } from "next";
import ContactMainSection from '../../components/Routes/Contact/ContactMainSection'

export const metadata: Metadata = {
  title: "Contact - Not selling liquid",
  description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
  metadataBase: new URL("https://www.notsellingliquid.com"),
  alternates: {
    canonical: "https://www.notsellingliquid.com/pages/contact",
  },
  openGraph: {
    siteName: "Not selling liquid",
    url: "https://www.notsellingliquid.com/pages/contact",
    title: "Contact",
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
    title: "Contact",
    description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="template-page">
        <ContactMainSection />
      </div>
    </>
  )
}
```

### Step 2: Create Contact Components Directory

**Create directory:** `src/components/Routes/Contact/`

### Step 3: Create Contact Main Section Component

**Create file:** `src/components/Routes/Contact/ContactMainSection.tsx`

Copy from contact.html **lines 870-1200** (the main contact section):

```typescript
'use client'
import { useState } from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import './contact.css'

export default function ContactMainSection() {
  return (
    <div id="shopify-section-template--26430797840727__4ce05ced-bd60-493d-aa74-6bb0a1b6e4ad" className="shopify-section">
      <section className="section-contact-form section-id-template--26430797840727__4ce05ced-bd60-493d-aa74-6bb0a1b6e4ad relative-sec">
        <style jsx>{`
          .section-id-template--26430797840727__4ce05ced-bd60-493d-aa74-6bb0a1b6e4ad .cf-rightinr {
            background: #ffffff;
          }
          .section-id-template--26430797840727__4ce05ced-bd60-493d-aa74-6bb0a1b6e4ad {
            background: #e5e2de;
          }
        `}</style>
        <div className="container">
          <div className="contact-form grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
```

### Step 4: Create Contact Info Component

**Create file:** `src/components/Routes/Contact/ContactInfo.tsx`

Copy from contact.html **lines 890-940** (the left sidebar contact info):

```typescript
import Link from 'next/link'

export default function ContactInfo() {
  return (
    <div className="cf-left grid-2-fcol">
      <div className="cf-leftinr">
        <div className="cf-info">
          <div className="cf-infoinr block-id-64d1440e-26f4-434d-a393-1cdd525286df">
            <p className="n-body">General</p>
            <div className="s-caption enable_click">
              <p>
                <Link href="mailto:hello@notsellingliquid.com" title="mailto:hello@notsellingliquid.com">
                  hello@notsellingliquid.com
                </Link>
                <br />
                <Link href="tel:0202101913" target="_blank" title="tel:0202101913">
                  +31 (0) 20 21 01 913
                </Link>
              </p>
            </div>
          </div>
          <div className="cf-infoinr block-id-860b624c-97df-4d0c-9ab5-7d83588d3f3c">
            <p className="n-body">new business</p>
            <div className="s-caption enable_click">
              <p>
                <Link href="mailto:new@notsellingliquid.com" title="mailto:new@notsellingliquid.com">
                  new@notsellingliquid.com
                </Link>
                <br />
                <Link href="tel:0202101913" target="_blank" title="tel:0202101913">
                  +31 (0) 20 21 01 913
                </Link>
              </p>
            </div>
          </div>
          <div className="cf-infoinr block-id-beda5cb3-ee7d-4cd7-bb52-87388c4d400c">
            <p className="n-body">Visit</p>
            <div className="s-caption enable_click">
              <p>Danzigerkade 15 A5<br />1013 AP Amsterdam<br />Netherlands</p>
            </div>
          </div>
        </div>
        <Link href="https://goo.gl/maps/bdqCyzGfuAmWBenb8" target="_blank" className="enable_link link-arrow link-pure-cacao sheader-right">
          <span className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z" fill="initial"></path>
            </svg>
          </span>
          <span className="label">Google maps</span>
          <span className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z" fill="initial"></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}
```

### Step 5: Create Contact Form Component

**Create file:** `src/components/Routes/Contact/ContactForm.tsx`

Copy from contact.html **lines 940-1150** (the main contact form):

```typescript
'use client'
import { useState, useRef } from 'react'
import InterestSelector from './InterestSelector'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectdescription: '',
    Build: 'UX & UI Design',
    Manage: '',
    Grow: '',
    allOfTheAbove: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be implemented here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="cf-rightt grid-8-lcol">
      <div className="cf-rightinr">
        <h2>Let&apos;s grow together.</h2>
        <p className="cf-subtitle xs-body d-block d-lg-none">Details</p>
        <div className="cf-form">
          <form method="post" action="/contact#ContactForm" id="ContactForm" acceptCharset="UTF-8" className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form_type" value="contact" />
            <input type="hidden" name="utf8" value="✓" />
            <input type="hidden" name="datetime" value={new Date().toISOString()} />
            
            <div className="cf-forminr">
              <div className="field">
                <input 
                  autoComplete="name" 
                  type="text" 
                  id="ContactForm-name" 
                  required 
                  name="name" 
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="ContactForm-name" className="s-caption">Name</label>
              </div>
              
              <div className="cf_field">
                <div className="field cf_fieldinr">
                  <input 
                    autoComplete="email" 
                    type="email" 
                    id="ContactForm-email" 
                    name="email" 
                    spellCheck="false" 
                    autoCapitalize="off" 
                    value={formData.email} 
                    aria-required="true" 
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="ContactForm-email" className="s-caption">Email</label>
                </div>
                <div className="field cf_fieldinr phone">
                  <input 
                    type="tel" 
                    id="ContactForm-phone" 
                    autoComplete="tel" 
                    name="phone" 
                    pattern="^\+?[0-9\s\-()]*$" 
                    value={formData.phone} 
                    placeholder="Phone"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="ContactForm-phone" className="s-caption">Phone</label>
                </div>
              </div>
              
              <div className="field">
                <input 
                  autoComplete="company" 
                  type="text" 
                  id="ContactForm-company" 
                  required 
                  name="company" 
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <label htmlFor="ContactForm-company" className="s-caption">Company</label>
              </div>
              
              <div className="field description">
                <textarea 
                  rows={4} 
                  id="ContactForm-project-description" 
                  name="projectdescription" 
                  placeholder="Project description"
                  value={formData.projectdescription}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="ContactForm-project-description" className="s-caption">Project description</label>
              </div>
            </div>
            
            <InterestSelector formData={formData} setFormData={setFormData} />
            
            <button type="submit" className="button-full button-stone">
              <span className="button">
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z" fill="initial"></path>
                  </svg>
                </span>
                <span className="label">Submit enquiry</span>
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z" fill="initial"></path>
                  </svg>
                </span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
```

### Step 6: Create Interest Selector Component

**Create file:** `src/components/Routes/Contact/InterestSelector.tsx`

Copy from contact.html **lines 1050-1130** (the interest selection section):

```typescript
'use client'
import { useState } from 'react'

interface InterestSelectorProps {
  formData: any
  setFormData: (data: any) => void
}

export default function InterestSelector({ formData, setFormData }: InterestSelectorProps) {
  const [selectedInterests, setSelectedInterests] = useState({
    Build: ['UX & UI Design'],
    Manage: [] as string[],
    Grow: [] as string[]
  })

  const interests = {
    Build: [
      'UX & UI Design',
      'Development',
      'Klaviyo email automation',
      'Shopify Plus migration'
    ],
    Manage: [
      'Paid advertising',
      'Retention & CDP',
      'Project management',
      'Website operations'
    ],
    Grow: [
      'Analytics & reporting',
      'Data & intelligence',
      'Growth strategy',
      'Conversion optimization'
    ]
  }

  const handleInterestClick = (category: string, interest: string) => {
    setSelectedInterests(prev => {
      const categoryInterests = [...prev[category as keyof typeof prev]]
      const index = categoryInterests.indexOf(interest)
      
      if (index > -1) {
        categoryInterests.splice(index, 1)
      } else {
        categoryInterests.push(interest)
      }
      
      const updated = {
        ...prev,
        [category]: categoryInterests
      }
      
      // Update form data
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        [category]: categoryInterests.join(', ')
      }))
      
      return updated
    })
  }

  const handleAllOfTheAbove = (checked: boolean) => {
    if (checked) {
      const allInterests = {
        Build: [...interests.Build],
        Manage: [...interests.Manage],
        Grow: [...interests.Grow]
      }
      setSelectedInterests(allInterests)
      setFormData((prev: any) => ({
        ...prev,
        Build: interests.Build.join(', '),
        Manage: interests.Manage.join(', '),
        Grow: interests.Grow.join(', '),
        allOfTheAbove: true
      }))
    } else {
      setSelectedInterests({
        Build: [],
        Manage: [],
        Grow: []
      })
      setFormData((prev: any) => ({
        ...prev,
        Build: '',
        Manage: '',
        Grow: '',
        allOfTheAbove: false
      }))
    }
  }

  return (
    <div className="cf-inter">
      <p className="s-body">I&apos;m interested in</p>
      <div className="cf-interinr">
        {Object.entries(interests).map(([category, categoryInterests]) => (
          <div key={category} className="cf-interinfo">
            <label className="xs-body cf-intertitle">{category}</label>
            <div className="cf-interlist">
              <input 
                type="hidden" 
                id={category} 
                name={`contact[${category}]`} 
                value={selectedInterests[category as keyof typeof selectedInterests].join(', ')} 
              />
              <ul className="help_listcls">
                {categoryInterests.map((interest) => (
                  <li key={interest}>
                    <a 
                      href="#" 
                      className={selectedInterests[category as keyof typeof selectedInterests].includes(interest) ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault()
                        handleInterestClick(category, interest)
                      }}
                    >
                      {interest}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="cf-inter-all">
        <input 
          type="checkbox" 
          name="All of the above" 
          value="" 
          id="ContactForm-All of the above"
          checked={formData.allOfTheAbove}
          onChange={(e) => handleAllOfTheAbove(e.target.checked)}
        />
        <label htmlFor="ContactForm-All of the above">All of the above</label>
      </div>
    </div>
  )
}
```

### Step 7: Create Contact CSS File

**Create file:** `src/components/Routes/Contact/contact.css`

Copy the contact-specific CSS from the original HTML. You'll need to extract the CSS rules from the linked stylesheet:
`//www.notsellingliquid.com/cdn/shop/t/39/assets/contact-form.css`

### Step 8: Update Header Component

**Update file:** `src/components/Layout/Header.tsx`

Update the contact link and breadcrumb logic to handle the contact route:

**Find line ~25** (in getCurrentPage function):
```typescript
const getCurrentPage = () => {
  if (pathname === '/') return 'home'
  if (pathname === '/services') return 'services'
  if (pathname === '/cases') return 'cases'
  if (pathname === '/clients') return 'clients'
  if (pathname === '/contact') return 'contact'  // Add this line
  if (pathname.startsWith('/blogs')) return 'articles'
  return pathname.slice(1)
}
```

**Find line ~75** (in navigation links):
```typescript
<li>
  <Link href="/contact" className={currentPage === 'contact' ? 'active' : ''}>Contact</Link>
</li>
```

**Find line ~90** (in breadcrumb logic):
```typescript
<span className="capitalize">
  {currentPage === 'cases' ? 'Case Studies' : 
   currentPage === 'clients' ? 'Clients' : 
   currentPage === 'articles' ? 'Blog' : 
   currentPage === 'contact' ? 'Contact' : currentPage}  // Add contact case
</span>
```

**Find line ~100** (in header right contact link):
```typescript
<Link href="/contact" className="link-arrow link-pure-cacao sheader-right">
```

**Find line ~140** (in mobile menu):
```typescript
<li><Link href="/contact" className={`mob_link ${currentPage === 'contact' ? 'active' : ''}`}>Contact</Link></li>
```

### Step 9: Update Layout for Contact Page

**Update file:** `src/app/layout.tsx`

**Find line ~50** (body className):
```typescript
<body className="antialiased sticky-header">
```

The contact page should not have the hardcoded "case-studies" class that was in the original HTML.

### Step 10: Add Form Submission Logic (Optional Enhancement)

You can enhance the ContactForm component with proper form submission logic by adding API routes or integrating with form services like Formspree, Netlify Forms, or similar.

## File Structure After Migration

```
src/
├── app/
│   ├── contact/
│   │   └── page.tsx                    # New contact page route
│   └── layout.tsx                      # Updated with contact handling
├── components/
│   ├── Layout/
│   │   └── Header.tsx                  # Updated with contact navigation
│   └── Routes/
│       └── Contact/                    # New contact components directory
│           ├── ContactMainSection.tsx  # Main contact section wrapper
│           ├── ContactInfo.tsx         # Left sidebar contact info
│           ├── ContactForm.tsx         # Main contact form
│           ├── InterestSelector.tsx    # Interest selection component
│           └── contact.css             # Contact-specific styles
```

## Testing Checklist

After migration, test the following:

- [ ] Contact page loads at `/contact`
- [ ] Navigation shows active state for contact
- [ ] Breadcrumb shows "Home / Contact"
- [ ] Contact form fields work properly
- [ ] Interest selector toggles work
- [ ] "All of the above" checkbox works
- [ ] Form validation works
- [ ] Mobile responsive design
- [ ] Contact info links work (email, phone, maps)

## Notes

1. **CSS Extraction**: You'll need to download and extract the contact-form.css from the original Shopify CDN link
2. **Form Submission**: The original form submits to Shopify's contact endpoint. You'll need to implement your own form handling
3. **JavaScript Functionality**: The interactive elements (interest selector, form validation) have been converted to React state management
4. **Responsive Design**: Ensure all responsive classes and breakpoints work correctly
5. **Accessibility**: Maintain proper form labels and ARIA attributes

This migration maintains the exact structure and functionality of the original contact page while adapting it to the Next.js component architecture.