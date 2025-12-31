'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Logo configuration with all data in one place
const LOGO_CONFIG = [
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/merrachi.png?v=1699440937",
    alt: "Shopify Plus Agency Case - Arte Antwerp",
    height: { mobile: 16, desktop: 28 },
    maxHeight: { mobile: "max-h-4", desktop: "max-h-7" },
    initialOpacity: 1
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-oqium.svg?v=1686921431",
    alt: "Shopify Plus Agency Case - Merrachi",
    height: { mobile: 17, desktop: 18 },
    maxHeight: { mobile: "max-h-[17px]", desktop: "max-h-[18px]" },
    initialOpacity: 1
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/blush-gold-jewels_juweliershuys-van-veen-simons_merk_logo.jpg?v=1687176473",
    alt: "Shopify Plus Agency Case - Viktor&amp;Rolf",
    height: { mobile: 18, desktop: 18 },
    maxHeight: { mobile: "max-h-[18px]", desktop: "max-h-[18px]" },
    initialOpacity: 1
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-rinopelle.svg?v=1686921431",
    alt: "Shopify Plus Agency Case - Fabienne Chapot",
    height: { mobile: 14, desktop: 17 },
    maxHeight: { mobile: "max-h-[14px]", desktop: "max-h-[17px]" },
    initialOpacity: 1
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/298b29fcddb8c2ddab1fd523daa5b75c.png?v=1687155091",
    alt: "Shopify Plus Agency Case - Maha Amsterdam",
    height: { mobile: 20, desktop: 38 },
    maxHeight: { mobile: "max-h-5", desktop: "max-h-[38px]" },
    initialOpacity: 1
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/Viktor_Rolf_Logo.png?v=1699440943",
    alt: "Shopify Plus Agency Case - Four Amsterdam",
    height: { mobile: 15, desktop: 25 },
    maxHeight: { mobile: "max-h-[15px]", desktop: "max-h-[25px]" },
    initialOpacity: 0
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-fabiennechapot.svg?v=1686921430",
    alt: "Shopify Plus Agency Case - Olaf",
    height: { mobile: 15, desktop: 28 },
    maxHeight: { mobile: "max-h-[15px]", desktop: "max-h-7" },
    initialOpacity: 1
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/Four.png?v=1687154869",
    alt: "Shopify Plus Agency Case - Rino &amp; Pelle",
    height: { mobile: 12, desktop: 17 },
    maxHeight: { mobile: "max-h-3", desktop: "max-h-[17px]" },
    initialOpacity: 1
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/olaf_c53cd18f-5a38-4941-b851-0a6c2c2be4da.png?v=1687176376",
    alt: "Shopify Plus Agency Case - Blush Jewels",
    height: { mobile: 20, desktop: 50 },
    maxHeight: { mobile: "max-h-5", desktop: "max-h-[50px]" },
    initialOpacity: 1
  }
]

// All available logos for carousel
const ALL_LOGOS_DATA = [
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/Arte_249682ff-c069-4279-8305-be8ab8a41b9d.png?v=1687154871",
    height: { mobile: 16, desktop: 28 }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/merrachi.png?v=1699440937",
    height: { mobile: 17, desktop: 18 }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/Viktor_Rolf_Logo.png?v=1699440943",
    height: { mobile: 18, desktop: 18 }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-fabiennechapot.svg?v=1686921430",
    height: { mobile: 14, desktop: 17 }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/298b29fcddb8c2ddab1fd523daa5b75c.png?v=1687155091",
    height: { mobile: 20, desktop: 38 }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/Four.png?v=1687154869",
    height: { mobile: 15, desktop: 25 }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/olaf_c53cd18f-5a38-4941-b851-0a6c2c2be4da.png?v=1687176376",
    height: { mobile: 15, desktop: 28 }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-rinopelle.svg?v=1686921431",
    height: { mobile: 12, desktop: 17 }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/blush-gold-jewels_juweliershuys-van-veen-simons_merk_logo.jpg?v=1687176473",
    height: { mobile: 20, desktop: 50 }
  },
  {
    src: "https://www.notsellingliquid.com/cdn/shop/files/logo-oqium.svg?v=1686921431",
    height: { mobile: 12, desktop: 22 }
  }
]

const ShopifyPlusSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [logoSources, setLogoSources] = useState<string[]>(
    LOGO_CONFIG.map(logo => logo.src)
  )
  const [logoOpacities, setLogoOpacities] = useState<number[]>(
    LOGO_CONFIG.map(logo => logo.initialOpacity)
  )

  useEffect(() => {
    // Handle window resize for responsive behavior
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992)
    }

    // Set initial state
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const transitionDuration = 0.5

    function swapLogos() {
      const index = Math.floor(Math.random() * logoSources.length)
      
      // Fade out
      setLogoOpacities(prev => {
        const newOpacities = [...prev]
        newOpacities[index] = 0
        return newOpacities
      })

      setTimeout(() => {
        // Get available logos (not currently visible)
        const visibleSources = logoSources.filter((_, i) => logoOpacities[i] === 1)
        const availableLogos = ALL_LOGOS_DATA.filter(logo => !visibleSources.includes(logo.src) && logoSources[index] !== logo.src)
        
        if (availableLogos.length > 0) {
          const randomLogo = availableLogos[Math.floor(Math.random() * availableLogos.length)]
          
          // Update source and fade in
          setLogoSources(prev => {
            const newSources = [...prev]
            newSources[index] = randomLogo.src
            return newSources
          })
          
          setLogoOpacities(prev => {
            const newOpacities = [...prev]
            newOpacities[index] = 1
            return newOpacities
          })
        }
      }, transitionDuration * 1000)
    }

    // Start the carousel
    const interval = setInterval(swapLogos, 1500)
    
    return () => clearInterval(interval)
  }, [isMobile, logoSources, logoOpacities])

  return (
    <div 
      id="shopify-section-template--26430796759383__b7c8b597-4f0c-454b-8ffd-e2c4d58acaa6"
      className="bg-[#e5e2de]"
    >
      <section className="relative pt-10 pb-10 lg:pt-10 lg:pb-20 border-b border-[#262424]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="56" viewBox="0 0 160 56" fill="none">
                <g clipPath="url(#clip0_2350_4544)">
                  <path
                    d="M69.4823 11.0363C70.2196 11.499 71.3255 11.8652 72.4709 11.8652C74.1794 11.8652 75.1888 10.9785 75.1888 9.68695C75.1888 8.49177 74.4896 7.79779 72.7429 7.14238C70.627 6.39058 69.3266 5.29186 69.3266 3.49909C69.3266 1.49429 70.9956 0.0100098 73.519 0.0100098C74.8392 0.0100098 75.8097 0.318429 76.3722 0.626849L75.907 1.99549C75.4989 1.74489 74.6256 1.37865 73.4612 1.37865C71.6751 1.37865 71.0154 2.41955 71.0154 3.30631C71.0154 4.50149 71.8111 5.07976 73.5972 5.77374C75.79 6.62193 76.8966 7.68215 76.8966 9.55199C76.8966 11.4218 75.4411 13.2532 72.3743 13.2532C71.1317 13.2532 69.7537 12.8869 69.0742 12.4242L69.5211 11.0363H69.4823Z"
                    fill="#262424"
                  />
                  <path
                    d="M83.534 0.202637V5.58081H89.7839V0.202637H91.4727V13.041H89.7839V7.00734H83.534V13.041H81.8452V0.202637H83.534Z"
                    fill="#262424"
                  />
                  <path
                    d="M108.321 6.50629C108.321 10.9206 105.623 13.2724 102.324 13.2724C99.0238 13.2724 96.5005 10.6315 96.5005 6.75689C96.5005 2.88225 99.0436 0.0100098 102.499 0.0100098C105.954 0.0100098 108.321 2.68947 108.321 6.52554V6.50629ZM98.2668 6.69907C98.2668 9.4556 99.7618 11.9038 102.401 11.9038C105.041 11.9038 106.555 9.49417 106.555 6.56411C106.555 4.00029 105.216 1.34008 102.44 1.34008C99.6645 1.34008 98.2866 3.88465 98.2866 6.69907H98.2668Z"
                    fill="#262424"
                  />
                  <path
                    d="M113.368 0.357289C114.183 0.222399 115.232 0.106689 116.59 0.106689C118.22 0.106689 119.443 0.492249 120.22 1.16698C120.918 1.78382 121.365 2.70908 121.365 3.84644C121.365 4.98373 121.016 5.92831 120.356 6.60304C119.463 7.54755 118.026 8.01018 116.396 8.01018C115.892 8.01018 115.426 8.01018 115.037 7.89454V13.0414H113.368V0.357289ZM115.037 6.54515C115.406 6.66086 115.872 6.69936 116.415 6.69936C118.434 6.69936 119.657 5.71628 119.657 3.96208C119.657 2.20788 118.434 1.43683 116.61 1.43683C115.872 1.43683 115.328 1.5139 115.037 1.57179V6.56447V6.54515Z"
                    fill="#262424"
                  />
                  <path d="M128.004 0.202637V13.041H126.315V0.202637H128.004Z" fill="#262424" />
                  <path
                    d="M133.671 0.202637H140.639V1.59053H135.359V5.86998H140.251V7.23862H135.359V13.0602H133.671V0.202637Z"
                    fill="#262424"
                  />
                  <path
                    d="M149.102 13.0602V7.60493L145.007 0.202637H146.929L148.754 3.74954C149.239 4.71337 149.646 5.50374 150.034 6.40975H150.073C150.423 5.56156 150.869 4.71337 151.373 3.74954L153.237 0.202637H155.139L150.811 7.58561V13.0602H149.122H149.102Z"
                    fill="#262424"
                  />
                  <path
                    d="M69.5788 21.8314C70.4331 21.6772 71.6165 21.5615 73.189 21.5615C74.9166 21.5615 76.1783 21.9278 76.9938 22.6025C77.7698 23.2387 78.2555 24.2411 78.2555 25.4555C78.2555 26.6699 77.8671 27.6723 77.1488 28.3663C76.198 29.3108 74.7418 29.7542 73.053 29.7542C72.6068 29.7542 72.2184 29.7349 71.8886 29.6578V34.5156H69.54V21.8314H69.5788ZM71.9273 27.8265C72.2382 27.9036 72.6068 27.9422 73.0925 27.9422C74.8588 27.9422 75.9457 27.0747 75.9457 25.5711C75.9457 24.1639 74.9554 23.3929 73.3053 23.3929C72.6653 23.3929 72.1797 23.4507 71.9273 23.5085V27.8458V27.8265Z"
                    fill="#262424"
                  />
                  <path
                    d="M83.0688 21.8314C83.9619 21.6772 85.2821 21.5615 86.66 21.5615C88.5237 21.5615 89.7853 21.87 90.6389 22.6025C91.3571 23.1808 91.7652 24.0868 91.7652 25.1856C91.7652 26.8434 90.6389 27.9615 89.4167 28.4048V28.4627C90.3478 28.8096 90.8912 29.6964 91.2211 30.9494C91.6292 32.5494 91.9788 34.0336 92.2502 34.5348H89.8241C89.6296 34.1686 89.3194 33.1084 88.9508 31.5084C88.5814 29.8313 87.9605 29.2916 86.6213 29.253H85.4371V34.5348H83.0886V21.87L83.0688 21.8314ZM85.4181 27.5181H86.8151C88.4264 27.5181 89.397 26.6892 89.397 25.3977C89.397 24.0097 88.4066 23.335 86.8736 23.335C86.1166 23.335 85.6507 23.3929 85.3984 23.4507V27.4988L85.4181 27.5181Z"
                    fill="#262424"
                  />
                  <path
                    d="M104.089 28.8094H99.2174V32.5683H104.672V34.4961H96.8491V21.6577H104.38V23.5854H99.2174V26.8817H104.089V28.7901V28.8094Z"
                    fill="#262424"
                  />
                  <path
                    d="M120.627 29.2726C120.55 27.6148 120.472 25.61 120.472 23.875H120.414C119.987 25.4557 119.443 27.1906 118.881 28.8099L116.978 34.3616H115.154L113.446 28.887C112.941 27.2292 112.475 25.4943 112.145 23.875H112.107C112.048 25.5521 111.971 27.6148 111.873 29.3496L111.582 34.5158H109.389L110.243 21.6775H113.348L115.037 26.8436C115.503 28.3665 115.911 29.8894 116.221 31.3159H116.28C116.629 29.9087 117.076 28.3472 117.58 26.8244L119.366 21.6775H122.433L123.17 34.5158H120.861L120.608 29.2726H120.627Z"
                    fill="#262424"
                  />
                  <path d="M130.72 21.6577V34.4961H128.353V21.6577H130.72Z" fill="#262424" />
                  <path
                    d="M143.415 28.8094H138.543V32.5683H143.997V34.4961H136.175V21.6577H143.706V23.5854H138.543V26.8817H143.415V28.7901V28.8094Z"
                    fill="#262424"
                  />
                  <path
                    d="M148.927 21.8314C149.82 21.6772 151.14 21.5615 152.518 21.5615C154.382 21.5615 155.643 21.87 156.497 22.6025C157.215 23.1808 157.622 24.0868 157.622 25.1856C157.622 26.8434 156.497 27.9615 155.274 28.4048V28.4627C156.206 28.8096 156.749 29.6964 157.079 30.9494C157.487 32.5494 157.836 34.0336 158.108 34.5348H155.681C155.487 34.1686 155.177 33.1084 154.808 31.5084C154.439 29.8313 153.818 29.2916 152.479 29.253H151.295V34.5348H148.946V21.87L148.927 21.8314ZM151.275 27.5181H152.673C154.284 27.5181 155.255 26.6892 155.255 25.3977C155.255 24.0097 154.265 23.335 152.732 23.335C151.975 23.335 151.509 23.3929 151.256 23.4507V27.4988L151.275 27.5181Z"
                    fill="#262424"
                  />
                  <path
                    d="M69.6943 43.2865C70.5098 43.1515 71.5579 43.0359 72.9162 43.0359C74.5472 43.0359 75.7694 43.4214 76.5461 44.0961C77.2446 44.7129 77.6915 45.6383 77.6915 46.7756C77.6915 47.9129 77.3419 48.8575 76.6822 49.5322C75.7891 50.4767 74.3527 50.9394 72.7224 50.9394C72.2177 50.9394 71.7518 50.9394 71.3634 50.8237V55.9706H69.6943V43.2865ZM71.3634 49.4743C71.732 49.59 72.198 49.6286 72.7414 49.6286C74.7601 49.6286 75.983 48.6454 75.983 46.8912C75.983 45.1371 74.7608 44.366 72.9359 44.366C72.1979 44.366 71.6545 44.4431 71.3634 44.5009V49.4936V49.4743Z"
                    fill="#262424"
                  />
                  <path
                    d="M84.0585 51.9418L82.7193 55.9707H80.9917L85.3977 43.1323H87.4171L91.8421 55.9707H90.0567L88.6788 51.9418H84.098H84.0585ZM88.3094 50.631L87.0287 46.9298C86.7566 46.0816 86.5628 45.3298 86.3683 44.578H86.3295C86.1357 45.3298 85.9418 46.1202 85.6895 46.8913L84.4081 50.6117H88.3094V50.631Z"
                    fill="#262424"
                  />
                  <path
                    d="M96.8491 43.3057C97.7034 43.1323 98.9066 43.0359 100.072 43.0359C101.838 43.0359 103.021 43.3636 103.817 44.0961C104.458 44.6551 104.827 45.5419 104.827 46.5443C104.827 48.2406 103.74 49.3586 102.381 49.8213V49.8598C103.371 50.2068 103.973 51.1322 104.283 52.4622C104.71 54.255 105.021 55.4887 105.273 55.9899H103.546C103.351 55.6236 103.061 54.5248 102.692 52.9056C102.304 51.1514 101.605 50.4574 100.091 50.4189H98.5189V55.9899H96.8491V43.3251V43.3057ZM98.5189 49.1466H100.227C102.012 49.1466 103.138 48.1828 103.138 46.6985C103.138 45.0214 101.935 44.3081 100.168 44.3081C99.3534 44.3081 98.7903 44.3853 98.5189 44.4623V49.1466Z"
                    fill="#262424"
                  />
                  <path
                    d="M112.746 44.5195H108.806V43.1123H118.395V44.5195H114.435V55.9699H112.746V44.5195Z"
                    fill="#262424"
                  />
                  <path
                    d="M122.665 55.9707V43.1323H124.509L128.644 49.6286C129.595 51.1322 130.332 52.4816 130.953 53.8117H130.992C130.837 52.0767 130.817 50.5153 130.817 48.5106V43.1323H132.39V55.9707H130.682L126.566 49.4551C125.674 48.0094 124.8 46.5443 124.16 45.1564H124.102C124.199 46.7949 124.218 48.3564 124.218 50.4768V55.9707H122.646H122.665Z"
                    fill="#262424"
                  />
                  <path
                    d="M145.18 49.9556H140.172V54.6013H145.782V55.9893H138.503V43.1509H145.491V44.5388H140.172V48.6063H145.18V49.9749V49.9556Z"
                    fill="#262424"
                  />
                  <path
                    d="M151.16 43.3057C152.014 43.1323 153.217 43.0359 154.382 43.0359C156.148 43.0359 157.332 43.3636 158.128 44.0961C158.768 44.6551 159.137 45.5419 159.137 46.5443C159.137 48.2406 158.05 49.3586 156.691 49.8213V49.8598C157.682 50.2068 158.283 51.1322 158.594 52.4622C159.021 54.255 159.332 55.4887 159.584 55.9899H157.856C157.663 55.6236 157.371 54.5248 157.002 52.9056C156.614 51.1514 155.915 50.4574 154.401 50.4189H152.829V55.9899H151.16V43.3251V43.3057ZM152.829 49.1466H154.537C156.323 49.1466 157.448 48.1828 157.448 46.6985C157.448 45.0214 156.245 44.3081 154.479 44.3081C153.663 44.3081 153.101 44.3853 152.829 44.4623V49.1466Z"
                    fill="#262424"
                  />
                  <path d="M56.3869 0.000488281H0V55.9996H56.3869V0.000488281Z" fill="#262424" />
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd"
                    d="M29.8336 15.2104C29.8336 14.4586 29.7365 13.3984 29.3677 12.4924C30.513 12.7044 31.0953 13.996 31.3282 14.7478C30.8818 14.8827 30.3771 15.0369 29.8336 15.2104ZM23.797 25.2536C23.8941 26.8536 28.1837 27.2005 28.4167 30.9403C28.6107 33.8896 26.825 35.8944 24.2628 36.0679C21.1766 36.2607 19.488 34.4679 19.488 34.4679L20.1479 31.7499C20.1479 31.7499 21.8561 33.0222 23.2149 32.9258C24.1077 32.868 24.4182 32.1547 24.3989 31.6535C24.263 29.5717 20.7886 29.6873 20.5556 26.256C20.3616 23.3645 22.3025 20.4537 26.5534 20.1838C28.1838 20.0874 29.0379 20.4922 29.0379 20.4922L28.0674 24.0777C28.0674 24.0777 26.9803 23.5958 25.6992 23.6729C23.8164 23.7886 23.7971 24.9645 23.8164 25.2536H23.797ZM26.7669 11.5671C27.1163 11.5671 27.4267 11.6442 27.6791 11.7984C27.2715 12.0105 26.8638 12.3189 26.4951 12.7044C25.5246 13.7261 24.7869 15.3068 24.4958 16.8296C23.5835 17.1188 22.6712 17.3886 21.856 17.6392C22.38 15.2297 24.4182 11.6442 26.7669 11.5671ZM28.8436 15.5188C27.8343 15.8272 26.7281 16.155 25.6217 16.502C25.9323 15.326 26.5339 14.1694 27.2521 13.3984C27.5239 13.1092 27.8925 12.8008 28.339 12.608C28.7659 13.4755 28.8436 14.6899 28.8436 15.5188ZM33.2498 14.1694C33.2498 14.1694 32.9004 14.2851 32.3182 14.4586C32.2211 14.1502 32.0658 13.7646 31.8718 13.3791C31.2118 12.1261 30.2414 11.4707 29.0573 11.4707C29.0573 11.4707 28.9021 11.4707 28.805 11.4707C28.7662 11.4321 28.7273 11.3936 28.6884 11.3551C28.1837 10.8153 27.5238 10.5454 26.728 10.5839C25.214 10.6225 23.7001 11.702 22.4578 13.6297C21.5843 14.9791 20.9438 16.6754 20.7497 17.9862C19.0028 18.526 17.7799 18.8922 17.7605 18.8922C16.887 19.1622 16.8481 19.1814 16.7316 20.0104C16.654 20.6272 14.3442 38.1498 14.3442 38.1498L33.4827 41.4076V14.1502C33.4827 14.1502 33.308 14.1694 33.2498 14.1887V14.1694Z"
                    fill="white"
                  />
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd"
                    d="M33.7935 41.562L42.0623 39.6151C42.0623 39.6151 38.5103 16.907 38.4908 16.7528C38.4715 16.5986 38.3161 16.5022 38.1997 16.5022C38.0832 16.5022 35.7539 16.4637 35.7539 16.4637C35.7539 16.4637 34.337 15.1721 33.7935 14.6709V41.562Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2350_4544">
                    <rect width="160" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <div className="space-y-5">
                  <div className="text-base leading-relaxed">
                    <p>
                      As a certified Shopify Premier partner, we&apos;re creating a
                      space where e-commerce expertise is combined with an
                      intrinsic fashion mindset to grow next-generation brands
                      in the digital landscape.<br />
                    </p>
                  </div>
                  <a 
                    href="/pages/services" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B7355] text-white rounded transition-colors duration-300 hover:bg-[#7A6348] no-underline"
                  >
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path 
                          fillRule="evenodd" 
                          clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>Our Services</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path 
                          fillRule="evenodd" 
                          clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {LOGO_CONFIG.map((logo, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-center bg-[#d4d0c8] rounded-lg p-4 h-20 lg:h-34"
                    >
                      <Image 
                        loading="lazy"
                        src={logoSources[index]}
                        id={`sp_logo${index}`} 
                        alt={logo.alt} 
                        width={100}
                        height={isMobile ? logo.height.mobile : logo.height.desktop}
                        className={`${isMobile ? logo.maxHeight.mobile : logo.maxHeight.desktop} w-auto h-auto transition-opacity duration-500 ease-in-out`}
                        style={{ opacity: logoOpacities[index] }}
                        unoptimized
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

export default ShopifyPlusSection

