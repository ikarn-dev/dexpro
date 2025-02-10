import React from 'react';
import { motion } from 'framer-motion';

const CryptoDexServices = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-black">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/public/videos/features.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Next-Gen Crypto DEX Services
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-200 mb-8"
          >
            Unlock the power of decentralized trading with our cutting-edge DEX platform. Seamless, secure, and transparent cryptocurrency exchanges at your fingertips.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Low Fees</h3>
              <p className="text-gray-300">Minimal transaction costs with competitive rates.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">High Security</h3>
              <p className="text-gray-300">State-of-the-art blockchain security protocols.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Fast Trades</h3>
              <p className="text-gray-300">Lightning-quick transaction processing.</p>
            </div>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
          >
            Launch DEX
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoDexServices;