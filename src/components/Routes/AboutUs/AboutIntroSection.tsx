import Link from 'next/link'

export default function AboutIntroSection() {
  return (
    <div id="shopify-section-template--26430796890455__e888cf0f-1c90-47ca-a12b-c0a1b957457e"
         className="shopify-section about_intro" 
         style={{ marginTop: '-67.775px' }}>
      <link
        href="//www.notsellingliquid.com/cdn/shop/t/39/assets/about-intro.css?v=23907028594662014411758090047"
        rel="stylesheet" type="text/css" media="all" />
      <section className="section-about-intro section-id-template--26430796890455__e888cf0f-1c90-47ca-a12b-c0a1b957457e relative-sec">
        <style jsx>{`
          .section-id-template--26430796890455__e888cf0f-1c90-47ca-a12b-c0a1b957457e {
            background: #262424;
          }
        `}</style>
        <div className="container">
          <div className="about-intro grid">
            <div className="ai-left grid-6-fcol">
              <div className="ai-leftinr">
                <p className="n-body">About us</p>
                <h2>E-commerce is our language, fashion is our culture.</h2>
              </div>
            </div>
            <div className="ai-right grid-4-lcol">
              <div className="ai-rightinr">
                <div className="s-body d-none d-lg-block">
                  We've taken things we're passionate about - fashion, sneakers and all things digital - and made it our craft.
                </div>
                <div className="s-caption">
                  <p>We're creating a space where e-commerce expertise is combined with an intrinsic fashion mindset to grow next generation brands in the digital landscape.</p>
                </div>
                <Link href="/pages/manifesto" className="link-arrow">
                  <span className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="initial"></path>
                    </svg>
                  </span>
                  <span className="label">Read full manifesto</span>
                  <span className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="initial"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="intro_overly" style={{ opacity: 0 }}>&nbsp;</div>
        </div>
      </section>
    </div>
  )
}