import React from "react";
import {
  FileText,
  Handshake,
  ShieldCheck,
  Globe2,
  type LucideIcon,
} from "lucide-react";

interface ExtraService {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: ExtraService[] = [
  {
    id: 1,
    title: "وثائق التجارة",
    description:
      "إعداد وتصديق كافة المستندات والوثائق التجارية اللازمة للتصدير والاستيراد.",
    icon: FileText,
  },
  {
    id: 2,
    title: "تسهيل الشراكات",
    description:
      "نربطك بأفضل الموردين والشركاء التجاريين في الأسواق الخليجية والعالمية.",
    icon: Handshake,
  },
  {
    id: 3,
    title: "إدارة الامتثال",
    description:
      "ضمان مطابقة شحناتك للمعايير الدولية واللوائح التنظيمية المحلية بدقة عالية.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "تبادل العملات",
    description:
      "حلول مرنة لتبادل العملات والتحويلات المالية الدولية لتسهيل تجارتك.",
    icon: Globe2,
  },
];

const AdditionalServices: React.FC = () => {
  return (
    <section className="py-16 bg-[#F4F7FA]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 relative">
          <h2 className="text-[#001534] text-3xl md:text-4xl font-extrabold mb-3">
            خدمات إضافية
          </h2>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#D4A757] rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md border border-transparent 
                         hover:shadow-xl transition-all duration-500 ease-out group cursor-pointer min-h-[340px]"
            >
              <div className="mb-6 relative flex items-center justify-center w-24 h-24">
                <div className="absolute inset-0 bg-[#D4A757] rounded-full transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-90" />

                <div className="absolute inset-0 bg-[#21212121] rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out" />

                <service.icon
                  size={40}
                  strokeWidth={1.5}
                  className="relative z-10 text-white group-hover:text-[#001534] 
                             group-hover:rotate-[360deg] 
                             transition-all duration-700 ease-out"
                />
              </div>

              {/* النصوص */}
              <div className="text-center space-y-3">
                <h3 className="text-[#001534] hover:text-[#D4A757] text-xl font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* اللمسة الجمالية السفلية */}
              <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-1 bg-[#D4A757] rounded-full mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
