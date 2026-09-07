import { Link } from "react-router-dom";
import { FaShoppingBag, FaTruck, FaMapMarkerAlt, FaHistory, FaArrowLeft, FaUser } from "react-icons/fa";
import Navbar from "../../components/Navbar";

export default function Account() {
  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-blue-100 bg-[#f5f8ff] p-5 sm:rounded-[36px] sm:p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200 sm:h-16 sm:w-16">
                <FaUser className="text-xl sm:text-2xl" />
              </div>

              <div>
                <span className="text-[10px] font-semibold text-blue-600 sm:text-xs">REZIN TURK</span>

                <h1 className="mt-1 text-2xl font-bold text-[#071936] sm:text-3xl">حساب کاربری</h1>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">مدیریت سفارش‌ها و اطلاعات حساب شما</p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-5">
            <Link to="/account/orders" className="group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <FaShoppingBag />
                </div>

                <FaArrowLeft className="text-sm text-gray-300 transition group-hover:-translate-x-1 group-hover:text-blue-600" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#071936]">سفارش‌های من</h2>

              <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">مشاهده سفارش‌های ثبت شده و جزئیات آن‌ها</p>
            </Link>

            <Link to="/account/orders" className="group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <FaTruck />
                </div>

                <FaArrowLeft className="text-sm text-gray-300 transition group-hover:-translate-x-1 group-hover:text-blue-600" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#071936]">وضعیت سفارش</h2>

              <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">پیگیری وضعیت سفارش و مراحل ارسال</p>
            </Link>

            <Link to="/account/addresses" className="group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <FaMapMarkerAlt />
                </div>

                <FaArrowLeft className="text-sm text-gray-300 transition group-hover:-translate-x-1 group-hover:text-blue-600" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#071936]">آدرس‌ها</h2>

              <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">مدیریت آدرس‌های ارسال سفارش</p>
            </Link>

            <Link to="/account/history" className="group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <FaHistory />
                </div>

                <FaArrowLeft className="text-sm text-gray-300 transition group-hover:-translate-x-1 group-hover:text-blue-600" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#071936]">سابقه خرید</h2>

              <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">مشاهده سوابق سفارش‌ها و خریدهای قبلی</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
