// Arrow SVG component to eliminate repetition
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
      fill="currentColor"></path>
  </svg>
);

const ServicesMainSection = () => {

  // Services data to eliminate repetitive structure
  const servicesData = [
    {
      number: "01",
      title: "Build",
      description: "As certified Shopify Premier partner, we design and develop Shopify Plus platforms with multi-channel solutions. Our team applies their years of experience in e-commerce, Shopify and fashion to build tailor-made digital flagship stores.",
      services: ["UX & UI Design", "Development", "Klaviyo e-mail automation", "Shopify Plus migration"],
      link: "/pages/service-build",
      buttonText: "More on build"
    },
    {
      number: "02",
      title: "Manage",
      description: "We value long-term relationships with our clients, creating dedicated teams which work seamlessly as an extension of your business. We closely manage your online marketing channels and the day-to-day of your Shopify store with attention to detail and flexibility.",
      services: ["Conversion Optimisation", "Retention & CDP", "Project management", "Website operations"],
      link: "/pages/service-manage",
      buttonText: "More on manage"
    },
    {
      number: "03",
      title: "Grow",
      description: "By leveraging data, we identify growth opportunities and implement highly effective performance marketing campaigns that drive revenue. Our proactive approach in combination with continuous monitoring and optimisation delivers sustained growth.",
      services: ["Data & Intelligence", "Paid Advertising", "Growth strategy", "Marketplaces"],
      link: "/pages/service-grow",
      buttonText: "More on grow"
    }
  ];

  return (
    <div className="w-full">
      <section className="relative pt-[60px] pb-20 lg:pt-[100px] lg:pb-[100px] rounded-t-[15px] bg-[#c0bbae] mt-0">
        <div className="mx-auto px-4 lg:px-6">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 lg:mb-12 border-b border-[#262424] pb-8 lg:pb-12">
              <div className="lg:col-span-8">
                <p className="text-xs font-normal text-[#262424] mb-4 lg:mb-6 uppercase" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                  The way we work
                </p>
                <h3 className="text-[30px] lg:text-[48px] leading-tight font-light text-[#262424] mb-6 lg:mb-8" style={{ fontFamily: 'PP Editorial Old, serif' }}>
                  With our intrinsic appreciation of the fashion industry, our team creates tailored solutions for longevity in a dynamic landscape.
                </h3>
                <div className="text-md leading-[20px] font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                  <p>
                    Our pro-active approach thinks along with the client, looking for the next steps and progressing them forward in their journey. We know to offer the best thing for them specifically, depending on their needs and capabilities. Our 360 structure of build, manage, grow means we can elevate the client&apos;s game from all angles.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 hidden lg:flex lg:justify-end lg:items-start">
                <a href="/pages/approach" className="inline-flex items-center gap-2 text-[#262424] hover:opacity-80 transition-opacity">
                  <span className="w-4 h-4">
                    <ArrowIcon />
                  </span>
                  <span className="text-xs font-normal uppercase" style={{ fontFamily: 'Aeonik, sans-serif' }}>Our Approach</span>
                  <span className="w-4 h-4">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>
            
            <div 
              className="flex flex-row lg:grid lg:grid-cols-5 gap-6 lg:gap-8 overflow-x-auto lg:overflow-x-visible "
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
            
              
              {/* Service columns */}
              {servicesData.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-96 lg:w-auto space-y-6 border-l border-[#262424] pl-6">
                  <div className="space-y-2">
                    <span className="block text-[32px] lg:text-[48px] font-bold text-[#262424] leading-none" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                      {service.number}
                    </span>
                    <p className="text-sm lg:text-base font-normal text-[#262424]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                      {service.title}
                    </p>
                    <p className="text-xs font-normal text-[#262424] leading-relaxed" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="text-xs font-normal text-[#262424] space-y-2 uppercase" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                      {service.services.map((serviceItem, serviceIndex) => (
                        <p key={serviceIndex} className="border-t border-[#262424] pt-2">{serviceItem}</p>
                      ))}
                    </div>
                    <a href={service.link} className="inline-flex items-center gap-2 px-4 py-2 bg-[#9B978B] text-[#262424] rounded hover:opacity-90 transition-opacity">
                      <span className="w-4 h-4">
                        <ArrowIcon />
                      </span>
                      <span className="text-xs font-normal uppercase" style={{ fontFamily: 'Aeonik, sans-serif' }}>{service.buttonText}</span>
                      <span className="w-4 h-4">
                        <ArrowIcon />
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesMainSection