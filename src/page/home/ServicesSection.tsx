"use client";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Globe, Box, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "خدمات الاستيراد",
    description:
      "حلول استيراد متكاملة من الأسواق العالمية مع دعم كامل للامتثال والوثائق.",
    icon: <Box className="w-8 h-8 text-[#c5a059]" />,
  },
  {
    title: "خدمات التصدير",
    description:
      "وسّع نشاطك التجاري عالمياً مع إدارة التصدير الاحترافية والوصول إلى الأسواق الدولية.",
    icon: <Globe className="w-8 h-8 text-[#c5a059]" />,
  },
  {
    title: "التجارة الدولية",
    description:
      "حلول تجارية شاملة تربط المشترين والبائعين عبر القارات بأسعار تنافسية.",
    icon: <TrendingUp className="w-8 h-8 text-[#c5a059]" />,
  },
  {
    title: "الاستشارات التجارية",
    description:
      "إرشادات خبراء حول اللوائح التجارية واستراتيجيات دخول السوق وإدارة المخاطر.",
    icon: <ShieldCheck className="w-8 h-8 text-[#c5a059]" />,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#f0f5f9]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* العناوين العلوية */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#001b39] mb-4">
            خدماتنا الأساسية
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            نقدم حلولاً تجارية شاملة مصممة لاحتياجات عملك، تربطك بالأسواق
            العالمية بكفاءة وموثوقية.
          </p>
        </motion.div>

        {/* شبكة الكروت الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="bg-white p-8 rounded-3xl shadow-sm flex flex-col items-center text-center group cursor-pointer border border-transparent hover:border-[#c5a059]/30 transition-all"
            >
              {/* أيقونة الكارت */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-[#001b39] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/10"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-[#001b39] mb-4 group-hover:text-[#c5a059] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* زر عرض جميع الخدمات */}
        <Link to={"/servicespage"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 
          border-2 border-[#001b39] text-[#001b39]
           rounded-xl font-bold hover:bg-[#001b39]
            hover:text-white transition-all duration-300"
          >
            عرض جميع الخدمات
            <ChevronLeft size={20} />
          </motion.button>
        </Link>
      </div>
    </section>
  );
};
