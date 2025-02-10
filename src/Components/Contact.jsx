import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your API call here
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your digital vision? Contact us for a free consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            {...fadeInUp}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Contact Information</h3>
                <p className="text-gray-300">Feel free to reach out through any of these channels</p>
              </div>
              
              {['email', 'phone', 'address'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-white">
                    <h4 className="text-xl font-semibold capitalize mb-1">{item}</h4>
                    <p className="text-gray-400">
                      {item === 'email' && 'contact@cryptodex.com'}
                      {item === 'phone' && '+1 (555) 123-4567'}
                      {item === 'address' && '123 Blockchain Ave, Tech City, TC 12345'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email'].map((field) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: field === 'name' ? 0.3 : 0.4 }}
                >
                  <label className="block text-white mb-2 capitalize">{field}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;