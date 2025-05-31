import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
const Footer: React.FC = () => {
  const {
    t,
    dir
  } = useLanguage();
  const isRTL = dir() === 'rtl';
  return <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img alt="إيجايف" className="h-12 mb-4 object-fill" src="/lovable-uploads/b0378437-bc48-4696-8c44-f988dff2ab87.png" />
            <p className={`text-gray-400 max-w-md ${isRTL ? 'rtl' : ''}`}>
              {t('footer.about')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={isRTL ? 'rtl' : ''}>
              <h3 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">{t('header.features')}</a></li>
                <li><a href="#offer" className="text-gray-400 hover:text-white transition">{t('header.offer')}</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition">{t('header.faq')}</a></li>
                <li><a href="#cta" className="text-gray-400 hover:text-white transition">{t('header.cta')}</a></li>
              </ul>
            </div>
            
            <div className={isRTL ? 'rtl' : ''}>
              <h3 className="text-lg font-bold mb-4">{t('footer.contactUs')}</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">{t('footer.email')}</li>
                <li className="text-gray-400">{t('footer.phone')}</li>
                <li className="text-gray-400">{t('footer.whatsapp')}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={`border-t border-gray-800 mt-10 pt-6 text-center ${isRTL ? 'rtl' : ''}`}>
          <p className="text-gray-500">
            {t('footer.copyright')} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;