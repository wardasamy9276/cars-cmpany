import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import heroImage from "../../assets/img/apollo_logo_4cc4d563.png";
export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center
     bg-[#0a1e3d] overflow-hidden px-6 md:px-12 py-16"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#CDA434 0.5px, transparent 0.5px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#CDA434]/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#CDA434]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div
          dir="rtl"
          className={`transition-all duration-1000 delay-300 transform ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[#CDA434] text-sm mb-8">
            <span className="w-2 h-2 bg-[#CDA434] rounded-full animate-pulse"></span>
            المنطقة الحرة، عجمان، الإمارات
          </div>

          <h1
            className="text-5xl md:text-3xl  flex gap-2
           font-bold text-white mb-6 "
          >
            <span className="text-[#CDA434]">بوابتك</span>
            للتجارة العالمية
          </h1>

          <p className="text-gray-300 text-lg md:text-1 mb-10 leading-relaxed max-w-xl">
            أبولو جروب تريدينج للاستيراد والتصدير — نربط الشركات حول العالم من
            خلال حلول الاستيراد والتصدير والتجارة الدولية المتخصصة من قلب
            الإمارات العربية المتحدة.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/services"
              className="bg-[#CDA434] text-[#0a1e3d] px-10 py-4 rounded-xl 
              font-bold text-lg flex items-center gap-3 
              hover:bg-[#b88f2d] hover:-translate-y-1
              transition-all shadow-lg shadow-[#CDA434]/20 active:scale-95 group"
            >
              استكشف خدماتنا
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1.5 transition-transform" />
            </Link>

            <Link
              to="/loginpage"
              className="border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:border-[#CDA434] hover:text-[#CDA434] hover:-translate-y-1 transition-all active:scale-95"
            >
              اتصل بنا
            </Link>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 transform ${
            isLoaded
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 translate-y-10"
          }`}
        >
          <div className="relative group">
            <div
              className="absolute 
             to-transparent blur-2xl opacity-50 group-hover:opacity-100
              transition-opacity"
            ></div>

            <img
              src={heroImage}
              alt="Apollo Group Trading"
              className="relative w-full max-w-lg mx-auto drop-shadow-[0_20px_50px_rgba(205,164,52,0.15)] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
