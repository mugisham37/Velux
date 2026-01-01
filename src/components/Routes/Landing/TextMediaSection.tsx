import React from 'react'
import Image from 'next/image'

const TextMediaSection = () => {
  return (
    <div 
      className="bg-[#e5e2de] relative w-screen"
    >
      <section className="relative">
        <div className="py-16 md:py-20 lg:py-18">
          <div className="mx-auto px-4 sm:px-6 lg:px-[20px] ">
            <div className="bg-[#c0bbae] rounded-[20px] grid grid-cols-1 lg:grid-cols-2 gap-0 lg:h-[700px]">
              <div className="flex items-center ">
                <div className="flex flex-col justify-between items-stretch h-full p-8 md:p-12 lg:py-12 ">
                  <h2 className="font-['PP_Editorial_Old'] text-2xl md:text-3xl lg:text-[56px] leading-tight text-black mb-8">
                    A story-led digital agency that leads next generation
                    brands to define the fashion e-commerce landscape.
                  </h2>
                  <div className="mt-8">
                    <a 
                      href="/pages/about-us" 
                      className="inline-flex items-center gap-1 px-6 py-4 rounded-[10px] text-black bg-gray-500 hover:bg-black transition-all duration-300 text-sm font-medium uppercase tracking-wider"
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
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-full min-h-[400px] ">
                  <Image 
                    src="https://www.notsellingliquid.com/cdn/shop/files/Mask_group2.webp?v=1744187290"
                    alt="" 
                    className="w-full h-full object-cover block p-2 rounded-[22px] lg:p-3 lg:h-full"
                    width={1401}
                    height={800}
                    priority
                  />
                  <div className="absolute bottom-6 left-6 lg:bottom-8 lg:right-[2px]">
                    <p className="text-sm font-normal uppercase text-white/80 px-3 py-2 ">
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

