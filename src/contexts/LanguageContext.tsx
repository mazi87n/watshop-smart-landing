
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define our languages and translation type
type Language = 'ar' | 'en';
type TranslationKey = string;

// Define the shape of our translations object
interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

// Define all our translations here
const translations: Translations = {
  // Header translations
  'header.features': {
    ar: 'المميزات',
    en: 'Features',
  },
  'header.offer': {
    ar: 'العرض',
    en: 'Offer',
  },
  'header.faq': {
    ar: 'الأسئلة الشائعة',
    en: 'FAQ',
  },
  'header.cta': {
    ar: 'اطلب الخدمة الآن',
    en: 'Request Service Now',
  },
  
  // Hero translations
  'hero.title': {
    ar: 'خلك ذكي.. وخلي الواتساب يبيع عنك!',
    en: 'Be smart.. Let WhatsApp sell for you!',
  },
  'hero.subtitle': {
    ar: 'حوّل محادثاتك إلى مبيعات تلقائية على مدار الساعة – عبر نظام ذكي يرد ويبيع بدون تدخل منك.',
    en: 'Turn your chats into automated sales 24/7 - through a smart system that responds and sells without your intervention.',
  },
  'hero.cta': {
    ar: 'اطلب الخدمة الآن',
    en: 'Request Service Now',
  },
  'hero.features': {
    ar: 'تعرف على المميزات',
    en: 'Discover Features',
  },
  'hero.badge': {
    ar: 'يعمل 24/7 بدون تدخل منك!',
    en: 'Works 24/7 without your intervention!',
  },

  // Language switcher
  'language': {
    ar: 'English',
    en: 'العربية',
  },
};

// Create context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  dir: () => 'rtl' | 'ltr';
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  // Translation function
  const t = (key: TranslationKey): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  // Direction helper
  const dir = (): 'rtl' | 'ltr' => {
    return language === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
