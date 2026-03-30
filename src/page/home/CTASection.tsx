"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="relative py-24 px-4 bg-white" dir="rtl">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          whileHover={{ y: -5 }}
          className="group relative rounded-[50px] p-[5px] overflow-hidden"
        >
          {/* الطبقة المتحركة */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, #c5a059 100%)",
            }}
          />

          {/* الكارت الداخلي */}
          <div className="relative bg-[#001b39] rounded-[38px] overflow-hidden shadow-2xl z-10">
            {/* glow effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-[#c5a059]/20 transition duration-500"></div>

            <div className="relative h-[450px] p-8 md:p-16 flex flex-col items-center justify-center text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                هل أنت مستعد{" "}
                <span className="text-[#c5a059] block md:inline-block">
                  للتجارة عالمياً؟
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12"
              >
                تواصل معنا اليوم ودع خبراءنا يرشدونك عبر حلول التجارة الدولية
                السلسة.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
                {/* زر ابدأ اليوم */}
                <Link
                  to={"/"}
                  className="px-12 py-4 bg-[#c5a059] text-[#001b39] font-black rounded-2xl w-full text-xl text-center shadow-lg hover:scale-105 active:scale-95 transition"
                >
                  ابدأ اليوم
                </Link>

                {/* زر إجراء دفع */}
                <Link
                  to={"/"}
                  className="px-12 py-4 border border-white/20 hover:border-[#c5a059] text-white hover:text-[#c5a059] rounded-2xl w-full text-xl text-center transition active:scale-95"
                >
                  إجراء دفع
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
