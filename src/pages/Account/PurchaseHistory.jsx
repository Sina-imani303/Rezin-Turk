import { Link } from "react-router-dom";
import { FaArrowRight, FaHistory } from "react-icons/fa";
import Navbar from "../../components/Navbar";

export default function PurchaseHistory() {
  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <Link to="/account" className="inline-flex items-center gap-2 text-xs text-gray-500 transition hover:text-blue-600 sm:text-sm">
            <FaArrowRight />
            بازگشت به حساب کاربری
          </Link>

          <div className="mt-5 sm:mt-7">
            <span className="text-[10px] font-semibold text-blue-600 sm:text-xs">REZIN TURK</span>

            <h1 className="mt-1 text-2xl font-bold text-[#071936] sm:text-4xl">سابقه خرید</h1>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">سفارش‌ها و خریدهای قبلی شما در این قسمت نمایش داده می‌شوند.</p>
          </div>

          <div className="mt-7 flex min-h-80 flex-col items-center justify-center rounded-3xl border border-blue-100 bg-gray-50 px-5 text-center sm:mt-10 sm:min-h-96">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <FaHistory className="text-2xl" />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#071936] sm:text-xl">سابقه خریدی وجود ندارد</h2>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">بعد از ثبت اولین سفارش، سابقه خرید شما اینجا نمایش داده می‌شود.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
