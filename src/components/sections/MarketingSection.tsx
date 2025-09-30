import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Users, Target, Handshake, TrendingUp } from 'lucide-react';

const strategyIcons = [Users, Target, Handshake, TrendingUp];

export const MarketingSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800" id="marketing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t.marketing.title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {t.marketing.strategies.map((strategy, index) => {
            const Icon = strategyIcons[index];
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                }}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                        initial={{ 
                          x: Math.random() * 300,
                          y: Math.random() * 200,
                          opacity: 0 
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="relative w-16 h-16 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 p-1 group-hover:animate-pulse">
                      <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                        <Icon size={28} className="text-cyan-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {strategy.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {strategy.description}
                    </p>
                  </div>

                  {/* Number Badge */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    animate={controls}
                    variants={{
                      visible: {
                        scale: 1,
                        transition: { delay: index * 0.2 + 0.5 }
                      }
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Hover Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl"
                    whileHover={{
                      borderColor: "rgba(0, 207, 255, 0.3)",
                      boxShadow: "inset 0 0 20px rgba(0, 207, 255, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};