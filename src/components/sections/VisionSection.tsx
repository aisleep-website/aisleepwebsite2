import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Rocket, Smartphone, Brain, Handshake, Globe } from 'lucide-react';

const timelineIcons = [Rocket, Smartphone, Brain, Handshake, Globe];

export const VisionSection: React.FC = () => {
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
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900" id="vision">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t.vision.title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute ${currentLanguage.dir === 'rtl' ? 'right-1/2 transform translate-x-0.5' : 'left-1/2 transform -translate-x-0.5'} h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 hidden lg:block timeline-line`} />

          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-12 lg:space-y-16"
          >
            {t.vision.timeline.map((item, index) => {
              const Icon = timelineIcons[index];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    currentLanguage.dir === 'rtl' 
                      ? (isEven ? 'lg:flex-row-reverse' : 'lg:flex-row')
                      : (isEven ? 'lg:flex-row' : 'lg:flex-row-reverse')
                  } flex-col lg:gap-16 gap-6`}
                >
                  {/* Timeline Marker */}
                  <div className={`absolute ${currentLanguage.dir === 'rtl' ? 'right-1/2 transform translate-x-1/2' : 'left-1/2 transform -translate-x-1/2'} w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full z-10 hidden lg:block timeline-marker`}>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full lg:w-5/12 ${
                      currentLanguage.dir === 'rtl' 
                        ? (isEven ? 'lg:text-right' : 'lg:text-left')
                        : (!isEven ? 'lg:text-right' : 'lg:text-left')
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 group">
                      {/* Date Badge */}
                      <motion.div
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 font-semibold text-sm mb-4 ${
                          currentLanguage.dir === 'rtl' 
                            ? (isEven ? 'lg:mr-auto' : 'lg:ml-auto')
                            : (!isEven ? 'lg:ml-auto' : 'lg:mr-auto')
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon size={16} />
                        {item.date}
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>

                      {/* Decorative Icon */}
                      <motion.div
                        className={`absolute -top-3 ${
                          currentLanguage.dir === 'rtl' 
                            ? (isEven ? '-left-3' : '-right-3')
                            : (isEven ? '-right-3' : '-left-3')
                        } w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={24} className="text-white" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-5/12" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};