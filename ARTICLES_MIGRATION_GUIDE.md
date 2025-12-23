# Articles Page Migration Guide

## Overview
This guide will help you migrate the articles.html page to the Next.js project. The HTML document contains a blog listing page with article cards and a banner section.

## Analysis Summary

### What's Already Available:
- ✅ Header component with Articles navigation link (`/blogs/inside-the-industry`)
- ✅ Layout structure (Header, Footer, LoadingAnimation)
- ✅ Global CSS and styling system
- ✅ Script management in layout

### What Needs to be Created:
- 📁 Blog route structure (`src/app/blogs/inside-the-industry/`)
- 🧩 Blog banner component
- 🧩 Article card component
- 🧩 Blog main section component
- 📄 Blog page component
- 🎨 Blog-specific CSS

## Migration Steps

### Step 1: Create the Blog Route Structure

Create the following directories and files:
```
src/app/blogs/inside-the-industry/
├── page.tsx
└── blog.css
```

### Step 2: Create Blog CSS File

**File:** `src/app/blogs/inside-the-industry/blog.css`

Copy the following CSS from the HTML document (lines 1-50 of the style sections):
```css
/* Copy all the blog-related CSS from the original HTML */
/* This includes .section-blog-banner, .blog-banner, .article-cardinr, etc. */
```

### Step 3: Create Blog Components Directory

Create: `src/components/Routes/Blog/`

### Step 4: Create BlogBanner Component

**File:** `src/components/Routes/Blog/BlogBanner.tsx`

**Copy from HTML lines 1158-1178:**
```html
<section class="section-blog-banner section-id-template--26430796398935__banner relative-sec">
  <style>
    .section-id-template--26430796398935__banner {
      background: #e5e2de;
    }
  </style>
  <div class="container">
    <div class="blog-banner grid">
      <div class="bb-left grid-6-fcol">
        <div class="bb-leftinr">
          <div class="xl-body">articles</div>
        </div>
      </div>
      <div class="bb-right gridr-6-lcol">
        <div class="bb-rightinr">
          <div class="s-caption">
            <p>Sharing all things knowledge, experience, and fun.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Convert to React component:**
- Replace `class` with `className`
- Move inline styles to component or CSS file
- Remove Shopify-specific IDs

### Step 5: Create ArticleCard Component

**File:** `src/components/Routes/Blog/ArticleCard.tsx`

**Copy from HTML lines 1188-1220 (first article card):**
```html
<div class="article-cardinr grid">
  <div class="ac-media grid-6-fcol">
    <div class="ac-mediainr">
      <a href="/blogs/inside-the-industry/meta-algorithm-update-andromeda-what-you-should-do">
        <img src="//www.notsellingliquid.com/cdn/shop/articles/nsl-article-marketplaces-1-cover_0df8e961-ee46-4170-aebf-ce00363c516e_1000x.png?v=1764777121"
             width="1000" height="667"
             alt="Meta's big algorithm update (Andromeda): what you should — and shouldn't — do"
             loading="lazy">
      </a>
    </div>
  </div>
  <div class="ac-cont gridr-6-lcol">
    <div class="ac-continr">
      <div class="ac-content">
        <div class="xs-body">
          <span class="tag">Inside the Industry</span>
        </div>
        <h5>
          <a href="/blogs/inside-the-industry/meta-algorithm-update-andromeda-what-you-should-do">
            Meta's big algorithm update (Andromeda): what you should — and shouldn't — do
          </a>
        </h5>
      </div>
      <div class="ac-link">
        <a href="/blogs/inside-the-industry/meta-algorithm-update-andromeda-what-you-should-do"
           class="link-arrow link-pure-cacao">
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                    fill="initial"></path>
            </svg>
          </span>
          <span class="label">read article</span>
          <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                    fill="initial"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
```

**Make it a reusable component with props:**
- Create interface for article data (title, image, url, tags, description)
- Replace hardcoded values with props
- Convert `<a>` tags to Next.js `<Link>` components
- Replace `class` with `className`

### Step 6: Create BlogMainSection Component

**File:** `src/components/Routes/Blog/BlogMainSection.tsx`

**Copy from HTML lines 1179-1300+ (the main blog section):**
```html
<section class="section-blog-section section-id-template--26430796398935__main relative-sec">
  <style>
    .section-id-template--26430796398935__main {
      background: #e5e2de;
    }
  </style>
  <div class="container">
    <div class="blog-sec">
      <!-- All article cards go here -->
    </div>
  </div>
