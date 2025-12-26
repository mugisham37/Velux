import React from 'react'
import Image from 'next/image'
import { normalizeImageUrl } from '../../../utils/imageUtils'

const ServicesVideoSection = () => {
  return (
    <div 
      id="shopify-section-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458"
      className="shopify-section main_banner sticky top-0 w-full z-10"
    >
      <section className="section-banner section-id-template--26430798102871__dfb5288c-b0d4-443d-887a-08ae4e4d8458 pt-0 pb-0 lg:pt-0 lg:pb-0 rounded-none bg-[#e5e2de]">
        <div className="banner-wrap">
          <div className="snippet-banner block-id-fe3b6d9b-bcac-47bf-a199-63ef32a34e58 full-width">
            <div className="mainbnr_wrap banner relative">
              <video 
                playsInline={true} 
                autoPlay={true} 
                muted={true} 
                loop={true} 
                preload="metadata"
                className="fullvideo hidden lg:block max-h-screen object-cover rounded-none w-full"
                poster={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")}
              >
                <source
                  src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/videos/c/vp/d4d832f6fceb43a989e0c497805ddf2d/d4d832f6fceb43a989e0c497805ddf2d.HD-1080p-7.2Mbps-45627631.mp4?v=0")}
                  type="video/mp4"
                />
                <Image
                  src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d4d832f6fceb43a989e0c497805ddf2d.thumbnail.0000000000_small.jpg?v=1744187207")}
                  alt="Video fallback"
                  width={1920}
                  height={1080}
                  className="rounded-none w-full h-full object-cover"
                />
              </video>
              <video 
                playsInline={true} 
                autoPlay={true} 
                muted={true} 
                loop={true}
                preload="metadata" 
                className="fullvideo block lg:hidden max-h-screen object-cover rounded-none w-full"
                poster={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869")}
              >
                <source
                  src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/videos/c/vp/d95b8a6ea45e48b79d349081e3bca7fe/d95b8a6ea45e48b79d349081e3bca7fe.HD-1080p-2.5Mbps-44441520.mp4?v=0")}
                  type="video/mp4"
                />
                <Image
                  src={normalizeImageUrl("//www.notsellingliquid.com/cdn/shop/files/preview_images/d95b8a6ea45e48b79d349081e3bca7fe.thumbnail.0000000000_small.jpg?v=1742381869")}
                  alt="Video fallback"
                  width={1920}
                  height={1080}
                  className="rounded-none w-full h-full object-cover"
                />
              </video>
              <div className="banner-con desk_right mob_right deskver_bottom mobver_bottom absolute bottom-[25px] lg:bottom-[35px]">
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