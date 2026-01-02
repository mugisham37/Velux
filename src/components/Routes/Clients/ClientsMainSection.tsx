import Image from 'next/image'

// Configuration objects to eliminate repetition
const MEDIA_CONFIG = {
    alt: "Shopify Plus Agency Case - Arte Antwerp",
    width: 1689,
    height: 2111,
    baseClassName: "w-full h-auto rounded-b-[15px]"
}

const URLS = {
    video: "https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d5f3186a25b34e6aabe7cc582edd3c17/d5f3186a25b34e6aabe7cc582edd3c17.HD-1080p-2.5Mbps-17527902.mp4?v=0",
    poster: "https://www.notsellingliquid.com/cdn/shop/files/preview_images/d5f3186a25b34e6aabe7cc582edd3c17.thumbnail.0000000000_small.jpg?v=1692610307",
    mobileImage: "https://www.notsellingliquid.com/cdn/shop/files/9-arte.jpg?v=1692609357",
    caseStudy: "/pages/case-study-arte-antwerp-360-approach"
}

const SERVICES = ['build', 'manage', 'grow']

// Reusable Arrow Icon component
const ArrowIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
        <path fillRule="evenodd" clipRule="evenodd"
            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
            fill="currentColor"></path>
    </svg>
)

const ClientsMainSection = () => {
    return (
        <div id="shopify-section-template--26430797775191__ea0d4fcc-1e38-4b06-baa8-67fe3cb132ad"
            className="relative">
            <section className="relative bg-[#262424]">
                <div className="relative">
                    <div className="relative">
                        {/* Video for desktop - hidden on mobile, block on lg+ */}
                        <video 
                            playsInline={true} 
                            autoPlay={true} 
                            muted={true} 
                            loop={true} 
                            preload="metadata"
                            className={`${MEDIA_CONFIG.baseClassName} hidden lg:block`}
                            aria-label={MEDIA_CONFIG.alt}
                            poster={URLS.poster}>
                            <source
                                src={URLS.video}
                                type="video/mp4" />
                            <Image 
                                alt={MEDIA_CONFIG.alt}
                                src={URLS.poster}
                                width={MEDIA_CONFIG.width}
                                height={MEDIA_CONFIG.height}
                                className={MEDIA_CONFIG.baseClassName}
                                priority
                            />
                        </video>
                        
                        {/* Image for mobile - block on mobile, hidden on lg+ */}
                        <Image 
                            src={URLS.mobileImage}
                            alt={MEDIA_CONFIG.alt}
                            width={MEDIA_CONFIG.width}
                            height={MEDIA_CONFIG.height}
                            className={`${MEDIA_CONFIG.baseClassName} block lg:hidden`}
                            priority
                        />
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex items-end text-white">
                            <div className="w-full p-6 lg:p-12">
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end">
                                    <div className="mb-6 lg:mb-0">
                                        <p className="flex items-center gap-2 text-xs lg:text-sm mb-2">
                                            <span>Case</span>
                                            <ArrowIcon />
                                            <span>Arte Antwerp</span>
                                        </p>
                                        <p className="text-sm lg:text-base mb-4 max-w-md">
                                            The 360 approach that took Arte Antwerp into a whole new online playing field
                                        </p>
                                        <div className="flex gap-2">
                                            {SERVICES.map((service) => (
                                                <span key={service} className="text-xs px-2 py-1 bg-white/10 rounded">
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <a href={URLS.caseStudy} className="inline-flex items-center gap-2 text-sm lg:text-base hover:opacity-80 transition-opacity">
                                            <ArrowIcon />
                                            <span>View full case</span>
                                            <ArrowIcon />
                                        </a>
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

export default ClientsMainSection

