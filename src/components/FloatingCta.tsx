
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingCta: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t, dir } = useLanguage();
  const isRTL = dir() === 'rtl';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!visible) return null;
  
  return (
    <div className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 ${isRTL ? 'rtl' : ''}`}>
      <Button 
        className="cta-button shadow-lg flex items-center gap-2"
        onClick={() => {
          const ctaSection = document.getElementById('cta');
          if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {t('header.cta')}
        {isRTL ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
      </Button>
    </div>
  );
};

export default FloatingCta;
