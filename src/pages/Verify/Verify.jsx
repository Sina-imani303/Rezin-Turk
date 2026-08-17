import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../../components/Navbar";

export default function Verify() {
  const navigate = useNavigate();
  const location = useLocation();

  const phone = location.state?.phone || "";

  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 6) return;

    console.log("OTP:", otp);

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="min-h-screen pt-32 pb-16 px-5 sm:px-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-4xl border border-blue-100 shadow-xl p-6 sm:p-10">
          <Link to="/register" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition">
            <FaArrowRight />
            بازگشت
          </Link>

          <div className="text-center mt-10">
            <span className="text-blue-600 text-sm font-semibold">REZIN TURK</span>

            <h1 className="mt-3 text-3xl font-bold text-[#071936]">تأیید شماره تلفن</h1>

            <p className="mt-4 text-sm text-gray-500 leading-7">کد تأیید ارسال شده به شماره زیر را وارد کنید.</p>

            <p dir="ltr" className="mt-2 text-blue-600 font-semibold">
              {phone}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            <label className="block mb-2 text-sm font-semibold text-gray-700">کد تأیید</label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              placeholder="کد ۶ رقمی"
              dir="ltr"
              className="w-full h-14 rounded-2xl border border-blue-100 bg-gray-50 px-4 text-center text-xl tracking-[8px] text-black outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />

            <button type="submit" className="mt-5 w-full h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg transition">
              تأیید و ادامه
            </button>
          </form>

          <button type="button" className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 transition">
            ارسال مجدد کد
          </button>
        </div>
      </main>
    </div>
  );
}
