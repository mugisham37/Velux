// Self-contained Tailwind component - no external CSS dependencies required
// Converted from: https://www.notsellingliquid.com/cdn/shop/t/39/assets/about-intro.css?v=23907028594662014411758090047

const AboutIntroSection = () => {
  return (
    <div 
      id="shopify-section-template--26430796890455__e888cf0f-1c90-47ca-a12b-c0a1b957457e"
      className="shopify-section about_intro -mt-[67.775px]"
    >
      <section
        className="section-about-intro section-id-template--26430796890455__e888cf0f-1c90-47ca-a12b-c0a1b957457e relative-sec relative bg-[#262424]"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-intro grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="ai-left lg:col-span-6">
              <div className="ai-leftinr py-12 lg:py-16">
                <p className="n-body text-sm font-medium text-white/80 mb-4 lg:mb-6">About us</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  E-commerce is our language, fashion is our culture.
                </h2>
              </div>
            </div>
            <div className="ai-right lg:col-span-4 lg:col-start-9">
              <div className="ai-rightinr py-12 lg:py-16">
                <div className="s-body text-base text-white/90 mb-6 hidden lg:block">
                  We&apos;ve taken things we&apos;re passionate about -
                  fashion, sneakers and all things digital - and made it our craft.
                </div>
                <div className="s-caption">
                  <p className="text-base leading-relaxed text-white/80 mb-8">
                    We&apos;re creating a space where e-commerce expertise is combined with an
                    intrinsic fashion mindset to grow next generation brands in the digital
                    landscape.
                  </p>
                </div>
                <a 
                  href="/pages/manifesto" 
                  className="link-arrow inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200 group"
                >
                  <span className="arrow opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="label text-sm font-medium underline">Read full manifesto</span>
                  <span className="arrow transition-transform duration-200 group-hover:translate-x-1">
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
          <div className="intro_overly opacity-0 pointer-events-none">&nbsp;</div>
        </div>
      </section>
    </div>
  )
}

export default AboutIntroSection

