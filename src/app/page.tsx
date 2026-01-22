'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Platforms from '@/components/Platforms'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Platforms />
      <CTA />
      <Footer />
    </main>
  )
}
