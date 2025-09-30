import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Twitter, Linkedin, Github } from 'lucide-react';

const avatars = ['👨‍💼', '🤝', '👨‍💻', '📢'];

export const TeamSection: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-800" id="team">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            {t.team.title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {t.team.members.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                      initial={{ 
                        x: Math.random() * 300,
                        y: Math.random() * 200,
                        opacity: 0 
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Avatar */}
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 group-hover:animate-spin">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-3xl">
                      {avatars[index]}
                    </div>
                  </div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <motion.div
                    className="flex justify-center gap-4 mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <Twitter size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <Linkedin size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <Github size={16} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Hover Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  whileHover={{
                    borderColor: "rgba(0, 207, 255, 0.3)",
                    boxShadow: "inset 0 0 20px rgba(0, 207, 255, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};