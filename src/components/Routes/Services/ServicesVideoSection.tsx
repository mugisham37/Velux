import React from 'react'

const ServicesVideoSection = () => {
  return (
    <div 
      id="shopify-section-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458"
      className="shopify-section main_banner"
    >
      <style jsx>{`
        .main_banner#shopify-section-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458 {
          position: sticky;
          position: -webkit-sticky;
          top: 0;
          width: 100%;
          z-index: 1;
        }

        .main_banner#shopify-section-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458 .video_banner video {
          max-height: 100vh;
          object-fit: cover;
        }

        .template-page .main_banner#shopify-section-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458:last-child {
          bottom: 0;
          top: unset;
          z-index: 0;
        }

        .banner-con.mob_right.deskver_bottom {
          bottom: 25px;
        }

        @media(min-width:992px) {
          .banner-con.desk_right.deskver_bottom {
            bottom: 35px;
          }
        }

        .section-id-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458 .mainbnr_wrap img,
        .section-id-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458 .mainbnr_wrap video {
          border-radius: 0px 0px 0px 0px;
        }

        .section-id-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458 {
          padding-top: 0px;
          padding-bottom: 0px;
          border-radius: 0px 0px 0px 0px;
          background: #e5e2de;
        }

        @media(min-width:992px) {
          .section-id-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458 {
            padding-top: 0px;
            padding-bottom: 0px;
          }
        }
      `}</style>
      
      <section className="section-banner section-id-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458">
        <div className="banner-wrap">
          <div className="snippet-banner block-id-fe3b6d9b-bcac-47bf-a199-63ef32a34e58 full-width">
            <div className="mainbnr_wrap banner">
              <video 
                playsInline={true} 
                autoPlay={true} 
                muted={true} 
                loop={true} 
                preload="metadata"
                className="fullvideo d-none d-lg-block"
                poster="//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207"
              >
                <source
                  src="//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0"
                  type="video/mp4"
                />
                <img
                  src="//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207"
                  alt="Video fallback"
                />
              </video>
              
              <video 
                playsInline={true} 
                autoPlay={true} 
                muted={true} 
                loop={true}
                preload="metadata" 
                className="fullvideo d-block d-lg-none"
                poster="//www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869"
              >
                <source
                  src="//www.notsellingliquid.com/cdn/shop/videos/c/vp/d95b8a6ea45e48b79d349081e3bca7fe/d95b8a6ea45e48b79d349081e3bca7fe.HD-1080p-2.5Mbps-44441520.mp4?v=0"
                  type="video/mp4"
                />
                <img
                  src="//www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869"
                  alt="Video fallback"
                />
              </video>
              
              <div className="banner-con desk_right mob_right deskver_bottom mobver_bottom">
                <div className="banner-coninr deskhor_right mobhor_right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesVideoSection