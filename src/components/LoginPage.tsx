import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const logo = "../assets/images/apollo-logo.png";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // دالة التحقق من البيانات
  const validate = () => {
    const newErrors: typeof errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "يرجى إدخال البريد الإلكتروني";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "صيغة البريد الإلكتروني غير صحيحة";
    }

    if (!formData.password) {
      newErrors.password = "يرجى إدخال كلمة المرور";
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (validate()) {
      setIsLoading(true);

      // محاكاة الاتصال بالسيرفر (API Call)
      setTimeout(() => {
        setIsLoading(false);
        // هنا يمكنك إضافة منطق التحقق من قاعدة البيانات
        if (
          formData.email === "admin@apollo.com" &&
          formData.password === "123456"
        ) {
          setIsSuccess(true);
          console.log("تم تسجيل الدخول بنجاح");
        } else {
          setErrors({ general: "البريد الإلكتروني أو كلمة المرور غير صحيحة" });
        }
      }, 1500);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#001534] flex items-center justify-center p-4 relative overflow-hidden"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[500px] bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative z-10"
      >
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="h-12 mx-auto mb-6" />
          <h1 className="text-[#001534] text-2xl font-black">تسجيل الدخول</h1>
        </div>

        {/* تنبيه الخطأ العام */}
        <AnimatePresence>
          {errors.general && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-red-50 border-r-4 border-red-500 p-4 mb-6 flex items-center gap-3 text-red-700 rounded-lg"
            >
              <AlertCircle size={20} />
              <span className="text-sm font-bold">{errors.general}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* تنبيه النجاح */}
        {isSuccess && (
          <div className="bg-green-50 border-r-4 border-green-500 p-4 mb-6 flex items-center gap-3 text-green-700 rounded-lg">
            <CheckCircle2 size={20} />
            <span className="text-sm font-bold">
              تم تسجيل الدخول بنجاح! جاري التحويل...
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* البريد الإلكتروني */}
          <div className="space-y-1">
            <label className="text-[#001534] font-bold text-sm mr-1">
              البريد الإلكتروني
            </label>
            <div
              className={`relative transition-all ${errors.email ? "shake" : ""}`}
            >
              <Mail
                className={`absolute right-4 top-1/2 -translate-y-1/2 ${errors.email ? "text-red-500" : "text-gray-400"}`}
                size={20}
              />
              <input
                type="email"
                placeholder="example@apollo.com"
                className={`w-full bg-gray-50 border ${errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-[#D4A757] focus:ring-[#D4A757]/20"} rounded-2xl p-4 pr-12 outline-none focus:ring-4 transition-all text-sm text-[#001534]`}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs font-bold mt-1 mr-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* كلمة المرور */}
          <div className="space-y-1">
            <label className="text-[#001534] font-bold text-sm mr-1">
              كلمة المرور
            </label>
            <div className="relative">
              <Lock
                className={`absolute right-4 top-1/2 -translate-y-1/2 ${errors.password ? "text-red-500" : "text-gray-400"}`}
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full bg-gray-50 border ${errors.password ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-[#D4A757] focus:ring-[#D4A757]/20"} rounded-2xl p-4 pr-12 outline-none focus:ring-4 transition-all text-sm text-[#001534]`}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#001534]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs font-bold mt-1 mr-1">
                {errors.password}
              </p>
            )}
          </div>

          <button
            disabled={isLoading || isSuccess}
            type="submit"
            className="w-full bg-[#001534] text-white p-4 rounded-2xl font-black text-lg shadow-xl shadow-[#001534]/20 flex items-center justify-center gap-3 hover:bg-[#0a1e3d] disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-4"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <LogIn size={22} />
                دخول النظام
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* زينة الخلفية */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A757]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A757]/5 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default LoginPage;
