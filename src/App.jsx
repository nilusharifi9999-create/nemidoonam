import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import HowItWorks from './components/HowItWorks'
import Categories from './components/Categories'
import Companions from './components/Companions'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import TrustSafety from './components/TrustSafety'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <HowItWorks />
        <Categories />
        <Companions />
        <Services />
        <Testimonials />
        <TrustSafety />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
