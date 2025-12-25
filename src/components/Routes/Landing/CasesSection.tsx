import React from 'react';
import Image from 'next/image';

// Helper function to convert protocol-relative URLs to absolute HTTPS URLs
const normalizeImageUrl = (url: string): string => {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  return url;
};

const CasesSection: React.FC = () => {
  return (
    <div 
      id="shopify-section-template--26430796759383__9f9ca3cf-e41c-42ad-9384-b5b5e7edb7d2"
      className="shopify-section"
    >
      <section className="section-cases relative bg-[#e5e2de] text-[#262424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#262424] py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20">
              <div className="cases-hl">
                <p className="text-xs font-normal mb-4 lg:mb-6 font-['Aeonik'] leading-relaxed">
                  We&apos;re moved by the diverse stories of fashion
                </p>
                <h3 className="text-3xl lg:text-5xl font-light font-['PP_Editorial_Old'] leading-tight lg:leading-tight">
                  We help ambitious brands, ones with heart, soul and character.
                </h3>
              </div>
              <div className="cases-hr hidden lg:flex justify-end items-end">
                <a 
                  href="/pages/case-studies" 
                  className="inline-flex items-center gap-2 text-[#262424] hover:opacity-80 transition-opacity duration-200 group"
                >
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-normal font-['Aeonik']">all case studies</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
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
            
            <div className="cases-grid overflow-x-auto">
              <div className="flex gap-6 lg:gap-8 min-w-max lg:min-w-0 lg:grid lg:grid-cols-3">
                {/* Case 1: Fabienne Chapot */}
                <div className="cases-gridinr shrink-0 w-80 lg:w-auto relative group">
                  <div className="cases-gridwrap relative overflow-hidden rounded-lg lg:rounded-xl aspect-4/5 lg:aspect-3/4">
                    <video 
                      playsInline 
                      autoPlay 
                      muted 
                      loop
                      preload="metadata" 
                      className="absolute inset-0 w-full h-full object-cover hidden lg:block"
                      poster={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")}
                    >
                      <source
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0")}
                        type="video/mp4" 
                      />
                      <Image 
                        alt="" 
                        width={800} 
                        height={600}
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")} 
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
                      poster={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")}
                    >
                      <source
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0")}
                        type="video/mp4" 
                      />
                      <Image 
                        alt="" 
                        width={800} 
                        height={600}
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")} 
                        className="w-full h-full object-cover"
                      />
                    </video>
                    
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-normal bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Build</span>
                          <span className="text-xs font-normal bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Manage</span>
                          <span className="text-xs font-normal bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Grow</span>
                        </div>
                        
                        <div className="hidden lg:block text-center mb-4">
                          {/* Logo placeholder */}
                        </div>
                        
                        <div className="cases-btext">
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2 font-['Aeonik']">Fabienne Chapot</p>
                            <div className="text-xs opacity-90 font-['Aeonik'] leading-relaxed">
                              <p>
                                A new digital home for Fabienne Chapot: Artfully balancing creativity with commercial goals
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <a 
                              href="/pages/fabienne-chapot-shopify-new-site"
                              className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity duration-200 group"
                            >
                              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path 
                                    fillRule="evenodd" 
                                    clipRule="evenodd"
                                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span className="text-xs font-normal">View Full Case</span>
                              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
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

                {/* Case 2: Hang Eleven */}
                <div className="cases-gridinr shrink-0 w-80 lg:w-auto relative group">
                  <div className="cases-gridwrap relative overflow-hidden rounded-lg lg:rounded-xl aspect-4/5 lg:aspect-3/4">
                    <video 
                      playsInline 
                      autoPlay 
                      muted 
                      loop
                      preload="metadata" 
                      className="absolute inset-0 w-full h-full object-cover hidden lg:block"
                      poster={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/c511976946554306bd997337c1ab7992.thumbnail.0000000000_small.jpg?v=1727946458")}
                    >
                      <source
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/videos/c/vp/c511976946554306bd997337c1ab7992/c511976946554306bd997337c1ab7992.HD-1080p-7.2Mbps-35760312.mp4?v=0")}
                        type="video/mp4" 
                      />
                      <Image 
                        alt="" 
                        width={800} 
                        height={600}
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/c511976946554306bd997337c1ab7992.thumbnail.0000000000_small.jpg?v=1727946458")} 
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
                      poster={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/1b7fc4accae94cf79b2598c5b2b37a20.thumbnail.0000000000_small.jpg?v=1727946455")}
                    >
                      <source
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/videos/c/vp/1b7fc4accae94cf79b2598c5b2b37a20/1b7fc4accae94cf79b2598c5b2b37a20.HD-1080p-7.2Mbps-35760313.mp4?v=0")}
                        type="video/mp4" 
                      />
                      <Image 
                        alt="" 
                        width={800} 
                        height={600}
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/1b7fc4accae94cf79b2598c5b2b37a20.thumbnail.0000000000_small.jpg?v=1727946455")} 
                        className="w-full h-full object-cover"
                      />
                    </video>
                    
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-normal bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Build</span>
                          <span className="text-xs font-normal bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Grow</span>
                        </div>
                        
                        <div className="hidden lg:block text-center mb-4">
                          {/* Logo placeholder */}
                        </div>
                        
                        <div className="cases-btext">
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2 font-['Aeonik']">Hang Eleven</p>
                            <div className="text-xs opacity-90 font-['Aeonik'] leading-relaxed">
                              <p>
                                Launching a refreshed webshop for Hang Eleven to grow internationally
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <a 
                              href="/pages/hang-eleven-webshop-international-growth"
                              className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity duration-200 group"
                            >
                              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path 
                                    fillRule="evenodd" 
                                    clipRule="evenodd"
                                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span className="text-xs font-normal">View full case</span>
                              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
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

                {/* Case 3: Arte Antwerp */}
                <div className="cases-gridinr shrink-0 w-80 lg:w-auto relative group">
                  <div className="cases-gridwrap relative overflow-hidden rounded-lg lg:rounded-xl aspect-4/5 lg:aspect-3/4">
                    <video 
                      playsInline 
                      autoPlay 
                      muted 
                      loop
                      preload="metadata" 
                      className="absolute inset-0 w-full h-full object-cover hidden lg:block"
                      aria-label="Shopify Plus Agency Case - Arte Antwerp"
                      poster={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d5f3186a25b34e6aabe7cc582edd3c17.thumbnail.0000000000_small.jpg?v=1692610307")}
                    >
                      <source
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/videos/c/vp/d5f3186a25b34e6aabe7cc582edd3c17/d5f3186a25b34e6aabe7cc582edd3c17.HD-1080p-2.5Mbps-17527902.mp4?v=0")}
                        type="video/mp4" 
                      />
                      <Image 
                        alt="Shopify Plus Agency Case - Arte Antwerp" 
                        width={800} 
                        height={600}
                        src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d5f3186a25b34e6aabe7cc582edd3c17.thumbnail.0000000000_small.jpg?v=1692610307")} 
                        className="w-full h-full object-cover"
                      />
                    </video>
                    <Image 
                      src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/9-arte.jpg?v=1692609357")}
                      alt="Shopify Plus Agency Case - Arte Antwerp" 
                      className="absolute inset-0 w-full h-full object-cover block lg:hidden" 
                      width={1689} 
                      height={2111} 
                    />
                    
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-normal bg-white/20 backdrop-blur-sm px-2 py-1 rounded">build</span>
                          <span className="text-xs font-normal bg-white/20 backdrop-blur-sm px-2 py-1 rounded">manage</span>
                          <span className="text-xs font-normal bg-white/20 backdrop-blur-sm px-2 py-1 rounded">grow</span>
                        </div>
                        
                        <div className="hidden lg:block text-center mb-4">
                          {/* Logo placeholder */}
                        </div>
                        
                        <div className="cases-btext">
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2 font-['Aeonik']">Arte Antwerp</p>
                            <div className="text-xs opacity-90 font-['Aeonik'] leading-relaxed">
                              <p>
                                The 360 approach that took Arte Antwerp into a whole new online playing field
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <a 
                              href="/pages/case-study-arte-antwerp-360-approach"
                              className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity duration-200 group"
                            >
                              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path 
                                    fillRule="evenodd" 
                                    clipRule="evenodd"
                                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span className="text-xs font-normal">view full case</span>
                              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
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
            </div>
            
            {/* Mobile button */}
            <div className="cases-mb-btn flex justify-end lg:hidden mt-8">
              <a 
                href="/pages/case-studies" 
                className="inline-flex items-center gap-3 bg-[#c0bbae] text-[#262424] px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 group"
              >
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd"
                      d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-xs font-normal font-['Aeonik']">all case studies</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
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
      </section>
    </div>
  );
};

export default CasesSection;