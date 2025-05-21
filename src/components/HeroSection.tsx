
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Smartphone, Play, Pause } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const {
    t,
    dir
  } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

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
            <div className={`flex gap-4 ${isRTL ? 'rtl' : ''}`}>
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

          {/* Video section - replacing the carousel */}
          <div className="md:w-1/2 relative z-10">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-ejabef-green rounded-xl"></div>

              {/* Video player */}
              <div className="relative z-10 rounded-2xl shadow-xl card-shadow overflow-hidden">
                <video 
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  className="w-full h-[450px] object-cover"
                >
                  <source src="https://player.vimeo.com/external/446766811.sd.mp4?s=f2553e9e2cff0b35378a1cf406449a14828e9634&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-white/80 hover:bg-white text-ejabef-darkBlue rounded-full"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                </div>
              </div>

              {/* Badge */}
              <div className={`absolute -top-3 ${isRTL ? '-left-3' : '-right-3'} bg-ejabef-lightGreen p-3 rounded-lg shadow-lg z-20 transform translate-y-0 ${isRTL ? 'rtl' : ''}`}>
                <p className="text-ejabef-darkBlue font-bold">{t('hero.badge')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
