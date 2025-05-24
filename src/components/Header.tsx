
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { t, language, setLanguage, dir } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const isRTL = dir() === 'rtl';

  return (
    <header className="py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and title - position based on language direction */}
        <div className={`flex items-center gap-3 ${isRTL ? 'order-1' : 'order-1'}`}>
          <img 
            alt={isRTL ? "إيجايف" : "EGAiEF"} 
            className="h-12" 
            src="/lovable-uploads/53326a96-a9a2-4e07-a12b-9e01542ad092.png" 
          />
          <h1 className="text-2xl font-bold text-ejabef-darkBlue hidden md:block">
            {isRTL ? "إيجايف - واتس مارت" : "EGAiEF - Whats Mart"}
          </h1>
        </div>
        
        {/* Navigation - center */}
        <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-4 space-x-reverse order-2' : 'space-x-4 order-2'}`}>
          <a href="#features" className="text-gray-700 hover:text-ejabef-darkBlue transition">
            {t('header.features')}
          </a>
          <a href="#offer" className="text-gray-700 hover:text-ejabef-darkBlue transition">
            {t('header.offer')}
          </a>
          <a href="#faq" className="text-gray-700 hover:text-ejabef-darkBlue transition">
            {t('header.faq')}
          </a>
        </nav>
        
        {/* Action buttons - position based on language direction */}
        <div className={`flex items-center gap-2 ${isRTL ? 'order-3' : 'order-3'}`}>
          <Button 
            variant="outline"
            className="language-switch flex items-center gap-1"
            onClick={toggleLanguage}
          >
            <Globe className="h-4 w-4" />
            {t('language')}
          </Button>
          
          <Button 
            className="cta-button" 
            onClick={() => {
              const ctaSection = document.getElementById('cta');
              if (ctaSection) ctaSection.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            {t('header.cta')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
