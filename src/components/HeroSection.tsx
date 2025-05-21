
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Smartphone } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const HeroSection: React.FC = () => {
  // Array of hero images
  const heroImages = [
    "/lovable-uploads/81ad2f8c-e671-45ca-9a0c-58a3afa1c59b.png",
    "/lovable-uploads/7a0c30a5-c809-4bad-8e3b-0f23d4ad2563.png",
    "/lovable-uploads/777d9369-97a5-47a7-a002-61621246df19.png"
  ];

  return <section className="py-16 md:py-24 bg-hero-gradient">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 rtl text-ejabef-darkBlue leading-tight md:text-4xl">
              خلك ذكي.. <br />وخلي الواتساب يبيع عنك!
            </h1>
            <p className="text-xl mb-8 rtl text-gray-700 md:text-2xl">
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
              <div className="absolute -top-6 -right-6 w-full h-full bg-ejabef-green rounded-xl"></div>
              <Carousel 
                className="w-full" 
                opts={{
                  align: "center",
                  loop: true,
                  inViewThreshold: 0.5,
                  skipSnaps: true,
                }}
                autoPlay={true}
              >
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index} className="flex items-center justify-center">
                      <img 
                        alt={`نظام إيجايف الذكي للواتساب ${index + 1}`} 
                        src={image} 
                        className="relative z-10 rounded-2xl shadow-xl card-shadow object-contain" 
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
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
