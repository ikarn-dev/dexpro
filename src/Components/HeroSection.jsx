import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef(null);
  const title = "Decentralized\nExchange\nProtocol";
  const lines = title.split("\n");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.src = '/videos/video-2.mp4';
    videoElement.onloadeddata = () => setIsVideoLoaded(true);
  }, []);

  const buttonVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    hover: { scale: 1.05, backgroundColor: 'white', color: '#1a1a1a' }
  };

  const textVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <motion.div style={{ y, opacity, scale }} className="relative w-full h-full">
        {/* Video Background with Fallback */}
        <div className="absolute top-0 left-0 w-full h-full">
          {isVideoLoaded ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
              poster="/images/hero-fallback.jpg"
            >
              <source src="/videos/video-2.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content Container */}
        <div className="relative z-10 h-full container mx-auto px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row h-full items-center justify-between">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-7/12 space-y-6 mt-20 lg:mt-0">
              {/* Animated Title */}
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                {lines.map((line, lineIndex) => (
                  <motion.div
                    key={lineIndex}
                    className="flex flex-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 * lineIndex, duration: 0.8 }}
                  >
                    {line.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                          delay: 0.05 * charIndex + lineIndex * 0.1,
                          duration: 0.3
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-gray-200"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                Trade without boundaries
              </motion.p>

              {/* Button for mobile - Shown only on small devices */}
              <div className="lg:hidden mt-8">
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                  className="bg-transparent text-white py-4 px-8 rounded-lg text-xl border-2 border-white transition-all w-64"
                >
                  Launch App
                </motion.button>
              </div>
            </div>

            {/* Right Side - Buttons - Hidden on mobile */}
            <div className="hidden lg:flex w-4/12 flex-col items-start space-y-6">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="bg-transparent text-white py-4 px-8 rounded-lg text-xl border-2 border-white transition-all w-64"
              >
                Launch App
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;