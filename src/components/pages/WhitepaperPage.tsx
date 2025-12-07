import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Link2, ChevronRight, Users, Target, TrendingUp, Coins, Award, Shield, HelpCircle, Building, Menu } from 'lucide-react';

interface WhitepaperPageProps {
  onBack: () => void;
}

export const WhitepaperPage: React.FC<WhitepaperPageProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'overview', title: 'Project Overview', icon: FileText },
    { id: 'vision', title: 'Vision & Mission', icon: Target },
    { id: 'roadmap', title: 'Roadmap', icon: TrendingUp },
    { id: 'tokenomics', title: 'Tokenomics', icon: Coins },
    { id: 'rewards', title: 'Rewards & NFTs', icon: Award },
    { id: 'team', title: 'Team', icon: Users },
    { id: 'dao', title: 'DAO Role', icon: Building },
    { id: 'faqs', title: 'FAQs', icon: HelpCircle },
  ];

  const tokenomicsData = [
    {
      category: 'Circulating Supply',
      percentage: '12%',
      lockPeriod: '–',
      vestingPlan: 'Open trading Day 1',
      duration: '–',
      notes: 'Immediate liquidity'
    },
    {
      category: 'Growth Fund',
      percentage: '10%',
      lockPeriod: '6 months',
      vestingPlan: '10% per quarter',
      duration: '2 years',
      notes: 'Ecosystem growth'
    },
    {
      category: 'Strategic Investors',
      percentage: '18%',
      lockPeriod: '2 years',
      vestingPlan: '12.5% per quarter (8 quarters)',
      duration: '4 years',
      notes: 'Long-term alignment'
    },
    {
      category: 'Marketing & Partnerships',
      percentage: '13%',
      lockPeriod: '3 months',
      vestingPlan: '10% per quarter',
      duration: '2.5 years',
      notes: 'Sustained campaigns'
    },
    {
      category: 'Team & Advisors',
      percentage: '10%',
      lockPeriod: '2 years',
      vestingPlan: '10% monthly after lock',
      duration: '34 months',
      notes: 'Commitment'
    },
    {
      category: 'Airdrop & Community',
      percentage: '7%',
      lockPeriod: '3 months',
      vestingPlan: 'Y1: 2%, Y2: 2.5%, Y3: 2.5%',
      duration: '3 years',
      notes: 'Gradual incentives'
    },
    {
      category: 'Staking Rewards',
      percentage: '7%',
      lockPeriod: '3 months',
      vestingPlan: 'Y1: 20%, Y2: 30%, Y3: 50%',
      duration: '3 years',
      notes: 'Encourage staking'
    },
    {
      category: 'Ecosystem Expansion',
      percentage: '11%',
      lockPeriod: '9 months',
      vestingPlan: '10% per quarter',
      duration: '2.5 years',
      notes: 'Growth & integrations'
    },
    {
      category: 'General Reserve',
      percentage: '12%',
      lockPeriod: '12 months',
      vestingPlan: '10% per quarter',
      duration: '3 years',
      notes: 'DAO-managed stability'
    },
  ];

  const roadmapData = [
    {
      period: 'Q1 2026 — Core Ecosystem Launch',
      milestones: 'Launch of the official AISleep App (iOS & Android). Activation of AISleep\'s foundational experience and core progression system. Launch of the AIS token on decentralized platforms. First centralized exchange listing to ensure accessibility and liquidity. Initial release of our reward and progression framework inside the app.'
    },
    {
      period: 'Q2 2026 — Expansion & User Growth',
      milestones: 'Major update introducing advanced engagement features and deeper user progression. Release of AISleep\'s first digital asset layer to support long-term ecosystem value. Expansion of our reward engine with refined mechanics. Additional exchange listings to widen token reach. Rollout of the first wave of global community initiatives.'
    },
    {
      period: 'Q3 2026 — Integrations & Enhanced Intelligence',
      milestones: 'Integration of broader wellness data channels to enrich user experience. Significant upgrade to AISleep\'s AI-based guidance system. Early partnerships within wellness and digital health ecosystems. Automated reward optimization and behavioral insights features.'
    },
    {
      period: 'Q4 2026 — Global Positioning Phase',
      milestones: 'Localization and multi-language support for international markets. Strategic partnerships with global wellness and lifestyle platforms. Enhanced AI coaching and personalized improvement pathways. Additional token utility features introduced into the ecosystem.'
    },
    {
      period: '2027 — Institutional & Large-Scale Development',
      milestones: 'Collaboration with regional wellness organizations and digital innovation hubs. Development of enterprise-level wellness infrastructure tools. Expansion of AI-driven analytics to support broader professional and lifestyle applications. Strengthening of the AISleep brand across targeted global regions.'
    },
    {
      period: '2028 — Global Ecosystem Maturity',
      milestones: 'Full-scale international expansion across multiple continents. Deployment of multi-market engagement models. Advanced multilingual support and global user onboarding tools. Consolidation of AISleep as a leader in behavioral wellness innovation.'
    },
    {
      period: '2029 — Ecosystem Deepening & Partnerships',
      milestones: 'Integration with large wellness networks and institutional partners. Deployment of secure analytics channels for organizational use. Broadened utility for AIS token across various digital ecosystems.'
    },
    {
      period: '2030 — AISleep Becomes a Global Wellness Infrastructure',
      milestones: 'Transition into a decentralized, community-driven governance model (DAO). Establishment of a sustainable multi-revenue ecosystem. AISleep recognized as a global behavioral wellness standard with long-term market impact.'
    },
  ];

  const teamMembers = [
    {
      name: 'Muaadh Guhaish',
      role: 'Founder & CEO',
      description: '9+ years in crypto & blockchain.'
    },
    {
      name: 'Abdulrahman Bokir',
      role: 'Blockchain Developer',
      description: 'Smart contracts (BSC), CEX/DEX integrations.'
    },
    {
      name: 'Yaman Blake',
      role: 'Head of Communication & Partnerships',
      description: 'Global alliances & community growth.'
    },
  ];

  const faqs = [
    {
      question: 'What inspired AISleep?',
      answer: '1.7B people face sleep issues; ~$600B annual global productivity losses.'
    },
    {
      question: 'How to earn rewards?',
      answer: 'Complete daily Sleep Tests and improve sleep; Lunara rewards based on progress.'
    },
    {
      question: 'When does distribution start?',
      answer: 'Q4 2025.'
    },
    {
      question: 'What is the token upside potential?',
      answer: 'Aim for sustainable growth with multi-dollar value potential in year one, driven by utility and market demand.'
    },
    {
      question: 'How is the project sustainable?',
      answer: 'Transaction fees, staking, paid wellness marketplace, strategic partnerships.'
    },
    {
      question: 'Is it safe?',
      answer: 'Smart contract audited; data secured with modern encryption.'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const copyLink = (sectionId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard.writeText(url);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

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
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white hover:bg-gray-700/60 hover:border-cyan-400/30 transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <ArrowLeft size={20} />
              </motion.button>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  AISleep Whitepaper
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">Comprehensive project documentation</p>
              </div>
            </div>

            {/* Mobile Contents Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-800/60 border border-gray-700/50 rounded-lg text-sm text-white hover:bg-gray-700/60 transition-all duration-300 flex items-center gap-2"
              >
                <Menu size={16} />
                Contents
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="hidden lg:block w-64 xl:w-80 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="p-4 xl:p-6">
            <h3 className="text-lg font-bold text-white mb-4">Contents</h3>
            <nav className="space-y-2">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    whileHover={{ x: 5 }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    } min-h-[48px]`}
                  >
                    <Icon size={18} />
                    <span className="font-medium text-sm xl:text-base">{section.title}</span>
                    {activeSection === section.id && (
                      <ChevronRight size={16} className="ml-auto" />
                    )}
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Mobile Navigation */}
          <div className="lg:hidden mb-6">
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 mb-6"
              >
                <div className="space-y-2">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <motion.button
                        key={section.id}
                        onClick={() => {
                          scrollToSection(section.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 min-h-[44px] ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-[#00CFFF]/20 to-[#A259FF]/20 border border-[#00CFFF]/30 text-[#00CFFF]'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        <Icon size={16} />
                        <span className="font-medium text-sm">{section.title}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8 sm:space-y-12 lg:space-y-16"
          >
            {/* Project Overview */}
            <motion.section variants={itemVariants} id="overview" className="scroll-mt-24">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 group">
                <FileText className="text-cyan-400" size={24} />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Project Overview</h2>
                <motion.button
                  onClick={() => copyLink('overview')}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-cyan-400 transition-all duration-300 min-w-[32px] min-h-[32px] flex items-center justify-center"
                  title="Copy link"
                >
                  <Link2 size={16} />
                </motion.button>
                {copiedSection === 'overview' && (
                  <span className="text-xs text-green-400">Copied!</span>
                )}
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">What is AISleep?</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                    AISleep is the world's first project that combines Artificial Intelligence + Web3 to transform sleep into a digital, rewardable asset. Every night of rest is converted into intelligent analysis, financial rewards, and a dynamic NFT that evolves with your journey toward healthier sleep.
                  </p>

                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">What makes AISleep unique globally?</h4>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>The first project to introduce this idea in its current form.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Sleep economy projected to exceed $90B by 2030.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>A fair and transparent reward system.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Dynamic NFTs that evolve with your sleep (first release in Q1 2026).</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 lg:p-8">
                  <h4 className="text-base sm:text-lg font-semibold text-purple-400 mb-3 sm:mb-4">Lunara — your AI sleep companion:</h4>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Provides daily analysis and personalized recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Tracks results with every Sleep Test</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Evolves her NFT image alongside your progress</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Learns and grows with you (stories, reminders, supportive guidance)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Vision & Mission */}
            <motion.section variants={itemVariants} id="vision" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8 group">
                <Target className="text-cyan-400" size={28} />
                <h2 className="text-3xl font-bold text-white">Vision & Mission</h2>
                <motion.button
                  onClick={() => copyLink('vision')}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  title="Copy link"
                >
                  <Link2 size={16} />
                </motion.button>
                {copiedSection === 'vision' && (
                  <span className="text-xs text-green-400">Copied!</span>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Transform sleep into a global digital asset, where every hour of rest is an investment in both health and the economy.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Build a transparent, AI-powered system that analyzes sleep patterns, provides personalized guidance, and rewards users with tokens and NFTs.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Roadmap */}
            <motion.section variants={itemVariants} id="roadmap" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8 group">
                <TrendingUp className="text-cyan-400" size={28} />
                <h2 className="text-3xl font-bold text-white">Roadmap</h2>
                <motion.button
                  onClick={() => copyLink('roadmap')}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  title="Copy link"
                >
                  <Link2 size={16} />
                </motion.button>
                {copiedSection === 'roadmap' && (
                  <span className="text-xs text-green-400">Copied!</span>
                )}
              </div>

              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700 bg-gray-800/80">
                        <th className="py-4 px-6 text-left text-cyan-400 font-semibold">Period</th>
                        <th className="py-4 px-6 text-left text-cyan-400 font-semibold">Key Milestones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roadmapData.map((item, index) => (
                        <tr key={index} className={`border-b border-gray-700/50 ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/40'} hover:bg-gray-700/30 transition-colors`}>
                          <td className="py-4 px-6 text-purple-400 font-semibold whitespace-nowrap">{item.period}</td>
                          <td className="py-4 px-6 text-gray-300 leading-relaxed">{item.milestones}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            {/* Tokenomics */}
            <motion.section variants={itemVariants} id="tokenomics" className="scroll-mt-24">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 group">
                <Coins className="text-cyan-400" size={24} />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Tokenomics</h2>
                <motion.button
                  onClick={() => copyLink('tokenomics')}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-cyan-400 transition-all duration-300 min-w-[32px] min-h-[32px] flex items-center justify-center"
                  title="Copy link"
                >
                  <Link2 size={16} />
                </motion.button>
                {copiedSection === 'tokenomics' && (
                  <span className="text-xs text-green-400">Copied!</span>
                )}
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-2">Total Supply</h3>
                    <p className="text-xl sm:text-2xl font-bold text-white">1,000,000,000</p>
                    <p className="text-gray-400 text-xs sm:text-sm">AISleep Tokens</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-green-400 mb-2">Initial Circulating</h3>
                    <p className="text-xl sm:text-2xl font-bold text-white">12%</p>
                    <p className="text-gray-400 text-xs sm:text-sm">at launch</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 sm:p-6 text-center sm:col-span-1 col-span-1">
                    <h3 className="text-base sm:text-lg font-bold text-red-400 mb-2">Locked & Reserved</h3>
                    <p className="text-xl sm:text-2xl font-bold text-white">88%</p>
                    <p className="text-gray-400 text-xs sm:text-sm">stability & vesting</p>
                  </div>
                </div>

                {/* Mobile: Stack cards, Desktop: Table */}
                <div className="lg:hidden space-y-4">
                  {tokenomicsData.map((item, index) => (
                    <div key={index} className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-semibold text-white">{item.category}</h4>
                        <span className="text-lg font-bold text-purple-400">{item.percentage}</span>
                      </div>
                      <div className="space-y-1 text-xs text-gray-300">
                        <p><span className="text-gray-400">Lock:</span> {item.lockPeriod}</p>
                        <p><span className="text-gray-400">Vesting:</span> {item.vestingPlan}</p>
                        <p><span className="text-gray-400">Duration:</span> {item.duration}</p>
                        <p><span className="text-gray-400">Notes:</span> {item.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden lg:block bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden">
                  <div className="responsive-table overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700 bg-gray-800/80">
                          <th className="py-3 px-3 text-left text-cyan-400 font-semibold text-sm">Category</th>
                          <th className="py-3 px-3 text-left text-cyan-400 font-semibold text-sm">%</th>
                          <th className="py-3 px-3 text-left text-cyan-400 font-semibold text-sm">Lock Period</th>
                          <th className="py-3 px-3 text-left text-cyan-400 font-semibold text-sm">Vesting Plan</th>
                          <th className="py-3 px-3 text-left text-cyan-400 font-semibold text-sm">Duration</th>
                          <th className="py-3 px-3 text-left text-cyan-400 font-semibold text-sm">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tokenomicsData.map((item, index) => (
                          <tr key={index} className={`border-b border-gray-700/50 ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/40'} hover:bg-gray-700/30 transition-colors`}>
                            <td className="py-3 px-3 text-white font-medium text-sm">{item.category}</td>
                            <td className="py-3 px-3 text-purple-400 font-semibold text-sm">{item.percentage}</td>
                            <td className="py-3 px-3 text-gray-300 text-sm">{item.lockPeriod}</td>
                            <td className="py-3 px-3 text-gray-300 text-sm">{item.vestingPlan}</td>
                            <td className="py-3 px-3 text-gray-300 text-sm">{item.duration}</td>
                            <td className="py-3 px-3 text-gray-400 text-xs">{item.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-yellow-400 mb-3">Why lock 88%?</h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Protect investors from inflation; enable sustainable, gradual growth; build trust via transparent unlocking.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Rewards & NFTs */}
            <motion.section variants={itemVariants} id="rewards" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8 group">
                <Award className="text-cyan-400" size={28} />
                <h2 className="text-3xl font-bold text-white">Rewards & NFTs</h2>
                <motion.button
                  onClick={() => copyLink('rewards')}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  title="Copy link"
                >
                  <Link2 size={16} />
                </motion.button>
                {copiedSection === 'rewards' && (
                  <span className="text-xs text-green-400">Copied!</span>
                )}
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-cyan-400 mb-4">Daily Sleep Test</h3>
                    <p className="text-gray-300 leading-relaxed">
                      User receives a Sleep Score; Lunara gives personalized tips and determines XP/tokens.
                    </p>
                  </div>
                  <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-400 mb-4">Rewards Outline</h3>
                    <p className="text-gray-300 leading-relaxed">
                      XP + Tokens earned daily based on sleep quality and consistency; XP levels up the NFT; weekly consistency bonuses; long-term achievements unlock rare traits.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-4">Dynamic NFT Levels</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Seed → Bloom → Advanced → Elite (Elite unlocks additional perks and DAO privileges).
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Seed', 'Bloom', 'Advanced', 'Elite'].map((level, index) => (
                      <div key={level} className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-purple-400">{level}</div>
                        <div className="text-xs text-gray-400">Level {index + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-4">NFT Availability</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Dynamic NFTs go live in Q1 2026.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Future:</strong> Device-linked NFTs and external partnerships.
                  </p>
                </div>

                <div className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4">
                  <p className="text-yellow-400 text-sm">
                    <strong>Note:</strong> Detailed formulas and tables will be published with the app launch.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Competitive Advantage */}
            <motion.section variants={itemVariants} className="scroll-mt-24">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Competitive Advantage</h3>
                <p className="text-gray-300 leading-relaxed">
                  Traditional apps only track data. AISleep provides AI-powered analysis, personalized coaching (Lunara), financial rewards, dynamic NFTs, staking, and DAO governance.
                </p>
              </div>
            </motion.section>

            {/* Team */}
            <motion.section variants={itemVariants} id="team" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8 group">
                <Users className="text-cyan-400" size={28} />
                <h2 className="text-3xl font-bold text-white">Team</h2>
                <motion.button
                  onClick={() => copyLink('team')}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  title="Copy link"
                >
                  <Link2 size={16} />
                </motion.button>
                {copiedSection === 'team' && (
                  <span className="text-xs text-green-400">Copied!</span>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* DAO Role */}
            <motion.section variants={itemVariants} id="dao" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8 group">
                <Building className="text-cyan-400" size={28} />
                <h2 className="text-3xl font-bold text-white">DAO Role</h2>
                <motion.button
                  onClick={() => copyLink('dao')}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  title="Copy link"
                >
                  <Link2 size={16} />
                </motion.button>
                {copiedSection === 'dao' && (
                  <span className="text-xs text-green-400">Copied!</span>
                )}
              </div>

              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <p className="text-gray-300 leading-relaxed">
                  Treasury management; community governance; transparent allocation of reserves.
                </p>
              </div>
            </motion.section>

            {/* FAQs */}
            <motion.section variants={itemVariants} id="faqs" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8 group">
                <HelpCircle className="text-cyan-400" size={28} />
                <h2 className="text-3xl font-bold text-white">FAQs</h2>
                <motion.button
                  onClick={() => copyLink('faqs')}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  title="Copy link"
                >
                  <Link2 size={16} />
                </motion.button>
                {copiedSection === 'faqs' && (
                  <span className="text-xs text-green-400">Copied!</span>
                )}
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Economic Notes */}
            <motion.section variants={itemVariants} className="scroll-mt-24">
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-green-400 mb-4">Market Opportunity</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The sleep economy is projected to exceed <strong className="text-green-400">$90B by 2030</strong>, driven by global wellness and sleep market growth.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By 2030, AISleep aims to be positioned within a <strong className="text-green-400">$100B+ wellness economy</strong> with sustainable revenues from partnerships and premium services.
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};