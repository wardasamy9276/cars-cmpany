import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "ما هي رؤية شركة أبولو جروب تريدينج؟",
      answer:
        "رؤيتنا هي أن نصبح الجسر الأكثر موثوقية بين الشركات التي تبحث عن فرص في التجارة العالمية، وتقديم حلول مخصصة للتحديات التجارية.",
    },
    {
      question: "أين يقع المقر الرئيسي للشركة؟",
      answer:
        "تأسست الشركة وتتواجد في المنطقة الحرة المرموقة بإمارة عجمان في دولة الإمارات العربية المتحدة.",
    },
    {
      question: "ما هي خبرة الفريق القائم على الشركة؟",
      answer:
        "يضم فريقنا محترفين تجاريين متمرسين لديهم عقود من الخبرة المجمعة في التجارة الدولية واللوجستيات وتحليل السوق العالمي.",
    },
    {
      question: "ما هي المهمة الأساسية التي تسعى الشركة لتحقيقها؟",
      answer:
        "مهمتنا هي جعل التجارة الدولية في متناول الجميع وبشفافية تامة للشركات من جميع الأحجام.",
    },
    {
      question: "كم عدد الدول التي تصل إليها شبكة أبولو جروب؟",
      answer:
        "توسعت شبكتنا اللوجستية وعملياتنا لتشمل أكثر من 50 دولة حول العالم.",
    },
    {
      question: "منذ متى بدأت الشركة نشاطها؟",
      answer:
        "بدأت رحلتنا في عام 2010 كشركة تجارية إقليمية ثم نمت لتصبح قوة عالمية في سوق الاستيراد والتصدير.",
    },
    {
      question: "ما هي أبرز الإنجازات التي حققتها الشركة في مسيرتها؟",
      answer:
        "منذ تأسيسنا، نجحنا في إتمام أكثر من 1000 صفقة تجارية ناجحة وبناء شراكات مع أكثر من 500 شريك استراتيجي.",
    },
    {
      question: "كيف تواكب الشركة التطور الرقمي في التجارة؟",
      answer:
        "في عام 2019، قمنا بإطلاق منصة التجارة الرقمية الخاصة بنا لتسهيل العمليات وربط الأسواق بشكل أسرع وأكثر كفاءة.",
    },
  ];

  return (
    <section className="py-24 bg-[#F4F7FA]" dir="rtl">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[#D4A757] font-black text-lg border-b-2 border-[#D4A757] pb-1 uppercase tracking-widest">
            الأسئلة الشائعة
          </span>
          <h2 className="text-[#001534] text-4xl md:text-5xl font-black mt-6  flex gap-2 justify-center items-center">
            كل ما تود معرفته عن
            <span className="text-[#D4A757]">أبولو جروب</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-right group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-lg transition-colors ${openIndex === index ? "bg-[#D4A757] text-white" : "bg-gray-50 text-[#D4A757]"}`}
                  >
                    <HelpCircle size={22} />
                  </div>
                  <span
                    className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? "text-[#D4A757]" : "text-[#001534]"}`}
                  >
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-gray-400"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 text-lg leading-relaxed border-t border-gray-50 mt-2 font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
