
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define our languages and translation type
type Language = 'ar' | 'en';
type TranslationKey = string;

// Define the shape of our translations object
interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

// Define all our translations here
const translations: Translations = {
  // Header translations
  'header.features': {
    ar: 'المميزات',
    en: 'Features',
  },
  'header.offer': {
    ar: 'العرض',
    en: 'Offer',
  },
  'header.faq': {
    ar: 'الأسئلة الشائعة',
    en: 'FAQ',
  },
  'header.cta': {
    ar: 'اطلب الخدمة الآن',
    en: 'Request Service Now',
  },
  
  // Hero translations
  'hero.title': {
    ar: 'خلك ذكي.. وخلي الواتساب يبيع عنك!',
    en: 'Be smart.. Let WhatsApp sell for you!',
  },
  'hero.subtitle': {
    ar: 'حوّل محادثاتك إلى مبيعات تلقائية على مدار الساعة – عبر نظام ذكي يرد ويبيع بدون تدخل منك.',
    en: 'Turn your chats into automated sales 24/7 - through a smart system that responds and sells without your intervention.',
  },
  'hero.cta': {
    ar: 'اطلب الخدمة الآن',
    en: 'Request Service Now',
  },
  'hero.features': {
    ar: 'تعرف على المميزات',
    en: 'Discover Features',
  },
  'hero.badge': {
    ar: 'يعمل 24/7 بدون تدخل منك!',
    en: 'Works 24/7 without your intervention!',
  },

  // Pain Points section
  'painpoints.title': {
    ar: 'المشاكل التي يحلها نظام إيجايف',
    en: 'Problems Solved by Ejabef System',
  },
  'painpoints.pain1': {
    ar: 'هل تعاني من كثرة الرسائل اليومية؟',
    en: 'Are you suffering from too many daily messages?',
  },
  'painpoints.pain2': {
    ar: 'هل يضيع وقتك في الرد وتفقد الزبائن؟',
    en: 'Are you wasting time responding and losing customers?',
  },
  'painpoints.pain3': {
    ar: 'هل عملك متوقف على وجودك؟',
    en: 'Does your business depend on your presence?',
  },
  'painpoints.conclusion': {
    ar: 'نظام إيجايف مصمم عشان يشيل عنك كل هذا التعب، ويخلي البزنس يمشي حتى وانت نايم.',
    en: 'The Ejabef system is designed to take all this burden off you and keep your business running even while you sleep.',
  },

  // Features section
  'features.title': {
    ar: 'مميزات نظام إيجايف',
    en: 'Ejabef System Features',
  },
  'features.feature1.title': {
    ar: 'نظام ذكي يرد تلقائيًا على العملاء في الواتساب',
    en: 'Smart system that automatically responds to customers on WhatsApp',
  },
  'features.feature1.description': {
    ar: 'رد آلي على جميع استفسارات العملاء بطريقة احترافية وفورية',
    en: 'Automatic response to all customer inquiries professionally and immediately',
  },
  'features.feature2.title': {
    ar: 'كتالوج رقمي يعرض منتجاتك داخل المحادثة',
    en: 'Digital catalog that displays your products within the conversation',
  },
  'features.feature2.description': {
    ar: 'عرض المنتجات بصور جذابة وأوصاف دقيقة مباشرة في محادثة الواتساب',
    en: 'Display products with attractive images and accurate descriptions directly in WhatsApp conversation',
  },
  'features.feature3.title': {
    ar: 'العميل يقدر يطلب، يضيف للسلة، ويدفع مباشرة',
    en: 'The customer can order, add to cart, and pay directly',
  },
  'features.feature3.description': {
    ar: 'تجربة تسوق سلسة ومتكاملة بدون الحاجة لمغادرة تطبيق الواتساب',
    en: 'Smooth and integrated shopping experience without leaving the WhatsApp application',
  },
  'features.feature4.title': {
    ar: 'متابعة فورية من لوحة تحكم تعرض المبيعات والإحصائيات',
    en: 'Instant tracking from a dashboard displaying sales and statistics',
  },
  'features.feature4.description': {
    ar: 'تقارير مفصلة ولوحة تحكم سهلة الاستخدام لمتابعة أداء متجرك',
    en: 'Detailed reports and an easy-to-use dashboard to monitor your store\'s performance',
  },
  'features.feature5.title': {
    ar: 'لا تحتاج أي خبرة تقنية – كل شي جاهز لك',
    en: 'You don\'t need any technical experience – everything is ready for you',
  },
  'features.feature5.description': {
    ar: 'نظام سهل الاستخدام يمكن لأي شخص التعامل معه بدون أي خبرة تقنية',
    en: 'An easy-to-use system that anyone can handle without any technical experience',
  },
  'features.feature6.title': {
    ar: 'تقدر تضيف التوصيل وتحدد الوقت وتستلم تقييم العميل بعد الشراء',
    en: 'You can add delivery, set time and receive customer ratings after purchase',
  },
  'features.feature6.description': {
    ar: 'إدارة كاملة للطلبات وخدمة التوصيل والتقييمات في مكان واحد',
    en: 'Complete management of orders, delivery service, and ratings in one place',
  },
  'features.conclusion': {
    ar: 'كل هذا بنظام واحد!',
    en: 'All this in one system!',
  },
  'features.description': {
    ar: 'نظام إيجايف يجمع بين الذكاء الاصطناعي وسهولة الاستخدام، ليقدم لك تجربة بيع متكاملة على منصة الواتساب.',
    en: 'The Ejabef system combines artificial intelligence and ease of use to provide you with an integrated selling experience on the WhatsApp platform.',
  },

  // Offer section
  'offer.title': {
    ar: '🎁 عرض خاص لأول 20 مشروع فقط',
    en: '🎁 Special offer for the first 20 projects only',
  },
  'offer.feature1': {
    ar: 'تهيئة النظام بالكامل مجانًا',
    en: 'Complete system setup for free',
  },
  'offer.feature2': {
    ar: 'إضافة كل منتجاتك داخل الكتالوج بدون تكلفة',
    en: 'Add all your products to the catalog at no cost',
  },
  'offer.feature3': {
    ar: 'خصم 50% على الاشتراك',
    en: '50% discount on subscription',
  },
  'offer.payOnly': {
    ar: '💸 ادفع فقط',
    en: '💸 Pay only',
  },
  'offer.price': {
    ar: '24 ر.ع',
    en: '24 OMR',
  },
  'offer.description': {
    ar: 'وخلّي الواتساب يشتغل عنك 24/7',
    en: 'And let WhatsApp work for you 24/7',
  },
  'offer.cta': {
    ar: 'اطلب الخدمة الآن',
    en: 'Request Service Now',
  },
  'offer.warning': {
    ar: '🚨 لا تفوّت الفرصة – العرض حصري لأول 20 مشروع فقط!',
    en: '🚨 Don\'t miss the opportunity – the offer is exclusive to the first 20 projects only!',
  },
  'offer.countdown': {
    ar: 'العرض ينتهي خلال:',
    en: 'Offer ends in:',
  },
  'offer.days': {
    ar: 'يوم',
    en: 'day',
  },
  'offer.hours': {
    ar: 'ساعة',
    en: 'hour',
  },
  'offer.minutes': {
    ar: 'دقيقة',
    en: 'min',
  },
  'offer.seconds': {
    ar: 'ثانية',
    en: 'sec',
  },

  // FAQ section
  'faq.title': {
    ar: 'الأسئلة الشائعة',
    en: 'Frequently Asked Questions',
  },
  'faq.q1': {
    ar: 'كيف يعمل نظام إيجايف؟',
    en: 'How does the Ejabef system work?',
  },
  'faq.a1': {
    ar: 'نظام إيجايف يعمل كمساعد ذكي على منصة الواتساب، يستقبل رسائل العملاء ويرد عليها تلقائيًا ويعرض المنتجات ويتيح للعملاء الطلب والدفع مباشرة من خلال المحادثة.',
    en: 'The Ejabef system works as a smart assistant on the WhatsApp platform, receiving customer messages, responding to them automatically, displaying products, and allowing customers to order and pay directly through the conversation.',
  },
  'faq.q2': {
    ar: 'هل أحتاج إلى مهارات تقنية لاستخدام النظام؟',
    en: 'Do I need technical skills to use the system?',
  },
  'faq.a2': {
    ar: 'لا، نظام إيجايف مصمم ليكون سهل الاستخدام وبديهي. نحن نقوم بكل الإعداد التقني لك، وكل ما تحتاجه هو القدرة على استخدام لوحة تحكم بسيطة لإضافة المنتجات ومتابعة الطلبات.',
    en: 'No, the Ejabef system is designed to be user-friendly and intuitive. We handle all the technical setup for you, and all you need is the ability to use a simple dashboard to add products and track orders.',
  },
  'faq.q3': {
    ar: 'كم من الوقت يستغرق تفعيل النظام؟',
    en: 'How long does it take to activate the system?',
  },
  'faq.a3': {
    ar: 'عادة ما يستغرق تفعيل النظام من 24 إلى 48 ساعة بعد استلام جميع المعلومات المطلوبة والمحتوى الخاص بمتجرك.',
    en: 'System activation usually takes 24 to 48 hours after receiving all the required information and content for your store.',
  },
  'faq.q4': {
    ar: 'هل يمكن ربط النظام بنظام المدفوعات الخاص بي؟',
    en: 'Can the system be integrated with my payment system?',
  },
  'faq.a4': {
    ar: 'نعم، يمكن ربط نظام إيجايف بمعظم بوابات الدفع الشائعة في المنطقة مثل Thawani، PayTabs، وغيرها.',
    en: 'Yes, the Ejabef system can be linked to most popular payment gateways in the region such as Thawani, PayTabs, and others.',
  },
  'faq.q5': {
    ar: 'هل يمكنني تخصيص الردود والرسائل؟',
    en: 'Can I customize responses and messages?',
  },
  'faq.a5': {
    ar: 'بالتأكيد! يمكنك تخصيص جميع الردود والرسائل لتعكس هوية علامتك التجارية وأسلوب تواصلك المفضل مع العملاء.',
    en: 'Absolutely! You can customize all responses and messages to reflect your brand identity and preferred communication style with customers.',
  },
  'faq.q6': {
    ar: 'ماذا يحدث بعد انتهاء فترة الاشتراك؟',
    en: 'What happens after the subscription period ends?',
  },
  'faq.a6': {
    ar: 'يمكنك تجديد الاشتراك بنفس السعر المخفض الذي حصلت عليه في العرض الأول، حيث أننا نثبت السعر مدى الحياة للعملاء الأوائل.',
    en: 'You can renew the subscription at the same discounted price you received in the first offer, as we fix the price for life for early customers.',
  },

  // CTA section
  'cta.title': {
    ar: 'اطلب الخدمة الآن',
    en: 'Request Service Now',
  },
  'cta.description': {
    ar: 'قم بملء النموذج التالي وسيتواصل معك فريقنا خلال 24 ساعة لإتمام طلبك',
    en: 'Fill out the following form and our team will contact you within 24 hours to complete your request',
  },
  'cta.name': {
    ar: 'الاسم الكامل',
    en: 'Full Name',
  },
  'cta.namePlaceholder': {
    ar: 'أدخل اسمك الكامل',
    en: 'Enter your full name',
  },
  'cta.phone': {
    ar: 'رقم الهاتف (واتساب)',
    en: 'Phone Number (WhatsApp)',
  },
  'cta.phonePlaceholder': {
    ar: 'أدخل رقم الهاتف المستخدم على الواتساب',
    en: 'Enter the phone number used on WhatsApp',
  },
  'cta.business': {
    ar: 'اسم المشروع/النشاط التجاري',
    en: 'Business/Project Name',
  },
  'cta.businessPlaceholder': {
    ar: 'أدخل اسم مشروعك التجاري',
    en: 'Enter your business name',
  },
  'cta.button': {
    ar: 'اطلب الخدمة الآن واحصل على العرض الخاص',
    en: 'Request Service Now and Get the Special Offer',
  },
  'cta.disclaimer': {
    ar: 'بالضغط على زر الطلب، أنت توافق على سياسة الخصوصية وشروط الاستخدام الخاصة بنا.',
    en: 'By clicking the request button, you agree to our privacy policy and terms of use.',
  },
  'cta.success': {
    ar: 'تم إرسال طلبك بنجاح!',
    en: 'Your request has been successfully sent!',
  },
  'cta.successDesc': {
    ar: 'سنتواصل معك قريباً لإتمام الطلب.',
    en: 'We will contact you soon to complete the request.',
  },

  // Footer section
  'footer.about': {
    ar: 'إيجايف - نظام ذكي للبيع عبر الواتساب، يساعد أصحاب المشاريع الصغيرة والمتوسطة على توفير الوقت وزيادة المبيعات.',
    en: 'Ejabef - A smart system for selling through WhatsApp, helping small and medium business owners save time and increase sales.',
  },
  'footer.quickLinks': {
    ar: 'روابط سريعة',
    en: 'Quick Links',
  },
  'footer.contactUs': {
    ar: 'تواصل معنا',
    en: 'Contact Us',
  },
  'footer.email': {
    ar: 'البريد الإلكتروني: talal@egaief.com',
    en: 'Email: talal@egaief.com',
  },
  'footer.phone': {
    ar: 'الهاتف: +96894496999',
    en: 'Phone: +96894496999',
  },
  'footer.whatsapp': {
    ar: 'واتساب: +96894496999',
    en: 'WhatsApp: +96894496999',
  },
  'footer.copyright': {
    ar: 'جميع الحقوق محفوظة © إيجايف',
    en: 'All rights reserved © Ejabef',
  },

  // Language switcher
  'language': {
    ar: 'English',
    en: 'العربية',
  },
};

// Create context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  dir: () => 'rtl' | 'ltr';
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  // Translation function
  const t = (key: TranslationKey): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  // Direction helper
  const dir = (): 'rtl' | 'ltr' => {
    return language === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
