import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import imgs from "../../assets/img/apollo_logo_4cc4d563.png";

// مكون العداد: يظهر الرقم ثابت، ويبدأ العد من 0 عند الهوفر
const HoverCounter = ({
  value,
  isHovered,
}: {
  value: number;
  isHovered: boolean;
}) => {
  const [count, setCount] = useState(value);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isHovered) {
      const end = value;
      const duration = 1000;
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1)
          animationRef.current = requestAnimationFrame(updateCount);
      };
      animationRef.current = requestAnimationFrame(updateCount);
    } else {
      setCount(value);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered, value]);

  return <span>{count}</span>;
};

const AboutUsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // البيانات الظاهرة في الصورة
  const stats = [
    { label: "دولة", value: 50 },
    { label: "سنوات", value: 10 },
    { label: "صفقة", value: 1000 },
    { label: "شريك", value: 500 },
  ];

  return (
    <div className="bg-white font-sans overflow-hidden" dir="rtl">
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* الجانب الأيمن: كرت الإحصائيات الكحلي */}
            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#001534] rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-10"
              >
                {/* الشعار الأبيض */}
                <div className="bg-white rounded-2xl p-6 mb-10 flex justify-center">
                  <img
                    src={imgs}
                    alt="Apollo Group Trading"
                    className="h-16 md:h-24 w-auto object-contain"
                  />
                </div>

                {/* شبكة الأرقام الأربعة */}
                <div className="grid grid-cols-2 gap-6 text-center">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="bg-[#0a2342] border border-white/5 rounded-2xl p-6 transition-all hover:bg-white/10 cursor-pointer"
                    >
                      <div className="text-[#D4A757] text-4xl md:text-5xl font-bold mb-2 flex justify-center items-center gap-1">
                        <span className="order-2 text-2xl md:text-3xl">+</span>
                        <HoverCounter
                          value={stat.value}
                          isHovered={hoveredCard === index}
                        />
                      </div>
                      <div className="text-gray-300 text-sm md:text-base font-bold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* الجانب الأيسر: النصوص الكاملة من الصورة */}
            <div className="w-full lg:w-1/2 text-right space-y-6 order-1 lg:order-2">
              <span className="text-[#D4A757] font-bold text-lg inline-block mb-2">
                قصتنا
              </span>

              <h2 className="text-[#001534] text-4xl md:text-5xl font-black leading-tight">
                مبنية على الثقة، مدفوعة بالتميز
              </h2>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  تأسست أبولو جروب تريدينج للاستيراد والتصدير برؤية واضحة: أن
                  تصبح الجسر الأكثر موثوقية بين الشركات الباحثة عن فرص التجارة
                  العالمية. تأسست في المنطقة الحرة المرموقة بعجمان، ونمت من شركة
                  تجارية إقليمية إلى قوة عالمية.
                </p>
                <p>
                  يجلب فريقنا من المحترفين التجاريين المتمرسين عقوداً من الخبرة
                  المجمعة في التجارة الدولية واللوجستيات وتحليل السوق. نفهم
                  تعقيدات التجارة العالمية ونقدم حلولاً مخصصة تساعد عملاءنا على
                  التعامل مع هذه التحديات بثقة.
                </p>
              </div>

              {/* كادر المهمة السفلي */}
              <div className="pt-6">
                <div className="bg-[#ebf3fa] border-r-4 border-[#D4A757] p-6 rounded-lg">
                  <p className="text-[#001534] font-bold text-xl md:text-2xl leading-relaxed">
                    "مهمتنا هي جعل التجارة الدولية في متناول الجميع وبشفافية
                    تامة للشركات من جميع الأحجام."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
