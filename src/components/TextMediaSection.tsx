'use client'
import Link from 'next/link'

export default function TextMediaSection() {
  return (
    <div id="shopify-section-template--26430796759383__b10263d9-eedc-4a4e-bc38-9db463307219" className="shopify-section">
      <section className="section-text-media section-id-template--26430796759383__b10263d9-eedc-4a4e-bc38-9db463307219 relative-sec">
        <style jsx>{`
          .section-id-template--26430796759383__b10263d9-eedc-4a4e-bc38-9db463307219 {
            background: #e5e2de;
          }
          .section-id-template--26430796759383__b10263d9-eedc-4a4e-bc38-9db463307219 .tm-main {
            background: #c0bbae;
          }
        `}</style>
        <div className="tb-mspace">
          <div className="container">
            <div className="tm-main grid half-grid">
              <div className="tm-content">
                <div className="tm-contentinr">
                  <h2>
                    A story-led digital agency that leads next generation
                    brands to define the fashion e-commerce landscape.
                  </h2>
                  <div className="tm-content-btn">
                    <Link href="/pages/about-us" className="button button-dark-stone">
                      <span className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z" fill="initial"></path>
                        </svg>
                      </span>
                      <span className="label">More about us</span>
                      <span className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z" fill="initial"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tm-media">
                <div className="tm-mediainr">
                  <img 
                    src="//www.notsellingliquid.com/cdn/shop/files/Mask_group2.webp?v=1744187290"
                    alt="" 
                    loading="lazy" 
                    className="full-image d-none d-lg-block" 
                    width="1401"
                    height="800" 
                  />
                  <img
                    src="//www.notsellingliquid.com/cdn/shop/files/Mask_group2.webp?v=1744187290"
                    alt="" 
                    loading="lazy" 
                    className="full-image d-block d-lg-none" 
                    width="1401"
                    height="800" 
                  />
                  <div className="tm-mediatext">
                    <p className="n-body">Fabienne Chapot</p>
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