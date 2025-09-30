import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { TrendingUp, Target, Zap, FileText } from 'lucide-react';

interface WhyInvestSectionProps {
  onWhitepaperClick: () => void;
}

export const WhyInvestSection: React.FC<WhyInvestSectionProps> = ({ onWhitepaperClick }) => {
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

  // Split text by newlines for proper formatting
  const textLines = t.whyInvest.text.split('\n');

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900" id="why-invest">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8"
          >
            {t.whyInvest.title}
          </motion.h2>

          {/* Content Card */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative p-12 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden group hover:border-cyan-400/30 transition-all duration-500">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                    initial={{ 
                      x: Math.random() * 400,
                      y: Math.random() * 300,
                      opacity: 0 
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Icons */}
              <div className="absolute top-8 left-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <TrendingUp size={32} className="text-cyan-400" />
              </div>
              <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Target size={32} className="text-purple-400" />
              </div>
              <div className="absolute bottom-8 left-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Zap size={32} className="text-blue-400" />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-8">
                {textLines.map((line, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className={`leading-relaxed ${
                      index === 0 
                        ? 'text-2xl md:text-3xl font-semibold text-white'
                        : index === 1
                        ? 'text-xl md:text-2xl font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
                        : 'text-lg md:text-xl font-bold text-purple-400'
                    }`}
                  >
                    {line}
                  </motion.p>
                ))}

                {/* CTA Button */}
                <motion.div
                  variants={itemVariants}
                  className="pt-8"
                >
                  <motion.button
                    onClick={onWhitepaperClick}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 20px 40px rgba(0,207,255,0.3)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-3 mx-auto group/btn"
                  >
                    <FileText size={24} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    {t.whyInvest.cta}
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-cyan-200"
                    >
                      →
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>

              {/* Hover Border Glow */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-3xl"
                whileHover={{
                  borderColor: "rgba(0, 207, 255, 0.2)",
                  boxShadow: "inset 0 0 30px rgba(0, 207, 255, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            variants={itemVariants}
            className="relative mt-16"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            </div>
            <motion.div
              className="relative z-10 bg-gray-900 px-8 py-4 inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="text-purple-400" size={24} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};