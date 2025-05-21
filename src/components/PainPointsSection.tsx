
import React from 'react';
import { CircleX } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PainPointsSection: React.FC = () => {
  const { t, dir } = useLanguage();
  
  const painPoints = [
    { key: 'painpoints.pain1' },
    { key: 'painpoints.pain2' },
    { key: 'painpoints.pain3' }
  ];

  const isRTL = dir() === 'rtl';

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-ejabef-darkBlue">{t('painpoints.title')}</h2>
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 p-6 rounded-lg shadow-md flex items-center justify-start gap-4 ${isRTL ? 'rtl' : ''}`}
              >
                <CircleX className="text-red-500 h-8 w-8 flex-shrink-0" />
                <p className="text-xl font-bold text-gray-800">{t(point.key)}</p>
              </div>
            ))}
          </div>
          <p className={`mt-8 text-xl text-gray-700 ${isRTL ? 'rtl' : ''}`}>
            {t('painpoints.conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
