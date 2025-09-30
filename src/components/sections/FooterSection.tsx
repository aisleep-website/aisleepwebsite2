import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { ExternalLink, Mail, MapPin, Phone, Sparkles, Heart } from 'lucide-react';
import logoImage from '../../assets/logo Aisleep.png';

interface FooterSectionProps {
  onPageChange: (page: 'home' | 'help-center' | 'contact' | 'privacy-policy' | 'terms-of-use' | 'whitepaper') => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onPageChange }) => {
  const { currentLanguage } = useLanguage();

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { name: 'About', href: '#what-is', external: false },
        { name: 'Ecosystem', href: '#ecosystem', external: false },
        { name: 'NFTs', href: '#dynamic-nfts', external: false },
        { name: 'News', href: '#news', external: false },
        { name: 'Whitepaper', href: 'whitepaper', external: false, isPage: true }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: 'privacy-policy', external: false, isPage: true },
        { name: 'Terms of Use', href: 'terms-of-use', external: false, isPage: true },
        { name: 'Contact Us', href: 'contact', external: false, isPage: true }
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'X (Twitter)', href: 'https://x.com/AISleepToken?t=mnf69btBh_Sb3Oe8Ww8s_w&s=09', external: true, icon: 'X' },
        { name: 'Telegram', href: 'https://t.me/AISleepCommunity', external: true, icon: 'Telegram' },
        { name: 'Discord', href: '#', external: true, icon: 'Discord' }
      ]
    },
  ];

  const handleLinkClick = (link: any) => {
    if (link.isPage) {
      onPageChange(link.href as any);
    } else if (link.external) {
      if (link.openInNewTab) {
        window.open(link.href, '_blank');
      } else if (link.href.startsWith('http')) {
        handleExternalLink(link.href);
      } else {
        window.open(link.href, '_blank');
      }
    } else {
      handleSmoothScroll(link.href);
    }
  };

  const SocialIcon = ({ icon, size = 20 }: { icon: string; size?: number }) => {
    switch (icon) {
      case 'X':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'Telegram':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        );
      case 'Discord':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  return (
    <footer className="section-padding bg-gradient-to-t from-[#0A0A1F] via-[#0F0F2A] to-[#0A0A1F] border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#A259FF]/20 to-[#00CFFF]/20 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Top Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            {/* Logo and Tagline */}
            <motion.div
              className="flex flex-col items-center gap-4 mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={logoImage} 
                    alt="AISleep Logo" 
                    className="w-12 h-12"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold brand-gradient-text">
                    AISleep
                  </h3>
                  <p className="text-sm text-white/60">
                    Sleep • Earn • Grow
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="body-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Transforming sleep into digital value through AI-powered insights and Web3 rewards. Join the revolution that's making better sleep profitable.
            </p>
          </motion.div>

          {/* Footer Links Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16"
          >
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-6"
              >
                <h4 className="heading-sm text-white">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.button
                        onClick={() => handleLinkClick(link)}
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 text-white/70 hover:text-[#00CFFF] transition-all duration-300 text-left group"
                      >
                        {link.icon && (
                          <div className="w-4 h-4 group-hover:scale-110 transition-transform duration-300">
                            <SocialIcon icon={link.icon} size={16} />
                          </div>
                        )}
                        <span className="group-hover:text-white transition-colors duration-300">
                          {link.name}
                        </span>
                        {link.external && !link.icon && (
                          <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Email */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h4 className="heading-sm text-white mb-4">
              Email Support
            </h4>
            <a 
              href="mailto:support@aisleep.site"
              className="text-[#00CFFF] hover:text-white transition-colors duration-300 text-lg"
            >
              support@aisleep.site
            </a>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h4 className="heading-sm text-white mb-6">
              Join Our Community
            </h4>
            <div className="flex justify-center items-center gap-6">
              {/* X (Twitter) */}
              <motion.button
                onClick={() => handleExternalLink('https://x.com/AISleepToken?t=mnf69btBh_Sb3Oe8Ww8s_w&s=09')}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass-card flex items-center justify-center text-white/70 hover:text-[#00CFFF] transition-all duration-300 group relative overflow-hidden"
              >
                <SocialIcon icon="X" size={24} />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>

              {/* Telegram */}
              <motion.button
                onClick={() => handleExternalLink('https://t.me/AISleepCommunity')}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass-card flex items-center justify-center text-white/70 hover:text-[#00CFFF] transition-all duration-300 group relative overflow-hidden"
              >
                <SocialIcon icon="Telegram" size={24} />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>

              {/* Discord */}
              <motion.button
                onClick={() => handleExternalLink('#')}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass-card flex items-center justify-center text-white/70 hover:text-[#00CFFF] transition-all duration-300 group relative overflow-hidden"
              >
                <SocialIcon icon="Discord" size={24} />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <motion.div
                className="text-white/70 text-center md:text-left"
                whileHover={{ scale: 1.02 }}
              >
                <span>© 2025 AISleep. All rights reserved.</span>
              </motion.div>

              {/* Status Indicator */}
              <motion.div
                className="flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-white/70">All systems operational</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};