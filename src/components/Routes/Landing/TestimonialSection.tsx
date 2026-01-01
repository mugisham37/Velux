import React from 'react'
import Image from 'next/image'
import { normalizeImageUrl } from '../../../utils/imageUtils'


const TestimonialSection = () => {
  return (
    <div className="bg-[#e5e2de]">
      <section className="relative">
        {/* Container: Mobile first approach with proper max-width constraints */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Padding: Responsive vertical spacing */}
          <div className="pt-10 pb-10 md:pt-12 md:pb-16 lg:pt-10 lg:pb-20 border-b border-[#262424]">
            {/* Layout: Stack on mobile, side-by-side on large screens */}
            <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
              
              {/* Left Column: Title section */}
              <div className="w-full lg:w-auto lg:shrink-0">
                <div>
                  <p className="text-[16px] sm:text-[18px] leading-[1.4] font-normal text-[#262424] font-['Aeonik'] uppercase">
                    Testimonial
                  </p>
                </div>
              </div>
              
              {/* Right Column: Content section with proper responsive widths */}
              <div className="w-full lg:flex-1 lg:max-w-4xl">
                <div className="space-y-4 sm:space-y-6">
                  
                  {/* Logo: Responsive sizing */}
                  <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
                    <Image 
                      src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/Arte_249682ff-c069-4279-8305-be8ab8a41b9d_320x.png?v=1687154871")}
                      width={320} 
                      height={116}
                      alt="Shopify Plus Agency Case - Arte Antwerp"
                      sizes="(max-width: 640px) 50px, 60px"
                      unoptimized
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Quote: Responsive text sizing */}
                  <div className="text-[20px] sm:text-[22px] lg:text-[24px] leading-normal font-normal text-[#262424] font-['Aeonik']">
                    <p>
                      &ldquo;Our decision to partner up with the NSL team has really
                      brought our online perfomance to the next level. We are
                      very pleased with how our collaboration is evolving and
                      looking forward to what we can achieve together in the
                      future.&rdquo;
                    </p>
                  </div>
                  
                  {/* Attribution: Consistent responsive text */}
                  <div className="space-y-1">
                    <p className="text-[14px] sm:text-[16px] leading-[1.4] font-normal text-[#262424] font-['Aeonik'] uppercase">
                      Bertony Da Silva
                    </p>
                    <span className="text-[14px] sm:text-[16px] leading-[1.4] font-normal text-[#262424] font-['Aeonik'] block uppercase">
                      Founder at Arte Antwerp
                    </span>
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

export default TestimonialSection

