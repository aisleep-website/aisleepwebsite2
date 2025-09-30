import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { MessageCircle, BookOpen, Sparkles } from 'lucide-react';
import lunaraImage from '../../assets/lunara hero section (1).png';

export const LunaraSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10" id="lunara">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Lunara Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Main Avatar */}
            <motion.div
              className="relative w-80 h-80 mx-auto"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full blur-3xl" />
              
              {/* Avatar Container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-2">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-8xl relative overflow-hidden">
                  {/* Lunara Image */}
                  <img 
                    src={lunaraImage} 
                    alt="Lunara AI Assistant" 
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Static Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
                </div>
              </div>

              {/* Floating Sparkles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                  style={{
                    top: `${Math.sin((i * Math.PI) / 6) * 140 + 50}%`,
                    left: `${Math.cos((i * Math.PI) / 6) * 140 + 50}%`,
                  }}
                >
                  <Sparkles size={20} className="text-cyan-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[MessageCircle, BookOpen, Sparkles].map((Icon, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center"
                  style={{
                    transform: `rotate(${i * 120}deg) translateY(-200px)`,
                  }}
                >
                  <Icon size={24} className="text-white" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-5xl md:text-6xl font-bold mb-4"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {t.lunara.title}
                </span>
              </motion.h2>
              
              <motion.h3
                className="text-2xl md:text-3xl text-purple-400 font-semibold mb-6"
                variants={itemVariants}
              >
                {t.lunara.subtitle}
              </motion.h3>
            </div>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {t.lunara.description}
            </motion.p>

            {/* Feature Highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {[
                { icon: '🧠', text: 'AI Learning' },
                { icon: '📊', text: 'Sleep Analytics' },
                { icon: '🏆', text: 'Smart Rewards' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,207,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {t.lunara.cta1}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BookOpen size={20} />
                {t.lunara.cta2}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};