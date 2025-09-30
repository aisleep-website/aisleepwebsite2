import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { ArrowRight, Calendar, Clock, Globe, Users } from 'lucide-react';

export const NewsSection: React.FC = () => {
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

  // Enhanced articles with professional data
  const enhancedArticles = [
    {
      ...t.news.articles[0],
      category: 'Product Update',
      readTime: '3 min read',
      date: 'Q1 2026',
      icon: 'nft',
    },
    {
      ...t.news.articles[1],
      category: 'Company News',
      readTime: '5 min read',
      date: 'Dec 2025',
      icon: 'globe',
    },
    {
      ...t.news.articles[2],
      category: 'Community',
      readTime: '4 min read',
      date: 'Nov 2025',
      icon: 'users',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0F0F2A] via-[#0A0A1F] to-[#1A0A2E] relative overflow-hidden" id="news">
      {/* Background Animation - News Feed Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.1) 2px,
                rgba(255,255,255,0.1) 4px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 20px,
                rgba(255,255,255,0.05) 20px,
                rgba(255,255,255,0.05) 40px
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              {t.news.title}
            </h2>
          </motion.div>

          {/* News Grid - Smaller Cards in Neat Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {enhancedArticles.map((article, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="group cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden group-hover:border-[#00CFFF]/40 transition-all duration-500 h-full flex flex-col">
                  {/* Article Icon */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0A0A1F] via-[#1A0A2E] to-[#0F0F2A] flex items-center justify-center">
                    {article.icon === 'nft' && (
                      <div className="relative">
                        <div className="text-7xl font-black bg-gradient-to-r from-[#00CFFF] to-[#A259FF] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                          NFT
                        </div>
                        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20 group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
                      </div>
                    )}
                    {article.icon === 'globe' && (
                      <Globe
                        size={80}
                        className="text-[#00CFFF] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                        strokeWidth={1.5}
                      />
                    )}
                    {article.icon === 'users' && (
                      <Users
                        size={80}
                        className="text-[#A259FF] group-hover:scale-110 transition-all duration-500"
                        strokeWidth={1.5}
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Category Badge */}
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 bg-[#00CFFF] text-white rounded-full font-bold text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      {article.category}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 mb-3 text-xs text-white/60">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#00CFFF] transition-colors duration-300 mb-3 leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-4 flex-1">
                      {article.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-2 text-[#00CFFF] hover:text-white font-bold transition-colors group/btn text-sm mt-auto"
                    >
                      {article.cta}
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Bottom Note */}
        </motion.div>
      </div>
    </section>
  );
};