"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

// مكون العداد المنفصل
const Counter = ({ value, trigger }: { value: number; trigger: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    // إذا تغيرت حالة التريجر (عند دخول الماوس)، ابدأ العد من 0
    if (trigger) {
      count.set(0); // إعادة الصفر
      animate(count, value, { duration: 1.5, ease: "easeOut" });
    }
  }, [trigger, count, value]);

  return <motion.span>{rounded}</motion.span>;
};

const stats = [
  { number: 500, label: "شريك عالمي" },
  { number: 50, label: "دولة نخدمها" },
  { number: 10, label: "سنوات خبرة" },
  { number: 1000, label: "صفقة مكتملة" },
];

export const StatsSection = () => {
  // مصفوفة لحفظ حالة الهوفر لكل كارت بشكل منفصل
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              // تفعيل العداد عند دخول الماوس
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                translateY: -10,
              }}
              className="group border border-transparent hover:border-[#CDA434] rounded-2xl p-10 flex flex-col items-center justify-center shadow-sm bg-white transition-all hover:shadow-xl cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-[#212121] mb-3 tracking-tighter group-hover:text-[#CDA434] transition-colors flex items-center gap-1">
                <span>+</span>
                {/* نمرر true فقط للكارت الذي نقف عليه حالياً */}
                <Counter value={stat.number} trigger={hoveredIndex === index} />
              </h3>
              <p className="text-[#666] text-lg font-medium group-hover:text-gray-900 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
