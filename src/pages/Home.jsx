import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}
