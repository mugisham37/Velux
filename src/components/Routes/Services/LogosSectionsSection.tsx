"use client"

import { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'

interface LogoData {
  src: string;
  height: string;
}

const LogosSectionsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Memoize logo data to avoid recreating on every render
  const wsAllData = useMemo(() => {
    const mobileData: LogoData[] = [
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/shopify-plus-logo--black.png?v=1687155627", "height": "20" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/62e1786b32ece27b4ee77340.png?v=1687155635", "height": "20" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/MollieLogo23-Black.png?v=1687155675", "height": "20" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/2560px-Yotpo-logo.png?v=1687155729", "height": "20" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/gorgias_logo_dark.png?v=1687155807", "height": "20" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/SB-logo.svg?v=1687155885", "height": "25" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/Klarna-logotype-black.png?v=1687156015", "height": "18" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/JW.png?v=1687156274", "height": "20" }
    ];

    const desktopData: LogoData[] = [
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/shopify-plus-logo--black.png?v=1687155627", "height": "35" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/62e1786b32ece27b4ee77340.png?v=1687155635", "height": "35" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/MollieLogo23-Black.png?v=1687155675", "height": "30" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/2560px-Yotpo-logo.png?v=1687155729", "height": "30" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/gorgias_logo_dark.png?v=1687155807", "height": "30" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/SB-logo.svg?v=1687155885", "height": "50" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/Klarna-logotype-black.png?v=1687156015", "height": "26" },
      { "src": "https://www.notsellingliquid.com/cdn/shop/files/JW.png?v=1687156274", "height": "39" }
    ];

    return isMobile ? mobileData : desktopData;
  }, [isMobile]);

  // Initialize logo sources - only show first 8 logos
  const initialLogos = useMemo(() => wsAllData.slice(0, 8), [wsAllData]);
  const [logoSources, setLogoSources] = useState<LogoData[]>(initialLogos);

  // Update logo sources when wsAllData changes (mobile/desktop switch)
  useEffect(() => {
    setLogoSources(wsAllData.slice(0, 8));
  }, [wsAllData]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Logo swapping animation - simplified approach
  useEffect(() => {
    if (wsAllData.length <= 8) return; // Only swap if we have more logos than visible slots

    let swapInterval: NodeJS.Timeout;

    const swapLogos = () => {
      const visibleSources = logoSources.map(logo => logo.src);
      const availableLogos = wsAllData.filter(logo => !visibleSources.includes(logo.src));
      
      if (availableLogos.length > 0) {
        const randomIndex = Math.floor(Math.random() * 8); // Random position in visible grid
        const randomLogo = availableLogos[Math.floor(Math.random() * availableLogos.length)];
        
        setLogoSources(prev => {
          const newSources = [...prev];
          newSources[randomIndex] = randomLogo;
          return newSources;
        });
      }
      
      swapInterval = setTimeout(swapLogos, 1500);
    };

    // Start swapping after initial render
    const initialDelay = setTimeout(() => {
      swapLogos();
    }, 2000);

    return () => {
      if (swapInterval) {
        clearTimeout(swapInterval);
      }
      clearTimeout(initialDelay);
    };
  }, [wsAllData, logoSources]);

  return (
    <div 
      id="shopify-section-template--26430798102871__ab97d492-08df-484e-aae8-e27cf183a590"
      className="shopify-section"
    >
      <section className="relative bg-[#e5e2de] py-[60px] lg:py-[120px]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-3">
            <div className="lg:col-span-1 flex flex-col gap-6">
              <h3 
                className="text-3xl lg:text-5xl leading-tight text-[#262424]"
                style={{ fontFamily: "'PP Editorial Old', serif" }}
              >
                Connected with the best in the industry, and a certified Shopify Premier partner.
              </h3>
              <div className="text-xs leading-relaxed text-[#262424]" style={{ fontFamily: "'Aeonik', sans-serif" }}>
                <p>Together with our unique set of partners, we&apos;ve changed the way we do e-commerce.
                  Collaboration is key to connecting a tech stack that works harmoniously for your
                  brand. These platforms help boost growth and satisfaction across channels.</p>
              </div>
              <a 
                href="/pages/shopify-plus-agency-amsterdam" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C0BBAE] text-[#262424] text-xs transition-opacity duration-300 hover:opacity-80 no-underline"
                style={{ fontFamily: "'Aeonik', sans-serif", borderRadius: '0' }}
              >
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                      fill="initial"></path>
                  </svg>
                </span>
                <span className="label">Shopify plus</span>
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                      fill="initial"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="lg:col-span-2 flex items-center">
              <div className="w-full">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-8 lg:grid-cols-4 lg:gap-12 items-center">
                  {logoSources.map((logo, index) => {
                    const altTexts = [
                      "Shopify Plus partner",
                      "Klaviyo partner", 
                      "Mollie partner",
                      "Yotpo partner",
                      "Gorgias partner",
                      "Stone & Bridges partner",
                      "Klarna partner",
                      "JW Player partner"
                    ];
                    
                    return (
                      <div key={`logo-${index}-${logo.src}`} className="ws-logoinr flex items-center justify-center p-4">
                        <div 
                          className="relative transition-opacity duration-500 ease-in-out"
                          style={{ 
                            maxHeight: isMobile ? 
                              (logo.height === "25" ? "25px" : logo.height === "18" ? "18px" : "20px") : 
                              `${logo.height}px`,
                            height: isMobile ? 
                              (logo.height === "25" ? "25px" : logo.height === "18" ? "18px" : "20px") : 
                              `${logo.height}px`
                          }}
                        >
                          <Image
                            src={logo.src}
                            alt={altTexts[index] || "Partner logo"}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 120px, (max-width: 1200px) 200px, 250px"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    );
                  })}
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