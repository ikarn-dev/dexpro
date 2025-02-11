import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Services = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.src = '/videos/features.mp4';
    videoElement.onloadeddata = () => setIsVideoLoaded(true);
  }, []);

  const services = [
    {
      title: "Low Fees",
      description: "Minimal transaction costs with competitive rates."
    },
    {
      title: "High Security",
      description: "State-of-the-art blockchain security protocols."
    },
    {
      title: "Fast Trades",
      description: "Lightning-quick transaction processing."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-black to-gray-900 overflow-hidden">
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
            className="w-full h-full object-cover opacity-50"
            poster="/images/video-fallback.jpg"
          >
            <source src="/videos/features.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-black opacity-50" />
        )}
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Next-Gen Crypto DEX Services
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Unlock the power of decentralized trading with our cutting-edge DEX platform. 
            Seamless, secure, and transparent cryptocurrency exchanges at your fingertips.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 
                         transform transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 
                     transition-colors font-semibold"
          >
            Launch DEX
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;