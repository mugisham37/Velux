import React from 'react'
import Image from 'next/image'

const AboutStepsSection = () => {
  return (
    <div className="w-full">
      <section className="relative bg-[#f7f7f6] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-6">
              <div className="space-y-8">
                <h3 className="hidden xl:block text-[30px] lg:text-[48px] leading-tight font-light text-[#262424] font-['PP_Editorial_Old',serif]">
                  Values are a guiding set of principles that keep us all grounded. Within our team and wider network, we maintain this balance for positive and peaceful collaboration.
                </h3>
                <div className="w-full">
                  {/* Desktop Image */}
                  <Image
                    src="//www.notsellingliquid.com/cdn/shop/files/INTRODUCING_91f45b7a-88c0-4dc3-be39-dd574d0b92a0.webp?v=1746016032"
                    alt="Values introduction image" 
                    className="hidden lg:block w-full h-auto object-cover" 
                    width={2049}
                    height={1534}
                    priority
                  />
                  {/* Mobile Image */}
                  <Image
                    src="//www.notsellingliquid.com/cdn/shop/files/INTRODUCING_91f45b7a-88c0-4dc3-be39-dd574d0b92a0.webp?v=1746016032"
                    alt="Values introduction image" 
                    className="block lg:hidden w-full h-auto object-cover" 
                    width={2049} 
                    height={1534}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6">
              <h3 className="block xl:hidden text-[30px] leading-tight font-light text-[#262424] font-['PP_Editorial_Old',serif] mb-8">
                Values are a guiding set of principles that keep us all grounded. Within our team and wider network, we maintain this balance for positive and peaceful collaboration.
              </h3>
              
              <div className="space-y-12 overflow-hidden">
                {/* Value 1 */}
                <div className="space-y-4">
                  <span className="block text-[80px] lg:text-[120px] leading-none font-light text-[#262424] font-['PP_Editorial_Old',serif]">01</span>
                  <p className="text-[16px] font-normal text-[#262424] font-['Aeonik',sans-serif] mb-4">Honesty &amp; Transparency</p>
                  <div className="text-[12px] leading-relaxed text-[#262424] font-['Aeonik',sans-serif]">
                    <p>Numbers don&apos;t lie, and neither do we. We call things by their name and we don&apos;t sugarcoat. We believe honesty and transparency provide fertile ground for growth and prosperity.<br /><br />Only with all the knowledge, the good, the bad (and the ugly), can we empower the brands we work with through intentional solutions.</p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="space-y-4">
                  <span className="block text-[80px] lg:text-[120px] leading-none font-light text-[#262424] font-['PP_Editorial_Old',serif]">02</span>
                  <p className="text-[16px] font-normal text-[#262424] font-['Aeonik',sans-serif] mb-4">Collaboration as the norm</p>
                  <div className="text-[12px] leading-relaxed text-[#262424] font-['Aeonik',sans-serif]">
                    <p>We&apos;re passionate about the work we do and the brands we work with. We&apos;re eager to get them to where they want to go and bring innovative ideas to achieve that.<br /><br />That&apos;s why collaboration is important – an open minded atmosphere is vital in providing a safe space to unite everyone&apos;s voice and vision.</p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="space-y-4">
                  <span className="block text-[80px] lg:text-[120px] leading-none font-light text-[#262424] font-['PP_Editorial_Old',serif]">03</span>
                  <p className="text-[16px] font-normal text-[#262424] font-['Aeonik',sans-serif] mb-4">authentic stories</p>
                  <div className="text-[12px] leading-relaxed text-[#262424] font-['Aeonik',sans-serif]">
                    <p>People need that trust of something being human and authentic in order to connect.<br /> <br />We power the stories of brands who lead with purpose and leverage their realness to advertise their product. Being an authentic expression of who you are is the baseline requirement of the community we&apos;re building.</p>
                  </div>
                </div>

                {/* Final Text */}
                <div className="pt-8">
                  <h5 className="text-[30px] lg:text-[40px] leading-tight font-light text-[#262424] font-['PP_Editorial_Old',serif]">
                    A mindset and culture in which we live, collaborate and share the same stories.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutStepsSection