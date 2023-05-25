import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Porjects from './components/Porjects'
import Footer from './components/Footer'
import Contact from './contact/Page'

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Porjects />
      <Contact />
      <Footer />
    </>
  )
}

export default page