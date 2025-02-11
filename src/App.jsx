import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import About from "./Components/About"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import LoadingEffect from "./Components/Loading"

function App() {
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // 3 seconds loading time, adjust as needed

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  if (loading) {
    return <LoadingEffect />
  }

  return (
    <div className="w-full relative" ref={containerRef}>
      <Navbar onNavigate={scrollToSection} />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-violet-600 z-50 origin-left" style={{ scaleX }} />

      <main className="relative">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App

