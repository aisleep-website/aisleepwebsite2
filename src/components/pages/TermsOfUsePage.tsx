import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, Scale, Mail } from 'lucide-react';

interface TermsOfUsePageProps {
  onBack: () => void;
}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ onBack }) => {
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
              Terms of Use
            </h1>
            <p className="text-gray-400 mt-2">Side page defining user terms.</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Acceptance of Terms */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-cyan-400">Acceptance</h2>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                By using the service, you agree to these Terms.
              </p>
            </div>
          </motion.section>

          {/* Eligibility */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-cyan-400">Eligibility</h2>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                Service is for users 16 and older.
              </p>
            </div>
          </motion.section>

          {/* Account Responsibility */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-cyan-400">Account Responsibility</h2>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                Users are responsible for login credentials and account activity.
              </p>
            </div>
          </motion.section>

          {/* Service Description */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Service Description</h2>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                AISleep provides health guidance and experimental rewards. It is not a medical device.
              </p>
            </div>
          </motion.section>

          {/* Disclaimer */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-yellow-400" size={24} />
              <h2 className="text-2xl font-bold text-yellow-400">Disclaimer</h2>
            </div>
            <div className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-yellow-400">Important:</strong> This service is for educational purposes only and is not medical advice.
              </p>
            </div>
          </motion.section>

          {/* Prohibited Use */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Prohibited Use</h2>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                No illegal activity or hacking attempts are permitted.
              </p>
            </div>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Intellectual Property</h2>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                All content and software belong to AISleep.
              </p>
            </div>
          </motion.section>

          {/* Account Termination */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Account Termination</h2>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                AISleep may terminate accounts for violations.
              </p>
            </div>
          </motion.section>

          {/* Governing Law */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-cyan-400" size={24} />
              <h2 className="text-2xl font-bold text-cyan-400">Governing Law</h2>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                To be defined by chosen jurisdiction.
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
                Questions about these Terms?{' '}
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