import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Sparkles, Star, TrendingUp, Crown, ArrowRight } from 'lucide-react';

export const DynamicNFTsSection: React.FC = () => {
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

  const nftStages = [
    { level: 'Seed', icon: Sparkles, color: '#10B981', description: 'Starting your journey' },
    { level: 'Growth', icon: Star, color: '#3B82F6', description: 'Building momentum' },
    { level: 'Advanced', icon: TrendingUp, color: '#A259FF', description: 'Mastering sleep' },
    { level: 'Elite', icon: Crown, color: '#FFD93D', description: 'Peak performance' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1A0A2E] via-[#0F0F2A] to-[#0A0A1F] relative overflow-hidden">
      {/* Background Animation - Floating Diamonds */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-[#A259FF] to-[#FFD93D] transform rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [45, 225, 45],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {[...Array(25)].map((_, i) => {
            const x = (i % 5) * 200 + 100;
            const y = Math.floor(i / 5) * 200 + 100;
            return (
              <motion.polygon
                key={i}
                points="0,50 50,0 100,50 50,100"
                stroke="#A259FF"
                strokeWidth="1"
                fill="none"
                transform={`translate(${x}, ${y})`}
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            );
          })}
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
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
              Dynamic NFTs
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                AISleep introduces Dynamic NFTs. Evolving assets that grow with your sleep journey.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/80">
                Each Sleep Test and XP milestone unlocks new traits, making your NFT unique and personal.
              </p>
            </div>
          </motion.div>

          {/* NFT Evolution Timeline */}
          <motion.div
            variants={containerVariants}
            className="relative mb-12 sm:mb-16"
          >
            {/* Progress Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#10B981] via-[#3B82F6] via-[#A259FF] to-[#FFD93D] opacity-30 transform -translate-y-1/2 rounded-full" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {nftStages.map((stage, index) => {
                const Icon = stage.icon;
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    {/* NFT Card */}
                    <div className="relative">
                      {/* Main NFT Display */}
                      <motion.div
                        className="w-full aspect-square rounded-3xl relative overflow-hidden mb-6 border-2 group-hover:border-opacity-100 transition-all duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${stage.color}40, ${stage.color}20)`,
                          borderColor: `${stage.color}60`,
                        }}
                        animate={{
                          boxShadow: [
                            `0 0 30px ${stage.color}30`,
                            `0 0 50px ${stage.color}50`,
                            `0 0 30px ${stage.color}30`,
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        {/* Animated Background Pattern */}
                        <motion.div
                          className="absolute inset-0 opacity-20"
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <div 
                            className="w-full h-full"
                            style={{
                              background: `conic-gradient(from 0deg, ${stage.color}80, transparent, ${stage.color}80)`,
                            }}
                          />
                        </motion.div>

                        {/* NFT Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center relative"
                            style={{
                              background: `linear-gradient(135deg, ${stage.color}, ${stage.color}CC)`,
                            }}
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.3
                            }}
                          >
                            <Icon size={36} className="text-white" />
                            
                            {/* Icon Glow */}
                            <motion.div
                              className="absolute inset-0 rounded-2xl"
                              animate={{
                                boxShadow: [
                                  `inset 0 0 20px ${stage.color}60`,
                                  `inset 0 0 40px ${stage.color}80`,
                                  `inset 0 0 20px ${stage.color}60`,
                                ],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                        </div>

                        {/* Level Badge */}
                        <motion.div
                          className="absolute top-4 right-4 px-3 py-1 rounded-full text-white font-bold text-xs"
                          style={{ background: stage.color }}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut"
                          }}
                        >
                          Lv.{index + 1}
                        </motion.div>

                        {/* Progress Indicator */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: stage.color }}
                              initial={{ width: '0%' }}
                              animate={{ width: `${(index + 1) * 25}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Stage Info */}
                      <div className="text-center">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-opacity-90 transition-colors duration-300">
                          {stage.level} Level
                        </h3>
                        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                          {stage.description}
                        </p>
                      </div>

                      {/* Evolution Arrow */}
                      {index < 3 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                          <motion.div
                            animate={{
                              x: [0, 8, 0],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <ArrowRight size={24} className="text-white/60" />
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom Note */}
        </motion.div>
      </div>
    </section>
  );
};