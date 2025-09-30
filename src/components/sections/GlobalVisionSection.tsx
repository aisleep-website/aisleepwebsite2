import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Heart, TrendingUp, Globe } from 'lucide-react';

export const GlobalVisionSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  const pointIcons = [Heart, TrendingUp, Globe];
  const pointColors = ['#FF6B9D', '#00CFFF', '#A259FF'];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0F0F2A] via-[#0A0A1F] to-[#1A0A2E] relative overflow-hidden">
      {/* Background Animation - Floating Orbs */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Connecting Lines Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 10}%`}
              y1="20%"
              x2={`${30 + i * 10}%`}
              y2="80%"
              stroke="url(#gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00CFFF" />
              <stop offset="100%" stopColor="#A259FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Title Section */}
          <motion.div
            variants={itemVariants}
            className="mb-16 lg:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {t.globalVision.title}
            </h2>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00CFFF] to-[#A259FF] bg-clip-text text-transparent mb-8 leading-tight">
              {t.globalVision.headline}
            </h3>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {t.globalVision.description.replace(/—/g, '')}
            </p>
          </motion.div>

          {/* Points in Clean Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            {t.globalVision.points.map((point, index) => {
              const Icon = pointIcons[index];
              const color = pointColors[index];
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                  whileHover={{ y: -10 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                    style={{
                      background: `linear-gradient(135deg, ${color}, ${color}80)`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 20px ${color}40`,
                        `0 0 40px ${color}60`,
                        `0 0 20px ${color}40`,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 group-hover:text-[#00CFFF] transition-colors duration-300" style={{ color }}>
                    {point.title}
                  </h4>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};