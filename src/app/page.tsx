
import LoadingAnimation from '../components/LoadingAnimation'
import Header from '../components/Header'
import IntroSection from '../components/IntroSection'
import BannerSection from '../components/BannerSection'
import CasesSection from '../components/CasesSection'
import ShopifyPlusSection from '../components/ShopifyPlusSection'
import TestimonialSection from '../components/TestimonialSection'
import TextMediaSection from '../components/TextMediaSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div className="transition_div">&nbsp;</div>
      <a className="skip-to-content-link visually-hidden" href="#MainContent">
        Skip to content
      </a>
      <LoadingAnimation />
      <Header />
      <main id="MainContent" role="main" tabIndex={-1} style={{ paddingTop: '65px' }}>
        <IntroSection />
        <BannerSection />
        <CasesSection />
        <ShopifyPlusSection />
        <TestimonialSection />
        <TextMediaSection />
      </main>
      <Footer />
    </>
  )
}
