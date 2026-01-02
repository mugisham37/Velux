"use client"

import { useEffect, useRef } from 'react'

// Constants for repetitive data
const FONTS = [
  {
    href: "https://www.notsellingliquid.com/cdn/shop/files/Aeonik-Regular.woff2?v=11777328378613522966",
    family: 'Aeonik',
    weight: 'normal',
    woffUrl: "https://www.notsellingliquid.com/cdn/shop/files/Aeonik-Regular.woff?v=14984412462167582789"
  },
  {
    href: "https://www.notsellingliquid.com/cdn/shop/files/PPEditorialOld-Light.woff2?v=13586537134979268968",
    family: 'PP Editorial Old',
    weight: '300',
    woffUrl: "https://www.notsellingliquid.com/cdn/shop/files/PPEditorialOld-Light.woff?v=12339577768757059424"
  }
];

const CONTACT_INFO = [
  {
    title: "General",
    email: "hello@notsellingliquid.com",
    phone: "+31 (0) 20 21 01 913",
    phoneHref: "0202101913"
  },
  {
    title: "new business",
    email: "new@notsellingliquid.com",
    phone: "+31 (0) 20 21 01 913",
    phoneHref: "0202101913"
  },
  {
    title: "Visit",
    content: "Danzigerkade 15 A5<br />1013 AP Amsterdam<br />Netherlands",
    isAddress: true
  }
];

const FORM_FIELDS = [
  {
    id: "ContactForm-name",
    name: "contact[name]",
    type: "text",
    placeholder: "Name",
    label: "Name",
    autoComplete: "name",
    required: true,
    fullWidth: true
  },
  {
    id: "ContactForm-email",
    name: "contact[email]",
    type: "email",
    placeholder: "Email",
    label: "Email",
    autoComplete: "email",
    required: true,
    ariaRequired: true,
    spellCheck: false,
    autoCapitalize: "off"
  },
  {
    id: "ContactForm-phone",
    name: "contact[phone]",
    type: "tel",
    placeholder: "Phone",
    label: "Phone",
    autoComplete: "tel",
    pattern: "^\\+?[0-9\\s\\-()]*$"
  },
  {
    id: "ContactForm-company",
    name: "contact[company]",
    type: "text",
    placeholder: "Company",
    label: "Company",
    autoComplete: "company",
    required: true,
    fullWidth: true
  },
  {
    id: "ContactForm-project-description",
    name: "contact[projectdescription]",
    type: "textarea",
    placeholder: "Project description",
    label: "Project description",
    rows: 4,
    fullWidth: true
  }
];

const SERVICE_CATEGORIES = [
  {
    title: "Build",
    name: "Build",
    defaultValue: "UX & UI Design",
    services: [
      { name: "UX & UI Design", active: true },
      { name: "Development" },
      { name: "Klaviyo email automation" },
      { name: "Shopify Plus migration" }
    ]
  },
  {
    title: "Manage",
    name: "Manage",
    defaultValue: "",
    services: [
      { name: "Paid advertising" },
      { name: "Retention & CDP" },
      { name: "Project management" },
      { name: "Website operations" }
    ]
  },
  {
    title: "Grow",
    name: "Grow",
    defaultValue: "",
    services: [
      { name: "Analytics & reporting" },
      { name: "Data & intelligence" },
      { name: "Growth strategy" },
      { name: "Conversion optimization" }
    ]
  }
];

const COLORS = {
  primary: '#262424',
  secondary: '#9B978B',
  background: '#e5e2de',
  white: 'white',
  button: '#c0bbae',
  placeholder: '#9B978B',
  hover: '#f7f7f6'
};

const FONTS_FAMILIES = {
  aeonik: 'Aeonik, sans-serif',
  editorial: 'PP Editorial Old, serif'
};

const ARROW_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
          fill="currentColor"></path>
  </svg>
);

const ContactMainSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Load custom fonts using data array
    const fontElements: HTMLElement[] = [];
    
    FONTS.forEach(font => {
      // Create preload link
      const fontLink = document.createElement('link');
      fontLink.href = font.href;
      fontLink.rel = "preload";
      fontLink.as = "font";
      fontLink.type = "font/woff2";
      fontLink.crossOrigin = "anonymous";
      document.head.appendChild(fontLink);
      fontElements.push(fontLink);
    });

    // Add font face styles
    const fontStyle = document.createElement('style');
    fontStyle.textContent = FONTS.map(font => `
      @font-face {
        font-family: '${font.family}';
        src: url("${font.href}") format('woff2'),
             url("${font.woffUrl}") format('woff');
        font-weight: ${font.weight};
        font-style: normal;
        font-display: swap;
      }
    `).join('');
    document.head.appendChild(fontStyle);
    fontElements.push(fontStyle);

    // Initialize form functionality after scripts load
    const initializeForm = () => {
      // Checkbox "All of the above" functionality
      const handleAllCheckboxChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const allData = target.checked;
        const cfInter = target.closest('.cf-inter');
        
        if (cfInter) {
          const cfInterInfos = cfInter.querySelectorAll('.cf-interinfo');
          cfInterInfos.forEach((interInfo) => {
            const arr: string[] = [];
            const links = interInfo.querySelectorAll('.help_listcls li a');
            links.forEach((link) => {
              const val = (link as HTMLElement).textContent || '';
              if (allData) {
                arr.push(val);
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
            const hiddenInput = interInfo.querySelector('input[type="hidden"]') as HTMLInputElement;
            if (hiddenInput) {
              hiddenInput.value = arr.join(', ');
            }
          });
        }
      };

      // Individual service selection functionality
      const handleServiceClick = (event: Event) => {
        event.preventDefault();
        const target = event.target as HTMLElement;
        target.classList.toggle('active');
        
        const helpList = target.closest('.help_listcls');
        if (helpList) {
          const activeLinks = helpList.querySelectorAll('a.active');
          const text = Array.from(activeLinks).map(link => link.textContent).join(', ');
          const hiddenInput = helpList.previousElementSibling as HTMLInputElement;
          if (hiddenInput && hiddenInput.type === 'hidden') {
            hiddenInput.value = text;
          }
        }
      };

      // Form submission functionality
      const handleFormSubmit = (event: Event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data: Record<string, string> = {};
        
        formData.forEach((value, key) => {
          data[key] = value.toString();
        });

        const urlParameters = Object.entries(data).map(([key, value]) => 
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        ).join('&');

        const action = form.getAttribute("action") || "";
        
        fetch(action, {
          method: 'POST',
          body: urlParameters,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'text/html, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest'
          }
        }).then(() => {
          // Handle success - redirect to thank you page
          fetch("/pages/contact-thank-you")
            .then(response => response.text())
            .then(data => {
              setTimeout(() => {
                const parser = new DOMParser();
                const html = parser.parseFromString(data, 'text/html');
                
                // Update header
                const headerData = html.querySelector('#shopify-section-header')?.innerHTML;
                const headerElement = document.querySelector('#shopify-section-header');
                if (headerElement && headerData) {
                  headerElement.innerHTML = headerData;
                }
                
                // Update main content
                const mainData = html.querySelector('#MainContent')?.innerHTML;
                const mainElement = document.querySelector('#MainContent') as HTMLElement;
                if (mainElement && mainData) {
                  mainElement.style.paddingTop = '0';
                  mainElement.innerHTML = mainData;
                }
                
                // Update URL
                if (window.history && window.history.pushState) {
                  window.history.pushState("", "", "/pages/contact-thank-you");
                }
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 500);
            });
        }).catch((err) => {
          console.error(err);
        });
      };

      // Attach event listeners
      const allCheckbox = document.querySelector('.cf-inter-all input[type="checkbox"]');
      if (allCheckbox) {
        allCheckbox.addEventListener('change', handleAllCheckboxChange);
      }

      const serviceLinks = document.querySelectorAll('.cf-interinfo a');
      serviceLinks.forEach(link => {
        link.addEventListener('click', handleServiceClick);
      });

      const contactForm = document.querySelector('#ContactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    setTimeout(initializeForm, 100);

    return () => {
      // Cleanup using the stored elements array
      fontElements.forEach(element => {
        if (document.head.contains(element)) {
          document.head.removeChild(element);
        }
      });
    };
  }, []);

  // Helper function to render contact info sections
  const renderContactInfo = (info: typeof CONTACT_INFO[0]) => (
    <div key={info.title} className="space-y-2">
      <p className="text-xs font-normal text-[#262424]" style={{ fontFamily: FONTS_FAMILIES.aeonik }}>
        {info.title}
      </p>
      <div className="text-sm font-light text-[#262424] cursor-pointer" style={{ fontFamily: FONTS_FAMILIES.aeonik }}>
        {info.isAddress ? (
          <p dangerouslySetInnerHTML={{ __html: info.content || '' }} />
        ) : (
          <p>
            <a href={`mailto:${info.email}`} 
               title={`mailto:${info.email}`}
               className="hover:underline">
              {info.email}
            </a>
            <br />
            <a href={`tel:${info.phoneHref}`} 
               target="_blank" 
               title={`tel:${info.phoneHref}`}
               className="hover:underline">
              {info.phone}
            </a>
          </p>
        )}
      </div>
    </div>
  );

  // Helper function to render form fields
  const renderFormField = (field: typeof FORM_FIELDS[0]) => {
    const baseClasses = "w-full px-0 py-3 text-xs bg-transparent border-0 border-b border-[#262424] focus:border-[#262424] focus:ring-0 focus:outline-none placeholder-[#9B978B]";
    const containerClasses = field.fullWidth ? "relative" : "relative";
    
    return (
      <div key={field.id} className={containerClasses}>
        {field.type === 'textarea' ? (
          <textarea 
            rows={field.rows} 
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            className={`${baseClasses} resize-none`}
            style={{ fontFamily: FONTS_FAMILIES.aeonik }}
          />
        ) : (
          <input 
            autoComplete={field.autoComplete} 
            type={field.type} 
            id={field.id}
            required={field.required}
            name={field.name} 
            placeholder={field.placeholder}
            spellCheck={field.spellCheck}
            autoCapitalize={field.autoCapitalize}
            defaultValue=""
            aria-required={field.ariaRequired}
            pattern={field.pattern}
            className={baseClasses}
            style={{ fontFamily: FONTS_FAMILIES.aeonik }}
          />
        )}
        <label htmlFor={field.id} 
               className="absolute -top-4 left-0 text-xs text-[#9B978B]"
               style={{ fontFamily: FONTS_FAMILIES.aeonik }}>
          {field.label}
        </label>
      </div>
    );
  };

  // Helper function to render service categories
  const renderServiceCategory = (category: typeof SERVICE_CATEGORIES[0]) => (
    <div key={category.name} className="space-y-4">
      <label className="text-xs font-normal text-[#262424] block" 
             style={{ fontFamily: FONTS_FAMILIES.aeonik }}>
        {category.title}
      </label>
      <div>
        <input type="hidden" id={category.name} name={`contact[${category.name}]`} defaultValue={category.defaultValue} />
        <ul className="space-y-2">
          {category.services.map((service) => (
            <li key={service.name}>
              <a href="#" 
                 className={`block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6] ${service.active ? 'active-service' : ''}`}
                 data-name={category.name}
                 style={{ fontFamily: FONTS_FAMILIES.aeonik }}>
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div id="shopify-section-template--26430797840727__4ce05ced-bd60-493d-aa74-6bb0a1b6e4ad"
         className="w-full">
      <section className="relative bg-[#e5e2de] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 w-full">
              <div className="py-8 lg:py-16">
                <div className="space-y-8">
                  {CONTACT_INFO.map(renderContactInfo)}
                </div>
                <a href="https://goo.gl/maps/bdqCyzGfuAmWBenb8" 
                   target="_blank"
                   className="inline-flex items-center space-x-2 mt-8 text-[#262424] hover:opacity-80 transition-opacity group">
                  <span className="transform transition-transform group-hover:translate-x-1">
                    {ARROW_SVG}
                  </span>
                  <span className="text-sm font-light" style={{ fontFamily: FONTS_FAMILIES.aeonik }}>Google maps</span>
                  <span className="transform transition-transform group-hover:translate-x-1">
                    {ARROW_SVG}
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-8 w-full">
              <div className="bg-white p-8 lg:p-16">
                <h2 className="text-[40px] lg:text-[60px] leading-tight font-light text-[#262424] mb-4" 
                    style={{ fontFamily: FONTS_FAMILIES.editorial }}>
                  Let&apos;s grow together.
                </h2>
                <p className="text-xs font-normal text-[#262424] mb-8 block lg:hidden" 
                   style={{ fontFamily: FONTS_FAMILIES.aeonik }}>
                  Details
                </p>
                <div className="w-full">
                  <form ref={formRef} 
                        method="post" 
                        action="/contact#ContactForm" 
                        id="ContactForm"
                        acceptCharset="UTF-8" 
                        className="w-full space-y-6">
                    <input type="hidden" name="form_type" value="contact" />
                    <input type="hidden" name="utf8" value="✓" />
                    <input type="hidden" name="datetime" value="2025-12-23 15:06" />
                    
                    <div className="space-y-6">
                      {/* Name Field */}
                      {renderFormField(FORM_FIELDS[0])}

                      {/* Email and Phone Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {renderFormField(FORM_FIELDS[1])}
                        {renderFormField(FORM_FIELDS[2])}
                      </div>

                      {/* Company Field */}
                      {renderFormField(FORM_FIELDS[3])}

                      {/* Project Description */}
                      {renderFormField(FORM_FIELDS[4])}
                    </div>

                    {/* Interest Selection */}
                    <div className="mt-12 space-y-8">
                      <p className="text-sm font-normal text-[#262424]" 
                         style={{ fontFamily: FONTS_FAMILIES.aeonik }}>
                        I&apos;m interested in
                      </p>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {SERVICE_CATEGORIES.map(renderServiceCategory)}
                      </div>

                      {/* All of the above checkbox */}
                      <div className="flex items-center space-x-3 mt-6">
                        <input type="checkbox" 
                               name="All of the above" 
                               defaultValue=""
                               id="ContactForm-All of the above"
                               className="w-4 h-4 text-[#262424] bg-transparent border-[#262424] rounded focus:ring-[#262424] focus:ring-2" />
                        <label htmlFor="ContactForm-All of the above" 
                               className="text-xs text-[#262424]"
                               style={{ fontFamily: FONTS_FAMILIES.aeonik }}>
                          All of the above
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" 
                            className="w-full mt-12 bg-[#c0bbae] hover:bg-[#9B978B] text-[#262424] py-4 px-8 transition-colors duration-200 group flex items-center justify-center space-x-4">
                      <span className="transform transition-transform group-hover:translate-x-1">
                        {ARROW_SVG}
                      </span>
                      <span className="text-xs font-normal" style={{ fontFamily: FONTS_FAMILIES.aeonik }}>
                        Submit enquiry
                      </span>
                      <span className="transform transition-transform group-hover:translate-x-1">
                        {ARROW_SVG}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactMainSection

