import React from 'react'
import Image from 'next/image'

const AboutStepsSection = () => {
  const values = [
    {
      number: "01",
      title: "Honesty & Transparency",
      content: "Numbers don't lie, and neither do we. We call things by their name and we don't sugarcoat. We believe honesty and transparency provide fertile ground for growth and prosperity.\n\nOnly with all the knowledge, the good, the bad (and the ugly), can we empower the brands we work with through intentional solutions."
    },
    {
      number: "02", 
      title: "Collaboration as the norm",
      content: "We're passionate about the work we do and the brands we work with. We're eager to get them to where they want to go and bring innovative ideas to achieve that.\n\nThat's why collaboration is important – an open minded atmosphere is vital in providing a safe space to unite everyone's voice and vision."
    },
    {
      number: "03",
      title: "authentic stories", 
      content: "People need that trust of something being human and authentic in order to connect.\n\nWe power the stories of brands who lead with purpose and leverage their realness to advertise their product. Being an authentic expression of who you are is the baseline requirement of the community we're building."
    },
    {
      number: null,
      title: null,
      content: null,
      isFinalText: true,
      finalText: "A mindset and culture in which we live, collaborate and share the same stories."
    }
  ]

  return (
    <div className="max-w-screen bg-[#262424]">
      <section className="relative bg-[#f7f7f6] py-16 lg:py-24 rounded-t-2xl">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column */}
            <div className="lg:col-span-6 h-full flex flex-col">
              <div className="space-y-8">
                <h3 className="text-[30px] lg:text-[48px] leading-[35px] lg:leading-[53px] font-light text-[#262424] font-['PP_Editorial_Old',serif]">
                  Values are a guiding set of principles that keep us all grounded. Within our team and wider network, we maintain this balance for positive and peaceful collaboration.
                </h3>
                <div className="w-full hidden lg:block">
                  {/* Desktop Image */}
                  <Image
                    src="https://www.notsellingliquid.com/cdn/shop/files/INTRODUCING_91f45b7a-88c0-4dc3-be39-dd574d0b92a0.webp?v=1746016032"
                    alt="Values introduction image" 
                    className="w-full h-auto object-cover rounded-lg" 
                    width={2049}
                    height={1534}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 h-full flex flex-col">
              <div className="flex flex-row lg:grid lg:grid-cols-2 gap-0 h-full lg:auto-rows-fr overflow-x-auto lg:overflow-x-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {values.map((value, index) => (
                  <div key={index} className="shrink-0 w-90 lg:w-auto pl-6 lg:pl-8 border-l border-black p-4 lg:p-6">
                    {value.isFinalText ? (
                      <h5 className="text-[30px] lg:text-[40px] leading-tight font-light text-[#262424] font-['PP_Editorial_Old',serif] flex items-end h-full">
                        {value.finalText}
                      </h5>
                    ) : (
                      <div className="space-y-4">
                        <span className="block text-[150px] leading-none font-[500] text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>{value.number}</span>
                        <p className="text-[30px] font-normal text-[#262424] font-['Aeonik',sans-serif] mb-4 uppercase leading-[27px]">{value.title}</p>
                        <div className="text-[14px] leading-[18px] text-[#262424] font-['Aeonik',sans-serif]">
                          <p>{value.content && value.content.split('\n\n').map((paragraph, pIndex) => (
                            <React.Fragment key={pIndex}>
                              {paragraph}
                              {pIndex < value.content!.split('\n\n').length - 1 && <><br /><br /></>}
                            </React.Fragment>
                          ))}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Image - shown after right section on sm/md screens */}
          <div className="w-full lg:hidden mt-8">
            <Image
              src="https://www.notsellingliquid.com/cdn/shop/files/INTRODUCING_91f45b7a-88c0-4dc3-be39-dd574d0b92a0.webp?v=1746016032"
              alt="Values introduction image" 
              className="w-full h-auto object-cover rounded-xl" 
              width={2049}
              height={1534}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutStepsSection