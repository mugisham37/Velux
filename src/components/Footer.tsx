import Link from 'next/link'

export default function Footer() {
  return (
    <div id="shopify-section-footer" className="shopify-section" style={{ minHeight: '766px' }}>
      <footer className="section-footer section-id-footer">
        <style jsx>{`
          .section-id-footer {
            background: #262424;
          }
        `}</style>
        <div className="container">
          <div className="footer-main">
            <div className="footer-top">
              <div className="footer-topinr text-center">
                <h2 className="h1">We power the stories of fashion</h2>
                <Link href="/pages/contact" className="button button-glacier">
                  <span className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z" fill="initial"></path>
                    </svg>
                  </span>
                  <span className="label">let&apos;s talk</span>
                  <span className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z" fill="initial"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="ft-mb-menu d-block d-lg-none mob_center">
              <ul className="ft-mb-menuinr">
                <li><Link href="/pages/services" className="s-body">Services</Link></li>
                <li><Link href="/pages/about-us" className="s-body">About us</Link></li>
                <li><Link href="/pages/shopify-plus-agency-amsterdam" className="s-body">Shopify Plus</Link></li>
                <li><Link href="/pages/case-studies" className="s-body">Cases</Link></li>
                <li><Link href="/pages/clients" className="s-body">Clients</Link></li>
                <li><Link href="/blogs/inside-the-industry" className="s-body">Articles</Link></li>
                <li><Link href="https://careers.notsellingliquid.com/" className="s-body">Careers</Link></li>
                <li><Link href="/pages/contact" className="s-body">Contact</Link></li>
                <li><Link href="https://www.linkedin.com/company/not-selling-liquid" className="s-body">LinkedIn</Link></li>
              </ul>
            </div>
            
            <div className="footer-center mob_center">
              <div className="ft-left">
                <div className="ft-leftinr">
                  <div className="footer-logo">
                    <Link href="/" title="Not selling liquid">
                      <svg xmlns="http://www.w3.org/2000/svg" width="133" height="52" viewBox="0 0 133 52" fill="none">
                        <path d="M61.0264 38.4177C61.5983 39.5615 62.4152 40.4601 63.3956 41.1137C64.3759 41.8489 65.5197 42.3391 66.8268 42.6659C68.1339 42.9927 69.441 43.1561 70.9116 43.1561C71.8919 43.1561 72.8723 43.0744 73.9343 42.911C74.9963 42.7476 76.0584 42.4208 76.957 42.0123C77.9374 41.5222 78.6726 40.9503 79.3262 40.1333C79.9797 39.3164 80.3065 38.336 80.3065 37.1106C80.3065 35.8035 79.898 34.7415 79.0811 33.9245C78.2641 33.1075 77.1204 32.454 75.8133 31.8821C74.4245 31.3102 72.9539 30.9018 71.2383 30.4933C69.5227 30.0848 67.8071 29.6763 66.0098 29.1045C64.2125 28.6143 62.4152 28.1241 60.7813 27.4706C59.0657 26.817 57.5135 26.0001 56.2064 24.938C54.8176 23.876 53.7555 22.6505 52.9386 21.0983C52.1216 19.5461 51.7132 17.6671 51.7132 15.4614C51.7132 13.0105 52.2033 10.8047 53.2654 9.00742C54.3274 7.21013 55.7162 5.65791 57.4318 4.43248C59.1474 3.20705 61.1081 2.30841 63.2322 1.73654C65.3563 1.16467 67.5621 0.837891 69.6861 0.837891C72.2187 0.837891 74.5879 1.08298 76.957 1.65484C79.2445 2.22671 81.3686 3.12536 83.1659 4.35079C84.9632 5.57622 86.4337 7.21013 87.414 9.17081C88.4761 11.1315 88.9662 13.5007 88.9662 16.2783H78.6726C78.5909 14.8078 78.2641 13.6641 77.774 12.6837C77.2838 11.7034 76.5485 10.9681 75.7316 10.4779C74.9146 9.90607 73.9343 9.57929 72.7906 9.3342C71.6468 9.08912 70.5031 9.00742 69.196 9.00742C68.379 9.00742 67.4804 9.08912 66.6634 9.25251C65.8465 9.4159 65.0295 9.74268 64.2942 10.2329C63.559 10.723 62.9871 11.2132 62.5786 11.9485C62.0885 12.602 61.9251 13.5007 61.9251 14.481C61.9251 15.4614 62.0885 16.1966 62.4969 16.7685C62.8237 17.3403 63.559 17.9122 64.621 18.4024C65.6831 18.8926 67.1536 19.3827 69.0326 19.8729C70.9116 20.3631 73.3624 21.0166 76.3852 21.7519C77.2838 21.9153 78.5092 22.2421 80.1431 22.7322C81.777 23.2224 83.3293 23.9577 84.8815 25.0197C86.4337 26.0817 87.8225 27.4706 88.9662 29.1862C90.11 30.9018 90.6818 33.1075 90.6818 35.8035C90.6818 38.0093 90.2734 40.0516 89.3747 41.9306C88.5578 43.8096 87.2506 45.4435 85.535 46.8324C83.8194 48.2212 81.777 49.2832 79.2445 50.0185C76.7119 50.7537 73.8526 51.1622 70.5848 51.1622C67.8888 51.1622 65.3563 50.8354 62.8237 50.1819C60.2912 49.5283 58.0854 48.4663 56.2064 47.0774C54.3274 45.6886 52.7752 43.8913 51.6315 41.7673C50.4877 39.6432 49.9976 37.0289 49.9976 34.0879H60.2912C60.1278 35.8852 60.3729 37.274 61.0264 38.4177Z" fill="#262424"></path>
                        <path d="M109.553 2.06323V41.3587H133V50.2635H98.9326V2.06323H109.553Z" fill="#262424"></path>
                        <path d="M30.7174 50.2638L0 1.98181H11.1106L31.2076 34.3332H31.371V1.98181H41.3378V50.2638H30.7174Z" fill="#262424"></path>
                        <path d="M10.9472 39.3164H0V50.2636H10.9472V39.3164Z" fill="#262424"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="d-none d-lg-block">
                    <div className="l-caption">
                      <p>
                        We build, manage and grow the presence of purpose-led
                        brands in the digital sphere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="ft-center d-none d-lg-block">
                <div className="ftc-menupart">
                  <div className="footer-menu-column">
                    <p className="xs-body ftc-title">info</p>
                    <ul>
                      <li><Link href="/pages/about-us" className="xs-body">About us</Link></li>
                      <li><Link href="/pages/services" className="xs-body">Services</Link></li>
                      <li><Link href="/pages/clients" className="xs-body">Clients</Link></li>
                      <li><Link href="/pages/case-studies" className="xs-body">Case studies</Link></li>
                    </ul>
                  </div>
                  <div className="footer-menu-column">
                    <p className="xs-body ftc-title">Services</p>
                    <ul>
                      <li><Link href="/pages/service-build" className="xs-body">Build</Link></li>
                      <li><Link href="/pages/service-manage" className="xs-body">Manage</Link></li>
                      <li><Link href="/pages/service-grow" className="xs-body">Grow</Link></li>
                      <li><Link href="/pages/shopify-plus-agency-amsterdam" className="xs-body">Shopify Plus</Link></li>
                    </ul>
                  </div>
                  <div className="footer-menu-column">
                    <p className="xs-body ftc-title">Social</p>
                    <ul>
                      <li><Link href="https://www.linkedin.com/company/not-selling-liquid" className="xs-body">Linkedin</Link></li>
                      <li><Link href="https://www.instagram.com/notsellingliquid/" className="xs-body">Instagram</Link></li>
                    </ul>
                  </div>
                  <div className="footer-menu-column">
                    <p className="xs-body ftc-title">Work with us</p>
                    <ul>
                      <li><Link href="/pages/contact" className="xs-body">Contact</Link></li>
                      <li><Link href="https://careers.notsellingliquid.com/" className="xs-body">Careers</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="ft-right">
                <div className="ft-rightinr">
                  <p className="xs-body">General</p>
                  <div className="n-caption enable_click">
                    <p>
                      <Link href="mailto:hello@notsellingliquid.com" title="mailto:hello@notsellingliquid.com">hello@notsellingliquid.com</Link><br />
                      <Link href="tel:0202101913" target="_blank" title="tel:0202101913">+31 (0) 20 21 01 913</Link>
                    </p>
                  </div>
                </div>
                <div className="ft-rightinr">
                  <p className="xs-body">New Business</p>
                  <div className="n-caption enable_click">
                    <p>
                      <Link href="mailto:new@notsellingliquid.com" title="mailto:new@notsellingliquid.com">new@notsellingliquid.com</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom mob_center">
              <div className="footer-bottominr">
                <p className="xxs-body d-none d-lg-block">
                  Official Shopify Premier Partner &amp; Klaviyo Gold Master
                </p>
                <p className="xxs-body">© 2025 Not selling liquid</p>
                <p className="xxs-body d-none d-lg-block">
                  Danzigerkade 15 A5, 1013 AP Amsterdam, Netherlands
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}