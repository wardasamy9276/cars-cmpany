import React from "react";
import { motion } from "framer-motion";
import {
  Ship,
  Truck,
  Airplay,
  ShieldCheck,
  Globe2,
  Warehouse,
  BarChart3,
  Headset,
} from "lucide-react";

const services = [
  {
    title: "الشحن البحري",
    description:
      "حلول شحن بحري متكاملة للحاويات الكاملة والمشتركة عبر كبرى الخطوط العالمية.",
    icon: <Ship className="w-10 h-10" />,
    color: "bg-blue-600",
  },
  {
    title: "الشحن الجوي",
    description:
      "خدمات شحن جوي سريعة وآمنة للبضائع الحساسة مع تغطية شاملة لكافة المطارات.",
    icon: <Airplay className="w-10 h-10" />,
    color: "bg-sky-500",
  },
  {
    title: "النقل البري",
    description:
      "أسطول حديث من الشاحنات لنقل البضائع داخلياً وبين دول الجوار مع نظام تتبع دقيق.",
    icon: <Truck className="w-10 h-10" />,
    color: "bg-amber-600",
  },
  {
    title: "التخليص الجمركي",
    description:
      "خبراء في القوانين الجمركية لضمان إنهاء الإجراءات بسرعة وسلاسة وتجنب أي تأخير.",
    icon: <ShieldCheck className="w-10 h-10" />,
    color: "bg-emerald-600",
  },
  {
    title: "التخزين واللوجستيات",
    description:
      "مستودعات مجهزة بأحدث تقنيات التخزين والتغليف لضمان سلامة بضائعكم.",
    icon: <Warehouse className="w-10 h-10" />,
    color: "bg-indigo-600",
  },
  {
    title: "استشارات الاستيراد",
    description:
      "نقدم دراسات جدوى واستشارات تجارية لمساعدتكم في اختيار أفضل الأسواق.",
    icon: <Globe2 className="w-10 h-10" />,
    color: "bg-[#CDA434]",
  },
  {
    title: "إدارة سلاسل الإمداد",
    description:
      "تحسين كفاءة عملياتكم التجارية من المصنع وحتى وصول المنتج النهائي.",
    icon: <BarChart3 className="w-10 h-10" />,
    color: "bg-slate-700",
  },
  {
    title: "دعم العملاء 24/7",
    description:
      "فريق متخصص لمتابعة شحناتكم والإجابة على استفساراتكم في أي وقت.",
    icon: <Headset className="w-10 h-10" />,
    color: "bg-[#0a1e3d]",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col" dir="rtl">
      {/* 1. Header Section - قسم العنوان العلوي */}
      <section className="bg-[#0a1e3d] pt-32 pb-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#CDA434] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-7xl font-black mb-8 leading-tight"
          >
            خدماتنا <span className="text-[#CDA434]">اللوجستية</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto"
          >
            نقدم حلولاً مبتكرة تغطي كافة احتياجاتك التجاريّة، من الشحن الدولي
            وحتى التوصيل النهائي بدقة واحترافية عالية.
          </motion.p>
        </div>
      </section>

      {/* 2. Services Grid - تم حذف الهامش السالب لتهبط الكروت بالكامل */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -15 }}
              className="bg-white p-10 rounded-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center group hover:border-[#CDA434] transition-all duration-500 hover:shadow-2xl"
            >
              {/* أيقونة */}
              <div
                className={`mb-8 p-6 rounded-[2rem] ${service.color} text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
              >
                {service.icon}
              </div>

              {/* عنوان */}
              <h3 className="text-2xl font-black text-[#0a1e3d] mb-4 group-hover:text-[#CDA434] transition-colors leading-snug">
                {service.title}
              </h3>

              {/* وصف */}
              <p className="text-gray-500 leading-relaxed text-base font-medium mb-8">
                {service.description}
              </p>

              {/* زر اكتشف المزيد */}
              <div className="mt-auto">
                <span className="text-[#CDA434] font-black text-sm uppercase tracking-widest cursor-pointer group-hover:tracking-[0.2em] transition-all duration-300">
                  اكتشف المزيد ←
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-32 w-full">
        <div className="bg-[#CDA434] rounded-[4rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <h2 className="text-[#0a1e3d] text-4xl md:text-6xl font-black mb-8 relative z-10 leading-tight">
            جاهز لبدء شحنتك؟
          </h2>
          <p className="text-[#0a1e3d]/80 text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto relative z-10">
            فريق أبولو جاهز لخدمتك على مدار الساعة بتقديم أفضل الأسعار.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="bg-[#0a1e3d] text-white px-12 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
              اطلب استشارة مجانية
            </button>
            <button className="bg-transparent border-2 border-[#0a1e3d]/20 text-[#0a1e3d] px-12 py-5 rounded-full font-black text-xl hover:bg-[#0a1e3d]/5 transition-all">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
