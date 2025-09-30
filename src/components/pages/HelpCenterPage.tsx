import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Book, Settings, Shield, Coins, MessageCircle } from 'lucide-react';

interface HelpCenterPageProps {
  onBack: () => void;
}

export const HelpCenterPage: React.FC<HelpCenterPageProps> = ({ onBack }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const quickLinks = [
    { title: 'Getting Started', icon: Book, href: '#getting-started' },
    { title: 'Features', icon: Settings, href: '#features' },
    { title: 'Troubleshooting', icon: Search, href: '#troubleshooting' },
    { title: 'Account & Data', icon: Shield, href: '#account-data' },
    { title: 'Tokens & Rewards', icon: Coins, href: '#tokens-rewards' },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white hover:bg-gray-700/60 hover:border-cyan-400/30 transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </motion.button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-gray-400 mt-2">Dedicated page for support and guidance.</p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-xl font-bold text-cyan-400 mb-6">
            Quick Links
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  onClick={() => handleLinkClick(link.href)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/30 transition-all duration-300 text-center group"
                >
                  <Icon size={24} className="mx-auto mb-2 text-cyan-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {link.title}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        {/* Content Sections */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Getting Started */}
          <motion.section variants={itemVariants} id="getting-started">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Getting Started with AISleep</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Account Registration</h3>
                <p className="text-gray-300">Create your AISleep account to begin your sleep optimization journey.</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Sleep Test</h3>
                <p className="text-gray-300">Complete your first Sleep Test to establish your baseline and start earning rewards.</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Wallet Connection</h3>
                <p className="text-gray-300">Optionally connect your Web3 wallet to access token rewards and NFT features.</p>
              </div>
            </div>
          </motion.section>

          {/* Features */}
          <motion.section variants={itemVariants} id="features">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Feature Overview</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Sleep Test</h3>
                <p className="text-gray-300">A short nightly check-in that adapts your goals and unlocks progress.</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Lunara Assistant</h3>
                <p className="text-gray-300">Your AI companion for practical, science-based guidance on routines, light, caffeine, and wind-down habits.</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Dynamic NFTs</h3>
                <p className="text-gray-300">Your progress unlocks traits/levels that make your NFT unique and personal.</p>
              </div>
            </div>
          </motion.section>

          {/* Troubleshooting */}
          <motion.section variants={itemVariants} id="troubleshooting">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Troubleshooting</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Delayed Results</h3>
                <p className="text-gray-300">Refresh your dashboard and confirm you're logged in with the same account/wallet.</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Wallet Connection Issues</h3>
                <p className="text-gray-300">Clear site permissions and reconnect. If the issue persists, try another browser.</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Slow Performance</h3>
                <p className="text-gray-300">Close heavy tabs/extensions and reload the page.</p>
              </div>
            </div>
          </motion.section>

          {/* Account & Data */}
          <motion.section variants={itemVariants} id="account-data">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Account & Data</h2>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300">
                Export or delete your data anytime upon request. Contact us for assistance with data management.
              </p>
            </div>
          </motion.section>

          {/* Tokens & Rewards */}
          <motion.section variants={itemVariants} id="tokens-rewards">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Tokens & Rewards</h2>
            <div className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6">
              <p className="text-gray-300">
                <strong className="text-yellow-400">Disclaimer:</strong> AISleep rewards are experimental and not financial advice. 
                Availability may vary by region and partners.
              </p>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section variants={itemVariants}>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
              <MessageCircle size={32} className="mx-auto mb-4 text-cyan-400" />
              <p className="text-gray-300 mb-4">
                Need more help? Contact us directly at{' '}
                <a href="mailto:support@aisleep.site" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  support@aisleep.site
                </a>
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};