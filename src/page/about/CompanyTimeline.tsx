import React from "react";
import { motion } from "framer-motion";

const TimelineCards: React.FC = () => {
  const timelineData = [
    {
      year: "2010",
      text: "التأسيس والبداية",
      desc: "انطلاقة الشركة في المنطقة الحرة بعجمان كبوابة رائدة للتجارة الإقليمية.",
    },
    {
      year: "2013",
      text: "التوسع الإقليمي",
      desc: "نجحنا في مد جسور التعاون لتصل عملياتنا إلى أكثر من 20 دولة حول العالم.",
    },
    {
      year: "2016",
      text: "الريادة التجارية",
      desc: "تحقيق رقم قياسي بإتمام 500 صفقة ناجحة بفضل ثقة عملائنا المستمرة.",
    },
    {
      year: "2019",
      text: "التحول الرقمي",
      desc: "إطلاق منصة ذكية لتسهيل عمليات الاستيراد والتصدير وتتبع الشحنات إلكترونياً.",
    },
    {
      year: "2022",
      text: "الانتشار العالمي",
      desc: "توسيع شبكتنا اللوجستية لتغطي أكثر من 50 دولة وقارة بفاعلية واحترافية.",
    },
    {
      year: "2024",
      text: "التميز المستدام",
      desc: "تبني حلول شحن خضراء وصديقة للبيئة لتعزيز مفهوم التجارة المستدامة.",
    },
    {
      year: "2025",
      text: "شراكات كبرى",
      desc: "عقد اتفاقيات حصريّة مع كبار الموردين والمصانع في آسيا وأوروبا.",
    },
    {
      year: "2026",
      text: "رؤية المستقبل",
      desc: "قيادة سوق التجارة الدولية باستخدام تقنيات الذكاء الاصطناعي لتحليل الأسواق.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#001534]" dir="rtl">
      <div className="container mx-auto px-4 md:px-12">
        {/* العنوان الرئيسي للقسم */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#D4A757] text-3xl md:text-5xl font-black mb-4"
          >
            مسيرتنا عبر الزمن
          </motion.h2>
          <div className="w-24 h-1 bg-[#D4A757] mx-auto rounded-full"></div>
        </div>

        {/* شبكة الكروت المتجاوبة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 transition-all hover:bg-white/10 hover:border-[#D4A757]/50 flex flex-col h-full"
            >
              {/* السنة والأيقونة التزيينية */}
              <div className="flex justify-between items-start mb-5">
                <span className="text-[#D4A757] text-3xl md:text-4xl font-black leading-none">
                  {item.year}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#D4A757]/10 flex items-center justify-center border border-[#D4A757]/20">
                  <div className="w-2 h-2 rounded-full bg-[#D4A757] shadow-[0_0_8px_#D4A757]"></div>
                </div>
              </div>

              {/* العنوان الصغير (Text) */}
              <h3 className="text-xl md:text-2xl font-black mb-3 text-white group-hover:text-[#D4A757] transition-colors">
                {item.text}
              </h3>

              {/* الوصف (Description) */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                {item.desc}
              </p>

              {/* خط الزينة السفلي عند الهوفر */}
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-[#D4A757] transition-all duration-500 group-hover:w-full rounded-b-2xl"></div>

              {/* تأثير إضاءة خفيف في الزاوية */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#D4A757]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineCards;
