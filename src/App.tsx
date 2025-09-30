import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { WhatIsSection } from './components/sections/WhatIsSection';
import { GlobalVisionSection } from './components/sections/GlobalVisionSection';
import { InvestSection } from './components/sections/InvestSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { WhoIsItForSection } from './components/sections/WhoIsItForSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { DynamicNFTsSection } from './components/sections/DynamicNFTsSection';
import { NewsSection } from './components/sections/NewsSection';
import { FooterSection } from './components/sections/FooterSection';
import { HelpCenterPage } from './components/pages/HelpCenterPage';
import { ContactPage } from './components/pages/ContactPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/pages/TermsOfUsePage';
import { WhitepaperPage } from './components/pages/WhitepaperPage';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './data/translations';

function App() {
  const { currentLanguage } = useLanguage();
  const [currentPage, setCurrentPage] = useState<'home' | 'help-center' | 'contact' | 'privacy-policy' | 'terms-of-use' | 'whitepaper'>('home');

  useEffect(() => {
    // Update font based on language
    document.documentElement.style.setProperty(
      '--font-primary', 
      currentLanguage.code === 'ar' ? 'var(--font-arabic)' : 'Inter'
    );
  }, [currentLanguage]);

  useEffect(() => {
    // Update document title and meta tags based on language
    const t = translations[currentLanguage.code as keyof typeof translations] || translations.en;
    
    document.title = currentLanguage.code === 'ar' 
      ? 'AISleep - أعد تعريف مستقبل النوم'
      : 'AISleep - Redefine the Future of Sleep';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = currentLanguage.code === 'ar'
      ? 'حوّل نومك إلى نمو بقوة الذكاء الاصطناعي. AISleep هي أول منصة في العالم تحوّل النوم إلى قيمة حقيقية.'
      : 'Turn your sleep into growth with the power of AI. AISleep is the world\'s first platform that transforms sleep into real value.';
      
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', document.title);
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  }, [currentLanguage]);

  // Handle page navigation
  const handlePageChange = (page: typeof currentPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render different pages
  if (currentPage === 'help-center') {
    return <HelpCenterPage onBack={handleBackToHome} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onBack={handleBackToHome} />;
  }

  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicyPage onBack={handleBackToHome} />;
  }

  if (currentPage === 'terms-of-use') {
    return <TermsOfUsePage onBack={handleBackToHome} />;
  }

  if (currentPage === 'whitepaper') {
    return <WhitepaperPage onBack={handleBackToHome} />;
  }

  // Home page
  return (
    <div
      className="min-h-screen bg-gray-900 text-white overflow-x-hidden"
      style={{ fontFamily: 'var(--font-primary), system-ui, sans-serif' }}
    >
      <Navigation onPageChange={handlePageChange} />
      <main>
        <HeroSection />
        <WhatIsSection />
        <GlobalVisionSection />
        <InvestSection onPageChange={handlePageChange} />
        <HowItWorksSection />
        <WhoIsItForSection />
        <EcosystemSection />
        <DynamicNFTsSection />
        <NewsSection />
      </main>
      <FooterSection onPageChange={handlePageChange} />
    </div>
  );
}

export default App;