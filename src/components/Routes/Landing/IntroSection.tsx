import React from 'react'

const IntroSection = () => {
  return (
    <div 
      id="shopify-section-template--26430796759383__5068ab18-3ac5-4273-b159-c935f9d1f90a"
      className="shopify-section main-intro -mt-[65px]"
    >
      <section className="section-intro section-id-template--26430796759383__5068ab18-3ac5-4273-b159-c935f9d1f90a bg-[#262424]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="intro-wrap grid grid-cols-12 gap-4">
            {/* Left Column - Hidden on mobile, visible on lg+ */}
            <div className="intro-left col-span-4 hidden lg:block">
              <p 
                className="s-body text-[12px] leading-relaxed"
                style={{
                  fontFamily: '"Aeonik", sans-serif',
                  color: '#ffffff'
                }}
              >
                Intro
              </p>
            </div>
            
            {/* Right Column */}
            <div className="intro-right col-span-12 lg:col-span-7">
              <div className="intro-rightinr">
                <h2 
                  className="text-[40px] lg:text-[60px] leading-tight font-light text-white mb-6"
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
                    className="text-[12px] leading-relaxed text-white"
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