import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Menu, X, Sparkles } from 'lucide-react';
import logoImage from '../assets/logo Aisleep.png';

interface NavigationProps {
  onPageChange: (page: 'home' | 'help-center' | 'contact' | 'privacy-policy' | 'terms-of-use' | 'whitepaper') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onPageChange }) => {
  const { currentLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll for glass effect and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Update active section based on scroll position
      const sections = ['hero', 'how-it-works', 'ecosystem', 'news'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'How it Works', href: '#how-it-works', id: 'how-it-works' },
    { label: 'Ecosystem', href: '#ecosystem', id: 'ecosystem' },
    { label: 'News', href: '#news', id: 'news' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };


  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const drawerVariants = {
    hidden: {
      x: '100%',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 w-full z-50 transition-all duration-500 bg-gradient-to-r from-[#0A0A1F] via-[#1A0A2E] to-[#0A0A1F] border-b border-[#00CFFF]/20 shadow-2xl"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <img
                src={logoImage}
                alt="AISleep Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold brand-gradient-text">
                AISleep
              </span>
              <span className="text-xs text-white/60 -mt-1 hidden sm:block">
                Sleep • Earn • Grow
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-[#00CFFF] to-[#A259FF] bg-clip-text text-transparent' 
                    : 'text-white/80 hover:bg-gradient-to-r hover:from-[#00CFFF] hover:to-[#A259FF] hover:bg-clip-text hover:text-transparent'
                }`}
                whileHover={{ y: -2 }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://my.aisleep.site/', '_blank', 'noopener,noreferrer')}
              className="btn-ghost"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              aria-label="Login"
              type="button"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] text-white rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:opacity-90 flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              type="button"
            >
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              Install AISleep
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center glass-card text-white hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Drawer - Right Side */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Drawer */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={drawerVariants}
                className="fixed top-0 right-0 bottom-0 w-[280px] bg-gradient-to-br from-[#0A0A1F] via-[#1A0A2E] to-[#0A0A1F] border-l border-[#00CFFF]/20 shadow-2xl z-50 lg:hidden overflow-y-auto"
                style={{
                  paddingTop: 'env(safe-area-inset-top)',
                }}
              >
                {/* Close button inside drawer */}
                <div className="flex justify-between items-center p-6 border-b border-[#00CFFF]/20">
                  <span className="text-lg font-bold brand-gradient-text">Menu</span>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center glass-card text-white hover:bg-white/10 transition-colors rounded-lg"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="py-6 space-y-2 px-4 pb-24">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      variants={mobileItemVariants}
                      className={`block py-3 px-4 font-medium text-base min-h-[48px] flex items-center rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-[#00CFFF] to-[#A259FF] bg-clip-text text-transparent bg-white/10'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  <motion.div
                    variants={mobileItemVariants}
                    className="flex flex-col gap-3 pt-6 mt-4 border-t border-[#00CFFF]/20"
                  >
                    <button
                      onClick={() => window.open('https://my.aisleep.site/', '_blank', 'noopener,noreferrer')}
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all duration-300 w-full min-h-[48px] flex items-center justify-center"
                    >
                      Login
                    </button>
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-[#00CFFF] to-[#A259FF] text-white rounded-full font-bold text-sm w-full min-h-[48px] flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90"
                    >
                      <Sparkles size={18} />
                      Install AISleep
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};