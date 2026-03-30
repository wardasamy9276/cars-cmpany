"use client";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  Users,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const featuresList = [
  "شركة مرخصة في المنطقة الحرة بعجمان، الإمارات",
  "رخصة تجارية مسجلة: BC-891332",
  "شبكة عالمية تمتد عبر أكثر من 50 دولة",
  "دعم عملاء مخصص على مدار الساعة",
  "أنظمة دفع آمنة وشفافة",
];

const statsGrid = [
  {
    title: "معتمدون ومرخصون",
    icon: <BadgeCheck className="w-6 h-6 text-[#c5a059]" />,
  },
  { title: "شبكة عالمية", icon: <Globe className="w-6 h-6 text-[#c5a059]" /> },
  {
    title: "معاملات آمنة",
    icon: <ShieldCheck className="w-6 h-6 text-[#c5a059]" />,
  },
  { title: "فريق خبراء", icon: <Users className="w-6 h-6 text-[#c5a059]" /> },
];

export const WhyUsSection = () => {
  return (
    <section
      className="py-20 bg-[#001b39] text-white overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* الجانب الأيمن: القائمة المستطيلة */}
          <div className="space-y-4">
            {featuresList.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  x: -10,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className="flex items-center justify-between p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all cursor-default"
              >
                <span className="text-lg font-medium text-gray-200">
                  {feature}
                </span>
                <CheckCircle2 className="text-[#c5a059] w-6 h-6 flex-shrink-0" />
              </motion.div>
            ))}
          </div>

          {/* الجانب الأيسر: المحتوى والشبكة الصغيرة */}
          <div className="text-right">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#c5a059] font-bold text-lg mb-4 block"
            >
              لماذا أبولو
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            >
              شريكك التجاري <span className="text-[#c5a059]">الموثوق</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-lg mb-10 leading-relaxed"
            >
              مع أكثر من عقد من الخبرة في التجارة الدولية، بنت أبولو جروب
              تريدينج سمعة متميزة في التميز والموثوقية والابتكار في التجارة
              العالمية.
            </motion.p>

            {/* الشبكة المصغرة 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {statsGrid.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(197, 160, 89, 0.1)",
                  }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 transition-colors"
                >
                  <div className="p-3 bg-[#001b39] rounded-xl border border-[#c5a059]/20 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-200">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
