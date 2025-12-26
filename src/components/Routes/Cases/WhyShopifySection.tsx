'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Define the logo data type
interface LogoData {
  src: string;
  height: string;
}

const WhyShopifySection = () => {
  // Get initial logo data based on screen size
  const getInitialLogoData = (): LogoData[] => {
    if (typeof window === 'undefined') {
      // Default to desktop version during SSR
      return [
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/Arte_249682ff-c069-4279-8305-be8ab8a41b9d.png?v=1687154871", "height": "28" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/merrachi.png?v=1699440937", "height": "18" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/Viktor_Rolf_Logo.png?v=1699440943", "height": "18" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-fabiennechapot.svg?v=1686921430", "height": "17" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/298b29fcddb8c2ddab1fd523daa5b75c.png?v=1687155091", "height": "38" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/Four.png?v=1687154869", "height": "25" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/olaf_c53cd18f-5a38-4941-b851-0a6c2c2be4da.png?v=1687176376", "height": "28" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/DC_logo_-_Danielle_Cathari.png?v=1699441872", "height": "18" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-rinopelle.svg?v=1686921431", "height": "17" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/sevenlayer.png?v=1687179857", "height": "15" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/blush-gold-jewels_juweliershuys-van-veen-simons_merk_logo.jpg?v=1687176473", "height": "50" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-coldlaundry.svg?v=1686921432", "height": "15" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-oqium.svg?v=1686921431", "height": "22" }
      ];
    }
    
    if (window.innerWidth < 992) {
      return [
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/Arte_249682ff-c069-4279-8305-be8ab8a41b9d.png?v=1687154871", "height": "16" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/merrachi.png?v=1699440937", "height": "17" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/Viktor_Rolf_Logo.png?v=1699440943", "height": "18" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-fabiennechapot.svg?v=1686921430", "height": "14" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/298b29fcddb8c2ddab1fd523daa5b75c.png?v=1687155091", "height": "20" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/Four.png?v=1687154869", "height": "15" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/olaf_c53cd18f-5a38-4941-b851-0a6c2c2be4da.png?v=1687176376", "height": "15" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/DC_logo_-_Danielle_Cathari.png?v=1699441872", "height": "12" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-rinopelle.svg?v=1686921431", "height": "12" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/sevenlayer.png?v=1687179857", "height": "12" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/blush-gold-jewels_juweliershuys-van-veen-simons_merk_logo.jpg?v=1687176473", "height": "20" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-coldlaundry.svg?v=1686921432", "height": "10" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-oqium.svg?v=1686921431", "height": "12" }
      ];
    } else {
      return [
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/Arte_249682ff-c069-4279-8305-be8ab8a41b9d.png?v=1687154871", "height": "28" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/merrachi.png?v=1699440937", "height": "18" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/Viktor_Rolf_Logo.png?v=1699440943", "height": "18" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-fabiennechapot.svg?v=1686921430", "height": "17" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/298b29fcddb8c2ddab1fd523daa5b75c.png?v=1687155091", "height": "38" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/Four.png?v=1687154869", "height": "25" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/olaf_c53cd18f-5a38-4941-b851-0a6c2c2be4da.png?v=1687176376", "height": "28" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/DC_logo_-_Danielle_Cathari.png?v=1699441872", "height": "18" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-rinopelle.svg?v=1686921431", "height": "17" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/sevenlayer.png?v=1687179857", "height": "15" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/blush-gold-jewels_juweliershuys-van-veen-simons_merk_logo.jpg?v=1687176473", "height": "50" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-coldlaundry.svg?v=1686921432", "height": "15" },
        { "src": "https://www.notsellingliquid.com/cdn/shop/files/logo-oqium.svg?v=1686921431", "height": "22" }
      ];
    }
  };

  // State to manage current logo sources for each position
  const [currentLogos, setCurrentLogos] = useState<LogoData[]>(getInitialLogoData);
  const [logoOpacities, setLogoOpacities] = useState<number[]>(new Array(13).fill(1));

  useEffect(() => {
    // Logo swapping functionality
    const wsAllData = getInitialLogoData();

    const transitionDuration = 0.5;

    function swapLogos() {
      // Only proceed if we have enough logos (13 total)
      if (wsAllData.length >= 13) {
        const index = Math.floor(Math.random() * wsAllData.length);
        
        // Fade out the selected logo
        setLogoOpacities(prev => {
          const newOpacities = [...prev];
          newOpacities[index] = 0;
          return newOpacities;
        });

        setTimeout(() => {
          // Get currently visible logos
          const visibleLogos: string[] = [];
          setCurrentLogos(prevLogos => {
            prevLogos.forEach(logo => visibleLogos.push(logo.src));
            
            const currentLogo = prevLogos[index].src;
            const availableAll = wsAllData.filter(logo => !visibleLogos.includes(logo.src) && currentLogo !== logo.src);
            
            if (availableAll.length === 0) return prevLogos;
            
            const randomAll = availableAll[Math.floor(Math.random() * availableAll.length)];
            
            // Update the logo at the selected index
            const newLogos = [...prevLogos];
            newLogos[index] = randomAll;
            return newLogos;
          });

          // Fade in the new logo
          setLogoOpacities(prev => {
            const newOpacities = [...prev];
            newOpacities[index] = 1;
            return newOpacities;
          });
        }, transitionDuration * 1000);

        setTimeout(swapLogos, 1500);
      }
    }

    // Start the logo swapping if we have enough logos
    if (wsAllData.length >= 13) {
      const timer = setTimeout(swapLogos, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="bg-[#c0bbae] pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px] relative">
      {/* Container - Max width with horizontal padding */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        {/* Grid Container - CSS Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - 4/12 columns on desktop */}
          <div className="lg:col-span-4">
            {/* Main Heading */}
            <h3 className="text-[30px] lg:text-[48px] leading-[1.2] font-light mb-6 lg:mb-8 font-['PP_Editorial_Old'] text-[#262424]">
              Purpose driven brands. Ones with heart, soul and character.
            </h3>
            
            {/* Caption Text */}
            <div className="mb-8 lg:mb-10">
              <p className="text-[12px] leading-normal text-[#262424] font-['Aeonik']">
                From the ones with boundless potential that still need to come off the ground, to
                the established ones who have shown they can change mindsets and perspectives
                with their reputation.<br /><br />We will use our expertise to build, manage and
                grow your brand to elevate its position in the market alongside these players.
              </p>
            </div>
            
            {/* CTA Button */}
            <a 
              href="/pages/clients" 
              className="inline-flex items-center gap-2 bg-[#9B978B] text-[#262424] px-6 py-3 text-[12px] font-['Aeonik'] font-medium transition-all duration-300 hover:bg-[#8a8680] group"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                    fill="currentColor"></path>
                </svg>
              </span>
              <span>Our clients</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                    fill="currentColor"></path>
                </svg>
              </span>
            </a>
          </div>
          
          {/* Right Column - 8/12 columns on desktop */}
          <div className="lg:col-span-8">
            <div className="w-full">
              {/* Logo Grid Container */}
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                
                {/* Logo 1 - Arte Antwerp */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[0]?.src || "https://www.notsellingliquid.com/cdn/shop/files/Arte_249682ff-c069-4279-8305-be8ab8a41b9d.png?v=1687154871"}
                    alt="Shopify Plus Agency Case - Arte Antwerp" 
                    width={200}
                    height={parseInt(currentLogos[0]?.height || "28")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[16px] lg:max-h-[28px]"
                    style={{ 
                      opacity: logoOpacities[0] || 0,
                      maxHeight: `${currentLogos[0]?.height || "28"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 2 - Merrachi */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[1]?.src || "https://www.notsellingliquid.com/cdn/shop/files/merrachi.png?v=1699440937"}
                    alt="Shopify Plus Agency Case - Merrachi" 
                    width={200}
                    height={parseInt(currentLogos[1]?.height || "18")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[17px] lg:max-h-[18px]"
                    style={{ 
                      opacity: logoOpacities[1] || 0,
                      maxHeight: `${currentLogos[1]?.height || "18"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 3 - Viktor & Rolf */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[2]?.src || "https://www.notsellingliquid.com/cdn/shop/files/Viktor_Rolf_Logo.png?v=1699440943"}
                    alt="Shopify Plus Agency Case - Viktor&Rolf" 
                    width={200}
                    height={parseInt(currentLogos[2]?.height || "18")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[18px] lg:max-h-[18px]"
                    style={{ 
                      opacity: logoOpacities[2] || 0,
                      maxHeight: `${currentLogos[2]?.height || "18"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 4 - Fabienne Chapot */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[3]?.src || "https://www.notsellingliquid.com/cdn/shop/files/logo-fabiennechapot.svg?v=1686921430"}
                    alt="Shopify Plus Agency Case - Fabienne Chapot" 
                    width={200}
                    height={parseInt(currentLogos[3]?.height || "17")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[14px] lg:max-h-[17px]"
                    style={{ 
                      opacity: logoOpacities[3] || 0,
                      maxHeight: `${currentLogos[3]?.height || "17"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 5 - Maha Amsterdam */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[4]?.src || "https://www.notsellingliquid.com/cdn/shop/files/298b29fcddb8c2ddab1fd523daa5b75c.png?v=1687155091"}
                    alt="Shopify Plus Agency Case - Maha Amsterdam" 
                    width={200}
                    height={parseInt(currentLogos[4]?.height || "38")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[20px] lg:max-h-[38px]"
                    style={{ 
                      opacity: logoOpacities[4] || 0,
                      maxHeight: `${currentLogos[4]?.height || "38"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 6 - Four Amsterdam */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[5]?.src || "https://www.notsellingliquid.com/cdn/shop/files/Four.png?v=1687154869"}
                    alt="Shopify Plus Agency Case - Four Amsterdam" 
                    width={200}
                    height={parseInt(currentLogos[5]?.height || "25")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[15px] lg:max-h-[25px]"
                    style={{ 
                      opacity: logoOpacities[5] || 0,
                      maxHeight: `${currentLogos[5]?.height || "25"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 7 - Olaf */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[6]?.src || "https://www.notsellingliquid.com/cdn/shop/files/olaf_c53cd18f-5a38-4941-b851-0a6c2c2be4da.png?v=1687176376"}
                    alt="Shopify Plus Agency Case - Olaf" 
                    width={200}
                    height={parseInt(currentLogos[6]?.height || "28")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[15px] lg:max-h-[28px]"
                    style={{ 
                      opacity: logoOpacities[6] || 0,
                      maxHeight: `${currentLogos[6]?.height || "28"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 8 - Daniëlle Cathari */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[7]?.src || "https://www.notsellingliquid.com/cdn/shop/files/DC_logo_-_Danielle_Cathari.png?v=1699441872"}
                    alt="Shopify Plus Agency Case - Daniëlle Cathari" 
                    width={200}
                    height={parseInt(currentLogos[7]?.height || "18")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[12px] lg:max-h-[18px]"
                    style={{ 
                      opacity: logoOpacities[7] || 0,
                      maxHeight: `${currentLogos[7]?.height || "18"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 9 - Rino & Pelle */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[8]?.src || "https://www.notsellingliquid.com/cdn/shop/files/logo-rinopelle.svg?v=1686921431"}
                    alt="Shopify Plus Agency Case - Rino & Pelle" 
                    width={200}
                    height={parseInt(currentLogos[8]?.height || "17")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[12px] lg:max-h-[17px]"
                    style={{ 
                      opacity: logoOpacities[8] || 0,
                      maxHeight: `${currentLogos[8]?.height || "17"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 10 - Seven Layer */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[9]?.src || "https://www.notsellingliquid.com/cdn/shop/files/sevenlayer.png?v=1687179857"}
                    alt="Shopify Plus Agency Case - Seven Layer United Kingdom" 
                    width={200}
                    height={parseInt(currentLogos[9]?.height || "15")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[12px] lg:max-h-[15px]"
                    style={{ 
                      opacity: logoOpacities[9] || 0,
                      maxHeight: `${currentLogos[9]?.height || "15"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 11 - Blush Jewels */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[10]?.src || "https://www.notsellingliquid.com/cdn/shop/files/blush-gold-jewels_juweliershuys-van-veen-simons_merk_logo.jpg?v=1687176473"}
                    alt="Shopify Plus Agency Case - Blush Jewels" 
                    width={200}
                    height={parseInt(currentLogos[10]?.height || "50")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[20px] lg:max-h-[50px]"
                    style={{ 
                      opacity: logoOpacities[10] || 0,
                      maxHeight: `${currentLogos[10]?.height || "50"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 12 - Cold Laundry */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[11]?.src || "https://www.notsellingliquid.com/cdn/shop/files/logo-coldlaundry.svg?v=1686921432"}
                    alt="Shopify Plus Agency Case - Cold Laundry" 
                    width={200}
                    height={parseInt(currentLogos[11]?.height || "15")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[10px] lg:max-h-[15px]"
                    style={{ 
                      opacity: logoOpacities[11] || 0,
                      maxHeight: `${currentLogos[11]?.height || "15"}px`
                    }} 
                    unoptimized
                  />
                </div>

                {/* Logo 13 - Oqium */}
                <div className="flex items-center justify-center p-4 min-h-[80px] lg:min-h-[100px]">
                  <Image
                    src={currentLogos[12]?.src || "https://www.notsellingliquid.com/cdn/shop/files/logo-oqium.svg?v=1686921431"}
                    alt="Shopify Plus Agency Case - Oqium" 
                    width={200}
                    height={parseInt(currentLogos[12]?.height || "22")}
                    className="w-auto transition-opacity duration-500 ease-in-out max-h-[12px] lg:max-h-[22px]"
                    style={{ 
                      opacity: logoOpacities[12] || 0,
                      maxHeight: `${currentLogos[12]?.height || "22"}px`
                    }} 
                    unoptimized
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyShopifySection

