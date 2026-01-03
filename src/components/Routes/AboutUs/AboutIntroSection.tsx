const AboutIntroSection = () => {
  return (
    <div className="block max-w-screen">
      <section className="relative bg-[#262424] pt-60 pb-10 lg:pb-12 lg:pt-100">
        <div className="mx-auto px-4 lg:px-4">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            {/* Left Column - 6/12 grid */}
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <div className="lg:pr-8">
                <p 
                  className="text-white text-xs uppercase tracking-wider mb-4 lg:mb-6"
                  style={{ fontFamily: 'Aeonik, sans-serif' }}
                >
                  About us
                </p>
                <h2 
                  className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-light"
                  style={{ fontFamily: 'PP Editorial Old, serif' }}
                >
                  E-commerce is our language, fashion is our culture.
                </h2>
              </div>
            </div>
            
            {/* Right Column - 4/12 grid */}
            <div className="w-full lg:w-5/12 lg:ml-auto lg:border-l lg:border-white lg:pl-4">
              <div className="lg:pl-4">
                <div 
                  className="hidden lg:block text-white text-sm lg:text-base mb-6 leading-relaxed uppercase"
                  style={{ fontFamily: 'Aeonik, sans-serif' }}
                >
                  We&apos;ve taken things we&apos;re passionate about - fashion, sneakers and all things digital - and made it our craft.
                </div>
                <div className="mb-8">
                  <p 
                    className="text-white text-sm lg:text-sm leading-relaxed"
                    style={{ fontFamily: 'Aeonik, sans-serif' }}
                  >
                    We&apos;re creating a space where e-commerce expertise is combined with an intrinsic fashion mindset to grow next generation brands in the digital landscape.
                  </p>
                </div>
                <a 
                  href="/pages/manifesto" 
                  className="inline-flex items-center gap-2 text-white text-xs lg:text-sm hover:opacity-80 transition-opacity group"
                  style={{ fontFamily: 'Aeonik, sans-serif' }}
                >
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="uppercase">Read full manifesto</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Overlay element */}
          <div className="absolute inset-0 pointer-events-none">&nbsp;</div>
        </div>
      </section>
    </div>
  )
}

export default AboutIntroSection