import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Moon, Coins, Heart, Zap } from 'lucide-react';

export const WhoIsItForSection: React.FC = () => {
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

  const audienceIcons = [Moon, Coins, Heart, Zap];
  const audienceColors = ['#4A90E2', '#A259FF', '#FF6B9D', '#FFD93D'];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1A0A2E] via-[#0F0F2A] to-[#0A0A1F] relative overflow-hidden">
      {/* Background Animation - Constellation Pattern */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Connecting Lines */}
        <svg className="w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
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
          {/* Title Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              {t.whoIsItFor.title}
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t.whoIsItFor.subtitle}
            </p>
          </motion.div>

          {/* Audience Cards - Unique Constellation Design */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {t.whoIsItFor.audiences.map((audience, index) => {
              const Icon = audienceIcons[index];
              const color = audienceColors[index];
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Card with Unique Shape */}
                  <div 
                    className="relative p-8 rounded-3xl border-2 transition-all duration-500 group-hover:border-opacity-80 min-h-[300px] flex flex-col text-center"
                    style={{
                      background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                      borderColor: `${color}40`,
                    }}
                  >
                    {/* Animated Background Pattern */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${color}20, transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Icon with Unique Animation */}
                    <motion.div
                      className="relative z-10 mb-6"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${color}, ${color}CC)`,
                        }}
                      >
                        <Icon size={32} className="text-white relative z-10" />
                        
                        {/* Icon Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          animate={{
                            boxShadow: [
                              `0 0 20px ${color}60`,
                              `0 0 40px ${color}80`,
                              `0 0 20px ${color}60`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-opacity-90 transition-all duration-300">
                        {audience.title}
                      </h3>
                      
                      <p className="text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-1">
                        {audience.description}
                      </p>

                      {/* Bottom Accent Line */}
                      <motion.div
                        className="mt-6 h-1 rounded-full mx-auto"
                        style={{ background: color }}
                        initial={{ width: '30%' }}
                        whileHover={{ width: '60%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Corner Decoration */}
                    <motion.div
                      className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60"
                      style={{ background: color }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Note */}
        </motion.div>
      </div>
    </section>
  );
};