import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.src = '/videos/feature-3.mp4';
    videoElement.onloadeddata = () => setIsVideoLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-black">
      {/* Background Video with Fallback */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Text Column */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Digital Innovation Pioneers
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white mb-4"
          >
            We specialize in creating cutting-edge digital solutions that transform businesses. 
            Our approach combines creative design with advanced technology to deliver exceptional user experiences.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-white mb-8"
          >
            With a team of expert developers, designers, and strategists, we turn complex challenges 
            into elegant, effective digital products.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 
                     transition-colors"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;