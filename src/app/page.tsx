import Hero from '@/components/Hero'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import Pricing from '@/components/Pricing'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <>
      <div className='mx-auto w-full max-w-full'>
        <ScrollToTop />
        <Header />
        <Hero />
        <About />
        <Pricing />
        <Reviews />
        <Footer />
      </div>
    </>
  )
}
