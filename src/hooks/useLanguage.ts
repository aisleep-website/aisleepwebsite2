import { useState, useEffect } from 'react';
import { Language } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    document.documentElement.dir = currentLanguage.dir;
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  const switchLanguage = (code: string) => {
    const lang = languages.find(l => l.code === code);
    if (lang) {
      setCurrentLanguage(lang);
    }
  };

  return {
    currentLanguage,
    languages,
    switchLanguage,
  };
};