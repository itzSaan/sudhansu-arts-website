// import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Footer from "./components/Footer"
import Feature from "./sections/Feature"
import Service from "./sections/Service"
import Team from "./sections/Team"
import Testimonial from "./sections/Testimonial"
import Cta from "./sections/Cta"
import Contact from "./sections/Contact"
import Blog from "./sections/Blog"
import About from "./sections/About"

function App() {

  return (
    <>       
      <Navbar />
      <Hero />
      <Feature />
      <About />
      <Service />
      <Blog />
      <Team />
      <Testimonial />
      <Cta />
      <Contact />
      <Footer /> 
    </>
  )
}

export default App
