import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Globe, Users, Mail } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
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
              Privacy Policy
            </h1>
            <p className="text-gray-400 mt-2">Side page explaining privacy practices.</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Data We Collect */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-cyan-400">Data We Collect</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Account Data</h3>
                <p className="text-gray-300">Email, display name, settings.</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Platform Usage</h3>
                <p className="text-gray-300">Sessions, feature interactions, diagnostics.</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Sleep Inputs</h3>
                <p className="text-gray-300">Check-ins, goals, optional wearable data you choose to share.</p>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Device Data</h3>
                <p className="text-gray-300">Browser type, IP (short-term), error logs.</p>
              </div>
            </div>
          </motion.section>

          {/* How We Use Data */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-cyan-400">Usage</h2>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                We use your data to operate the service, improve user experience, and personalize recommendations with Lunara.
              </p>
            </div>
          </motion.section>

          {/* Sharing */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-cyan-400">Sharing</h2>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="space-y-4">
                <p className="text-cyan-400 font-semibold text-lg">
                  We do not sell, lease, or share your data with any external party for commercial or marketing purposes.
                </p>
                <div>
                  <h4 className="text-white font-semibold mb-2">The only exceptions:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Explicit user consent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Legal obligation (such as a valid court order)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Data Retention */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Retention</h2>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                Data is kept while the account is active, only as long as needed for the service or legal compliance. 
                Deletion is available upon request.
              </p>
            </div>
          </motion.section>

          {/* User Rights */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">User Rights</h2>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                You have the right to access, modify, delete, or object to the processing of your data.
              </p>
            </div>
          </motion.section>

          {/* Children */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Children</h2>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                This service is not intended for users under 16.
              </p>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-cyan-400">Contact</h2>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
              <p className="text-gray-300">
                Questions about privacy?{' '}
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