
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OfferSection: React.FC = () => {
  const { t, dir } = useLanguage();
  const isRTL = dir() === 'rtl';
  
  // Set countdown for 24 hours from now
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(interval);
          return prev;
        }
        
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }
        
        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <section id="offer" className="py-16 bg-ejabef-lightGreen">
      <div className="container mx-auto">
        <div className={`bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto ${isRTL ? 'rtl' : ''}`}>
          <h2 className="section-title text-ejabef-darkBlue">
            {t('offer.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <div className="feature-item">
                <span className="text-ejabef-green text-2xl">✓</span>
                <p className="text-lg">{t('offer.feature1')}</p>
              </div>
              <div className="feature-item">
                <span className="text-ejabef-green text-2xl">✓</span>
                <p className="text-lg">{t('offer.feature2')}</p>
              </div>
              <div className="feature-item">
                <span className="text-ejabef-green text-2xl">✓</span>
                <p className="text-lg">{t('offer.feature3')}</p>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">{t('offer.addOnsTitle')}</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• {t('offer.addOnAI')} - 10 {t('currency')}</li>
                  <li>• {t('offer.addOnAnalysis')} - 7 {t('currency')}</li>
                  <li>• {t('offer.addOnWebsite')} - 10 {t('currency')}</li>
                  <li>• {t('offer.addOnMobile')} - 25 {t('currency')}</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl">
              <p className="text-xl font-bold text-ejabef-darkBlue mb-2">{t('offer.payOnly')}</p>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl text-gray-500 line-through">
                  {t('offer.originalPrice')}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-ejabef-green">
                  {t('offer.price')}
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mt-2">{t('offer.description')}</p>
              <p className="text-sm text-gray-600 mt-1 text-center">{t('offer.monthlyCharge')}</p>
              
              <Button 
                className="cta-button mt-6 w-full justify-center animate-pulse-scale"
                onClick={() => {
                  const ctaSection = document.getElementById('cta');
                  if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('offer.cta')}
              </Button>
            </div>
          </div>
          
          <div className="mt-10 border-t border-gray-200 pt-6">
            <p className="text-center text-xl font-bold text-red-500 mb-4">
              {t('offer.warning')}
            </p>
            
            <div className={`countdown bg-gray-100 p-4 rounded-lg flex items-center justify-center max-w-md mx-auto ${isRTL ? 'flex-row-reverse' : ''}`}>
              <p className={`text-lg font-bold ${isRTL ? 'mr-3' : 'ml-3'} flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Clock className={isRTL ? 'ml-2' : 'mr-2'} /> {t('offer.countdown')}
              </p>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-ejabef-darkBlue text-white rounded p-2">
                  <div className="text-xl font-bold">{formatTime(timeLeft.days)}</div>
                  <div className="text-xs">{t('offer.days')}</div>
                </div>
                <div className="bg-ejabef-darkBlue text-white rounded p-2">
                  <div className="text-xl font-bold">{formatTime(timeLeft.hours)}</div>
                  <div className="text-xs">{t('offer.hours')}</div>
                </div>
                <div className="bg-ejabef-darkBlue text-white rounded p-2">
                  <div className="text-xl font-bold">{formatTime(timeLeft.minutes)}</div>
                  <div className="text-xs">{t('offer.minutes')}</div>
                </div>
                <div className="bg-ejabef-darkBlue text-white rounded p-2">
                  <div className="text-xl font-bold">{formatTime(timeLeft.seconds)}</div>
                  <div className="text-xs">{t('offer.seconds')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
