import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Check } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, languages, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -10
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card text-white hover:bg-white/10 transition-all duration-300 min-w-[120px] group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="w-5 h-5 text-[#00CFFF] group-hover:text-white transition-colors duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Globe size={20} />
        </motion.div>
        
        <div className="flex-1 text-left">
          <span className="text-sm font-medium group-hover:text-[#00CFFF] transition-colors duration-300">
            {currentLanguage.name}
          </span>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white/60 group-hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute top-full mt-2 right-0 glass-card rounded-xl overflow-hidden min-w-[160px] z-50 border border-white/10"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <motion.div
              variants={itemVariants}
              className="p-2"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    switchLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  variants={itemVariants}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 group ${
                    currentLanguage.code === lang.code 
                      ? 'bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20 text-[#00CFFF] border border-[#00CFFF]/30' 
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-1">
                    <span className="font-medium">
                      {lang.name}
                    </span>
                    <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {lang.code.toUpperCase()}
                    </div>
                  </div>
                  
                  {currentLanguage.code === lang.code && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#00CFFF]"
                    >
                      <Check size={16} />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Decorative bottom border */}
            <motion.div
              className="h-1 bg-gradient-to-r from-[#00CFFF] to-[#A259FF]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};