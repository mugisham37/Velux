import React from 'react'

const IntroSection = () => {
  return (
    <div>
      <section className="bg-[#262424] intro-section
        pt-20 sm:pt-28 md:pt-36 lg:pt-42">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-4">
            {/* Left Column - Hidden on mobile, visible on lg+ */}
            <div className="col-span-3 hidden lg:block">
              <p 
                className="uppercase s-body leading-relaxed mb-6
                  text-base lg:text-[18px]"
                style={{
                  fontFamily: '"Aeonik", sans-serif',
                  color: '#ffffff'
                }}
              >
                Intro
              </p>
            </div>
            
            {/* Right Column */}
            <div className="col-span-12 lg:col-span-9">
              <div className="intro-rightinr">
                <h2 
                  className="font-light text-white mb-6
                    text-[32px] leading-[36px]
                    sm:text-[36px] sm:leading-[40px]
                    md:text-[48px] md:leading-[52px]
                    lg:text-[66px] lg:leading-[76px]"
                  style={{
                    fontFamily: '"PP Editorial Old", serif',
                    fontWeight: 300
                  }}
                >
                  We build, manage and grow the presence of purpose-led brands
                  in the digital space.
                </h2>
                <div className="n-body">
                  <p 
                    className="uppercase leading-relaxed text-white
                      text-sm sm:text-[15px]"
                    style={{
                      fontFamily: '"Aeonik", sans-serif'
                    }}
                  >
                    The Shopify Premier agency for brands aiming to grow
                    sustainably
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Overlay Element */}
          <div className="intro_overly opacity-0">
            &nbsp;
          </div>
        </div>
      </section>
    </div>
  )
}

export default IntroSection

