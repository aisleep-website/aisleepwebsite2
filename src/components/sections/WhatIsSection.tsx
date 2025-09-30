import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';

export const WhatIsSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1A0A2E] via-[#0F0F2A] to-[#0A0A1F] relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] rounded-full"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.8,
                staggerChildren: 0.3,
              },
            },
          }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 lg:mb-16 leading-tight"
          >
            {t.whatIs.title}
          </motion.h2>

          {/* Clean Definition - Single Connected Paragraph */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
              {t.whatIs.description.replace(/\n/g, ' ').replace(/—/g, '')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};