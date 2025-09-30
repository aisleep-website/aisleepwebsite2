import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Sparkles className="text-cyan-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-6"
          >
            <p>
              AISleep is an innovative platform that combines cutting-edge artificial intelligence with sleep science to revolutionize how we understand and optimize rest. Our AI companion, Lunara, learns from your sleep patterns, adapts to your lifestyle, and rewards you for healthy sleep habits.
            </p>
            
            <motion.p
              className="text-2xl md:text-3xl font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t.about.highlight1}
              </span>
              <span className="text-white">, </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.about.highlight2}
              </span>
              <span className="text-white">, </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.about.highlight3}
              </span>
            </motion.p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            variants={itemVariants}
            className="relative mt-16"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            </div>
            <motion.div
              className="relative z-10 bg-gray-900 px-8 py-4 inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="text-purple-400" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};