import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt, FaPlus } from "react-icons/fa";
import Navbar from "../../components/Navbar";

export default function Addresses() {
  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Link to="/account" className="inline-flex items-center gap-2 text-xs text-gray-500 transition hover:text-blue-600 sm:text-sm">
            <FaArrowRight />
            بازگشت به حساب کاربری
          </Link>

          <div className="mt-5 sm:mt-7">
            <span className="text-[10px] font-semibold text-blue-600 sm:text-xs">REZIN TURK</span>

            <h1 className="mt-1 text-2xl font-bold text-[#071936] sm:text-4xl">آدرس‌ها</h1>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">آدرس‌های ارسال سفارش خود را مدیریت کنید.</p>
          </div>

          <button type="button" className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3.5 text-xs font-bold text-white transition hover:bg-blue-700 sm:text-sm">
            <FaPlus />
            افزودن آدرس جدید
          </button>

          <div className="mt-5 rounded-3xl border border-blue-100 bg-gray-50 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <FaMapMarkerAlt />
            </div>

            <h2 className="mt-4 font-bold text-[#071936]">هنوز آدرسی ثبت نشده است</h2>

            <p className="mt-2 text-xs text-gray-500">برای ارسال سفارش، یک آدرس به حساب خود اضافه کنید.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
