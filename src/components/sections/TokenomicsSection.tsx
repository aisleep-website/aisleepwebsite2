import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../data/translations';
import { Lock, Users, TrendingUp, Handshake, Shield, Gift, Zap, Globe, Archive } from 'lucide-react';
import logoImage from '../../assets/logo Aisleep.png';

const tokenIcons = [Users, TrendingUp, Handshake, Shield, Users, Gift, Zap, Globe, Archive];

export const TokenomicsSection: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
  const { ref, controls } = useScrollAnimation();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const colors = [
    'from-cyan-400 to-cyan-600',
    'from-blue-400 to-blue-600', 
    'from-purple-400 to-purple-600',
    'from-pink-400 to-pink-600',
    'from-indigo-400 to-indigo-600',
    'from-emerald-400 to-emerald-600',
    'from-yellow-400 to-yellow-600',
    'from-orange-400 to-orange-600',
    'from-red-400 to-red-600'
  ];

  // Separate circulating supply from other items
  const circulatingSupply = t.tokenomics.data[0]; // First item is circulating supply
  const distributionItems = t.tokenomics.data.slice(1); // Rest of the items

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800" id="tokenomics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            {t.tokenomics.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            88% locked & vesting, 12% circulating. Details in the whitepaper.
          </p>
        </motion.div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Token Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 }
              }
            }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Token Distribution</h3>
            
            {/* Circulating Supply Card - Top */}
            <motion.div
              variants={itemVariants}
              onMouseEnter={() => setHoveredItem(0)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg transition-all duration-300 ${
                hoveredItem === 0 ? 'transform -translate-y-1 shadow-lg shadow-green-400/20' : ''
              }`}
              aria-label={`${circulatingSupply.label} — ${circulatingSupply.percentage} percent`}
            >
              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-3 ${currentLanguage.dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-10 h-10 bg-gradient-to-r ${colors[0]} rounded-lg flex items-center justify-center`}>
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {circulatingSupply.label}
                    </h4>
                    <p className="text-sm text-gray-300 truncate max-w-[200px]">
                      {circulatingSupply.description}
                    </p>
                  </div>
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {circulatingSupply.percentage}%
                </div>
              </div>
            </motion.div>

            {/* Distribution Grid - 2x4 */}
            <div className="grid grid-cols-2 gap-3">
              {distributionItems.map((item, index) => {
                const Icon = tokenIcons[index + 1];
                const actualIndex = index + 1;
                return (
                  <motion.div
                    key={actualIndex}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredItem(actualIndex)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`p-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-gray-700/60 hover:border-cyan-400/30 transition-all duration-300 ${
                      hoveredItem === actualIndex ? 'transform -translate-y-1 shadow-lg shadow-cyan-400/10' : ''
                    }`}
                    aria-label={`${item.label} — ${item.percentage} percent`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 bg-gradient-to-r ${colors[actualIndex]} rounded-lg flex items-center justify-center`}>
                        <Icon size={16} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate">
                          {item.label}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 truncate mb-2">
                      {item.description}
                    </p>
                    <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {item.percentage}%
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Summary & Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.3 }
              }
            }}
            className="space-y-4"
          >
            {/* Total Supply Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl group hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={logoImage} 
                  alt="AISleep Logo" 
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Total Supply
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                    Fixed token supply
                  </p>
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                1,000,000,000
              </div>
              <p className="text-sm text-gray-400 mt-1">AiSleep Tokens</p>
            </motion.div>

            {/* Vesting Schedule Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <Lock className="text-red-400" size={20} />
                <h3 className="text-lg font-bold text-white">Vesting Schedule</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xl font-bold text-red-400">88%</div>
                  <div className="text-gray-400 text-sm">Locked</div>
                </div>
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xl font-bold text-green-400">12%</div>
                  <div className="text-gray-400 text-sm">Circulating</div>
                </div>
              </div>
            </motion.div>

            {/* Circular Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, delay: 0.5 }
                }
              }}
              className="p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl"
            >
              <div className="flex items-center gap-6">
                {/* Chart */}
                <div className="relative w-32 h-32 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="rgba(75, 85, 99, 0.3)"
                      strokeWidth="8"
                    />
                    {/* Data segments */}
                    {t.tokenomics.data.map((item, index) => {
                      const startAngle = t.tokenomics.data.slice(0, index).reduce((sum, prev) => sum + prev.percentage, 0) * 3.6;
                      const endAngle = startAngle + item.percentage * 3.6;
                      const largeArcFlag = item.percentage > 50 ? 1 : 0;
                      
                      const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
                      const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
                      const x2 = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180);
                      const y2 = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180);
                      
                      return (
                        <path
                          key={index}
                          d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={`url(#gradient-${index})`}
                          className="hover:opacity-80 transition-opacity"
                        />
                      );
                    })}
                    {/* Gradients */}
                    <defs>
                      {colors.map((color, index) => (
                        <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={color.includes('cyan') ? '#00CFFF' : color.includes('blue') ? '#3B82F6' : color.includes('purple') ? '#A855F7' : color.includes('pink') ? '#EC4899' : color.includes('indigo') ? '#6366F1' : color.includes('emerald') ? '#10B981' : color.includes('yellow') ? '#F59E0B' : color.includes('orange') ? '#F97316' : '#EF4444'} />
                          <stop offset="100%" stopColor={color.includes('cyan') ? '#0891B2' : color.includes('blue') ? '#1D4ED8' : color.includes('purple') ? '#7C3AED' : color.includes('pink') ? '#BE185D' : color.includes('indigo') ? '#4338CA' : color.includes('emerald') ? '#047857' : color.includes('yellow') ? '#D97706' : color.includes('orange') ? '#C2410C' : '#B91C1C'} />
                        </linearGradient>
                      ))}
                    </defs>
                  </svg>
                  
                  {/* Center Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-sm font-bold text-cyan-400">AiSleep Token</div>
                    <div className="text-xs text-gray-400">Distribution</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex-1 space-y-1">
                  {t.tokenomics.data.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors[index]}`} />
                      <span className="text-gray-300 truncate">{item.label}</span>
                      <span className="text-cyan-400 font-semibold ml-auto">{item.percentage}%</span>
                    </div>
                  ))}
                  {t.tokenomics.data.length > 5 && (
                    <div className="pt-1">
                      {t.tokenomics.data.slice(5).map((item, index) => (
                        <div key={index + 5} className="flex items-center gap-2 text-xs">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors[index + 5]}`} />
                          <span className="text-gray-300 truncate">{item.label}</span>
                          <span className="text-cyan-400 font-semibold ml-auto">{item.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Summary Block */}
          <div className="space-y-4">
            {/* Total Supply */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={logoImage} 
                  alt="AISleep Logo" 
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Total Supply</h3>
                  <p className="text-gray-400 text-sm">Fixed token supply</p>
                </div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                1,000,000,000
              </div>
              <p className="text-sm text-gray-400 mt-1">AiSleep Tokens</p>
            </motion.div>

            {/* Vesting Schedule */}
            <motion.div
              variants={itemVariants}
              className="p-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <Lock className="text-red-400" size={20} />
                <h3 className="text-lg font-bold text-white">Vesting Schedule</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xl font-bold text-red-400">88%</div>
                  <div className="text-gray-400 text-sm">Locked</div>
                </div>
                <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                  <div className="text-xl font-bold text-green-400">12%</div>
                  <div className="text-gray-400 text-sm">Circulating</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Horizontal Scrollable Chips */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">Token Distribution</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {t.tokenomics.data.map((item, index) => {
                const Icon = tokenIcons[index];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex-shrink-0 p-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg min-w-[140px]"
                    aria-label={`${item.label} — ${item.percentage} percent`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-6 h-6 bg-gradient-to-r ${colors[index]} rounded-lg flex items-center justify-center`}>
                        <Icon size={14} className="text-white" />
                      </div>
                      <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {item.percentage}%
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {item.label}
                    </h4>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 1, delay: 0.5 }
              }
            }}
            className="p-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl"
          >
            <div className="flex flex-col items-center gap-4">
              {/* Chart */}
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(75, 85, 99, 0.3)"
                    strokeWidth="8"
                  />
                  {/* Data segments */}
                  {t.tokenomics.data.map((item, index) => {
                    const startAngle = t.tokenomics.data.slice(0, index).reduce((sum, prev) => sum + prev.percentage, 0) * 3.6;
                    const endAngle = startAngle + item.percentage * 3.6;
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    
                    const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
                    const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
                    const x2 = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180);
                    const y2 = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180);
                    
                    return (
                      <path
                        key={index}
                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={`url(#gradient-mobile-${index})`}
                        className="hover:opacity-80 transition-opacity"
                      />
                    );
                  })}
                  {/* Gradients */}
                  <defs>
                    {colors.map((color, index) => (
                      <linearGradient key={index} id={`gradient-mobile-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={color.includes('cyan') ? '#00CFFF' : color.includes('blue') ? '#3B82F6' : color.includes('purple') ? '#A855F7' : color.includes('pink') ? '#EC4899' : color.includes('indigo') ? '#6366F1' : color.includes('emerald') ? '#10B981' : color.includes('yellow') ? '#F59E0B' : color.includes('orange') ? '#F97316' : '#EF4444'} />
                        <stop offset="100%" stopColor={color.includes('cyan') ? '#0891B2' : color.includes('blue') ? '#1D4ED8' : color.includes('purple') ? '#7C3AED' : color.includes('pink') ? '#BE185D' : color.includes('indigo') ? '#4338CA' : color.includes('emerald') ? '#047857' : color.includes('yellow') ? '#D97706' : color.includes('orange') ? '#C2410C' : '#B91C1C'} />
                      </linearGradient>
                    ))}
                  </defs>
                </svg>
                
                {/* Center Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-sm font-bold text-cyan-400">AiSleep Token</div>
                  <div className="text-xs text-gray-400">Distribution</div>
                </div>
              </div>

              {/* Mobile Legend */}
              <div className="grid grid-cols-2 gap-2 w-full text-xs">
                {t.tokenomics.data.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors[index]} flex-shrink-0`} />
                    <span className="text-gray-300 truncate flex-1">{item.label}</span>
                    <span className="text-cyan-400 font-semibold">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};