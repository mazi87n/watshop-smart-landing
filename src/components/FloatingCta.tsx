
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FloatingCta: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
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
    <div className="fixed bottom-6 left-6 z-50 rtl">
      <Button 
        className="cta-button shadow-lg flex items-center gap-2"
        onClick={() => {
          const ctaSection = document.getElementById('cta');
          if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        اطلب الخدمة الآن
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default FloatingCta;
