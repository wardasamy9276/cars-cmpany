import { ChevronLeft, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// 1. فصل البيانات (Data) لتسهيل التعديل والصيانة
const FOOTER_DATA = {
  quickLinks: [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "خدماتنا", path: "/services" },
    { name: "المدونة والصفقات", path: "/blog" },
    { name: "الدفع الإلكتروني", path: "/payment" },
    { name: "اتصل بنا", path: "/contact" },
  ],
  services: [
    { name: "خدمات الاستيراد", path: "/services/import" },
    { name: "خدمات التصدير", path: "/services/export" },
    { name: "التجارة الدولية", path: "/services/international-trade" },
    { name: "الاستشارات التجارية", path: "/services/consulting" },
    { name: "دعم اللوجستيات", path: "/services/logistics" },
    { name: "تحليل الأسواق", path: "/services/market-analysis" },
  ],
  contact: {
    address:
      "عجمان - برج إمبيرجام، الطابق السادس والعشرون، BC-891332، الإمارات",
    phone: "+971 58 855 2096",
    email: "info@apollogrouptrading.com",
    // socials: [
    //   { Icon: Twitter, link: "#" },
    //   { Icon: Facebook, link: "#" },
    //   { Icon: Linkedin, link: "#" },
    // ],
  },
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#000b1a] text-white pt-20 pb-10 border-t border-white/5"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* العمود 1: عن الشركة والشركات الاجتماعية */}
          <div className="space-y-6">
            <img
              src="/logo-path.png"
              alt="Apollo Group Logo"
              className="h-16 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              أبولو جروب تريدينج للاستيراد والتصدير — شركة تجارة دولية رائدة
              مقرها عجمان، الإمارات. متخصصة في حلول الاستيراد والتصدير والتجارة
              العالمية.
            </p>
            <div className="flex gap-4">
              {/* {FOOTER_DATA.contact.socials.map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))} */}
            </div>
          </div>

          {/* العمود 2: روابط سريعة */}
          <div>
            <h4 className="text-[#c5a059] font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-0.5 after:bg-[#c5a059]">
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              {FOOTER_DATA.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#c5a059] transition-all group"
                  >
                    <ChevronLeft
                      size={14}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 3: خدماتنا */}
          <div>
            <h4 className="text-[#c5a059] font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-0.5 after:bg-[#c5a059]">
              خدماتنا
            </h4>
            <ul className="space-y-4">
              {FOOTER_DATA.services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#c5a059] transition-all group"
                  >
                    <ChevronLeft
                      size={14}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 4: معلومات التواصل */}
          <div>
            <h4 className="text-[#c5a059] font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-0.5 after:bg-[#c5a059]">
              معلومات التواصل
            </h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin
                  className="text-[#c5a059] shrink-0 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span className="leading-relaxed">
                  {FOOTER_DATA.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone
                  className="text-[#c5a059] shrink-0 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <a
                  href={`tel:${FOOTER_DATA.contact.phone}`}
                  dir="ltr"
                  className="hover:text-white transition-colors"
                >
                  {FOOTER_DATA.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail
                  className="text-[#c5a059] shrink-0 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <a
                  href={`mailto:${FOOTER_DATA.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {FOOTER_DATA.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* الحقوق السفلى */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] md:text-xs gap-4">
          <p className="text-center md:text-right">
            © {currentYear} أبولو جروب تريدينج للاستيراد والتصدير FZE LLC. جميع
            الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-[#c5a059] transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#c5a059] transition-colors"
            >
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
