"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

const LogosSectionsSection = () => {
  const [logoSources, setLogoSources] = useState<string[]>([
    "https://www.notsellingliquid.com/cdn/shop/files/shopify-plus-logo--black_900x.png?v=1687155627",
    "https://www.notsellingliquid.com/cdn/shop/files/62e1786b32ece27b4ee77340_581x.png?v=1687155635",
    "https://www.notsellingliquid.com/cdn/shop/files/MollieLogo23-Black_1600x.png?v=1687155675",
    "https://www.notsellingliquid.com/cdn/shop/files/2560px-Yotpo-logo_2560x.png?v=1687155729",
    "https://www.notsellingliquid.com/cdn/shop/files/gorgias_logo_dark_1280x.png?v=1687155807",
    "https://www.notsellingliquid.com/cdn/shop/files/SB-logo_726x.svg?v=1687155885",
    "https://www.notsellingliquid.com/cdn/shop/files/Klarna-logotype-black_998x.png?v=1687156015",
    "https://www.notsellingliquid.com/cdn/shop/files/JW_504x.png?v=1687156274"
  ]);

  useEffect(() => {
    // Initialize logo functionality
    let wsAllData: Array<{src: string; height: string}> = [];
    if (window.innerWidth < 992) {
        wsAllData = [
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/shopify-plus-logo--black.png?v=1687155627", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/62e1786b32ece27b4ee77340.png?v=1687155635", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/MollieLogo23-Black.png?v=1687155675", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/2560px-Yotpo-logo.png?v=1687155729", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/gorgias_logo_dark.png?v=1687155807", "height": "20" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/SB-logo.svg?v=1687155885", "height": "25" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/Klarna-logotype-black.png?v=1687156015", "height": "18" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/JW.png?v=1687156274", "height": "20" }
        ];
    } else {
        wsAllData = [
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/shopify-plus-logo--black.png?v=1687155627", "height": "35" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/62e1786b32ece27b4ee77340.png?v=1687155635", "height": "35" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/MollieLogo23-Black.png?v=1687155675", "height": "30" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/2560px-Yotpo-logo.png?v=1687155729", "height": "30" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/gorgias_logo_dark.png?v=1687155807", "height": "30" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/SB-logo.svg?v=1687155885", "height": "50" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/Klarna-logotype-black.png?v=1687156015", "height": "26" }, 
            { "src": "https://www.notsellingliquid.com/cdn/shop/files/JW.png?v=1687156274", "height": "39" }
        ];
    }
    
    function initLogo() {
        // Initialize with the wsAllData sources
        const newSources = wsAllData.map(item => item.src);
        setLogoSources(newSources);
        swapLogos();
    }
    
    function swapLogos() {
      const logoContainers = document.querySelectorAll('.logo-container');
      if (logoContainers.length > 12) {
        const index = Math.floor(Math.random() * wsAllData.length);
        
        // Get current visible logos
        const visibleLogos = logoSources.slice();
        const currentLogo = visibleLogos[index];
        
        // Find available logos that aren't currently visible
        const availableAll = wsAllData.filter(logo => 
          !visibleLogos.includes(logo.src) && currentLogo !== logo.src
        );
        
        if (availableAll.length > 0) {
          const randomAll = availableAll[Math.floor(Math.random() * availableAll.length)];
          
          // Update the logo source
          setLogoSources(prev => {
            const newSources = [...prev];
            newSources[index] = randomAll.src;
            return newSources;
          });
        }
        
        setTimeout(swapLogos, 1500);
      }
    }
    
    const logoContainers = document.querySelectorAll('.logo-container');
    if (logoContainers.length > 12) {
        initLogo();
    }
  }, [logoSources]);

  return (
    <div className="bg-[#e5e2de] relative z-0">
      <section className="pt-[60px] pb-[60px] lg:pt-[120px] lg:pb-[120px] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4">
              <h3 
                className="text-[30px] lg:text-[48px] font-light leading-tight text-[#262424] mb-6"
                style={{ fontFamily: 'PP Editorial Old, serif' }}
              >
                Connected with the best in the industry, and a certified Shopify Premier partner.
              </h3>
              <div className="text-sm leading-relaxed text-[#262424] mb-6">
                <p>Together with our unique set of partners, we&apos;ve changed the way we do e-commerce.
                  Collaboration is key to connecting a tech stack that works harmoniously for your
                  brand. These platforms help boost growth and satisfaction across channels.</p>
              </div>
              <a 
                href="/pages/shopify-plus-agency-amsterdam" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c0bbae] text-[#262424] text-sm font-medium rounded-md hover:bg-[#9B978B] transition-colors duration-200"
              >
                <span className="w-4 h-4 fill-current">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                      fill="initial"></path>
                  </svg>
                </span>
                <span>Shopify plus</span>
                <span className="w-4 h-4 fill-current">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                      fill="initial"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="lg:col-span-8">
              <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="logo-container flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <Image 
                      src={logoSources[0]}
                      alt="Shopify Plus partner" 
                      width={120}
                      height={35}
                      className="w-auto h-auto object-contain max-h-[20px] lg:max-h-[35px]"
                      priority
                    />
                  </div>
                  <div className="logo-container flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <Image 
                      src={logoSources[1]}
                      alt="Klaviyo partner" 
                      width={120}
                      height={35}
                      className="w-auto h-auto object-contain max-h-[20px] lg:max-h-[35px]"
                    />
                  </div>
                  <div className="logo-container flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <Image 
                      src={logoSources[2]}
                      alt="Mollie partner" 
                      width={120}
                      height={30}
                      className="w-auto h-auto object-contain max-h-[20px] lg:max-h-[30px]"
                    />
                  </div>
                  <div className="logo-container flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <Image 
                      src={logoSources[3]}
                      alt="Yotpo partner" 
                      width={120}
                      height={30}
                      className="w-auto h-auto object-contain max-h-[20px] lg:max-h-[30px]"
                    />
                  </div>
                  <div className="logo-container flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <Image 
                      src={logoSources[4]}
                      alt="Gorgias partner" 
                      width={120}
                      height={30}
                      className="w-auto h-auto object-contain max-h-[20px] lg:max-h-[30px]"
                    />
                  </div>
                  <div className="logo-container flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <Image 
                      src={logoSources[5]}
                      alt="Stone & Bridges partner" 
                      width={120}
                      height={50}
                      className="w-auto h-auto object-contain max-h-[25px] lg:max-h-[50px]"
                    />
                  </div>
                  <div className="logo-container flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <Image 
                      src={logoSources[6]}
                      alt="Klarna partner" 
                      width={120}
                      height={26}
                      className="w-auto h-auto object-contain max-h-[18px] lg:max-h-[26px]"
                    />
                  </div>
                  <div className="logo-container flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <Image 
                      src={logoSources[7]}
                      alt="JW Player partner" 
                      width={120}
                      height={39}
                      className="w-auto h-auto object-contain max-h-[20px] lg:max-h-[39px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogosSectionsSection