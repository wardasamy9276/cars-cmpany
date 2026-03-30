import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react"; // العودة لأيقوناتك الأصلية
import { FaFacebookF, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import en from "../../i18n/en";
import ar from "../../i18n/ar";
import imge from "../../assets/img/apollo_logo_4cc4d563.png";

type LangType = "ar" | "English";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<LangType>("ar");
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const t = lang === "English" ? en : ar;

  const navLinks = [
    { name: t.home, path: "/" },
    { name: t.ourServices, path: "/services" },
    { name: t.blog, path: "/blog" },
    { name: t.contact, path: "/contactus" },
    { name: t.about, path: "/about" },
  ];

  return (
    <>
      {/* --- الأيقونات الجانبية الكبيرة (أسفل اليمين) --- */}
      <div
        className="fixed right-6 bottom-10 z-[100] flex flex-col gap-5"
        dir="rtl"
      >
        <a
          href="https://wa.me/201234567890"
          target="_blank"
          rel="noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-2 transition-all duration-300"
        >
          <FaWhatsapp size={35} />
        </a>

        <a
          href="https://facebook.com/apollo"
          target="_blank"
          rel="noreferrer"
          className="w-16 h-16 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(24,119,242,0.4)] hover:scale-110 hover:-translate-y-2 transition-all duration-300"
        >
          <FaFacebookF size={30} />
        </a>

        <a
          href="tel:+201234567890"
          className="w-16 h-16 bg-[#CDA434] text-[#0a1e3d] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(205,164,52,0.4)] hover:scale-110 hover:-translate-y-2 transition-all duration-300"
        >
          <FaPhoneAlt size={28} />
        </a>
      </div>

      <nav
        className={`bg-[#0a1e3d] text-white shadow-md sticky top-0 z-50 transition-all duration-1000 transform ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="transition-all duration-1000 delay-300">
            <img
              src={imge}
              alt="Logo"
              className="h-10 md:h-12 object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative py-2 group overflow-hidden"
                >
                  <span
                    className={`text-sm lg:text-base font-bold transition-all duration-300 ${
                      isActive
                        ? "text-[#CDA434]"
                        : "text-white group-hover:text-[#CDA434]"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute bottom-0 right-0 h-[2px] bg-[#CDA434] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/Login"
              className="px-7 py-2.5 bg-[#CDA434] rounded-full font-black text-[#0a1e3d] hover:bg-white hover:scale-105 transition-all shadow-lg active:scale-95"
            >
              {t.login}
            </Link>

            {/* تم إرجاع زر اللغة وتنسيق أيقونة Globe كما كانت في كودك الأصلي */}
            <button
              onClick={() => setLang(lang === "ar" ? "English" : "ar")}
              className="flex items-center gap-1 px-3 py-2 border border-transparent text-white hover:border-[#CDA434] hover:text-[#CDA434] rounded transition-all duration-300"
            >
              <span>{lang === "ar" ? "عربي" : "English"}</span>
              <Globe className="w-4 h-4" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#CDA434]"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* منيو الموبايل */}
        <div
          className={`md:hidden absolute w-full left-0 transition-all duration-500 bg-[#0a1e3d]/98 backdrop-blur-lg shadow-2xl ${
            isOpen
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`p-4 rounded-2xl text-center font-black text-xl transition-all ${
                  location.pathname === link.path
                    ? "bg-[#CDA434] text-[#0a1e3d]"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-white/10 text-center">
              <Link
                to="/Login"
                onClick={() => setIsOpen(false)}
                className="py-4 bg-[#CDA434] text-[#0a1e3d] font-black rounded-xl text-lg"
              >
                {t.login}
              </Link>
              <button
                onClick={() => {
                  setLang(lang === "ar" ? "English" : "ar");
                  setIsOpen(false);
                }}
                className="py-4 border-2 border-[#CDA434] text-[#CDA434] font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <Globe size={20} />
                <span>{lang === "ar" ? "العربية" : "English"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
