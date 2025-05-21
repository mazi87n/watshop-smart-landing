import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Smartphone } from 'lucide-react';
const HeroSection: React.FC = () => {
  return <section className="py-16 md:py-24 bg-hero-gradient">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 rtl text-ejabef-darkBlue leading-tight">
              خلك ذكي.. <br />وخلي الواتساب يبيع عنك!
            </h1>
            <p className="text-xl md:text-2xl mb-8 rtl text-gray-700">
              حوّل محادثاتك إلى مبيعات تلقائية على مدار الساعة – عبر نظام ذكي يرد ويبيع بدون تدخل منك.
            </p>
            <div className="flex rtl gap-4">
              <Button className="cta-button animate-pulse-scale flex items-center gap-2" onClick={() => {
              const ctaSection = document.getElementById('cta');
              if (ctaSection) ctaSection.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                <MessageSquare className="h-5 w-5" />
                اطلب الخدمة الآن
              </Button>
              <Button variant="outline" className="bg-white border-ejabef-green text-ejabef-darkBlue hover:bg-ejabef-lightGreen hover:border-ejabef-darkBlue font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2" onClick={() => {
              const featuresSection = document.getElementById('features');
              if (featuresSection) featuresSection.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                <Smartphone className="h-5 w-5" />
                تعرف على المميزات
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-ejabef-green rounded-2xl"></div>
              <img alt="نظام إيجايف الذكي للواتساب" className="relative z-10 rounded-2xl shadow-xl card-shadow" src="/lovable-uploads/81ad2f8c-e671-45ca-9a0c-58a3afa1c59b.png" />
              <div className="absolute -top-3 -left-3 bg-ejabef-lightGreen p-3 rounded-lg shadow-lg z-20 rtl">
                <p className="text-ejabef-darkBlue font-bold">يعمل 24/7 بدون تدخل منك!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;