'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Define the logo data type
interface LogoData {
  src: string;
  height: string;
}

// Define logo configuration with responsive heights and alt text
interface LogoConfig {
  src: string;
  alt: string;
  heights: {
    mobile: string;
    desktop: string;
  };
}

// Constants
const LOGO_COUNT = 13;
const MOBILE_BREAKPOINT = 992;
const TRANSITION_DURATION = 0.5;
const SWAP_INTERVAL = 1500;

// Logo configuration data
const LOGO_CONFIGS: LogoConfig[] = [
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/Arte_249682ff-c069-4279-8305-be8ab8a41b9d.png?v=1687154871",
    alt: "Shopify Plus Agency Case - Arte Antwerp",
    heights: { mobile: "16", desktop: "28" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/merrachi.png?v=1699440937",
    alt: "Shopify Plus Agency Case - Merrachi",
    heights: { mobile: "17", desktop: "18" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/Viktor_Rolf_Logo.png?v=1699440943",
    alt: "Shopify Plus Agency Case - Viktor&Rolf",
    heights: { mobile: "18", desktop: "18" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-fabiennechapot.svg?v=1686921430",
    alt: "Shopify Plus Agency Case - Fabienne Chapot",
    heights: { mobile: "14", desktop: "17" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/298b29fcddb8c2ddab1fd523daa5b75c.png?v=1687155091",
    alt: "Shopify Plus Agency Case - Maha Amsterdam",
    heights: { mobile: "20", desktop: "38" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/Four.png?v=1687154869",
    alt: "Shopify Plus Agency Case - Four Amsterdam",
    heights: { mobile: "15", desktop: "25" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/olaf_c53cd18f-5a38-4941-b851-0a6c2c2be4da.png?v=1687176376",
    alt: "Shopify Plus Agency Case - Olaf",
    heights: { mobile: "15", desktop: "28" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/DC_logo_-_Danielle_Cathari.png?v=1699441872",
    alt: "Shopify Plus Agency Case - Daniëlle Cathari",
    heights: { mobile: "12", desktop: "18" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-rinopelle.svg?v=1686921431",
    alt: "Shopify Plus Agency Case - Rino & Pelle",
    heights: { mobile: "12", desktop: "17" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/sevenlayer.png?v=1687179857",
    alt: "Shopify Plus Agency Case - Seven Layer United Kingdom",
    heights: { mobile: "12", desktop: "15" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/blush-gold-jewels_juweliershuys-van-veen-simons_merk_logo.jpg?v=1687176473",
    alt: "Shopify Plus Agency Case - Blush Jewels",
    heights: { mobile: "20", desktop: "50" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-coldlaundry.svg?v=1686921432",
    alt: "Shopify Plus Agency Case - Cold Laundry",
    heights: { mobile: "10", desktop: "15" }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-oqium.svg?v=1686921431",
    alt: "Shopify Plus Agency Case - Oqium",
    heights: { mobile: "12", desktop: "22" }
  }
];

const WhyShopifySection = () => {
  // Get initial logo data based on screen size
  const getInitialLogoData = (): LogoData[] => {
    if (typeof window === 'undefined') {
      // Default to desktop version during SSR
      return LOGO_CONFIGS.map(config => ({
        src: config.src,
        height: config.heights.desktop
      }));
    }
    
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    return LOGO_CONFIGS.map(config => ({
      src: config.src,
      height: isMobile ? config.heights.mobile : config.heights.desktop
    }));
  };

  // State to manage current logo sources for each position
  const [currentLogos, setCurrentLogos] = useState<LogoData[]>(getInitialLogoData);
  const [logoOpacities, setLogoOpacities] = useState<number[]>(new Array(LOGO_COUNT).fill(1));

  useEffect(() => {
    // Logo swapping functionality
    const wsAllData = getInitialLogoData();

    const transitionDuration = TRANSITION_DURATION;

    function swapLogos() {
      // Only proceed if we have enough logos
      if (wsAllData.length >= LOGO_COUNT) {
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

        setTimeout(swapLogos, SWAP_INTERVAL);
      }
    }

    // Start the logo swapping if we have enough logos
    if (wsAllData.length >= LOGO_COUNT) {
      const timer = setTimeout(swapLogos, SWAP_INTERVAL);
      return () => clearTimeout(timer);
    }
  }, []);

  // Reusable Logo Component
  const LogoContainer = ({ index }: { index: number }) => {
    const config = LOGO_CONFIGS[index];
    const currentLogo = currentLogos[index];
    const opacity = logoOpacities[index];
    
    return (
      <div className="flex items-center justify-center px-8 py-16 lg:px-4 lg:py-22 bg-[#3a3a3a] rounded-[5px]">
        <Image
          src={currentLogo?.src || config.src}
          alt={config.alt}
          width={200}
          height={parseInt(currentLogo?.height || config.heights.desktop)}
          className={`w-auto transition-opacity duration-500 ease-in-out`}
          style={{ 
            opacity: opacity || 0,
            maxHeight: `${currentLogo?.height || config.heights.desktop}px`
          }} 
          unoptimized
        />
      </div>
    );
  };

  return (
    <section className="max-w-screen bg-[#c0bbae] pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px] relative">
      {/* Container - Max width with horizontal padding */}
      <div className="mx-auto px-4 lg:px-6">
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
              className="cta-link-hover flex w-fit items-center gap-2 bg-[#9B978B] text-[#262424] px-6 py-3 text-[12px] font-['Aeonik'] font-medium transition-all duration-300 hover:bg-[#8a8680] uppercase rounded-[9px]"
            >
              <span className="arrow-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                    fill="currentColor"></path>
                </svg>
              </span>
              <span>Our clients</span>
              <span className="arrow-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                    fill="currentColor"></path>
                </svg>
              </span>
            </a>
          </div>
          
          {/* Right Column - 8/12 columns on desktop */}
          <div className="lg:col-span-8 lg:border-l-2 lg:border-[#262424] lg:pl-6">
            <div className="w-full">
              {/* Logo Grid Container */}
              <div className="grid grid-cols-3 gap-1 lg:grid-cols-4 lg:gap-2">
                {Array.from({ length: LOGO_COUNT }, (_, index) => (
                  <LogoContainer key={index} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyShopifySection

