import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.src = '/videos/feature-3.mp4';
    videoElement.onloadeddata = () => setIsVideoLoaded(true);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Video with Fallback */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ y }}
      >
        {isVideoLoaded ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
            poster="/images/about-fallback.jpg"
          >
            <source src="/videos/feature-3.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        )}
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, scale }}
      >
        {/* Centered Text Column */}
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Digital Innovation Pioneers
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We specialize in creating cutting-edge digital solutions that transform businesses. 
            Our approach combines creative design with advanced technology to deliver exceptional user experiences.
          </motion.p>
          
          <motion.p 
            className="text-xl text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            With a team of expert developers, designers, and strategists, we turn complex challenges 
            into elegant, effective digital products.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 
                     transition-colors"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;