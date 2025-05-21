
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

const OfferSection: React.FC = () => {
  // Set countdown for 3 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
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
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto rtl">
          <h2 className="section-title text-ejabef-darkBlue">
            🎁 عرض خاص لأول 20 مشروع فقط
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <div className="feature-item">
                <span className="text-ejabef-green text-2xl">✓</span>
                <p className="text-lg">تهيئة النظام بالكامل مجانًا</p>
              </div>
              <div className="feature-item">
                <span className="text-ejabef-green text-2xl">✓</span>
                <p className="text-lg">إضافة كل منتجاتك داخل الكتالوج بدون تكلفة</p>
              </div>
              <div className="feature-item">
                <span className="text-ejabef-green text-2xl">✓</span>
                <p className="text-lg">خصم 25% على الاشتراك</p>
              </div>
              <div className="feature-item">
                <span className="text-ejabef-green text-2xl">✓</span>
                <p className="text-lg">السعر يثبت لك مدى الحياة</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl">
              <p className="text-xl font-bold text-ejabef-darkBlue mb-2">💸 ادفع فقط</p>
              <div className="text-4xl md:text-5xl font-extrabold text-ejabef-green">
                24 ر.ع
              </div>
              <p className="text-lg text-gray-700 mt-2">وخلّي الواتساب يشتغل عنك 24/7</p>
              
              <Button 
                className="cta-button mt-6 w-full justify-center animate-pulse-scale"
                onClick={() => {
                  const ctaSection = document.getElementById('cta');
                  if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                اطلب الخدمة الآن
              </Button>
            </div>
          </div>
          
          <div className="mt-10 border-t border-gray-200 pt-6">
            <p className="text-center text-xl font-bold text-red-500 mb-4">
              🚨 لا تفوّت الفرصة – العرض حصري لأول 20 مشروع فقط!
            </p>
            
            <div className="countdown bg-gray-100 p-4 rounded-lg flex items-center justify-center max-w-md mx-auto">
              <p className="text-lg font-bold ml-3 flex items-center">
                <Clock className="mr-2" /> العرض ينتهي خلال:
              </p>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-ejabef-darkBlue text-white rounded p-2">
                  <div className="text-xl font-bold">{formatTime(timeLeft.days)}</div>
                  <div className="text-xs">يوم</div>
                </div>
                <div className="bg-ejabef-darkBlue text-white rounded p-2">
                  <div className="text-xl font-bold">{formatTime(timeLeft.hours)}</div>
                  <div className="text-xs">ساعة</div>
                </div>
                <div className="bg-ejabef-darkBlue text-white rounded p-2">
                  <div className="text-xl font-bold">{formatTime(timeLeft.minutes)}</div>
                  <div className="text-xs">دقيقة</div>
                </div>
                <div className="bg-ejabef-darkBlue text-white rounded p-2">
                  <div className="text-xl font-bold">{formatTime(timeLeft.seconds)}</div>
                  <div className="text-xs">ثانية</div>
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
