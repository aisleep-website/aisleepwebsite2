import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Mail, User, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white hover:bg-gray-700/60 hover:border-cyan-400/30 transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </motion.button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-gray-400 mt-2">Simple contact page.</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-cyan-400 mb-6">
              Contact Form
            </motion.h2>
            
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Input */}
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Name"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300 focus:outline-none"
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300 focus:outline-none"
                />
              </div>

              {/* Subject Input */}
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors" size={20} />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300 focus:outline-none"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300 focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,207,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-cyan-500/25'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : submitStatus === 'success' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Official Email */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Official Email</h2>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Direct Contact</h3>
                    <a 
                      href="mailto:support@aisleep.site"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      support@aisleep.site
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Community Links */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Community</h2>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <p className="text-gray-400 mb-4">Find us on social media:</p>
                
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://x.com/AISleepToken?t=mnf69btBh_Sb3Oe8Ww8s_w&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://t.me/AISleepCommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};