import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      
      <section id="home" className="h-screen">
        <HeroSection />
      </section>
      
      <section id="about" className="h-screen">
        <About />
      </section>
      
      <section id="services" className="h-screen">
        <Services />
      </section>
      
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;