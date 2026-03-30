import React from "react";
import { Package, Ship, FileSearch, Factory, Box } from "lucide-react";

// 1. تعريف واجهة البيانات لكل خدمة
interface ServiceItem {
  id: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tag: string;
  title: string;
  description: string;
  features: string[];
}

// 2. بيانات الخدمات مع تحديد النوع
const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: Ship,
    tag: "الشراع - خدمات الشحن",
    title: "الشحن البحري والجوي المتكامل",
    description:
      "نقدم حلول شحن بحري عالمية عبر ميناء جبل علي، بالإضافة إلى شحن جوي سريع من مطار دبي الدولي.",
    features: [
      "شحن حاويات كاملة (FCL)",
      "حلول الشحن المبرد",
      "عقود تفضيلية",
      "الشحن الجوي السريع",
    ],
  },
  {
    id: 2,
    icon: Package,
    tag: "خدمات الاستيراد والتصدير",
    title: "استيراد وتصدير المواد الأولية",
    description:
      "ندير عمليات استيراد المواد الأولية الأساسية للصناعات المحلية في الإمارات بكفاءة.",
    features: [
      "البحث عن موردين",
      "إدارة الاتفاقيات",
      "فحص الجودة",
      "تنسيق اللوجستيات",
    ],
  },
  {
    id: 3,
    icon: FileSearch,
    tag: "الجمارك والامتثال",
    title: "تخليص جمركي واستشارات جمركية",
    description:
      "فريقنا الخبير في قوانين جمارك دبي يضمن امتثال شحناتك للوائح التنظيمية.",
    features: [
      "تخليص عبر مرسال 2",
      "شهادات المنشأ",
      "استشارات الرسوم",
      "إدارة الترانزيت",
    ],
  },
  {
    id: 4,
    icon: Box,
    tag: "المخازن والتوزيع",
    title: "التخزين في المناطق الحرة والتوزيع",
    description:
      "مساحات تخزين متطورة داخل المنطقة الحرة بجبل علي (جافزا) مع خدمات توزيع متكاملة.",
    features: [
      "تخزين جمركي",
      "إدارة المخزون WMS",
      "تغليف الشحنات",
      "توزيع الميل الأخير",
    ],
  },
  {
    id: 5,
    icon: Factory,
    tag: "حلول سلاسل الإمداد",
    title: "إدارة مشاريع التوريد الخاصة",
    description:
      "نصمم حلولاً متكاملة للمشاريع الصناعية والإنشائية الكبرى بدءاً من التخطيط حتى التسليم.",
    features: [
      "توريد للمشاريع",
      "تنسيق لوجستي",
      "تسليم بضائع ثقيلة",
      "مراقبة العمليات",
    ],
  },
];

// 3. تعريف الـ Props للمكون الفرعي
interface ServiceCardProps extends Omit<ServiceItem, "id"> {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  tag,
  title,
  description,
  features,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <section
      className="py-20 border-b border-gray-100 last:border-b-0 bg-white"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* المحتوى النصي */}
        <div
          className={`flex flex-col space-y-6 ${isEven ? "md:order-1" : "md:order-2"}`}
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#001534] p-3 rounded-xl shadow-lg">
              <Icon size={28} className="text-[#D4A757]" />
            </div>
            <p className="text-[#001534]/70 font-semibold">{tag}</p>
          </div>

          <h2 className="text-[#001534] text-4xl md:text-5xl font-extrabold leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>

          <ul className="space-y-4 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            {features.map((feature, fIndex) => (
              <li
                key={fIndex}
                className="flex items-start gap-3 text-gray-700 font-medium"
              >
                <div className="flex items-center justify-center bg-[#D4A757]/10 p-1.5 rounded-full mt-1 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4A757]" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* البطاقة البصرية */}
        <div
          className={`flex justify-center ${isEven ? "md:order-2" : "md:order-1"}`}
        >
          <div className="w-full max-w-lg bg-blue-50/70 rounded-[40px] p-12 flex flex-col items-center justify-center border border-blue-100 shadow-sm aspect-video">
            <div className="bg-[#001534] p-8 rounded-[30px] mb-8 shadow-2xl relative">
              <Icon size={80} className="text-[#D4A757]" />
              <div className="absolute inset-0 bg-[#D4A757]/20 blur-2xl rounded-full -z-10 scale-90" />
            </div>
            <h3 className="text-[#001534] text-2xl font-bold mb-2 text-center">
              الشراع اللوجستية
            </h3>
            <p className="text-[#D4A757] font-semibold text-lg">
              Al Shira'a Logistics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. المكون الرئيسي
const ServicesShowcase: React.FC = () => {
  return (
    <main className="bg-white">
      <div className="text-[#001534]  py-24 px-8 text-center" dir="rtl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          خدماتنا اللوجستية
        </h1>
        <p className="text-lg text-[#001534]0 max-w-3xl mx-auto">
          حلول توريد وشحن متكاملة من قلب الإمارات.
        </p>
      </div>

      {servicesData.map((service, index) => (
        <ServiceCard
          key={service.id}
          icon={service.icon}
          tag={service.tag}
          title={service.title}
          description={service.description}
          features={service.features}
          index={index}
        />
      ))}
    </main>
  );
};

export default ServicesShowcase;
