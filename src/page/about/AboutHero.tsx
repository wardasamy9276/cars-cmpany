import React from "react";
import {
  ChevronLeft,
  // PlaneTakeoff, // تم استيرادها لاستخدامها مستقبلاً إذا أردت
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero: React.FC = () => {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-[80vh] flex items-center overflow-hidden bg-[#001534]"
      dir="rtl"
    >
      {/* 1. الخلفية (Image Overlay) */}
      <div className="absolute inset-0 z-0">
        {/* التدرج اللوني لضمان وضوح النص */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-[#001534] via-[#001534]/85 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
          alt="Ajman Port - Apollo Group Trading"
          className="w-full h-full object-cover opacity-30 md:opacity-40"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20 pb-12">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* 2. شارة علوية (Badge) */}
          <div className="flex justify-center md:justify-start mb-8 transition-all duration-700"></div>

          {/* 3. العنوان الرئيسي */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6 text-center md:text-right">
            عن <span className="text-[#D4A757]">أبولو جروب</span> تريدينج
          </h1>

          {/* 4. النص التعريفي المخصص (Focus on Import & Export) */}
          <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-2xl mb-8 text-center md:text-right">
            شركة رائدة في قطاع{" "}
            <span className="text-[#D4A757] font-bold">الاستيراد والتصدير</span>
            ، مكرسة لتسهيل تدفق التجارة العالمية بنزاهة وتميز. من قلب{" "}
            <span className="text-white font-semibold">
              دولة الإمارات العربية المتحدة
            </span>
            ، نعمل كجسر استراتيجي يربط الأسواق العالمية عبر حلول لوجستية مبتكرة
            وسلاسل توريد تضمن وصول بضائعكم بكفاءة وأمان.
          </p>

          {/* 5. الوسوم (Responsive Tags) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
            {["استيراد عالمي", "تصدير لوجستي", "تخليص جمركي"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/70 border border-white/20 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm hover:bg-[#D4A757]/20 transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 7. زر التفاعل */}
          <div className="mt-12 flex justify-center md:justify-start">
            <Link
              to={"/ourjourney"}
              className="group flex items-center gap-3 bg-[#D4A757] hover:bg-[#b88e44] text-[#001534] font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#D4A757]/20"
            >
              اكتشف مسيرتنا
              <ChevronLeft className="group-hover:-translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* لمسة فنية خلفية (Glow effect) */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#D4A757]/5 blur-[120px] rounded-full -mb-32 -mr-32 pointer-events-none" />
    </section>
  );
};

export default AboutHero;
