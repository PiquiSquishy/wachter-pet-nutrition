import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BarfSection from './components/BarfSection'
import Benefits from './components/Benefits'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import CarePlus from './components/CarePlus'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <Hero />
      <BarfSection />
      <Benefits />
      <Products />
      <WhyUs />
      <CarePlus />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
