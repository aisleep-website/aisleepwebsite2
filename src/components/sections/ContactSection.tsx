import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Send, Mail, MessageSquare, User, Twitter } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const { ref, controls } = useScrollAnimation();
  
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t.contact.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Input */}
              <motion.div
                variants={itemVariants}
                className="relative group"
              >
                <User className={`absolute ${currentLanguage.dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors`} size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t.contact.form.name}
                  className={`w-full ${currentLanguage.dir === 'rtl' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300 focus:outline-none`}
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                variants={itemVariants}
                className="relative group"
              >
                <Mail className={`absolute ${currentLanguage.dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors`} size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t.contact.form.email}
                  className={`w-full ${currentLanguage.dir === 'rtl' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300 focus:outline-none`}
                />
              </motion.div>

              {/* Subject Input */}
              <motion.div
                variants={itemVariants}
                className="relative group"
              >
                <MessageSquare className={`absolute ${currentLanguage.dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors`} size={20} />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder={t.contact.form.subject}
                  className={`w-full ${currentLanguage.dir === 'rtl' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300 focus:outline-none`}
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder={t.contact.form.message}
                  className="w-full px-4 py-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:bg-gray-800/80 transition-all duration-300 focus:outline-none resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
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
                    {t.contact.form.send}
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl group hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Email Us</h3>
              </div>
              <p className="text-gray-400 mb-2">Get in touch for support or partnerships</p>
              <a 
                href="mailto:support@aisleep.site"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                {t.contact.info.email}
              </a>
            </motion.div>

            {/* Social Media Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl group hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{t.contact.info.social}</h3>
              </div>
              <p className="text-gray-400 mb-4">Connect with us on social media</p>
              
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
            </motion.div>

            {/* Response Time Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Quick Response</span>
              </div>
              <p className="text-gray-400 text-sm">We typically respond within 24 hours</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};