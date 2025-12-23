'use client'
import Link from 'next/link'

export default function TextBannerSection() {
  return (
    <div id="shopify-section-template--26430797775191__ea0d4fcc-1e38-4b06-baa8-67fe3cb132ad"
         className="shopify-section main_text_banner">
      <link
        href="//www.notsellingliquid.com/cdn/shop/t/39/assets/text-banner.css?v=39668662924149513041758090047"
        rel="stylesheet" type="text/css" media="all" />
      <section
        className="section-text-banner section-id-template--26430797775191__ea0d4fcc-1e38-4b06-baa8-67fe3cb132ad relative-sec">
        <style>
          {`
            .section-id-template--26430797775191__ea0d4fcc-1e38-4b06-baa8-67fe3cb132ad {
              background: #262424;
            }

            .text-bannerinr img,
            .text-bannerinr video {
              border-radius: 0px 0px 15px 15px;
            }

            .tb-content {
              color: #ffffff;
            }

            .tb-content svg path {
              fill: #ffffff;
            }
          `}
        </style>
        <div className="text-banner">
          <div className="text-bannerinr banner">
            <video playsInline autoPlay muted loop preload="metadata"
                   className="fullvideo d-none d-lg-block" aria-label="Shopify Plus Agency Case - Arte Antwerp"
                   poster="//www.notsellingliquid.com/cdn/shop/files/preview_images/d5f3186a25b34e6aabe7cc582edd3c17.thumbnail.0000000000_small.jpg?v=1692610307">
              <source
                src="//www.notsellingliquid.com/cdn/shop/videos/c/vp/d5f3186a25b34e6aabe7cc582edd3c17/d5f3186a25b34e6aabe7cc582edd3c17.HD-1080p-2.5Mbps-17527902.mp4?v=0"
                type="video/mp4" />
              <img alt="Shopify Plus Agency Case - Arte Antwerp"
                   src="//www.notsellingliquid.com/cdn/shop/files/preview_images/d5f3186a25b34e6aabe7cc582edd3c17.thumbnail.0000000000_small.jpg?v=1692610307" />
            </video>
            <img src="//www.notsellingliquid.com/cdn/shop/files/9-arte.jpg?v=1692609357"
                 alt="Shopify Plus Agency Case - Arte Antwerp" loading="lazy"
                 className="full-image d-block d-lg-none" width="1689" height="2111" />
            <div className="tb-content banner-content">
              <div className="tb-contentinr">
                <div className="tb-context">
                  <p className="s-body">
                    <span>Case</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                            fill="initial"></path>
                    </svg>
                    <span>Arte Antwerp</span>
                  </p>
                  <p className="s-caption">The 360 approach that took Arte Antwerp into a whole new
                    online playing field</p>
                  <div className="tb-tags">
                    <p className="xs-body tag">build</p>
                    <p className="xs-body tag">manage</p>
                    <p className="xs-body tag">grow</p>
                  </div>
                </div>
                <div className="tb-conbtn text-right">
                  <Link href="/pages/case-study-arte-antwerp-360-approach">
                    <div className="link-arrow">
                      <span className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                fill="initial"></path>
                        </svg>
                      </span>
                      <span className="label">View full case</span>
                      <span className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                                fill="initial"></path>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}