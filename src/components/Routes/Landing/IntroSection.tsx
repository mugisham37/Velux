import React from 'react'

const IntroSection = () => {
  return (
    <div>
      <section className="bg-[#262424] pt-42 intro-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-4">
            {/* Left Column - Hidden on mobile, visible on lg+ */}
            <div className="col-span-3 hidden lg:block">
              <p 
                className="uppercase s-body text-[18px] leading-relaxed mb-6"
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
                  className="text-[40px] lg:text-[66px] leading-[44px] md:leading-[42px] lg:leading-[76px] font-light text-white mb-6"
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
                    className="uppercase text-[15px] leading-relaxed text-white"
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

