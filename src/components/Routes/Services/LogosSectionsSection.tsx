"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

const LOGO_DATA = [
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/shopify-plus-logo--black.png?v=1687155627",
    alt: "Shopify Plus partner",
    mobileHeight: "20",
    desktopHeight: "35",
    mobileMaxHeight: "max-h-[20px]",
    desktopMaxHeight: "max-h-[35px]"
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/62e1786b32ece27b4ee77340.png?v=1687155635",
    alt: "Klaviyo partner",
    mobileHeight: "20",
    desktopHeight: "35",
    mobileMaxHeight: "max-h-[20px]",
    desktopMaxHeight: "max-h-[35px]"
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/MollieLogo23-Black.png?v=1687155675",
    alt: "Mollie partner",
    mobileHeight: "20",
    desktopHeight: "30",
    mobileMaxHeight: "max-h-[20px]",
    desktopMaxHeight: "max-h-[30px]"
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/2560px-Yotpo-logo.png?v=1687155729",
    alt: "Yotpo partner",
    mobileHeight: "20",
    desktopHeight: "30",
    mobileMaxHeight: "max-h-[20px]",
    desktopMaxHeight: "max-h-[30px]"
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/gorgias_logo_dark.png?v=1687155807",
    alt: "Gorgias partner",
    mobileHeight: "20",
    desktopHeight: "30",
    mobileMaxHeight: "max-h-[20px]",
    desktopMaxHeight: "max-h-[30px]"
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/SB-logo.svg?v=1687155885",
    alt: "Stone & Bridges partner",
    mobileHeight: "25",
    desktopHeight: "50",
    mobileMaxHeight: "max-h-[25px]",
    desktopMaxHeight: "max-h-[50px]"
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/Klarna-logotype-black.png?v=1687156015",
    alt: "Klarna partner",
    mobileHeight: "18",
    desktopHeight: "26",
    mobileMaxHeight: "max-h-[18px]",
    desktopMaxHeight: "max-h-[26px]"
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/JW.png?v=1687156274",
    alt: "JW Player partner",
    mobileHeight: "20",
    desktopHeight: "39",
    mobileMaxHeight: "max-h-[20px]",
    desktopMaxHeight: "max-h-[39px]"
  }
]

const LogosSectionsSection = () => {
  const [logoSources, setLogoSources] = useState<string[]>(
    LOGO_DATA.map(logo => logo.src.replace('.png', '_900x.png').replace('.svg', '_726x.svg').replace('JW.png', 'JW_504x.png').replace('62e1786b32ece27b4ee77340.png', '62e1786b32ece27b4ee77340_581x.png').replace('MollieLogo23-Black.png', 'MollieLogo23-Black_1600x.png').replace('2560px-Yotpo-logo.png', '2560px-Yotpo-logo_2560x.png').replace('gorgias_logo_dark.png', 'gorgias_logo_dark_1280x.png').replace('Klarna-logotype-black.png', 'Klarna-logotype-black_998x.png'))
  );

  useEffect(() => {
    // Initialize logo functionality
    let wsAllData: Array<{src: string; height: string}> = []
    if (window.innerWidth < 992) {
        wsAllData = LOGO_DATA.map(logo => ({
          src: logo.src,
          height: logo.mobileHeight
        }))
    } else {
        wsAllData = LOGO_DATA.map(logo => ({
          src: logo.src,
          height: logo.desktopHeight
        }))
    }
    
    function initLogo() {
        // Initialize with the wsAllData sources
        const newSources = wsAllData.map(item => item.src)
        setLogoSources(newSources)
        swapLogos()
    }
    
    function swapLogos() {
      const logoContainers = document.querySelectorAll('.logo-swap-container')
      if (logoContainers.length > 12) {
        const index = Math.floor(Math.random() * wsAllData.length)
        
        // Get current visible logos
        const visibleLogos = logoSources.slice()
        const currentLogo = visibleLogos[index]
        
        // Find available logos that aren't currently visible
        const availableAll = wsAllData.filter(logo => 
          !visibleLogos.includes(logo.src) && currentLogo !== logo.src
        )
        
        if (availableAll.length > 0) {
          const randomAll = availableAll[Math.floor(Math.random() * availableAll.length)]
          
          // Update the logo source
          setLogoSources(prev => {
            const newSources = [...prev]
            newSources[index] = randomAll.src
            return newSources
          })
        }
        
        setTimeout(swapLogos, 1500)
      }
    }
    
    const logoContainers = document.querySelectorAll('.logo-swap-container')
    if (logoContainers.length > 12) {
        initLogo()
    }
  }, [logoSources])

  return (
    <div className="bg-[#262424] relative z-0 max-w-screen">
      <section className="pt-[60px] pb-[60px] lg:pt-[120px] lg:pb-[120px] relative bg-[#e5e2de] rounded-b-2xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4">
              <h3 className="font-['PP_Editorial_Old',serif] text-[30px] lg:text-[48px] font-light leading-[1.25] text-[#262424] mb-6">
                Connected with the best in the industry, and a certified Shopify Premier partner.
              </h3>
              <div className="font-['Aeonik',sans-serif] text-sm leading-[1.625] text-[#262424] mb-6">
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
                <span className="font-['Aeonik',sans-serif] uppercase">Shopify plus</span>
                <span className="w-4 h-4 fill-current">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                      fill="initial"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="lg:col-span-8 lg:pl-8 lg:border-l border-[#080807]">
              <div className="w-full">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                  {LOGO_DATA.map((logo, index) => (
                    <div key={index} className="logo-swap-container flex items-center justify-center p-20 bg-white rounded-lg shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]">
                      <Image 
                        src={logoSources[index]}
                        alt={logo.alt}
                        width={190}
                        height={parseInt(logo.desktopHeight)}
                        className={`w-auto h-auto object-contain ${logo.mobileMaxHeight} lg:${logo.desktopMaxHeight}`}
                        priority={index === 0}
                      />
                    </div>
                  ))}
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