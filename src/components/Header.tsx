import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
const Header: React.FC = () => {
  return <header className="py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img alt="إيجايف" className="h-12" src="/lovable-uploads/53326a96-a9a2-4e07-a12b-9e01542ad092.png" />
          <h1 className="text-2xl font-bold text-ejabef-darkBlue hidden md:block">إيجايف - واتس مارت</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-4 rtl">
          <a href="#features" className="text-gray-700 hover:text-ejabef-darkBlue transition">المميزات</a>
          <a href="#offer" className="text-gray-700 hover:text-ejabef-darkBlue transition">العرض</a>
          <a href="#faq" className="text-gray-700 hover:text-ejabef-darkBlue transition">الأسئلة الشائعة</a>
        </nav>
        <Button className="cta-button" onClick={() => {
        const ctaSection = document.getElementById('cta');
        if (ctaSection) ctaSection.scrollIntoView({
          behavior: 'smooth'
        });
      }}>
          اطلب الخدمة الآن
        </Button>
      </div>
    </header>;
};
export default Header;