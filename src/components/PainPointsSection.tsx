
import React from 'react';
import { CircleX } from 'lucide-react';

const PainPointsSection: React.FC = () => {
  const painPoints = [
    "هل تعاني من كثرة الرسائل اليومية؟",
    "هل يضيع وقتك في الرد وتفقد الزبائن؟",
    "هل عملك متوقف على وجودك؟"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-ejabef-darkBlue">المشاكل التي يحلها نظام إيجايف</h2>
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md rtl flex items-center justify-start gap-4"
              >
                <CircleX className="text-red-500 h-8 w-8 flex-shrink-0" />
                <p className="text-xl font-bold text-gray-800">{point}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xl text-gray-700 rtl">
            نظام إيجايف مصمم عشان يشيل عنك كل هذا التعب، ويخلي البزنس يمشي حتى وانت نايم.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
