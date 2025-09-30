import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';

export const SleepMattersSection: React.FC = () => {
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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800" id="sleep-matters">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t.sleepMatters.title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.sleepMatters.sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/30 transition-all duration-300 group text-center"
            >
              <div className="mb-6">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {section.stat}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {section.statLabel}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {section.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {section.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};