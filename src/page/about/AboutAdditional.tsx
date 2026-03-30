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
      "نضمن دقة واكتمال كافة المستندات الجمركية والتجارية لتسريع حركة بضائعكم عبر الحدود.",
    icon: FileText,
  },
  {
    id: 2,
    title: "تسهيل الشراكات",
    description:
      "خبرتنا العميقة في السوق الإماراتي تفتح لكم آفاقاً جديدة للتعاون مع موردين موثوقين عالمياً.",
    icon: Handshake,
  },
  {
    id: 3,
    title: "إدارة الامتثال",
    description:
      "نلتزم بأعلى معايير الجودة والامتثال للأنظمة الدولية لضمان سلامة تجارتكم من المخاطر.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "تبادل العملات",
    description:
      "نقدم حلولاً مالية متكاملة لتبادل العملات تسهل عمليات الدفع للموردين حول العالم.",
    icon: Globe2,
  },
];

const AboutAdditional: React.FC = () => {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* مقدمة القسم لصفحة About */}
        <div className="mb-16">
          <h2 className="text-[#001534] text-3xl md:text-4xl font-extrabold mb-4 border-r-4 border-[#D4A757] pr-4">
            خدماتنا المساندة
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            في "الشراع اللوجستية"، لا نكتفي بنقل البضائع فحسب، بل نقدم منظومة
            متكاملة من الخدمات التي تدعم نمو أعمالكم وتضمن استدامة سلاسل الإمداد
            الخاصة بكم.
          </p>
        </div>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center 
                         hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-gray-100"
            >
              {/* حاوية الأيقونة - كبيرة وبارزة */}
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                {/* اللون الأساسي (ذهبي) */}
                <div className="absolute inset-0 bg-[#D4A757] rounded-2xl rotate-3 group-hover:rotate-[360deg] transition-all duration-700 ease-in-out" />

                {/* اللون عند الهوفر (#21212121) */}
                <div className="absolute inset-0 bg-[#21212121] rounded-2xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />

                {/* الأيقونة */}
                <service.icon
                  size={42}
                  strokeWidth={1.5}
                  className="relative z-10 text-white group-hover:text-[#D4A757] transition-colors duration-500"
                />
              </div>

              {/* النصوص */}
              <h3 className="text-[#001534] text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* خط ديكوري يظهر عند الهوفر */}
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-[#D4A757] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAdditional;
