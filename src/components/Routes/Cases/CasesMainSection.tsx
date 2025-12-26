import Image from 'next/image'
import { normalizeImageUrl } from '../../../utils/imageUtils'

const CasesMainSection = () => {
  return (
   <div className="relative -mt-[65.55px]">
                <section className="relative bg-[#c0bbae]">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <div className="pt-[180px] pb-10 lg:pt-[200px] lg:pb-10">
                            <div className="grid grid-cols-10 gap-4 mb-8">
                                <div className="col-span-10 lg:col-span-6">
                                    <h3 className="text-[30px] lg:text-[48px] leading-[1.2] font-light text-[#262424]" style={{fontFamily: 'PP Editorial Old, serif'}}>Together with our clients, we&apos;re changing the way to do e-commerce.</h3>
                                </div>
                                <div className="col-span-10 lg:col-span-4">
                                    <p className="text-[12px] leading-[1.4] text-[#262424]" style={{fontFamily: 'Aeonik, sans-serif'}}>Enhancing each other, positively influencing one another,
                                        uncovering new possible territories in the digital space and in the minds of
                                        their communities.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Fabienne Chapot - Full Width */}
                                <div className="col-span-2 relative group">
                                    <div className="relative overflow-hidden aspect-video">
                                        <video 
                                            playsInline 
                                            autoPlay
                                            muted 
                                            loop 
                                            preload="metadata"
                                            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
                                            poster={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")}>
                                            <source
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0")}
                                                type="video/mp4" />
                                            <Image
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")} 
                                                alt="" 
                                                width={800}
                                                height={450}
                                                className="w-full h-full object-cover"
                                            />
                                        </video>
                                        <video 
                                            playsInline 
                                            autoPlay 
                                            muted 
                                            loop
                                            preload="metadata" 
                                            className="absolute inset-0 w-full h-full object-cover block lg:hidden"
                                            poster={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")}>
                                            <source
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0")}
                                                type="video/mp4" />
                                            <Image
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")} 
                                                alt="" 
                                                width={800}
                                                height={450}
                                                className="w-full h-full object-cover"
                                            />
                                        </video>
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-6 lg:p-8">
                                            <div className="text-white">
                                                <div className="flex gap-2 mb-4">
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Build</span>
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Manage</span>
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Grow</span>
                                                </div>
                                                <div className="hidden lg:block text-center mb-4"></div>
                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <p className="text-[14px] font-medium mb-2" style={{fontFamily: 'Aeonik, sans-serif'}}>Fabienne Chapot</p>
                                                        <div className="text-[12px] leading-[1.4] max-w-md" style={{fontFamily: 'Aeonik, sans-serif'}}>
                                                            <p>A new digital home for Fabienne Chapot: Artfully
                                                                balancing creativity with commercial goals</p>
                                                        </div>
                                                    </div>
                                                    <div className="hidden lg:flex">
                                                        <a
                                                            href="/pages/fabienne-chapot-shopify-new-site"
                                                            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[12px]" style={{fontFamily: 'Aeonik, sans-serif'}}>view full case</span>
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hang Eleven - Half Width */}
                                <div className="col-span-2 lg:col-span-1 relative group">
                                    <div className="relative overflow-hidden aspect-4/5">
                                        <video 
                                            playsInline 
                                            autoPlay
                                            muted 
                                            loop 
                                            preload="metadata"
                                            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
                                            poster={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/c511976946554306bd997337c1ab7992.thumbnail.0000000000_small.jpg?v=1727946458")}>
                                            <source
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/c511976946554306bd997337c1ab7992/c511976946554306bd997337c1ab7992.HD-1080p-7.2Mbps-35760312.mp4?v=0")}
                                                type="video/mp4" />
                                            <Image
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/c511976946554306bd997337c1ab7992.thumbnail.0000000000_small.jpg?v=1727946458")} 
                                                alt="" 
                                                width={600}
                                                height={750}
                                                className="w-full h-full object-cover"
                                            />
                                        </video>
                                        <video 
                                            playsInline 
                                            autoPlay 
                                            muted 
                                            loop
                                            preload="metadata" 
                                            className="absolute inset-0 w-full h-full object-cover block lg:hidden"
                                            poster={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/1b7fc4accae94cf79b2598c5b2b37a20.thumbnail.0000000000_small.jpg?v=1727946455")}>
                                            <source
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/1b7fc4accae94cf79b2598c5b2b37a20/1b7fc4accae94cf79b2598c5b2b37a20.HD-1080p-7.2Mbps-35760313.mp4?v=0")}
                                                type="video/mp4" />
                                            <Image
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/1b7fc4accae94cf79b2598c5b2b37a20.thumbnail.0000000000_small.jpg?v=1727946455")} 
                                                alt="" 
                                                width={600}
                                                height={750}
                                                className="w-full h-full object-cover"
                                            />
                                        </video>
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 lg:p-6">
                                            <div className="text-white">
                                                <div className="flex gap-2 mb-3">
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Build</span>
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Grow</span>
                                                </div>
                                                <div className="hidden lg:block text-center mb-3"></div>
                                                <div>
                                                    <div>
                                                        <p className="text-[14px] font-medium mb-2" style={{fontFamily: 'Aeonik, sans-serif'}}>Hang Eleven</p>
                                                        <div className="text-[12px] leading-[1.4] mb-3" style={{fontFamily: 'Aeonik, sans-serif'}}>
                                                            <p>Launching a refreshed webshop for Hang Eleven to grow
                                                                internationally</p>
                                                        </div>
                                                    </div>
                                                    <div className="hidden lg:flex">
                                                        <a
                                                            href="/pages/hang-eleven-webshop-international-growth"
                                                            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[12px]" style={{fontFamily: 'Aeonik, sans-serif'}}>view full case</span>
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* LA Sisters - Half Width */}
                                <div className="col-span-2 lg:col-span-1 relative group">
                                    <div className="relative overflow-hidden aspect-4/5">
                                        <video 
                                            playsInline 
                                            autoPlay
                                            muted 
                                            loop 
                                            preload="metadata"
                                            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
                                            poster={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869")}>
                                            <source
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d95b8a6ea45e48b79d349081e3bca7fe/d95b8a6ea45e48b79d349081e3bca7fe.HD-1080p-2.5Mbps-44441520.mp4?v=0")}
                                                type="video/mp4" />
                                            <Image
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869")} 
                                                alt="" 
                                                width={600}
                                                height={750}
                                                className="w-full h-full object-cover"
                                            />
                                        </video>
                                        <video 
                                            playsInline 
                                            autoPlay 
                                            muted 
                                            loop
                                            preload="metadata" 
                                            className="absolute inset-0 w-full h-full object-cover block lg:hidden"
                                            poster={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869")}>
                                            <source
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/videos/c/vp/d95b8a6ea45e48b79d349081e3bca7fe/d95b8a6ea45e48b79d349081e3bca7fe.HD-1080p-2.5Mbps-44441520.mp4?v=0")}
                                                type="video/mp4" />
                                            <Image
                                                src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869")} 
                                                alt="" 
                                                width={600}
                                                height={750}
                                                className="w-full h-full object-cover"
                                            />
                                        </video>
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 lg:p-6">
                                            <div className="text-white">
                                                <div className="flex gap-2 mb-3">
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Build</span>
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Grow</span>
                                                </div>
                                                <div className="hidden lg:block text-center mb-3"></div>
                                                <div>
                                                    <div>
                                                        <p className="text-[14px] font-medium mb-2" style={{fontFamily: 'Aeonik, sans-serif'}}>LA Sisters</p>
                                                        <div className="text-[12px] leading-[1.4] mb-3" style={{fontFamily: 'Aeonik, sans-serif'}}>
                                                            <p>A tailor-made website redesign and migration for the LA
                                                                Sisters to connect authentically with their loyal
                                                                following</p>
                                                        </div>
                                                    </div>
                                                    <div className="hidden lg:flex">
                                                        <a
                                                            href="/pages/redesign-and-migration-la-sisters"
                                                            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[12px]" style={{fontFamily: 'Aeonik, sans-serif'}}>view full case</span>
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bamboo Basics - Half Width */}
                                <div className="col-span-2 lg:col-span-1 relative group">
                                    <div className="relative overflow-hidden aspect-4/5">
                                        <Image
                                            src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/MAXTRAVEL-001-zwart_4666043d-c0bf-40ad-ba33-18fdb9137889.jpg?v=1728473963")}
                                            alt="" 
                                            className="absolute inset-0 w-full h-full object-cover hidden lg:block" 
                                            width={1200}
                                            height={1200}
                                            priority={false}
                                        />
                                        <Image
                                            src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/MAXTRAVEL-001-zwart_4666043d-c0bf-40ad-ba33-18fdb9137889.jpg?v=1728473963")}
                                            alt="" 
                                            className="absolute inset-0 w-full h-full object-cover block lg:hidden" 
                                            width={1200}
                                            height={1200}
                                            priority={false}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 lg:p-6">
                                            <div className="text-white">
                                                <div className="flex gap-2 mb-3">
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Build</span>
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Manage</span>
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Grow</span>
                                                </div>
                                                <div className="hidden lg:block text-center mb-3"></div>
                                                <div>
                                                    <div>
                                                        <p className="text-[14px] font-medium mb-2" style={{fontFamily: 'Aeonik, sans-serif'}}>Bamboo Basics</p>
                                                        <div className="text-[12px] leading-[1.4] mb-3" style={{fontFamily: 'Aeonik, sans-serif'}}>
                                                            <p>Migrating Bamboo Basics to Shopify Plus for a more
                                                                seamless online experience and next step in business
                                                                growth</p>
                                                        </div>
                                                    </div>
                                                    <div className="hidden lg:flex">
                                                        <a
                                                            href="/pages/migrating-bamboo-basics-to-shopify"
                                                            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[12px]" style={{fontFamily: 'Aeonik, sans-serif'}}>view full case</span>
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* WAM Denim - Half Width */}
                                <div className="col-span-2 lg:col-span-1 relative group">
                                    <div className="relative overflow-hidden aspect-4/5">
                                        <Image
                                            src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/mainBanner_desktop_home1.webp?v=1743411299")}
                                            alt="" 
                                            className="absolute inset-0 w-full h-full object-cover hidden lg:block" 
                                            width={1920}
                                            height={1080}
                                            priority={false}
                                        />
                                        <Image
                                            src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/mainBanner_desktop_home1.webp?v=1743411299")}
                                            alt="" 
                                            className="absolute inset-0 w-full h-full object-cover block lg:hidden" 
                                            width={1920}
                                            height={1080}
                                            priority={false}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 lg:p-6">
                                            <div className="text-white">
                                                <div className="flex gap-2 mb-3">
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Build</span>
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Grow</span>
                                                </div>
                                                <div className="hidden lg:block text-center mb-3"></div>
                                                <div>
                                                    <div>
                                                        <p className="text-[14px] font-medium mb-2" style={{fontFamily: 'Aeonik, sans-serif'}}>WAM Denim</p>
                                                        <div className="text-[12px] leading-[1.4] mb-3" style={{fontFamily: 'Aeonik, sans-serif'}}>
                                                            <p>Refreshing WAM Denim&apos;s online presence with a Shopify
                                                                Plus migration to power their international ambitions
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="hidden lg:flex">
                                                        <a
                                                            href="/pages/refreshing-wam-denim-shopify-plus-migration"
                                                            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[12px]" style={{fontFamily: 'Aeonik, sans-serif'}}>view full case</span>
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Four Amsterdam - Half Width */}
                                <div className="col-span-2 lg:col-span-1 relative group">
                                    <div className="relative overflow-hidden aspect-4/5">
                                        <Image
                                            src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/C5-foto-3.jpg?v=1694596011")}
                                            alt="Shopify Plus Agency Case - Four Amsterdam" 
                                            className="absolute inset-0 w-full h-full object-cover hidden lg:block" 
                                            width={1080} 
                                            height={1350}
                                            priority={false}
                                        />
                                        <Image
                                            src={normalizeImageUrl("https://www.notsellingliquid.com/cdn/shop/files/C5-foto-3.jpg?v=1694596011")}
                                            alt="Shopify Plus Agency Case - Four Amsterdam" 
                                            className="absolute inset-0 w-full h-full object-cover block lg:hidden" 
                                            width={1080} 
                                            height={1350}
                                            priority={false}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 lg:p-6">
                                            <div className="text-white">
                                                <div className="flex gap-2 mb-3">
                                                    <span className="text-[10px] px-2 py-1 bg-white bg-opacity-20 rounded text-white" style={{fontFamily: 'Aeonik, sans-serif'}}>Build</span>
                                                </div>
                                                <div className="hidden lg:block text-center mb-3"></div>
                                                <div>
                                                    <div>
                                                        <p className="text-[14px] font-medium mb-2" style={{fontFamily: 'Aeonik, sans-serif'}}>Four Amsterdam</p>
                                                        <div className="text-[12px] leading-[1.4] mb-3" style={{fontFamily: 'Aeonik, sans-serif'}}>
                                                            <p>A replatforming to Shopify Plus brings FOUR a stronger
                                                                online presence and a dedicated Kids website</p>
                                                        </div>
                                                    </div>
                                                    <div className="hidden lg:flex">
                                                        <a
                                                            href="/pages/case-four-amsterdam-migration-from-lightspeed"
                                                            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                                                            <div className="flex items-center gap-2">
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-[12px]" style={{fontFamily: 'Aeonik, sans-serif'}}>view full case</span>
                                                                <span className="w-4 h-4">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" viewBox="0 0 16 16" fill="none">
                                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
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

export default CasesMainSection

