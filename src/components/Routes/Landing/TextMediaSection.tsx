import React from 'react'
import Image from 'next/image'

const TextMediaSection = () => {
  return (
    <div 
      id="shopify-section-template--26430796759383__b10263d9-eedc-4a4e-bc38-9db463307219"
      className="bg-[#e5e2de] relative"
    >
      <section className="relative">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#c0bbae] grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="flex items-center">
                <div className="p-8 md:p-12 lg:p-16">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight text-black mb-8">
                    A story-led digital agency that leads next generation
                    brands to define the fashion e-commerce landscape.
                  </h2>
                  <div className="mt-8">
                    <a 
                      href="/pages/about-us" 
                      className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium uppercase tracking-wider"
                    >
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path 
                            fillRule="evenodd" 
                            clipRule="evenodd"
                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span>More about us</span>
                      <span className="flex items-center">
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
                </div>
              </div>
              <div className="relative">
                <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                  <Image 
                    src="https://www.notsellingliquid.com/cdn/shop/files/Mask_group2.webp?v=1744187290"
                    alt="" 
                    className="w-full h-full object-cover hidden lg:block"
                    width={1401}
                    height={800}
                    priority
                  />
                  <Image
                    src="https://www.notsellingliquid.com/cdn/shop/files/Mask_group2.webp?v=1744187290"
                    alt="" 
                    className="w-full h-full object-cover block lg:hidden"
                    width={1401}
                    height={800}
                    priority
                  />
                  <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                    <p className="text-sm font-normal text-black bg-white/80 backdrop-blur-sm px-3 py-2 rounded">
                      Fabienne Chapot
                    </p>
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

export default TextMediaSection

