const AboutRichTextSection = () => {
  return (
    <div className="w-full">
      <section className="relative bg-[#e5e2de]">
        <div className="pt-16 lg:pt-20 pb-16 lg:pb-20 border-b border-[#262424]">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              <div className="lg:col-span-8 lg:col-start-5">
                <div className="space-y-8 lg:space-y-12">
                  <h3 className="text-3xl lg:text-5xl font-light leading-tight text-[#262424]" style={{ fontFamily: 'PP Editorial Old, serif' }}>
                    Many of our people started their careers on the brand side before joining our team, giving us first-hand experience about the ins and outs of the industry.
                  </h3>
                  <div className="space-y-6 lg:space-y-8">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <p className="text-base font-medium text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Background &amp; Vision
                        </p>
                        <div className="space-y-3">
                          <p className="text-sm leading-relaxed text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                            After years of experience in their respective areas of digital marketing expertise, the two founders of NSL saw an opportunity of shared interest. In 2020, they combined their teams of talents, and formed as one to offer a service that takes the client from start to endless growth.
                          </p>
                        </div>
                      </div>
                      <a 
                        href="/pages/approach" 
                        className="group inline-flex items-center gap-2 text-sm font-medium text-[#262424] hover:opacity-80 transition-all duration-300 ease-in-out"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      >
                        <span className="w-4 h-4 transition-transform group-hover:translate-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path 
                              fillRule="evenodd" 
                              clipRule="evenodd"
                              d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span>Our approach</span>
                        <span className="w-4 h-4 transition-transform group-hover:translate-x-1">
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
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <p className="text-base font-medium text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Team &amp; Culture
                        </p>
                        <div className="space-y-3">
                          <p className="text-sm leading-relaxed text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                            We&apos;re a close knit team with shared mindsets and values. With 12 nationalities among us, our perspectives and insights are varied and wonderful. We foster an inclusive and open environment where respect is at the core of every interaction.
                          </p>
                        </div>
                      </div>
                      <a 
                        href="https://careers.notsellingliquid.com/"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-[#262424] hover:opacity-80 transition-all duration-300 ease-in-out"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      >
                        <span className="w-4 h-4 transition-transform group-hover:translate-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path 
                              fillRule="evenodd" 
                              clipRule="evenodd"
                              d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span>Open Positions</span>
                        <span className="w-4 h-4 transition-transform group-hover:translate-x-1">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutRichTextSection