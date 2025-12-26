"use client"

import { useEffect, useRef } from 'react'

const ContactMainSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Load custom fonts
    const fontLink1 = document.createElement('link');
    fontLink1.href = "//www.notsellingliquid.com/cdn/shop/files/Aeonik-Regular.woff2?v=11777328378613522966";
    fontLink1.rel = "preload";
    fontLink1.as = "font";
    fontLink1.type = "font/woff2";
    fontLink1.crossOrigin = "anonymous";
    document.head.appendChild(fontLink1);

    const fontLink2 = document.createElement('link');
    fontLink2.href = "//www.notsellingliquid.com/cdn/shop/files/PPEditorialOld-Light.woff2?v=13586537134979268968";
    fontLink2.rel = "preload";
    fontLink2.as = "font";
    fontLink2.type = "font/woff2";
    fontLink2.crossOrigin = "anonymous";
    document.head.appendChild(fontLink2);

    // Add font face styles
    const fontStyle = document.createElement('style');
    fontStyle.textContent = `
      @font-face {
        font-family: 'Aeonik';
        src: url("//www.notsellingliquid.com/cdn/shop/files/Aeonik-Regular.woff2?v=11777328378613522966") format('woff2'),
             url("//www.notsellingliquid.com/cdn/shop/files/Aeonik-Regular.woff?v=14984412462167582789") format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'PP Editorial Old';
        src: url("//www.notsellingliquid.com/cdn/shop/files/PPEditorialOld-Light.woff2?v=13586537134979268968") format('woff2'),
             url("//www.notsellingliquid.com/cdn/shop/files/PPEditorialOld-Light.woff?v=12339577768757059424") format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(fontStyle);

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
      // Cleanup
      if (document.head.contains(fontLink1)) {
        document.head.removeChild(fontLink1);
      }
      if (document.head.contains(fontLink2)) {
        document.head.removeChild(fontLink2);
      }
      if (document.head.contains(fontStyle)) {
        document.head.removeChild(fontStyle);
      }
    };
  }, []);

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
                  <div className="space-y-2">
                    <p className="text-xs font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>General</p>
                    <div className="text-sm font-light text-[#262424] cursor-pointer" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                      <p>
                        <a href="mailto:hello@notsellingliquid.com" 
                           title="mailto:hello@notsellingliquid.com"
                           className="hover:underline">
                          hello@notsellingliquid.com
                        </a>
                        <br />
                        <a href="tel:0202101913" 
                           target="_blank" 
                           title="tel:0202101913"
                           className="hover:underline">
                          +31 (0) 20 21 01 913
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>new business</p>
                    <div className="text-sm font-light text-[#262424] cursor-pointer" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                      <p>
                        <a href="mailto:new@notsellingliquid.com" 
                           title="mailto:new@notsellingliquid.com"
                           className="hover:underline">
                          new@notsellingliquid.com
                        </a>
                        <br />
                        <a href="tel:0202101913" 
                           target="_blank" 
                           title="tel:0202101913"
                           className="hover:underline">
                          +31 (0) 20 21 01 913
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>Visit</p>
                    <div className="text-sm font-light text-[#262424] cursor-pointer" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                      <p>
                        Danzigerkade 15 A5<br />
                        1013 AP Amsterdam<br />
                        Netherlands
                      </p>
                    </div>
                  </div>
                </div>
                <a href="https://goo.gl/maps/bdqCyzGfuAmWBenb8" 
                   target="_blank"
                   className="inline-flex items-center space-x-2 mt-8 text-[#262424] hover:opacity-80 transition-opacity group">
                  <span className="transform transition-transform group-hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                            fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-light" style={{ fontFamily: 'Aeonik, sans-serif' }}>Google maps</span>
                  <span className="transform transition-transform group-hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                            fill="currentColor"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-8 w-full">
              <div className="bg-white p-8 lg:p-16">
                <h2 className="text-[40px] lg:text-[60px] leading-tight font-light text-[#262424] mb-4" 
                    style={{ fontFamily: 'PP Editorial Old, serif' }}>
                  Let&apos;s grow together.
                </h2>
                <p className="text-xs font-normal text-[#262424] mb-8 block lg:hidden" 
                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
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
                      <div className="relative">
                        <input autoComplete="name" 
                               type="text" 
                               id="ContactForm-name"
                               required 
                               name="contact[name]" 
                               placeholder="Name"
                               className="w-full px-0 py-3 text-xs bg-transparent border-0 border-b border-[#262424] focus:border-[#262424] focus:ring-0 focus:outline-none placeholder-[#9B978B]"
                               style={{ fontFamily: 'Aeonik, sans-serif' }} />
                        <label htmlFor="ContactForm-name" 
                               className="absolute -top-4 left-0 text-xs text-[#9B978B]"
                               style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Name
                        </label>
                      </div>

                      {/* Email and Phone Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="relative">
                          <input autoComplete="email" 
                                 type="email" 
                                 id="ContactForm-email"
                                 name="contact[email]" 
                                 spellCheck="false"
                                 autoCapitalize="off" 
                                 defaultValue="" 
                                 aria-required="true"
                                 placeholder="Email"
                                 className="w-full px-0 py-3 text-xs bg-transparent border-0 border-b border-[#262424] focus:border-[#262424] focus:ring-0 focus:outline-none placeholder-[#9B978B]"
                                 style={{ fontFamily: 'Aeonik, sans-serif' }} />
                          <label htmlFor="ContactForm-email" 
                                 className="absolute -top-4 left-0 text-xs text-[#9B978B]"
                                 style={{ fontFamily: 'Aeonik, sans-serif' }}>
                            Email
                          </label>
                        </div>
                        <div className="relative">
                          <input type="tel" 
                                 id="ContactForm-phone" 
                                 autoComplete="tel"
                                 name="contact[phone]" 
                                 pattern="^\+?[0-9\s\-()]*$" 
                                 defaultValue=""
                                 placeholder="Phone"
                                 className="w-full px-0 py-3 text-xs bg-transparent border-0 border-b border-[#262424] focus:border-[#262424] focus:ring-0 focus:outline-none placeholder-[#9B978B]"
                                 style={{ fontFamily: 'Aeonik, sans-serif' }} />
                          <label htmlFor="ContactForm-phone" 
                                 className="absolute -top-4 left-0 text-xs text-[#9B978B]"
                                 style={{ fontFamily: 'Aeonik, sans-serif' }}>
                            Phone
                          </label>
                        </div>
                      </div>

                      {/* Company Field */}
                      <div className="relative">
                        <input autoComplete="company" 
                               type="text" 
                               id="ContactForm-company"
                               required 
                               name="contact[company]" 
                               placeholder="Company"
                               className="w-full px-0 py-3 text-xs bg-transparent border-0 border-b border-[#262424] focus:border-[#262424] focus:ring-0 focus:outline-none placeholder-[#9B978B]"
                               style={{ fontFamily: 'Aeonik, sans-serif' }} />
                        <label htmlFor="ContactForm-company" 
                               className="absolute -top-4 left-0 text-xs text-[#9B978B]"
                               style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Company
                        </label>
                      </div>

                      {/* Project Description */}
                      <div className="relative">
                        <textarea rows={4} 
                                  id="ContactForm-project-description"
                                  name="contact[projectdescription]"
                                  placeholder="Project description"
                                  className="w-full px-0 py-3 text-xs bg-transparent border-0 border-b border-[#262424] focus:border-[#262424] focus:ring-0 focus:outline-none placeholder-[#9B978B] resize-none"
                                  style={{ fontFamily: 'Aeonik, sans-serif' }}></textarea>
                        <label htmlFor="ContactForm-project-description"
                               className="absolute -top-4 left-0 text-xs text-[#9B978B]"
                               style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Project description
                        </label>
                      </div>
                    </div>

                    {/* Interest Selection */}
                    <div className="mt-12 space-y-8">
                      <p className="text-sm font-normal text-[#262424]" 
                         style={{ fontFamily: 'Aeonik, sans-serif' }}>
                        I&apos;m interested in
                      </p>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Build Section */}
                        <div className="space-y-4">
                          <label className="text-xs font-normal text-[#262424] block" 
                                 style={{ fontFamily: 'Aeonik, sans-serif' }}>
                            Build
                          </label>
                          <div>
                            <input type="hidden" id="Build" name="contact[Build]" defaultValue="UX & UI Design" />
                            <ul className="space-y-2">
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6] active-service"
                                   data-name="Build"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  UX & UI Design
                                </a>
                              </li>
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Build"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Development
                                </a>
                              </li>
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Build"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Klaviyo email automation
                                </a>
                              </li>
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Build"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Shopify Plus migration
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Manage Section */}
                        <div className="space-y-4">
                          <label className="text-xs font-normal text-[#262424] block" 
                                 style={{ fontFamily: 'Aeonik, sans-serif' }}>
                            Manage
                          </label>
                          <div>
                            <input type="hidden" id="Manage" name="contact[Manage]" defaultValue="" />
                            <ul className="space-y-2">
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Manage"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Paid advertising
                                </a>
                              </li>
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Manage"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Retention & CDP
                                </a>
                              </li>
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Manage"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Project management
                                </a>
                              </li>
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Manage"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Website operations
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Grow Section */}
                        <div className="space-y-4">
                          <label className="text-xs font-normal text-[#262424] block" 
                                 style={{ fontFamily: 'Aeonik, sans-serif' }}>
                            Grow
                          </label>
                          <div>
                            <input type="hidden" id="Grow" name="contact[Grow]" defaultValue="" />
                            <ul className="space-y-2">
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Grow"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Analytics & reporting
                                </a>
                              </li>
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Grow"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Data &amp; intelligence
                                </a>
                              </li>
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Grow"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Growth strategy
                                </a>
                              </li>
                              <li>
                                <a href="#" 
                                   className="block text-xs text-[#262424] hover:text-[#9B978B] transition-colors py-1 px-2 rounded hover:bg-[#f7f7f6]"
                                   data-name="Grow"
                                   style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                  Conversion optimization
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
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
                               style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          All of the above
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" 
                            className="w-full mt-12 bg-[#c0bbae] hover:bg-[#9B978B] text-[#262424] py-4 px-8 transition-colors duration-200 group flex items-center justify-center space-x-4">
                      <span className="transform transition-transform group-hover:translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                fill="currentColor"></path>
                        </svg>
                      </span>
                      <span className="text-xs font-normal" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                        Submit enquiry
                      </span>
                      <span className="transform transition-transform group-hover:translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                fill="currentColor"></path>
                        </svg>
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