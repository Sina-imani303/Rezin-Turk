import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.phone.trim() || !form.password.trim()) {
      return;
    }

    console.log("Login:", form);
  };

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <main className="min-h-screen pt-32 pb-16 px-5 sm:px-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-4xl border border-blue-100 shadow-xl p-6 sm:p-8 lg:p-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition duration-300">
            <FaArrowRight />
            بازگشت به فروشگاه
          </Link>

          <div className="mt-8 text-center">
            <img src="/logo/logo.png" alt="Rezin Turk" className="w-28 h-20 object-contain mx-auto" />

            <span className="block mt-3 text-blue-600 text-sm font-semibold">REZIN TURK</span>

            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-[#071936]">ورود به حساب</h1>

            <p className="mt-3 text-sm text-gray-500 leading-7">برای ورود شماره تلفن و رمز عبور خود را وارد کنید.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">شماره تلفن</label>

              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                placeholder="09120000000"
                dir="ltr"
                className="w-full h-12 rounded-2xl border border-blue-100 bg-gray-50 px-4 text-black outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">رمز عبور</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                  placeholder="رمز عبور"
                  className="w-full h-12 rounded-2xl border border-blue-100 bg-gray-50 px-4 pl-12 text-black outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-300"
                />

                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition duration-300">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-blue-200 transition duration-300">
              ورود
            </button>
          </form>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-100" />

            <span className="text-xs text-gray-400 whitespace-nowrap">حساب کاربری ندارید؟</span>

            <div className="h-px flex-1 bg-gray-100" />
          </div>

          <Link to="/register" className="mt-5 flex items-center justify-center w-full h-12 rounded-2xl border border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold transition duration-300">
            ثبت نام
          </Link>
        </div>
      </main>
    </div>
  );
}
