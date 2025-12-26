import React from 'react'
import Image from 'next/image'
import { normalizeImageUrl } from '../../../utils/imageUtils'

const TestimonialSection = () => {
  return (
    <div className="bg-[#e5e2de]">
      <section className="relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-10 pb-10 lg:pt-10 lg:pb-20 border-b border-[#262424]">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-4">
                <div className="hidden lg:block">
                  <p className="text-[12px] leading-[1.4] font-normal text-[#262424] font-['Aeonik']">
                    Testimonial
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="space-y-6">
                  <div className="max-w-[60px] max-h-[60px]">
                    <Image 
                      src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/Arte_249682ff-c069-4279-8305-be8ab8a41b9d_320x.png?v=1687154871")}
                      width={320} 
                      height={116}
                      alt="Shopify Plus Agency Case - Arte Antwerp"
                      sizes="320px"
                      unoptimized
                      className="max-w-[60px] max-h-[60px] object-contain"
                    />
                  </div>
                  <div className="text-[14px] leading-normal font-normal text-[#262424] font-['Aeonik']">
                    <p>
                      &ldquo;Our decision to partner up with the NSL team has really
                      brought our online perfomance to the next level. We are
                      very pleased with how our collaboration is evolving and
                      looking forward to what we can achieve together in the
                      future.&rdquo;
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[12px] leading-[1.4] font-normal text-[#262424] font-['Aeonik']">
                      Bertony Da Silva
                    </p>
                    <span className="text-[12px] leading-[1.4] font-normal text-[#262424] font-['Aeonik'] block">
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