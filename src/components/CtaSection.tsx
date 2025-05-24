
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
    businessName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      const serviceId = 'service_dc2x6fl';
      const templateId = 'template_beblh73';
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
Business: ${formData.businessName}
        
This message was sent from the Ejabef website contact form.`,
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
                t('cta.button')
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
