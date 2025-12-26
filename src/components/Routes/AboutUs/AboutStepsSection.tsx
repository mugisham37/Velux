import React from 'react'
import Image from 'next/image'

const AboutStepsSection = () => {
  return (
    <div 
      id="shopify-section-template--26430796890455__06691c3a-e084-4fa5-b1c6-05671a57f694"
      className="relative"
    >
      <section className="relative bg-[#f7f7f6] text-[#262424]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16">
            {/* Left Column */}
            <div className="lg:col-span-6">
              <div className="space-y-8">
                <h3 className="hidden xl:block text-3xl lg:text-5xl font-light leading-tight text-[#262424]" style={{ fontFamily: 'PP Editorial Old, serif' }}>
                  Values are a guiding set of principles that keep us all grounded. Within our team and wider network, we maintain this balance for positive and peaceful collaboration.
                </h3>
                <div className="relative">
                  <Image
                    src="https://www.notsellingliquid.com/cdn/shop/files/INTRODUCING_91f45b7a-88c0-4dc3-be39-dd574d0b92a0.webp?v=1746016032"
                    alt=""
                    className="hidden lg:block w-full h-auto rounded-lg"
                    width={2049}
                    height={1534}
                    priority
                  />
                  <Image
                    src="https://www.notsellingliquid.com/cdn/shop/files/INTRODUCING_91f45b7a-88c0-4dc3-be39-dd574d0b92a0.webp?v=1746016032"
                    alt=""
                    className="block lg:hidden w-full h-auto rounded-lg"
                    width={2049}
                    height={1534}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6">
              <h3 className="block xl:hidden text-2xl lg:text-3xl font-light leading-tight text-[#262424] mb-8" style={{ fontFamily: 'PP Editorial Old, serif' }}>
                Values are a guiding set of principles that keep us all grounded. Within our team and wider network, we maintain this balance for positive and peaceful collaboration.
              </h3>
              
              <div className="space-y-12 lg:space-y-16">
                {/* Value 01 */}
                <div className="space-y-4">
                  <span className="text-6xl lg:text-8xl font-light text-[#262424] block leading-none" style={{ fontFamily: 'PP Editorial Old, serif' }}>
                    01
                  </span>
                  <p className="text-base lg:text-lg font-medium text-[#262424] mb-4" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    Honesty & Transparency
                  </p>
                  <div className="text-sm lg:text-base leading-relaxed text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    <p>
                      Numbers don&apos;t lie, and neither do we. We call things by their name and we don&apos;t sugarcoat. We believe honesty and transparency provide fertile ground for growth and prosperity.
                      <br /><br />
                      Only with all the knowledge, the good, the bad (and the ugly), can we empower the brands we work with through intentional solutions.
                    </p>
                  </div>
                </div>

                {/* Value 02 */}
                <div className="space-y-4">
                  <span className="text-6xl lg:text-8xl font-light text-[#262424] block leading-none" style={{ fontFamily: 'PP Editorial Old, serif' }}>
                    02
                  </span>
                  <p className="text-base lg:text-lg font-medium text-[#262424] mb-4" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    Collaboration as the norm
                  </p>
                  <div className="text-sm lg:text-base leading-relaxed text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    <p>
                      We&apos;re passionate about the work we do and the brands we work with. We&apos;re eager to get them to where they want to go and bring innovative ideas to achieve that.
                      <br /><br />
                      That&apos;s why collaboration is important – an open minded atmosphere is vital in providing a safe space to unite everyone&apos;s voice and vision.
                    </p>
                  </div>
                </div>

                {/* Value 03 */}
                <div className="space-y-4">
                  <span className="text-6xl lg:text-8xl font-light text-[#262424] block leading-none" style={{ fontFamily: 'PP Editorial Old, serif' }}>
                    03
                  </span>
                  <p className="text-base lg:text-lg font-medium text-[#262424] mb-4" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    authentic stories
                  </p>
                  <div className="text-sm lg:text-base leading-relaxed text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    <p>
                      People need that trust of something being human and authentic in order to connect.
                      <br /> <br />
                      We power the stories of brands who lead with purpose and leverage their realness to advertise their product. Being an authentic expression of who you are is the baseline requirement of the community we&apos;re building.
                    </p>
                  </div>
                </div>

                {/* Final Statement */}
                <div className="pt-8">
                  <h5 className="text-2xl lg:text-4xl font-light leading-tight text-[#262424]" style={{ fontFamily: 'PP Editorial Old, serif' }}>
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

