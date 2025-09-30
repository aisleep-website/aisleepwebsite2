import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { TrendingUp, FileText, DollarSign, Users, Target, Zap, BarChart3, PieChart } from 'lucide-react';

interface InvestSectionProps {
  onPageChange: (page: 'home' | 'help-center' | 'contact' | 'privacy-policy' | 'terms-of-use' | 'whitepaper') => void;
}

export const InvestSection: React.FC<InvestSectionProps> = ({ onPageChange }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const { ref, controls } = useScrollAnimation();
  
  const [count90B, setCount90B] = useState(0);
  const [count17B, setCount17B] = useState(0);
  const hasAnimated = useRef(false);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { threshold: 0.3 });

  const points = [
    {
      stat: `$${count90B}B+`,
      text: 'sleep economy by 2030 entering a secular growth category.',
    },
    {
      stat: `${count17B}B`,
      text: 'people need better sleep demand is structural, not hype.',
    },
    {
      stat: '14%',
      text: 'Community-driven incentives Airdrops, Staking & Rewards reserved to fuel adoption.',
    },
    {
      stat: '1st',
      text: 'First-mover advantage the only platform turning sleep into digital assets.',
    },
  ];

  // Count-up animation
  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const animate90 = () => {
        let start = 0;
        const end = 90;
        const duration = 2500;
        const startTime = Date.now();
        
        const update = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * end);
          
          setCount90B(current);
          
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };
        update();
      };

      const animate17 = () => {
        let start = 0;
        const end = 1.7;
        const duration = 2500;
        const startTime = Date.now();
        
        const update = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * end * 10) / 10;
          
          setCount17B(current);
          
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };
        update();
      };

      setTimeout(animate90, 500);
      setTimeout(animate17, 700);
    }
  }, [isInView]);

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-[#0A0A1F] via-[#1A0A2E] to-[#0F0F2A] relative overflow-hidden">
      {/* Financial Data Stream Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#00CFFF] font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          >
            ${Math.floor(Math.random() * 1000)}M ↗
          </motion.div>
        ))}
      </div>

      {/* Stock Chart Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <motion.path
            d="M0,400 Q200,300 400,350 T800,250 L1000,200"
            stroke="#00CFFF"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M0,450 Q300,350 600,400 T1000,300"
            stroke="#A259FF"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>
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
                staggerChildren: 0.3,
              },
            },
          }}
          className="max-w-7xl mx-auto"
        >
          {/* Title with Financial Icons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp size={32} className="sm:w-12 sm:h-12 text-[#00CFFF]" />
              </motion.div>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <BarChart3 size={28} className="sm:w-10 sm:h-10 text-[#A259FF]" />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <PieChart size={24} className="sm:w-9 sm:h-9 text-[#FF6B9D]" />
              </motion.div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 px-4 sm:px-0">
              {t.invest.title}
            </h2>
          </motion.div>

          {/* Investment Points in Staggered Layout */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.6, delay: index * 0.1 } 
                  },
                }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] bg-clip-text text-transparent"
                  animate={index < 2 ? {
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {point.stat}
                </motion.div>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                  {point.text}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA with Investment Theme */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-center mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-0"
          >
            <motion.button
              onClick={() => onPageChange('whitepaper')}
              className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] text-white rounded-full font-bold text-lg sm:text-xl shadow-lg min-h-[48px] inline-flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Explore Whitepaper"
            >
              <FileText size={24} className="inline mr-3" />
              Explore Whitepaper
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};