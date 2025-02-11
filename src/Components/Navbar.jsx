import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Boxes } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(17, 24, 39, 0)', 'rgba(17, 24, 39, 0)']
  );

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  // Scramble text effect
  const ScrambledText = ({ text }) => {
    const [scrambled, setScrambled] = useState(text);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
      if (!isHovered) {
        setScrambled(text);
        return;
      }

      let iteration = 0;
      const maxIterations = 10;
      
      const interval = setInterval(() => {
        setScrambled(prev => 
          prev
            .split('')
            .map((char, idx) => {
              if (idx < iteration) return text[idx];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        iteration += 1/3;
        
        if (iteration >= maxIterations) {
          clearInterval(interval);
          setScrambled(text);
        }
      }, 30);

      return () => clearInterval(interval);
    }, [isHovered, text]);

    return (
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
      >
        {scrambled}
      </span>
    );
  };

  // Animation variants
  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const lineVariants = {
    open: {
      rotate: 45,
      y: 6
    },
    closed: {
      rotate: 0,
      y: 0
    }
  };

  const line2Variants = {
    open: {
      opacity: 0
    },
    closed: {
      opacity: 1
    }
  };

  const line3Variants = {
    open: {
      rotate: -45,
      y: -6
    },
    closed: {
      rotate: 0,
      y: 0
    }
  };

  return (
    <motion.header
      ref={headerRef}
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-white/10"
    >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Boxes className="w-8 h-8 text-blue-400" />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              <ScrambledText text="DexPro" />
            </div>
          </motion.div>

          {/* Burger Menu Button */}
          <motion.button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              variants={lineVariants}
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-0.5 bg-blue-400 mb-1.5 block"
            />
            <motion.span
              variants={line2Variants}
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-0.5 bg-blue-400 mb-1.5 block"
            />
            <motion.span
              variants={line3Variants}
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-0.5 bg-blue-400 block"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
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
                  className="text-white font-medium transition-colors px-4 py-2 block relative"
                >
                  <span className="relative z-10">
                    <ScrambledText text={item.label} />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden mt-4 space-y-2 bg-gray-800/50 backdrop-blur-md rounded-lg p-4"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="text-white font-medium block py-2 px-4 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ScrambledText text={item.label} />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;