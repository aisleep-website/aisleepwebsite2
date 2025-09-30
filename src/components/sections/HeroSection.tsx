import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Sparkles, ArrowRight } from 'lucide-react';
import lunaraImage from '../../assets/lunara hero section (1).png';

export const HeroSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const [showDemo, setShowDemo] = useState(false);

  // Demo Modal Component
  const DemoModal = () => (
    <AnimatePresence>
      {showDemo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowDemo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 max-w-2xl mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#00CFFF]/20 to-[#A259FF]/20 p-1">
                <img
                  src={lunaraImage}
                  alt="Lunara AI Assistant"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
            
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#00CFFF] to-[#A259FF] bg-clip-text text-transparent mb-4 sm:mb-6">
              {t.demo.title}
            </h1>
            
            <div className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 whitespace-pre-line">
              {t.demo.message}
            </div>
            
            <button
              onClick={() => setShowDemo(false)}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
            >
              <ArrowRight size={18} className="inline mr-2" />
              Back to Home
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-[#0A0A1F] via-[#1A0A2E] to-[#0F0F2A] relative overflow-hidden flex items-center"
        style={{
          paddingTop: 'max(5rem, env(safe-area-inset-top) + 1rem)',
          minHeight: 'calc(100vh - env(safe-area-inset-top))',
        }}
      >
        {/* Floating Energy Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00CFFF] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -100, -200],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-center lg:text-left space-y-8 order-2 lg:order-1"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight bg-gradient-to-r from-[#00CFFF] to-[#A259FF] bg-clip-text text-transparent">
                {t.hero.headline}
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                {t.hero.subheadline}
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center"
              >
                {/* Primary CTA - Meet Lunara */}
                <motion.button
                  onClick={() => setShowDemo(true)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] text-white rounded-2xl font-bold text-base sm:text-lg shadow-2xl relative overflow-hidden group"
                  type="button"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      x: [-100, 300],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <Sparkles size={20} className="inline mr-3" />
                  {t.hero.primaryCta}
                </motion.button>

                {/* Secondary CTA - Install AISleep */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 border-2 border-white/40 text-white rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 hover:border-[#00CFFF]/60 transition-all duration-300 backdrop-blur-sm"
                  type="button"
                >
                  {t.hero.secondaryCta1}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Lunara Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative w-full h-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center order-1 lg:order-2"
            >
              {/* Container scaled to 80% */}
              <div className="relative w-[80%] h-[80%]">
                {/* Multiple Orbital Rings with different speeds */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute border rounded-full"
                    style={{
                      width: `${100 + i * 15}%`,
                      height: `${100 + i * 15}%`,
                      left: `${-i * 7.5}%`,
                      top: `${-i * 7.5}%`,
                      borderColor: i === 0 ? 'rgba(0, 207, 255, 0.3)' : i === 1 ? 'rgba(162, 89, 255, 0.25)' : 'rgba(0, 207, 255, 0.15)',
                      borderWidth: i === 0 ? '2px' : '1px',
                    }}
                    animate={{
                      rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                    }}
                    transition={{
                      duration: 20 + i * 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}

                {/* Glowing Background Layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/15 to-[#00CFFF]/15 rounded-full blur-2xl"
                  animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.4, 0.7, 0.4],
                    rotate: [0, 180, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Central Circle with Lunara */}
                <motion.div
                  className="relative w-full h-full rounded-full border-2 border-[#00CFFF]/60 bg-gradient-to-br from-[#00CFFF]/15 to-[#A259FF]/15 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      '0 0 40px rgba(0, 207, 255, 0.5), 0 0 80px rgba(0, 207, 255, 0.2)',
                      '0 0 60px rgba(162, 89, 255, 0.6), 0 0 100px rgba(162, 89, 255, 0.3)',
                      '0 0 40px rgba(0, 207, 255, 0.5), 0 0 80px rgba(0, 207, 255, 0.2)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Inner glow ring */}
                  <div className="absolute inset-2 rounded-full border border-white/20" />

                  {/* Lunara Image */}
                  <motion.img
                    src={lunaraImage}
                    alt="Lunara AI Assistant"
                    className="w-full h-full object-cover object-top scale-110 relative z-10"
                    animate={{
                      scale: [1.1, 1.12, 1.1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Energy Pulses */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`pulse-${i}`}
                      className="absolute inset-0 rounded-full border-2"
                      style={{
                        borderColor: i % 2 === 0 ? 'rgba(0, 207, 255, 0.4)' : 'rgba(162, 89, 255, 0.4)',
                      }}
                      animate={{
                        scale: [1, 2, 2],
                        opacity: [0.6, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut"
                      }}
                    />
                  ))}

                  {/* Rotating shimmer effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <DemoModal />
    </>
  );
};