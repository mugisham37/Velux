
import LoadingAnimation from '../components/Routes/Landing/LoadingAnimation'
import Header from '../components/Layout/Header'
import IntroSection from '../components/Routes/Landing/IntroSection'
import BannerSection from '../components/Routes/Landing/BannerSection'
import CasesSection from '../components/Routes/Landing/CasesSection'
import ShopifyPlusSection from '../components/Routes/Landing/ShopifyPlusSection'
import TestimonialSection from '../components/Routes/Landing/TestimonialSection'
import TextMediaSection from '../components/Routes/Landing/TextMediaSection'
import Footer from '../components/Layout/Footer'

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
