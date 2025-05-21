
import React from 'react';
import { CircleCheck, MessageSquare, Smartphone, ListCheck, CalendarDays, CircleDollarSign, Clock, Users, FileText } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-ejabef-green" />,
      title: "نظام ذكي يرد تلقائيًا على العملاء في الواتساب",
      description: "رد آلي على جميع استفسارات العملاء بطريقة احترافية وفورية"
    },
    {
      icon: <FileText className="h-6 w-6 text-ejabef-green" />,
      title: "كتالوج رقمي يعرض منتجاتك داخل المحادثة",
      description: "عرض المنتجات بصور جذابة وأوصاف دقيقة مباشرة في محادثة الواتساب"
    },
    {
      icon: <CircleDollarSign className="h-6 w-6 text-ejabef-green" />,
      title: "العميل يقدر يطلب، يضيف للسلة، ويدفع مباشرة",
      description: "تجربة تسوق سلسة ومتكاملة بدون الحاجة لمغادرة تطبيق الواتساب"
    },
    {
      icon: <ListCheck className="h-6 w-6 text-ejabef-green" />,
      title: "متابعة فورية من لوحة تحكم تعرض المبيعات والإحصائيات",
      description: "تقارير مفصلة ولوحة تحكم سهلة الاستخدام لمتابعة أداء متجرك"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-ejabef-green" />,
      title: "لا تحتاج أي خبرة تقنية – كل شي جاهز لك",
      description: "نظام سهل الاستخدام يمكن لأي شخص التعامل معه بدون أي خبرة تقنية"
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-ejabef-green" />,
      title: "تقدر تضيف التوصيل وتحدد الوقت وتستلم تقييم العميل بعد الشراء",
      description: "إدارة كاملة للطلبات وخدمة التوصيل والتقييمات في مكان واحد"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-ejabef-darkBlue">مميزات نظام إيجايف</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 rtl card-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="bg-ejabef-lightGreen p-3 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="mr-4 text-xl font-bold text-ejabef-darkBlue">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-feature-gradient p-8 rounded-2xl text-center rtl">
          <h3 className="text-2xl font-bold text-ejabef-darkBlue mb-4">كل هذا بنظام واحد!</h3>
          <p className="text-lg text-gray-800">
            نظام إيجايف يجمع بين الذكاء الاصطناعي وسهولة الاستخدام، ليقدم لك تجربة بيع متكاملة على منصة الواتساب.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
