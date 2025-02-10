import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">CryptoDEX</h3>
          <p className="text-gray-400">Revolutionizing decentralized trading with cutting-edge blockchain technology.</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#trading" className="text-gray-400 hover:text-white transition-colors">DEX Trading</a></li>
            <li><a href="#consulting" className="text-gray-400 hover:text-white transition-colors">Crypto Consulting</a></li>
            <li><a href="#blockchain" className="text-gray-400 hover:text-white transition-colors">Blockchain Solutions</a></li>
            <li><a href="#security" className="text-gray-400 hover:text-white transition-colors">Security Audits</a></li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="border-t border-gray-800 mt-8 pt-6 text-center"
      >
        <p className="text-gray-400">
          © {currentYear} CryptoDEX. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;