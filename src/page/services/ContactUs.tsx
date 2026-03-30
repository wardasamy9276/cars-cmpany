import { CreditCard, Info, ShieldCheck } from "lucide-react";

const PaymentForm = () => {
  return (
    <div className="" dir="rtl">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
        <div className="flex-[2] p-8 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-apollo-dark p-2 rounded-lg text-white">
                <CreditCard size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">تفاصيل الدفع</h2>
            </div>
            {/* <span className="text-[10px] md:text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
              مدعوم بواسطة Stripe
            </span> */}
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                الاسم الكامل / الشركة *
              </label>
              <input
                type="text"
                placeholder="أدخل الاسم هنا"
                className="w-full p-3 rounded-xl border border-gray-200 focus:border-apollo-gold focus:ring-1 focus:ring-apollo-gold outline-none transition-all bg-gray-50/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                البريد الإلكتروني *
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full p-3 rounded-xl border border-gray-200 focus:border-apollo-gold focus:ring-1 focus:ring-apollo-gold outline-none transition-all bg-gray-50/50 text-left"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                المبلغ *
              </label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full p-3 rounded-xl border border-gray-200 focus:border-apollo-gold focus:ring-1 focus:ring-apollo-gold outline-none transition-all bg-gray-50/50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                العملة
              </label>
              <select className="w-full p-3 rounded-xl border border-gray-200 focus:border-apollo-gold bg-gray-50/50 outline-none cursor-pointer">
                <option>USD - دولار أمريكي</option>
                <option>AED - درهم إماراتي</option>
                <option>EUR - يورو</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">
                وصف الدفع *
              </label>
              <textarea
                placeholder="مثال: فاتورة خدمات استيراد رقم 1234"
                className="w-full p-3 rounded-xl border border-gray-200 focus:border-apollo-gold focus:ring-1 focus:ring-apollo-gold outline-none transition-all bg-gray-50/50 h-28 resize-none"
              />
            </div>

            <button className="md:col-span-2 bg-apollo-dark text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-3 mt-2">
              المتابعة لبوابة الدفع الآمنة
              <ShieldCheck size={20} className="text-apollo-gold" />
            </button>
          </form>
        </div>

        {/* القسم الأيسر: معلومات إضافية */}
        <div className="flex-1 bg-gray-50 p-8 border-r border-gray-100 flex flex-col gap-6">
          <div className="bg-apollo-dark text-white p-5 rounded-xl shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Info size={18} className="text-apollo-gold" />
              <h3 className="font-bold text-sm">معلومات الدفع</h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              تتم معالجة جميع المدفوعات بشكل مشفر تماماً. لن يتم تخزين بيانات
              بطاقتك على خوادمنا.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-800 border-b pb-2">
              العملات المقبولة
            </h4>
            <div className="flex flex-wrap gap-2">
              {["USD", "AED", "EUR", "GBP", "SAR"].map((curr) => (
                <span
                  key={curr}
                  className="text-[10px] bg-white border border-gray-200 px-2 py-1 rounded shadow-sm text-gray-600 font-bold"
                >
                  {curr}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 text-center border-t border-gray-200">
            <p className="text-[10px] text-gray-400 mb-1 font-medium">
              تحتاج لمساعدة؟
            </p>
            <a
              href="mailto:support@apollo.com"
              className="text-xs font-bold text-apollo-dark hover:text-apollo-gold transition-colors"
            >
              support@apollo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
