const ServicesMainSection = () => {
  return (
    <div className="w-full">
      <section className="relative pt-[60px] pb-20 lg:pt-[100px] lg:pb-[100px] rounded-t-[15px] bg-[#c0bbae] -mt-[15px]">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 lg:mb-12">
              <div className="lg:col-span-8">
                <p className="text-xs font-normal text-[#262424] mb-4 lg:mb-6" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                  The way we work
                </p>
                <h3 className="text-[30px] lg:text-[48px] leading-tight font-light text-[#262424] mb-6 lg:mb-8" style={{ fontFamily: 'PP Editorial Old, serif' }}>
                  With our intrinsic appreciation of the fashion industry, our team creates tailored solutions for longevity in a dynamic landscape.
                </h3>
                <div className="text-xs font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                  <p>
                    Our pro-active approach thinks along with the client, looking for the next steps and progressing them forward in their journey. We know to offer the best thing for them specifically, depending on their needs and capabilities. Our 360 structure of build, manage, grow means we can elevate the client&apos;s game from all angles.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 hidden lg:flex lg:justify-end lg:items-start">
                <a href="/pages/approach" className="inline-flex items-center gap-2 text-[#262424] hover:opacity-80 transition-opacity">
                  <span className="w-4 h-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="text-xs font-normal" style={{ fontFamily: 'Aeonik, sans-serif' }}>Our Approach</span>
                  <span className="w-4 h-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            
            <div className="space-y-8 lg:space-y-12">
              {/* Step 01 - Build */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-4">
                  <span className="text-[24px] lg:text-[32px] font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    01
                  </span>
                  <p className="text-sm lg:text-base font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    Build
                  </p>
                  <p className="text-xs font-normal text-[#262424] leading-relaxed" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    As certified Shopify Premier partner, we design and develop Shopify Plus platforms with multi-channel solutions. Our team applies their years of experience in e-commerce, Shopify and fashion to build tailor-made digital flagship stores.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="text-xs font-normal text-[#262424] space-y-2" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    <p>UX & UI Design</p>
                    <p>Development</p>
                    <p>Klaviyo e-mail automation</p>
                    <p>Shopify Plus migration</p>
                  </div>
                  <a href="/pages/service-build" className="inline-flex items-center gap-2 px-4 py-2 bg-[#9B978B] text-[#262424] rounded hover:opacity-90 transition-opacity">
                    <span className="w-4 h-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <span className="text-xs font-normal" style={{ fontFamily: 'Aeonik, sans-serif' }}>More on build</span>
                    <span className="w-4 h-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              {/* Step 02 - Manage */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-4">
                  <span className="text-[24px] lg:text-[32px] font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    02
                  </span>
                  <p className="text-sm lg:text-base font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    Manage
                  </p>
                  <p className="text-xs font-normal text-[#262424] leading-relaxed" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    We value long-term relationships with our clients, creating dedicated teams which work seamlessly as an extension of your business. We closely manage your online marketing channels and the day-to-day of your Shopify store with attention to detail and flexibility.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="text-xs font-normal text-[#262424] space-y-2" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    <p>Conversion Optimisation</p>
                    <p>Retention & CDP</p>
                    <p>Project management</p>
                    <p>Website operations</p>
                  </div>
                  <a href="/pages/service-manage" className="inline-flex items-center gap-2 px-4 py-2 bg-[#9B978B] text-[#262424] rounded hover:opacity-90 transition-opacity">
                    <span className="w-4 h-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <span className="text-xs font-normal" style={{ fontFamily: 'Aeonik, sans-serif' }}>More on manage</span>
                    <span className="w-4 h-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              {/* Step 03 - Grow */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-4">
                  <span className="text-[24px] lg:text-[32px] font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    03
                  </span>
                  <p className="text-sm lg:text-base font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    Grow
                  </p>
                  <p className="text-xs font-normal text-[#262424] leading-relaxed" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    By leveraging data, we identify growth opportunities and implement highly effective performance marketing campaigns that drive revenue. Our proactive approach in combination with continuous monitoring and optimisation delivers sustained growth.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="text-xs font-normal text-[#262424] space-y-2" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                    <p>Data & Intelligence</p>
                    <p>Paid Advertising</p>
                    <p>Growth strategy</p>
                    <p>Marketplaces</p>
                  </div>
                  <a href="/pages/service-grow" className="inline-flex items-center gap-2 px-4 py-2 bg-[#9B978B] text-[#262424] rounded hover:opacity-90 transition-opacity">
                    <span className="w-4 h-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <span className="text-xs font-normal" style={{ fontFamily: 'Aeonik, sans-serif' }}>More on grow</span>
                    <span className="w-4 h-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesMainSection