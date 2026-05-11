import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import DashboardPreview from '../components/DashboardPreview'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080b14]">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <CTA />
      <Footer />
    </div>
  )
}