</section>
```

**Convert to React component:**
- Import and use ArticleCard component
- Create articles data array
- Map through articles to render ArticleCard components
- Move inline styles to CSS file or styled components

### Step 7: Create Articles Data

**File:** `src/components/Routes/Blog/articlesData.ts`

**Extract article data from HTML lines 1188-1300+:**
Create an array of article objects with the following structure:
```typescript
interface Article {
  id: string;
  title: string;
  slug: string;
  image: string;
  alt: string;
  tags: string[];
  excerpt?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Meta's big algorithm update (Andromeda): what you should — and shouldn't — do",
    slug: "meta-algorithm-update-andromeda-what-you-should-do",
    image: "//www.notsellingliquid.com/cdn/shop/articles/nsl-article-marketplaces-1-cover_0df8e961-ee46-4170-aebf-ce00363c516e_1000x.png?v=1764777121",
    alt: "Meta's big algorithm update (Andromeda): what you should — and shouldn't — do",
    tags: ["Inside the Industry"]
  },
  {
    id: "2",
    title: "Why Retention is key to your brand longevity",
    slug: "why-retention-is-key-to-your-brand-longevity",
    image: "//www.notsellingliquid.com/cdn/shop/articles/nsl-article-retention-cover_7fb9beaf-10cb-44f0-8a34-bfc09c30290d_1000x.png?v=1764777096",
    alt: "Why Retention is key to your brand longevity",
    tags: ["Inside the Industry", "Retention"]
  }
  // Add more articles from the HTML
];
```

### Step 8: Create Main Blog Page

**File:** `src/app/blogs/inside-the-industry/page.tsx`

**Copy metadata from HTML head section (lines 1-50):**
```html
<title>Inside the Industry – Not selling liquid</title>
<meta name="description" content="Together with our clients, we're changing the way to do e-commerce...">
<!-- Other meta tags -->
```

**Create the page component:**
```tsx
import type { Metadata } from "next";
import BlogBanner from '../../../components/Routes/Blog/BlogBanner';
import BlogMainSection from '../../../components/Routes/Blog/BlogMainSection';
import './blog.css';

export const metadata: Metadata = {
  title: "Inside the Industry – Not selling liquid",
  description: "Together with our clients, we're changing the way to do e-commerce. We will use our expertise to build, manage and grow your brand on Shopify Plus, to elevate its position in the market alongside these players.",
  // Add other metadata from HTML head
};

export default function BlogPage() {
  return (
    <div className="template-blog">
      <BlogBanner />
      <BlogMainSection />
    </div>
  );
}
```

### Step 9: Update Header Component

**File:** `src/components/Layout/Header.tsx`

**Update the Articles link to show active state:**
- Add blog route detection in `getCurrentPage()` function
- Update Articles link to show active class when on blog pages

**Add this to getCurrentPage function:**
```typescript
if (pathname.startsWith('/blogs')) return 'articles'
```

**Update Articles link:**
```tsx
<li>
  <Link href="/blogs/inside-the-industry" className={currentPage === 'articles' ? 'active' : ''}>
    Articles
  </Link>
</li>
```

### Step 10: Update Layout Body Class

**File:** `src/app/layout.tsx`

**Update body className to be dynamic based on route:**
- Remove hardcoded "case-studies" class
- Make it dynamic or remove if not needed for articles page

## Detailed Line-by-Line Extraction

### CSS Extraction (from HTML head):
**Lines to copy:** 
- Lines 150-200: Font face definitions
- Lines 200-250: CSS variables and root styles
- Lines 1150-1160: Blog banner CSS link reference
- Lines 1180-1190: Blog main section CSS link reference

### HTML Structure Extraction:

#### Blog Banner Section:
**Source:** Lines 1158-1178
**Destination:** `BlogBanner.tsx`
**Key elements:**
- Section wrapper with background styling
- Grid layout with left/right columns
- "articles" heading
- Description text

#### Article Cards:
**Source:** Lines 1188-1300+
**Destination:** `ArticleCard.tsx` (reusable component)
**Key elements:**
- Article container with grid layout
- Image with link
- Content section with tags and title
- Link arrow component

#### Main Container:
**Source:** Lines 1179-1187 + 1300+
**Destination:** `BlogMainSection.tsx`
**Key elements:**
- Section wrapper
- Container div
- Blog section wrapper

### Scripts (already handled in layout):
- jQuery (already in layout)
- Theme scripts (already in layout)
- Analytics scripts (already in layout)

## Final Checklist

- [ ] Create blog route directory structure
- [ ] Extract and convert CSS
- [ ] Create BlogBanner component
- [ ] Create ArticleCard component  
- [ ] Create BlogMainSection component
- [ ] Create articles data file
- [ ] Create main blog page
- [ ] Update Header component for active states
- [ ] Test navigation and styling
- [ ] Verify all links work correctly
- [ ] Check responsive design
- [ ] Validate metadata and SEO

## Notes

1. **Image Optimization:** Consider using Next.js Image component for better performance
2. **Dynamic Routes:** You may want to create dynamic routes for individual articles later
3. **Data Fetching:** Consider moving article data to a CMS or API in the future
4. **Styling:** Ensure all CSS classes are properly migrated and working
5. **Accessibility:** Verify all accessibility attributes are preserved
6. **SEO:** Ensure all meta tags and structured data are properly implemented

## Component Structure Summary

```
src/
├── app/
│   └── blogs/
│       └── inside-the-industry/
│           ├── page.tsx
│           └── blog.css
└── components/
    └── Routes/
        └── Blog/
            ├── BlogBanner.tsx
            ├── ArticleCard.tsx
            ├── BlogMainSection.tsx
            └── articlesData.ts
```

This structure maintains consistency with the existing project organization and provides a clean, maintainable codebase for the blog functionality.