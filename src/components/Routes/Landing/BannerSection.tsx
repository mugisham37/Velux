import Image from 'next/image'

const BannerSection = () => {
  return (
    <div 
      id="shopify-section-template--26430796759383__f1214721-46d5-4d18-93ff-183e7995facb"
      className="shopify-section main_banner"
    >
      <section
        className="section-banner section-id-template--26430796759383__f1214721-46d5-4d18-93ff-183e7995facb relative-sec pt-0 pb-0 lg:pt-0 lg:pb-0 rounded-none bg-[#262424]"
      >
        <div className="banner-wrap">
          <div className="snippet-banner block-id-e2167cfe-0cac-4332-a4c6-2bae7bb09dec full-width">
            <div className="mainbnr_wrap banner img_banner">
              <Image 
                src="https://www.notsellingliquid.com/cdn/shop/files/53A584C0-4882-460F-885B-0134EAB6E6BD-m.jpg?v=1758090427"
                alt="" 
                className="full-image hidden lg:block rounded-t-[15px] max-w-full h-auto"
                width={2164}
                height={1440}
                priority
                unoptimized
              />
              <Image
                src="https://www.notsellingliquid.com/cdn/shop/files/Bram_s_Fruit_HS25_30-10-241072_copy.jpg?v=1747413260"
                alt="" 
                className="full-image block lg:hidden rounded-t-[15px] max-w-full h-auto"
                width={1080} 
                height={1350}
                priority
                unoptimized
              />
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

export default BannerSection

