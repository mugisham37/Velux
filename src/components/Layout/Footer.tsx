'use client'

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { GoogleTagManager } from '@next/third-parties/google'

// Create a client-only component for dynamic content
const ClientOnlyContent = dynamic(() => Promise.resolve(({ children }: { children: React.ReactNode }) => <>{children}</>), {
  ssr: false
})

const Footer = () => {
  return (
    <>
      <GoogleTagManager gtmId="G-EPVZR6W3SB" />
      
      <ClientOnlyContent>
        <Script
          id="shopify-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.shopUrl = "https://www.notsellingliquid.com";
              window.routes = {
                cart_add_url: "/cart/add",
                cart_change_url: "/cart/change",
                cart_update_url: "/cart/update",
                predictive_search_url: "/search/suggest",
              };
              window.cartStrings = {
                error: "There was an error while updating your cart. Please try again.",
                quantityError: "You can only add [quantity] of this item to your cart.",
              };
              window.variantStrings = {
                addToCart: "Add to cart",
                soldOut: "Sold out",
                unavailable: "Unavailable",
              };
              window.accessibilityStrings = {
                imageAvailable: "Image [index] is now available in gallery view",
                shareSuccess: "Translation missing: en.general.share.success_message",
                pauseSlideshow: "Translation missing: en.sections.slideshow.pause_slideshow",
                playSlideshow: "Translation missing: en.sections.slideshow.play_slideshow",
              };
            `
          }}
        />
      </ClientOnlyContent>
      
      <div 
        style={{
          fontFamily: '"Aeonik", sans-serif'
        }}
      >
        <footer className="bg-[#262424] text-white">
          <div className="w-screen mx-auto px-4">
            <div className="footer-main">
              {/* Footer Top Section */}
              <div className="pt-16 pb-12">
                <div className="text-center">
                  <h2 
                    className="text-[60px] lg:text-[80px] leading-tight mb-8 font-light"
                    style={{ fontFamily: '"PP Editorial Old", serif' }}
                  >
                    We power the stories of fashion
                  </h2>
                  <a 
                    href="/pages/contact" 
                    className="inline-flex items-center gap-4 bg-[#c0bbae] text-[#262424] px-8 py-4 text-xs uppercase font-medium tracking-wider hover:bg-opacity-90 transition-all duration-300 rounded-[10px]"
                  >
                    <span className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path 
                          fillRule="evenodd" 
                          clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>let&apos;s talk</span>
                  </a>
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="border-t border-white-700 block lg:hidden mb-12 pt-10">
                <ul className="grid grid-cols-3 gap-2">
                  <li className="text-center"><a href="/pages/services" className="text-xs uppercase tracking-wider hover:text-[#c0bbae] transition-colors">Services</a></li>
                  <li className="text-center"><a href="/pages/about-us" className="text-xs uppercase tracking-wider hover:text-[#c0bbae] transition-colors">About us</a></li>
                  <li className="text-center">
                    <a href="/pages/shopify-plus-agency-amsterdam" className="text-xs uppercase tracking-wider hover:text-[#c0bbae] transition-colors">Shopify Plus</a>
                  </li>
                  <li className="text-center"><a href="/pages/case-studies" className="text-xs uppercase tracking-wider hover:text-[#c0bbae] transition-colors">Cases</a></li>
                  <li className="text-center"><a href="/pages/clients" className="text-xs uppercase tracking-wider hover:text-[#c0bbae] transition-colors">Clients</a></li>
                  <li className="text-center">
                    <a href="/blogs/inside-the-industry" className="text-xs uppercase tracking-wider hover:text-[#c0bbae] transition-colors">Articles</a>
                  </li>
                  <li className="text-center">
                    <a href="https://careers.notsellingliquid.com/" className="text-xs uppercase tracking-wider hover:text-[#c0bbae] transition-colors">Careers</a>
                  </li>
                  <li className="text-center"><a href="/pages/contact" className="text-xs uppercase tracking-wider hover:text-[#c0bbae] transition-colors">Contact</a></li>
                  <li className="text-center">
                    <a href="https://www.linkedin.com/company/not-selling-liquid" className="text-xs uppercase tracking-wider hover:text-[#c0bbae] transition-colors">LinkedIn</a>
                  </li>
                </ul>
              </div>

              {/* Footer Center - Desktop Layout */}
              <div className="border-t border-white-700 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 text-center lg:text-left pt-10">
                {/* Left Section - Logo & Description */}
                <div className="lg:col-span-4">
                <div className="mb-8">
                    <Link href="/" title="Not selling liquid" className="inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="133" height="52" viewBox="0 0 133 52" fill="none">
                        <path
                          d="M61.0264 38.4177C61.5983 39.5615 62.4152 40.4601 63.3956 41.1137C64.3759 41.8489 65.5197 42.3391 66.8268 42.6659C68.1339 42.9927 69.441 43.1561 70.9116 43.1561C71.8919 43.1561 72.8723 43.0744 73.9343 42.911C74.9963 42.7476 76.0584 42.4208 76.957 42.0123C77.9374 41.5222 78.6726 40.9503 79.3262 40.1333C79.9797 39.3164 80.3065 38.336 80.3065 37.1106C80.3065 35.8035 79.898 34.7415 79.0811 33.9245C78.2641 33.1075 77.1204 32.454 75.8133 31.8821C74.4245 31.3102 72.9539 30.9018 71.2383 30.4933C69.5227 30.0848 67.8071 29.6763 66.0098 29.1045C64.2125 28.6143 62.4152 28.1241 60.7813 27.4706C59.0657 26.817 57.5135 26.0001 56.2064 24.938C54.8176 23.876 53.7555 22.6505 52.9386 21.0983C52.1216 19.5461 51.7132 17.6671 51.7132 15.4614C51.7132 13.0105 52.2033 10.8047 53.2654 9.00742C54.3274 7.21013 55.7162 5.65791 57.4318 4.43248C59.1474 3.20705 61.1081 2.30841 63.2322 1.73654C65.3563 1.16467 67.5621 0.837891 69.6861 0.837891C72.2187 0.837891 74.5879 1.08298 76.957 1.65484C79.2445 2.22671 81.3686 3.12536 83.1659 4.35079C84.9632 5.57622 86.4337 7.21013 87.414 9.17081C88.4761 11.1315 88.9662 13.5007 88.9662 16.2783H78.6726C78.5909 14.8078 78.2641 13.6641 77.774 12.6837C77.2838 11.7034 76.5485 10.9681 75.7316 10.4779C74.9146 9.90607 73.9343 9.57929 72.7906 9.3342C71.6468 9.08912 70.5031 9.00742 69.196 9.00742C68.379 9.00742 67.4804 9.08912 66.6634 9.25251C65.8465 9.4159 65.0295 9.74268 64.2942 10.2329C63.559 10.723 62.9871 11.2132 62.5786 11.9485C62.0885 12.602 61.9251 13.5007 61.9251 14.481C61.9251 15.4614 62.0885 16.1966 62.4969 16.7685C62.8237 17.3403 63.559 17.9122 64.621 18.4024C65.6831 18.8926 67.1536 19.3827 69.0326 19.8729C70.9116 20.3631 73.3624 21.0166 76.3852 21.7519C77.2838 21.9153 78.5092 22.2421 80.1431 22.7322C81.777 23.2224 83.3293 23.9577 84.8815 25.0197C86.4337 26.0817 87.8225 27.4706 88.9662 29.1862C90.11 30.9018 90.6818 33.1075 90.6818 35.8035C90.6818 38.0093 90.2734 40.0516 89.3747 41.9306C88.5578 43.8096 87.2506 45.4435 85.535 46.8324C83.8194 48.2212 81.777 49.2832 79.2445 50.0185C76.7119 50.7537 73.8526 51.1622 70.5848 51.1622C67.8888 51.1622 65.3563 50.8354 62.8237 50.1819C60.2912 49.5283 58.0854 48.4663 56.2064 47.0774C54.3274 45.6886 52.7752 43.8913 51.6315 41.7673C50.4877 39.6432 49.9976 37.0289 49.9976 34.0879H60.2912C60.1278 35.8852 60.3729 37.274 61.0264 38.4177Z"
                          fill="white"
                        />
                        <path d="M109.553 2.06323V41.3587H133V50.2635H98.9326V2.06323H109.553Z" fill="white" />
                        <path
                          d="M30.7174 50.2638L0 1.98181H11.1106L31.2076 34.3332H31.371V1.98181H41.3378V50.2638H30.7174Z"
                          fill="white"
                        />
                        <path d="M10.9472 39.3164H0V50.2636H10.9472V39.3164Z" fill="white" />
                      </svg>
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-[23px] leading-[27px] text-gray-300">
                      We build, manage and grow the presence of purpose-led
                      brands in the digital sphere.
                    </p>
                  </div>
                </div>

                {/* Center Section - Menu Columns (Desktop Only) */}
                <div className="hidden lg:block lg:col-span-5">
                  <div className="grid grid-cols-4 gap-8">
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-4 text-gray-400">info</p>
                      <ul className="space-y-2">
                        <li>
                          <a href="/pages/about-us" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">About us</a>
                        </li>
                        <li>
                          <a href="/pages/services" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Services</a>
                        </li>
                        <li>
                          <a href="/pages/clients" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Clients</a>
                        </li>
                        <li>
                          <a href="/pages/case-studies" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Case studies</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-4 text-gray-400">Services</p>
                      <ul className="space-y-2">
                        <li>
                          <a href="/pages/service-build" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Build</a>
                        </li>
                        <li>
                          <a href="/pages/service-manage" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Manage</a>
                        </li>
                        <li>
                          <a href="/pages/service-grow" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Grow</a>
                        </li>
                        <li>
                          <a href="/pages/shopify-plus-agency-amsterdam" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Shopify Plus</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-4 text-gray-400">Social</p>
                      <ul className="space-y-2">
                        <li>
                          <a href="https://www.linkedin.com/company/not-selling-liquid" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Linkedin</a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/notsellingliquid/" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Instagram</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-4 text-gray-400 uppercase">Work with us</p>
                      <ul className="space-y-2">
                        <li>
                          <a href="/pages/contact" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Contact</a>
                        </li>
                        <li>
                          <a href="https://careers.notsellingliquid.com/" className="text-xs hover:text-[#c0bbae] transition-colors uppercase">Careers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Section - Contact Info */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-2 text-gray-400">General</p>
                    <div className="text-xs leading-relaxed">
                      <p>
                        <a href="mailto:hello@notsellingliquid.com" className="hover:text-[#c0bbae] transition-colors">
                          hello@notsellingliquid.com
                        </a>
                        <br />
                        <a href="tel:0202101913" target="_blank" className="hover:text-[#c0bbae] transition-colors">
                          +31 (0) 20 21 01 913
                        </a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-2 text-gray-400">New Business</p>
                    <div className="text-xs leading-relaxed">
                      <p>
                        <a href="mailto:new@notsellingliquid.com" className="hover:text-[#c0bbae] transition-colors">
                          new@notsellingliquid.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="pt-1 pb-8 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 hidden lg:block">
                    Official Shopify Premier Partner &amp; Klaviyo Gold Master
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">© 2025 Not selling liquid</p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 hidden lg:block">
                    Danzigerkade 15 A5, 1013 AP Amsterdam, Netherlands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer> 
        <ClientOnlyContent>
          <div 
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `
                <shop-cart-sync experiments="{}" data-instance-id="a06b82ab-7c33-4c06-ac7b-9f27afbbc65a">
                  <template shadowrootmode="open">
                    <iframe 
                      data-testid="shop-cart-sync-iframe"
                      src="https://shop.app/pay/hop?analytics_trace_id=a06b82ab-7c33-4c06-ac7b-9f27afbbc65a&target_origin=https%3A%2F%2Fwww.notsellingliquid.com&client_handle=not-selling-liquid.myshopify.com"
                      class="hidden">
                    </iframe>
                  </template>
                </shop-cart-sync>
              `
            }}
          />
          
          <iframe 
            suppressHydrationWarning
            id="_hjSafeContext_98405066" 
            title="_hjSafeContext" 
            tabIndex={-1} 
            aria-hidden="true" 
            src="about:blank"
            style={{
              display: 'none',
              width: '1px',
              height: '1px',
              opacity: 0,
              pointerEvents: 'none' as const,
            }}
          />
          
          <Script 
            id="ccbpbkebodcjkknkfkpmfeciinhidaeh--catcSiteScript" 
            data-sitescriptmessagingtimeoutms="3000"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var script = document.createElement('script');
                  script.src = 'chrome-extension://ccbpbkebodcjkknkfkpmfeciinhidaeh/siteScript.js';
                  script.async = true;
                  document.head.appendChild(script);
                })();
              `
            }}
          />
        </ClientOnlyContent>
      </div>
    </>
  )
}

export default Footer

