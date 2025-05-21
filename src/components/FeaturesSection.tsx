
import React from 'react';
import { MessageSquare, Smartphone, ListCheck, CalendarDays, CircleDollarSign, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t, dir } = useLanguage();
  
  const isRTL = dir() === 'rtl';
  
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-ejabef-green" />,
      title: 'features.feature1.title',
      description: 'features.feature1.description'
    },
    {
      icon: <FileText className="h-6 w-6 text-ejabef-green" />,
      title: 'features.feature2.title',
      description: 'features.feature2.description'
    },
    {
      icon: <CircleDollarSign className="h-6 w-6 text-ejabef-green" />,
      title: 'features.feature3.title',
      description: 'features.feature3.description'
    },
    {
      icon: <ListCheck className="h-6 w-6 text-ejabef-green" />,
      title: 'features.feature4.title',
      description: 'features.feature4.description'
    },
    {
      icon: <Smartphone className="h-6 w-6 text-ejabef-green" />,
      title: 'features.feature5.title',
      description: 'features.feature5.description'
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-ejabef-green" />,
      title: 'features.feature6.title',
      description: 'features.feature6.description'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-ejabef-darkBlue">{t('features.title')}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-shadow ${isRTL ? 'rtl' : ''}`}
            >
              <div className="flex items-start mb-4">
                <div className="bg-ejabef-lightGreen p-3 rounded-full">
                  {feature.icon}
                </div>
                <h3 className={`${isRTL ? 'mr-4' : 'ml-4'} text-xl font-bold text-ejabef-darkBlue`}>{t(feature.title)}</h3>
              </div>
              <p className="text-gray-600">{t(feature.description)}</p>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 bg-feature-gradient p-8 rounded-2xl text-center ${isRTL ? 'rtl' : ''}`}>
          <h3 className="text-2xl font-bold text-ejabef-darkBlue mb-4">{t('features.conclusion')}</h3>
          <p className="text-lg text-gray-800">
            {t('features.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
