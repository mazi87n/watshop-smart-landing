
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Smartphone } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t, dir } = useLanguage();
  
  // Expanded array of hero images
  const heroImages = [
    "/lovable-uploads/81ad2f8c-e671-45ca-9a0c-58a3afa1c59b.png",
    "/lovable-uploads/7a0c30a5-c809-4bad-8e3b-0f23d4ad2563.png",
    "/lovable-uploads/777d9369-97a5-47a7-a002-61621246df19.png",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=600"
  ];

  const isRTL = dir() === 'rtl';

  return (
    <section className="py-16 md:py-24 bg-hero-gradient overflow-hidden">
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
            <div className={`flex gap-4 ${isRTL ? 'rtl' : ''}`}>
              <Button 
                className="cta-button animate-pulse-scale flex items-center gap-2"
                onClick={() => {
                  const ctaSection = document.getElementById('cta');
                  if (ctaSection) ctaSection.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                <MessageSquare className="h-5 w-5" />
                {t('hero.cta')}
              </Button>
              <Button 
                variant="outline" 
                className="bg-white border-ejabef-green text-ejabef-darkBlue hover:bg-ejabef-lightGreen hover:border-ejabef-darkBlue font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) featuresSection.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                <Smartphone className="h-5 w-5" />
                {t('hero.features')}
              </Button>
            </div>
          </div>

          {/* Image carousel section - with proper z-index and positioning */}
          <div className="md:w-1/2 relative z-10">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-ejabef-green rounded-xl"></div>

              {/* Enhanced carousel with more images and better configuration */}
              <Carousel 
                className="w-full max-w-xl mx-auto" 
                opts={{
                  align: "center",
                  loop: true,
                  inViewThreshold: 0.6,
                  skipSnaps: true,
                }}
                autoPlay={true}
                autoPlayInterval={4000}
              >
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index} className="flex items-center justify-center">
                      <img 
                        alt={`نظام إيجايف الذكي للواتساب ${index + 1}`} 
                        src={image} 
                        className="relative z-10 rounded-2xl shadow-xl card-shadow object-cover h-[450px] w-full" 
                        loading={index > 1 ? "lazy" : "eager"}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="relative z-20" />
                <CarouselNext className="relative z-20" />
              </Carousel>

              {/* Badge */}
              <div className={`absolute -top-3 ${isRTL ? '-left-3' : '-right-3'} bg-ejabef-lightGreen p-3 rounded-lg shadow-lg z-20 transform translate-y-0 ${isRTL ? 'rtl' : ''}`}>
                <p className="text-ejabef-darkBlue font-bold">{t('hero.badge')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
