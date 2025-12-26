import IntroSection from '../components/Routes/Landing/IntroSection'
import BannerSection from '../components/Routes/Landing/BannerSection'
import CasesSection from '../components/Routes/Landing/CasesSection'
import ShopifyPlusSection from '../components/Routes/Landing/ShopifyPlusSection'
import TestimonialSection from '../components/Routes/Landing/TestimonialSection'
import TextMediaSection from '../components/Routes/Landing/TextMediaSection'

export default function Home() {
  return (
    <>
      <main id="MainContent" role="main" tabIndex={-1} style={{ paddingTop: '65px' }}>
        <IntroSection />
        <BannerSection />
        <CasesSection />
        <ShopifyPlusSection />
        <TestimonialSection />
        <TextMediaSection />
      </main>
    </>
  )
}


