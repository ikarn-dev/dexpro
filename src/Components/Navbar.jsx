import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)']
  );

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(headerRef.current, {
      scrollTrigger: {
        start: 'top top',
        end: 'max',
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          if (velocity > 0) {
            gsap.to(headerRef.current, {
              yPercent: -100,
              duration: 0.2
            });
          } else {
            gsap.to(headerRef.current, {
              yPercent: 0,
              duration: 0.2
            });
          }
        }
      }
    });
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      ref={headerRef}
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md"
    >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            LOGO
          </div>

          {/* Navigation Items */}
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-white font-medium hover:text-blue-300 transition-colors px-4 py-2 block relative"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;