
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';

const FaqSection: React.FC = () => {
  const { t, dir } = useLanguage();
  const isRTL = dir() === 'rtl';
  
  const faqs = [
    {
      question: 'faq.q1',
      answer: 'faq.a1'
    },
    {
      question: 'faq.q2',
      answer: 'faq.a2'
    },
    {
      question: 'faq.q3',
      answer: 'faq.a3'
    },
    {
      question: 'faq.q4',
      answer: 'faq.a4'
    },
    {
      question: 'faq.q5',
      answer: 'faq.a5'
    },
    {
      question: 'faq.q6',
      answer: 'faq.a6'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-ejabef-darkBlue">{t('faq.title')}</h2>
        
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className={isRTL ? 'rtl' : ''}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
                <AccordionTrigger className={`${isRTL ? 'text-right' : 'text-left'} font-bold text-lg text-ejabef-darkBlue hover:text-ejabef-green transition-colors`}>
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className={isRTL ? 'text-right' : 'text-left'}>
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
