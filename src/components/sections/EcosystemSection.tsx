import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { TestTube, Brain, Users, Coins, Network, ArrowRight } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
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

  const pillarIcons = [TestTube, Brain, Coins, Users];
  const pillarColors = ['#00CFFF', '#A259FF', '#FF6B9D', '#FFD93D'];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0F0F2A] via-[#0A0A1F] to-[#1A0A2E] relative overflow-hidden" id="ecosystem">
      {/* Background Animation - Network Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {/* Grid Pattern */}
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              <motion.line
                x1={i * 100}
                y1="0"
                x2={i * 100}
                y2="1000"
                stroke="#00CFFF"
                strokeWidth="1"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
              <motion.line
                x1="0"
                y1={i * 100}
                x2="1000"
                y2={i * 100}
                stroke="#A259FF"
                strokeWidth="1"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            </g>
          ))}
          
          {/* Network Nodes */}
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="3"
              fill="#00CFFF"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                r: [3, 6, 3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              {t.ecosystem.title}
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {t.ecosystem.subtitle}
            </p>
          </motion.div>

          {/* Core Pillars - Horizontal Flow Design */}
          <motion.div
            variants={containerVariants}
            className="mb-20"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-[#00CFFF] mb-12 text-center"
            >
              {t.ecosystem.corePillars.title}
            </motion.h3>
            
            {/* Flow Layout */}
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00CFFF] via-[#A259FF] to-[#FF6B9D] opacity-30 transform -translate-y-1/2" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.ecosystem.corePillars.pillars.map((pillar, index) => {
                  const Icon = pillarIcons[index];
                  const color = pillarColors[index];
                  
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative group"
                      whileHover={{ y: -5 }}
                    >
                      {/* Pillar Card */}
                      <div className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 text-center min-h-[200px] flex flex-col">
                        {/* Icon */}
                        <motion.div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                          style={{
                            background: `linear-gradient(135deg, ${color}, ${color}80)`,
                          }}
                          animate={{
                            boxShadow: [
                              `0 0 20px ${color}40`,
                              `0 0 30px ${color}60`,
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
                        <h4 className="text-lg font-bold mb-3 group-hover:text-[#00CFFF] transition-colors duration-300" style={{ color }}>
                          {pillar.title}
                        </h4>
                        
                        <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-1">
                          {pillar.description}
                        </p>

                        {/* Step Number */}
                        <motion.div
                          className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ background: color }}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeInOut"
                          }}
                        >
                          {index + 1}
                        </motion.div>
                      </div>

                      {/* Arrow Connector (Desktop Only) */}
                      {index < 3 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                          <motion.div
                            animate={{
                              x: [0, 5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <ArrowRight size={24} className="text-[#00CFFF]" />
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Value Loop - Central Focus Box */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-[#00CFFF] mb-8">
              {t.ecosystem.valueLoop.title}
            </h3>
            
            <motion.div
              className="max-w-4xl mx-auto p-12 rounded-3xl border-2 border-[#00CFFF]/30 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 207, 255, 0.1), rgba(162, 89, 255, 0.1))',
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 207, 255, 0.2), transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Central Network Icon */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Network size={32} className="text-white" />
              </motion.div>

              <p className="text-2xl text-white font-medium relative z-10 leading-relaxed">
                {t.ecosystem.valueLoop.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Note */}
        </motion.div>
      </div>
    </section>
  );
};