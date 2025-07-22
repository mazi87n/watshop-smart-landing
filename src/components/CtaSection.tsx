
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CtaSection: React.FC = () => {
  const { toast } = useToast();
  const { t, dir } = useLanguage();
  const isRTL = dir() === 'rtl';
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: ''
  });

  const [addOns, setAddOns] = useState({
    aiTools: false,
    deepAnalysis: false,
    storeWebsite: false,
    mobileApp: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddOnChange = (addOnKey: keyof typeof addOns, checked: boolean) => {
    setAddOns(prev => ({ ...prev, [addOnKey]: checked }));
  };

  const calculateTotal = () => {
    let total = 10; // Base price
    if (addOns.aiTools) total += 10;
    if (addOns.deepAnalysis) total += 7;
    if (addOns.storeWebsite) total += 10;
    if (addOns.mobileApp) total += 25;
    return total;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      const serviceId = 'service_07byq22';
      const templateId = 'template_x60fmuj';
      const publicKey = 'LgQoDUUxFjVl-C_38';
      
      // Prepare template parameters
      const templateParams = {
        to_email: 'talal@egaief.com',
        from_name: formData.name,
        phone: formData.phone,
        business_name: formData.businessName,
        message: `New contact form submission:
        
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Business: ${formData.businessName}

Selected Add-ons:
${addOns.aiTools ? '- AI Tools (+10 OMR)' : ''}
${addOns.deepAnalysis ? '- Deep Analysis (+7 OMR)' : ''}
${addOns.storeWebsite ? '- Store Website (+10 OMR)' : ''}
${addOns.mobileApp ? '- Mobile App (+25 OMR)' : ''}

Total Price: ${calculateTotal()} OMR
        
This message was sent from the Wiye website contact form.`,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Email sent successfully');
      
      // Show success toast
      toast({
        title: t('cta.success'),
        description: t('cta.successDesc'),
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        businessName: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error toast
      toast({
        title: t('cta.error') || 'Error',
        description: t('cta.errorDesc') || 'There was a problem submitting your request. Please try again.',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-16 bg-ejabef-green">
      <div className="container mx-auto">
        <div className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 ${isRTL ? 'rtl' : ''}`}>
          <h2 className="section-title text-ejabef-darkBlue">{t('cta.title')}</h2>
          <p className="text-lg text-center mb-8">
            {t('cta.description')}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700 mb-2">{t('cta.name')}</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={isRTL ? 'rtl' : ''}
                placeholder={t('cta.namePlaceholder')}
                dir={dir()}
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="block text-gray-700 mb-2">{t('cta.phone')}</label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={isRTL ? 'rtl' : ''}
                placeholder={t('cta.phonePlaceholder')}
                dir={dir()}
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700 mb-2">{t('cta.email')}</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={isRTL ? 'rtl' : ''}
                placeholder={t('cta.emailPlaceholder')}
                dir={dir()}
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="businessName" className="block text-gray-700 mb-2">{t('cta.business')}</label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className={isRTL ? 'rtl' : ''}
                placeholder={t('cta.businessPlaceholder')}
                dir={dir()}
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">{t('cta.addOns')}</h3>
              <div className="space-y-3">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Checkbox
                    id="aiTools"
                    checked={addOns.aiTools}
                    onCheckedChange={(checked) => handleAddOnChange('aiTools', checked as boolean)}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="aiTools" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('cta.aiTools')} - 10 {t('currency')}
                  </label>
                </div>
                
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Checkbox
                    id="deepAnalysis"
                    checked={addOns.deepAnalysis}
                    onCheckedChange={(checked) => handleAddOnChange('deepAnalysis', checked as boolean)}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="deepAnalysis" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('cta.deepAnalysis')} - 7 {t('currency')}
                  </label>
                </div>
                
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Checkbox
                    id="storeWebsite"
                    checked={addOns.storeWebsite}
                    onCheckedChange={(checked) => handleAddOnChange('storeWebsite', checked as boolean)}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="storeWebsite" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('cta.storeWebsite')} - 10 {t('currency')}
                  </label>
                </div>
                
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Checkbox
                    id="mobileApp"
                    checked={addOns.mobileApp}
                    onCheckedChange={(checked) => handleAddOnChange('mobileApp', checked as boolean)}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="mobileApp" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('cta.mobileApp')} - 25 {t('currency')}
                  </label>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  {t('cta.total')}: {calculateTotal()} {t('currency')}
                </p>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="cta-button w-full justify-center" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t('cta.sending')}
                </>
              ) : (
                `${t('cta.button')} - ${calculateTotal()} ${t('currency')} ${t('monthly')}`
              )}
            </Button>
          </form>
          
          <p className="mt-8 text-center text-gray-600 text-sm">
            {t('cta.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
