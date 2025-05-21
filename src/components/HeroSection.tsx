
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Smartphone, GalleryHorizontal } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const {
    t,
    dir
  } = useLanguage();

  // WhatsApp UI images for the image transition
  const whatsappImages = [
    '/lovable-uploads/1b246895-7c6f-46b3-8b0c-e94da6aeb98d.png',
    '/lovable-uploads/e16e4953-90df-48ec-8417-2e4b90f5b6c4.png',
    '/lovable-uploads/7bc3cfe4-eabc-4260-9f1c-433263fbb931.png',
    '/lovable-uploads/55ce91ff-e7a3-40a9-85d5-8f923e803108.png',
    '/lovable-uploads/cdb629c8-5e0d-4849-9bab-8aa4dc1d7c22.png',
    '/lovable-uploads/b9253321-3dd2-4930-b856-1855e51c278b.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Effect to handle the image transition
  useEffect(() => {
    const transitionInterval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out, change image and start fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % whatsappImages.length);
        setIsVisible(true);
      }, 500); // Half second for fade out
      
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(transitionInterval);
  }, []);

  const isRTL = dir() === 'rtl';
  
  return <section className="py-16 md:py-24 bg-hero-gradient overflow-hidden">
      <div className="container mx-auto">
        <div className={`flex flex-col ${isRTL ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-8`}>
          {/* Content section (always on correct side based on language) */}
          <div className={`md:w-1/2 mb-10 md:mb-0 ${isRTL ? 'md:order-1 text-right' : 'md:order-2 text-left'}`}>
            <h1 className={`text-4xl lg:text-5xl font-extrabold mb-4 text-ejabef-darkBlue leading-tight ${isRTL ? 'rtl' : ''}`}>
              {t('hero.title')}
            </h1>
            <p className={`text-xl mb-8 text-gray-700 md:text-2xl ${isRTL ? 'rtl' : ''}`}>
              {t('hero.subtitle')}
            </p>
            <div className={`flex gap-4 ${isRTL ? 'rtl justify-end' : ''}`}>
              <Button className="cta-button animate-pulse-scale flex items-center gap-2" onClick={() => {
              const ctaSection = document.getElementById('cta');
              if (ctaSection) ctaSection.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                <MessageSquare className="h-5 w-5" />
                {t('hero.cta')}
              </Button>
              <Button variant="outline" className="bg-white border-ejabef-green text-ejabef-darkBlue hover:bg-ejabef-lightGreen hover:border-ejabef-darkBlue font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2" onClick={() => {
              const featuresSection = document.getElementById('features');
              if (featuresSection) featuresSection.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                <Smartphone className="h-5 w-5" />
                {t('hero.features')}
              </Button>
            </div>
          </div>

          {/* Image transition section - replacing the carousel */}
          <div className="md:w-1/2 relative z-10">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-ejabef-green rounded-xl"></div>

              {/* Fade transition image container */}
              <div className="relative z-10 rounded-2xl shadow-xl card-shadow overflow-hidden">
                <div className="bg-black rounded-xl overflow-hidden flex items-center justify-center h-[450px]">
                  <img 
                    src={whatsappImages[currentImageIndex]} 
                    alt={`WhatsApp Shopping UI ${currentImageIndex + 1}`}
                    className={`h-full object-contain transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              </div>

              {/* Badge */}
              <div className={`absolute -top-3 ${isRTL ? '-left-3' : '-right-3'} bg-ejabef-lightGreen p-3 rounded-lg shadow-lg z-20 transform translate-y-0 ${isRTL ? 'rtl' : ''}`}>
                <div className="flex items-center gap-2">
                  <GalleryHorizontal className="h-5 w-5 text-ejabef-darkBlue" />
                  <p className="text-ejabef-darkBlue font-bold">{t('hero.badge')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
