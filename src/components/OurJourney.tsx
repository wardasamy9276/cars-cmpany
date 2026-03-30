import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, Rocket, Users, Target } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "الانطلاقة الأولى",
    description:
      "تأسيس شركة أبولو في عجمان كمركز إقليمي لخدمات الاستيراد والتصدير.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    year: "2020",
    title: "التوسع الإقليمي",
    description:
      "افتتاح فروع جديدة وتوسيع شبكة اللوجستيات لتشمل أكثر من 15 دولة.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    year: "2022",
    title: "التميز والجودة",
    description:
      "الحصول على شهادات الجودة العالمية وشراكات مع كبرى الخطوط الملاحية.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "التحول الرقمي",
    description:
      "إطلاق منصة أبولو الذكية لإدارة الشحنات وتسهيل التجارة لعملائنا.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: "2026",
    title: "رؤية المستقبل",
    description:
      "نسعى لنكون الخيار الأول عالمياً في حلول التجارة المتكاملة والابتكار.",
    icon: <Target className="w-6 h-6" />,
  },
];

const OurJourney: React.FC = () => {
  return (
    <section className="py-20 bg-[#f8f9fa] overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#CDA434] font-bold tracking-widest uppercase text-sm"
          >
            تاريخنا الحافل
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#0a1e3d] text-4xl md:text-5xl font-black mt-3"
          >
            اكتشف مسيرتنا
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#CDA434] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* الخط الزمني */}
        <div className="relative">
          {/* الخط المركزي العمودي */}
          <div className="absolute right-1/2 left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center justify-between w-full flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* المساحة الفارغة المقابلة */}
                <div className="hidden md:block w-5/12"></div>

                {/* نقطة المنتصف (الأيقونة) */}
                <div className="z-20 flex items-center justify-center w-12 h-12 bg-[#0a1e3d] border-4 border-[#CDA434] rounded-full text-[#CDA434] shadow-xl mb-4 md:mb-0">
                  {item.icon}
                </div>

                {/* كرت المحتوى */}
                <div className="w-full md:w-5/12 bg-white p-8 rounded-[2rem] shadow-xl border-b-4 border-[#CDA434] hover:shadow-2xl transition-shadow relative group">
                  {/* السنة */}
                  <span className="absolute top-4 left-6 text-5xl font-black text-gray-100 group-hover:text-[#CDA434]/10 transition-colors">
                    {item.year}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#0a1e3d] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
