import React from 'react';

// Reusable Arrow Icon Component
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fillRule="evenodd" clipRule="evenodd"
            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
            fill="currentColor"></path>
    </svg>
);

// Service Block Component
const ServiceBlock = ({ number, title, description, services, ctaText, ctaLink, blockId, isLast = false }) => (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 ${!isLast ? 'mb-16 lg:mb-20' : ''}`} data-block-id={blockId}>
        <div className="flex flex-col">
            <span className="text-[80px] font-light text-[#262424] leading-none mb-4" style={{ fontFamily: 'PP Editorial Old, serif' }}>{number}</span>
            <p className="text-base font-normal text-[#262424] mb-4" style={{ fontFamily: 'Aeonik, sans-serif' }}>{title}</p>
            <p className="text-xs leading-relaxed text-[#262424] mb-8" style={{ fontFamily: 'Aeonik, sans-serif' }}>{description}</p>
        </div>
        <div className="flex flex-col justify-between">
            <div className="text-sm font-normal text-[#262424] mb-8" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                {services.map((service, index) => (
                    <p key={index} className="mb-2">{service}</p>
                ))}
            </div>
            <a href={ctaLink} className="inline-flex items-center gap-2 px-6 py-3 bg-[#9B978B] text-[#262424] rounded hover:opacity-90 transition-opacity self-start" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                <span className="w-4 h-4">
                    <ArrowIcon />
                </span>
                <span className="text-xs font-normal">{ctaText}</span>
                <span className="w-4 h-4">
                    <ArrowIcon />
                </span>
            </a>
        </div>
    </div>
);

// Services Data Configuration
const servicesData = [
    {
        number: "01",
        title: "Build",
        description: "As certified Shopify Premier partner, we design and develop Shopify Plus platforms with multi-channel solutions. Our team applies their years of experience in e-commerce, Shopify and fashion to build tailor-made digital flagship stores.",
        services: [
            "UX & UI Design",
            "Development",
            "Klaviyo e-mail automation",
            "Shopify Plus migration"
        ],
        ctaText: "More on build",
        ctaLink: "/pages/service-build",
        blockId: "0954e71a-257a-4c7c-94bf-9938d5c4e8fb"
    },
    {
        number: "02",
        title: "Manage",
        description: "We value long-term relationships with our clients, creating dedicated teams which work seamlessly as an extension of your business. We closely manage your online marketing channels and the day-to-day of your Shopify store with attention to detail and flexibility.",
        services: [
            "Conversion Optimisation",
            "Retention & CDP",
            "Project management",
            "Website operations "
        ],
        ctaText: "More on manage",
        ctaLink: "/pages/service-manage",
        blockId: "7d12b000-6869-433d-a614-96b57c261e3b"
    },
    {
        number: "03",
        title: "Grow",
        description: "By leveraging data, we identify growth opportunities and implement highly effective performance marketing campaigns that drive revenue. Our proactive approach in combination with continuous monitoring and optimisation delivers sustained growth.",
        services: [
            "Data & Intelligence",
            "Paid Advertising",
            "Growth strategy",
            "Marketplaces"
        ],
        ctaText: "More on grow",
        ctaLink: "/pages/service-grow",
        blockId: "2a4a290e-94ee-47dd-98ec-c3d3c3d2bc73"
    }
];

const ServicesMainSection = () => {
    return (
        <div className="">
            <section
                className="relative pt-[60px] pb-[80px] lg:pt-[100px] lg:pb-[100px] rounded-t-[15px] bg-[#c0bbae] -mt-[15px] z-30"
                style={{ fontFamily: 'Aeonik, sans-serif' }}>
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="relative">
                        <div className="grid lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-8">
                                <div className="block lg:hidden mb-8">
                                    <p className="text-xs font-normal text-[#262424] mb-4" style={{ fontFamily: 'Aeonik, sans-serif' }}>The way we work</p>
                                    <h3 className="text-[30px] lg:text-[48px] leading-tight text-[#262424] font-light" style={{ fontFamily: 'PP Editorial Old, serif' }}>With our intrinsic appreciation of the fashion industry, our team creates
                                        tailored solutions for longevity in a dynamic landscape.</h3>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex items-start justify-end">
                                <div className="hidden lg:block text-right">
                                    <p className="text-xs font-normal text-[#262424] mb-4" style={{ fontFamily: 'Aeonik, sans-serif' }}>The way we work</p>
                                    <h3 className="text-[48px] leading-tight text-[#262424] font-light mb-6" style={{ fontFamily: 'PP Editorial Old, serif' }}>With our intrinsic appreciation of the fashion industry, our team creates
                                        tailored solutions for longevity in a dynamic landscape.</h3>
                                    <div className="text-xs leading-relaxed text-[#262424] mb-8" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                                        <p>Our pro-active approach thinks along with the client, looking for the next
                                            steps and progressing them forward in their journey. We know to offer the
                                            best thing for them specifically, depending on their needs and capabilities.
                                            Our 360 structure of build, manage, grow means we can elevate the client&apos;s
                                            game from all angles.</p>
                                    </div>
                                    <a href="/pages/approach" className="inline-flex items-center gap-2 text-[#262424] hover:opacity-80 transition-opacity">
                                        <span className="w-4 h-4">
                                            <ArrowIcon />
                                        </span>
                                        <span className="text-xs font-normal" style={{ fontFamily: 'Aeonik, sans-serif' }}>Our Approach</span>
                                        <span className="w-4 h-4">
                                            <ArrowIcon />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 lg:mt-20">
                            {servicesData.map((service, index) => (
                                <ServiceBlock
                                    key={service.number}
                                    number={service.number}
                                    title={service.title}
                                    description={service.description}
                                    services={service.services}
                                    ctaText={service.ctaText}
                                    ctaLink={service.ctaLink}
                                    blockId={service.blockId}
                                    isLast={index === servicesData.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesMainSection