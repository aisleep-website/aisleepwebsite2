import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Download, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const { ref, controls } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState(0);

  const tabIcons = [Download, TrendingUp, Zap];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-32 bg-gradient-to-br from-[#0F0F2A] via-[#0A0A1F] to-[#1A0A2E] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                rgba(0, 207, 255, 0.1) 35px,
                rgba(0, 207, 255, 0.1) 70px
              )
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t.howItWorks.subtitle}
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
          >
            {t.howItWorks.tabs.map((tab, index) => {
              const Icon = tabIcons[index];
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-6 sm:px-8 py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center gap-3 justify-center ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-[#00CFFF] to-[#A259FF] text-white shadow-2xl'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.title}</span>
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] rounded-2xl -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12"
            >
              {activeTab === 0 && (
                <div className="space-y-6">
                  {t.howItWorks.tabs[0].steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <p className="text-white/90 text-lg leading-relaxed pt-1">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}

              {(activeTab === 1 || activeTab === 2) && (
                <div className="space-y-6">
                  {t.howItWorks.tabs[activeTab].content.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <CheckCircle2
                        size={24}
                        className="flex-shrink-0 text-[#00CFFF] group-hover:scale-110 transition-transform duration-300 mt-1"
                      />
                      <div>
                        {item.title && (
                          <h4 className="text-white font-bold text-lg mb-2">
                            {item.title}
                          </h4>
                        )}
                        <p className="text-white/80 text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};