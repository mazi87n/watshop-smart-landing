
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src="/logo.png" alt="إيجايف" className="h-12" />
        </div>
        <nav className="hidden md:flex items-center space-x-4 rtl">
          <a href="#features" className="text-gray-700 hover:text-ejabef-darkBlue transition">المميزات</a>
          <a href="#offer" className="text-gray-700 hover:text-ejabef-darkBlue transition">العرض</a>
          <a href="#faq" className="text-gray-700 hover:text-ejabef-darkBlue transition">الأسئلة الشائعة</a>
        </nav>
        <Button 
          className="cta-button"
          onClick={() => {
            const ctaSection = document.getElementById('cta');
            if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          اطلب الخدمة الآن
        </Button>
      </div>
    </header>
  );
};

export default Header;
