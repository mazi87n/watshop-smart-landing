
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "كيف يعمل نظام إيجايف؟",
      answer: "نظام إيجايف يعمل كمساعد ذكي على منصة الواتساب، يستقبل رسائل العملاء ويرد عليها تلقائيًا ويعرض المنتجات ويتيح للعملاء الطلب والدفع مباشرة من خلال المحادثة."
    },
    {
      question: "هل أحتاج إلى مهارات تقنية لاستخدام النظام؟",
      answer: "لا، نظام إيجايف مصمم ليكون سهل الاستخدام وبديهي. نحن نقوم بكل الإعداد التقني لك، وكل ما تحتاجه هو القدرة على استخدام لوحة تحكم بسيطة لإضافة المنتجات ومتابعة الطلبات."
    },
    {
      question: "كم من الوقت يستغرق تفعيل النظام؟",
      answer: "عادة ما يستغرق تفعيل النظام من 24 إلى 48 ساعة بعد استلام جميع المعلومات المطلوبة والمحتوى الخاص بمتجرك."
    },
    {
      question: "هل يمكن ربط النظام بنظام المدفوعات الخاص بي؟",
      answer: "نعم، يمكن ربط نظام إيجايف بمعظم بوابات الدفع الشائعة في المنطقة مثل Thawani، PayTabs، وغيرها."
    },
    {
      question: "هل يمكنني تخصيص الردود والرسائل؟",
      answer: "بالتأكيد! يمكنك تخصيص جميع الردود والرسائل لتعكس هوية علامتك التجارية وأسلوب تواصلك المفضل مع العملاء."
    },
    {
      question: "ماذا يحدث بعد انتهاء فترة الاشتراك؟",
      answer: "يمكنك تجديد الاشتراك بنفس السعر المخفض الذي حصلت عليه في العرض الأول، حيث أننا نثبت السعر مدى الحياة للعملاء الأوائل."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-ejabef-darkBlue">الأسئلة الشائعة</h2>
        
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="rtl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-right font-bold text-lg text-ejabef-darkBlue hover:text-ejabef-green transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-gray-700">
                  {faq.answer}
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
