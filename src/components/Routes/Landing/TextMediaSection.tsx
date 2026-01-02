import React from 'react'
import Image from 'next/image'

const TextMediaSection = () => {
  return (
    <div className="bg-[#e5e2de] relative w-full overflow-hidden">
      <section className="relative">
        {/* Section Padding - Mobile: py-16, Tablet: py-20, Desktop: py-18 */}
        <div className="py-16 md:py-20 lg:py-18">
          {/* Content Container - Responsive Padding */}
          <div className="mx-auto px-4 sm:px-6 lg:px-[20px]">
            {/* Main Grid - Mobile: 1 col, Desktop: 2 cols with consistent height */}
            <div className="bg-[#c0bbae] rounded-[20px] grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px] lg:h-[700px]">
              
              {/* Text Content Column */}
              <div className="flex items-start order-2 md:order-2 lg:order-none">
                <div className="flex flex-col justify-start items-stretch h-full w-full p-2 md:p-12 lg:p-12">
                  {/* Heading - Progressive Typography Scaling */}
                  <h2 className="font-['PP_Editorial_Old'] text-2xl md:text-3xl lg:text-4xl xl:text-[56px] leading-tight text-black mb-2">
                    A story-led digital agency that leads next generation
                    brands to define the fashion e-commerce landscape.
                  </h2>
                  
                  {/* CTA Button */}
                  <div className="mt-2">
                    <a 
                      href="/pages/about-us" 
                      className="inline-flex items-center gap-1 px-6 py-4 rounded-[10px] text-black bg-gray-500 text-sm font-medium uppercase tracking-wider"
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
              
              {/* Image Column */}
              <div className="relative order-1 md:order-1 lg:order-none">
                <div className="relative h-full min-h-[400px] md:min-h-[500px] lg:min-h-full">
                  {/* Image - Responsive Padding and Sizing */}
                  <Image 
                    src="https://www.notsellingliquid.com/cdn/shop/files/Mask_group2.webp?v=1744187290"
                    alt="" 
                    className="w-full h-full object-cover block p-2 md:p-3 lg:p-3 rounded-[22px]"
                    width={1401}
                    height={800}
                    priority
                  />
                  
                  {/* Image Caption - Responsive Positioning */}
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 lg:bottom-8 lg:right-[2px]">
                    <p className="text-sm font-normal uppercase text-white/80 px-3 py-2">
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

