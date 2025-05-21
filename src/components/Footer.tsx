
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src="/logo.png" alt="إيجايف" className="h-12 mb-4" />
            <p className="text-gray-400 rtl max-w-md">
              إيجايف - نظام ذكي للبيع عبر الواتساب، يساعد أصحاب المشاريع الصغيرة والمتوسطة على توفير الوقت وزيادة المبيعات.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rtl">
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">المميزات</a></li>
                <li><a href="#offer" className="text-gray-400 hover:text-white transition">العرض الخاص</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition">الأسئلة الشائعة</a></li>
                <li><a href="#cta" className="text-gray-400 hover:text-white transition">اطلب الخدمة</a></li>
              </ul>
            </div>
            
            <div className="rtl">
              <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">البريد الإلكتروني: info@ejabef.com</li>
                <li className="text-gray-400">الهاتف: +968 1234 5678</li>
                <li className="text-gray-400">واتساب: +968 9876 5432</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center rtl">
          <p className="text-gray-500">
            جميع الحقوق محفوظة &copy; إيجايف {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
