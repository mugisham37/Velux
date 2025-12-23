'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Determine current page for active states
  const getCurrentPage = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/services') return 'services'
    if (pathname === '/about-us') return 'about-us'
    if (pathname === '/cases') return 'cases'
    if (pathname === '/clients') return 'clients'
    if (pathname === '/contact') return 'contact'
    if (pathname.startsWith('/blogs')) return 'articles'
    return pathname.slice(1)
  }
  
  const currentPage = getCurrentPage()

  return (
    <>
      <div id="shopify-section-header" className="shopify-section">
        <header className="section-header section-id-header transparent-header">
          <div className="d-none mb-header-head">
            <p className="xs-body text-center">Browser + Notch</p>
          </div>
          <div className="container">
            <div className="header-row grid">
              <div className="header-left">
                <div className="header-logo">
                  <Link href="/" title="Not selling liquid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="286" height="36" viewBox="0 0 286 36" fill="none">
                      <path
                        d="M0 0H5.15314L17.867 20.5896H17.9515V0H22.5978V27.9764H17.4446L4.77299 7.38679H4.64627V27.9764H0V0Z"
                        fill="white"></path>
                      <path
                        d="M36.3677 28.5283C34.7626 28.5283 33.3265 28.2736 32.0593 27.7217C30.7921 27.1698 29.7362 26.4481 28.8492 25.5142C27.9621 24.5802 27.3286 23.434 26.8639 22.1604C26.3993 20.8444 26.1881 19.401 26.1881 17.8302C26.1881 16.3019 26.3993 14.8585 26.8639 13.5425C27.3286 12.2264 27.9621 11.1227 28.8492 10.1887C29.7362 9.25473 30.7921 8.49058 32.0593 7.98114C33.3265 7.42926 34.7626 7.17454 36.3677 7.17454C37.9727 7.17454 39.4089 7.42926 40.676 7.98114C41.9432 8.53303 42.9992 9.25473 43.8862 10.1887C44.7732 11.1227 45.4068 12.2689 45.8714 13.5425C46.336 14.816 46.5472 16.2594 46.5472 17.8302C46.5472 19.401 46.336 20.8444 45.8714 22.1604C45.4068 23.4764 44.7732 24.5802 43.8862 25.5142C42.9992 26.4481 41.9432 27.2123 40.676 27.7217C39.4511 28.2736 38.015 28.5283 36.3677 28.5283ZM36.3677 25.0047C37.3392 25.0047 38.2262 24.7925 38.9442 24.3679C39.6623 23.9434 40.2536 23.3915 40.7183 22.7123C41.1829 22.033 41.5208 21.2689 41.732 20.4198C41.9432 19.5708 42.0699 18.7217 42.0699 17.8302C42.0699 16.9811 41.9432 16.0896 41.732 15.2406C41.5208 14.3915 41.1829 13.6274 40.7183 12.9481C40.2536 12.2689 39.6623 11.7594 38.9442 11.3349C38.2262 10.9104 37.3392 10.6981 36.3677 10.6981C35.3962 10.6981 34.5092 10.9104 33.7911 11.3349C33.073 11.7594 32.4817 12.3113 32.0171 12.9481C31.5524 13.6274 31.2145 14.3915 31.0033 15.2406C30.7921 16.0896 30.6654 16.9811 30.6654 17.8302C30.6654 18.7217 30.7921 19.5708 31.0033 20.4198C31.2145 21.2689 31.5524 22.033 32.0171 22.7123C32.4817 23.3915 33.073 23.9434 33.7911 24.3679C34.5514 24.7925 35.3962 25.0047 36.3677 25.0047Z"
                        fill="white"></path>
                      <path
                        d="M47.6454 7.72644H50.9823V1.61323H55.4596V7.68398H59.4723V10.9953H55.4596V21.8208C55.4596 22.2878 55.4596 22.7123 55.5018 23.0519C55.544 23.3915 55.6285 23.6887 55.7552 23.901C55.882 24.1557 56.0931 24.3255 56.3888 24.4104C56.6845 24.5378 57.0646 24.5802 57.5715 24.5802C57.8672 24.5802 58.2051 24.5802 58.5008 24.5802C58.7964 24.5802 59.1343 24.5378 59.43 24.4529V27.8915C58.9231 27.934 58.4585 27.9764 57.9939 28.0613C57.5293 28.1038 57.0646 28.1462 56.5578 28.1462C55.3751 28.1462 54.4458 28.0189 53.7278 27.8066C53.0097 27.5944 52.4606 27.2547 52.0382 26.8302C51.6158 26.4057 51.3624 25.8538 51.2357 25.217C51.109 24.5802 51.0245 23.8161 50.9823 22.967V11.0378H47.6454V7.72644Z"
                        fill="white"></path>
                    </svg>
                  </Link>
                </div>
                <div className="header-logo scrolled_logo">
                  <Link href="/" title="Not selling liquid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="133" height="52" viewBox="0 0 133 52" fill="none">
                      <path
                        d="M61.0264 38.4177C61.5983 39.5615 62.4152 40.4601 63.3956 41.1137C64.3759 41.8489 65.5197 42.3391 66.8268 42.6659C68.1339 42.9927 69.441 43.1561 70.9116 43.1561C71.8919 43.1561 72.8723 43.0744 73.9343 42.911C74.9963 42.7476 76.0584 42.4208 76.957 42.0123C77.9374 41.5222 78.6726 40.9503 79.3262 40.1333C79.9797 39.3164 80.3065 38.336 80.3065 37.1106C80.3065 35.8035 79.898 34.7415 79.0811 33.9245C78.2641 33.1075 77.1204 32.454 75.8133 31.8821C74.4245 31.3102 72.9539 30.9018 71.2383 30.4933C69.5227 30.0848 67.8071 29.6763 66.0098 29.1045C64.2125 28.6143 62.4152 28.1241 60.7813 27.4706C59.0657 26.817 57.5135 26.0001 56.2064 24.938C54.8176 23.876 53.7555 22.6505 52.9386 21.0983C52.1216 19.5461 51.7132 17.6671 51.7132 15.4614C51.7132 13.0105 52.2033 10.8047 53.2654 9.00742C54.3274 7.21013 55.7162 5.65791 57.4318 4.43248C59.1474 3.20705 61.1081 2.30841 63.2322 1.73654C65.3563 1.16467 67.5621 0.837891 69.6861 0.837891C72.2187 0.837891 74.5879 1.08298 76.957 1.65484C79.2445 2.22671 81.3686 3.12536 83.1659 4.35079C84.9632 5.57622 86.4337 7.21013 87.414 9.17081C88.4761 11.1315 88.9662 13.5007 88.9662 16.2783H78.6726C78.5909 14.8078 78.2641 13.6641 77.774 12.6837C77.2838 11.7034 76.5485 10.9681 75.7316 10.4779C74.9146 9.90607 73.9343 9.57929 72.7906 9.3342C71.6468 9.08912 70.5031 9.00742 69.196 9.00742C68.379 9.00742 67.4804 9.08912 66.6634 9.25251C65.8465 9.4159 65.0295 9.74268 64.2942 10.2329C63.559 10.723 62.9871 11.2132 62.5786 11.9485C62.0885 12.602 61.9251 13.5007 61.9251 14.481C61.9251 15.4614 62.0885 16.1966 62.4969 16.7685C62.8237 17.3403 63.559 17.9122 64.621 18.4024C65.6831 18.8926 67.1536 19.3827 69.0326 19.8729C70.9116 20.3631 73.3624 21.0166 76.3852 21.7519C77.2838 21.9153 78.5092 22.2421 80.1431 22.7322C81.777 23.2224 83.3293 23.9577 84.8815 25.0197C86.4337 26.0817 87.8225 27.4706 88.9662 29.1862C90.11 30.9018 90.6818 33.1075 90.6818 35.8035C90.6818 38.0093 90.2734 40.0516 89.3747 41.9306C88.5578 43.8096 87.2506 45.4435 85.535 46.8324C83.8194 48.2212 81.777 49.2832 79.2445 50.0185C76.7119 50.7537 73.8526 51.1622 70.5848 51.1622C67.8888 51.1622 65.3563 50.8354 62.8237 50.1819C60.2912 49.5283 58.0854 48.4663 56.2064 47.0774C54.3274 45.6886 52.7752 43.8913 51.6315 41.7673C50.4877 39.6432 49.9976 37.0289 49.9976 34.0879H60.2912C60.1278 35.8852 60.3729 37.274 61.0264 38.4177Z"
                        fill="#262424"></path>
                      <path d="M109.553 2.06323V41.3587H133V50.2635H98.9326V2.06323H109.553Z" fill="#262424"></path>
                      <path
                        d="M30.7174 50.2638L0 1.98181H11.1106L31.2076 34.3332H31.371V1.98181H41.3378V50.2638H30.7174Z"
                        fill="#262424"></path>
                      <path d="M10.9472 39.3164H0V50.2636H10.9472V39.3164Z" fill="#262424"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="header-center">
                <div className="snippet-header-nav">
                  <ul className="list-menu" role="list">
                    <li>
                      <Link href="/services" className={currentPage === 'services' ? 'active' : ''}>Services</Link>
                    </li>
                    <li>
                      <Link href="/about-us" className={currentPage === 'about-us' ? 'active' : ''}>About us</Link>
                    </li>
                    <li>
                      <Link href="/cases" className={currentPage === 'cases' ? 'active' : ''}>Cases</Link>
                    </li>
                    <li>
                      <Link href="/clients" className={currentPage === 'clients' ? 'active' : ''}>Clients</Link>
                    </li>
                    <li>
                      <Link href="/blogs/inside-the-industry" className={currentPage === 'articles' ? 'active' : ''}>Articles</Link>
                    </li>
                    <li>
                      <Link href="/contact" className={currentPage === 'contact' ? 'active' : ''}>Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="header-breadcrumb">
                  <div className="hb-blk block-id-3409d0e4-c257-4ab0-b955-4355fab3e254">
                    <p className="xs-body">
                      <Link href="/">Home</Link> 
                  {currentPage !== 'home' && (
                    <>
                      <span>/</span>
                      <span className="capitalize">
                        {currentPage === 'cases' ? 'Case Studies' : 
                         currentPage === 'clients' ? 'Clients' : 
                         currentPage === 'articles' ? 'Blog' : 
                         currentPage === 'contact' ? 'Contact' : 
                         currentPage === 'about-us' ? 'About Us' : currentPage}
                      </span>
                    </>
                  )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="header-right">
                <Link href="/contact" className="link-arrow link-pure-cacao sheader-right">
                  <span className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="initial"></path>
                    </svg>
                  </span>
                  <span className="label">contact</span>
                  <span className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                        fill="initial"></path>
                    </svg>
                  </span>
                </Link>
                <div className="d-block d-lg-none">
                  <button 
                    className="menu-burger"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <circle cx="12.5" cy="12.5" r="12" stroke="white"></circle>
                      <rect x="6" y="12" width="13" height="1" fill="white"></rect>
                      <rect x="13" y="6" width="13" height="1" transform="rotate(90 13 6)" fill="white"></rect>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className={`snippet-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`} style={{ top: '65.8px', height: isMobileMenuOpen ? 'auto' : '0px' }}>
          <div className="menu-drawer-inner">
            <ul className="mob_navigation">
              <li><Link href="/services" className={`mob_link ${currentPage === 'services' ? 'active' : ''}`}>Services</Link></li>
              <li><Link href="/about-us" className={`mob_link ${currentPage === 'about-us' ? 'active' : ''}`}>About us</Link></li>
              <li><Link href="/cases" className={`mob_link ${currentPage === 'cases' ? 'active' : ''}`}>Cases</Link></li>
              <li><Link href="/clients" className={`mob_link ${currentPage === 'clients' ? 'active' : ''}`}>Clients</Link></li>
              <li>
                <Link href="/blogs/inside-the-industry" className={`mob_link ${currentPage === 'articles' ? 'active' : ''}`}>Articles</Link>
              </li>
              <li>
                <Link href="https://careers.notsellingliquid.com/" className="mob_link">Careers</Link>
              </li>
              <li><Link href="/contact" className={`mob_link ${currentPage === 'contact' ? 'active' : ''}`}>Contact</Link></li>
            </ul>
            <div className="menu-prtship">
              <div className="menu-prtshipinr">
                <p className="menu-prtship-head n-caption">
                  Let&apos;s start a partnership
                </p>
                <div className="menu-prtship-block">
                  <div className="menu-prtship-wrap block-id-1f0b4a76-34f2-46ac-a9bd-a282e4dd407d">
                    <p className="xs-body">General</p>
                    <div className="s-caption enable_click">
                      <p>
                        <Link href="mailto:hello@notsellingliquid.com" title="mailto:hello@notsellingliquid.com">
                          hello@notsellingliquid.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="menu-prtship-wrap block-id-36fc284c-619e-4b81-891a-318dae7dcf2e">
                    <p className="xs-body">sales</p>
                    <div className="s-caption enable_click">
                      <p>
                        <Link href="mailto:new@notsellingliquid.com" title="mailto:new@notsellingliquid.com">
                          new@notsellingliquid.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="menu-prtship-wrap block-id-ed21a822-5a28-4f95-9534-ed115bce7779">
                    <p className="xs-body">Office</p>
                    <div className="s-caption enable_click">
                      <p>
                        <Link href="https://goo.gl/maps/MLrgZnjCEgGnujyz7" target="_blank" title="https://goo.gl/maps/MLrgZnjCEgGnujyz7">
                          Danzigerkade 15 A5<br />1013 AP Amsterdam<br />Netherlands
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}