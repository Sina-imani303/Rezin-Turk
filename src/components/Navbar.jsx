import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const totalItems = 0;

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header dir="rtl" className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="h-17 sm:h-18 px-3 sm:px-5 md:px-6 bg-white/95 backdrop-blur-xl border border-blue-100 shadow-lg rounded-full flex items-center justify-between">
            <Link to="/" className="flex items-center shrink-0" aria-label="Rezin Turk">
              <img src="/logo/logo.png" alt="Rezin Turk" className="w-18 sm:w-20.5 h-12 sm:h-14 object-contain" />
            </Link>

            <div className="hidden md:flex items-center justify-center gap-9 lg:gap-7 xl:gap-12">
              <Link to="/" className="text-sm lg:text-[15px] font-semibold text-[#071936] hover:text-blue-600 transition duration-300">
                خانه
              </Link>

              <Link to="/products" className="text-sm lg:text-[15px] font-semibold text-[#071936] hover:text-blue-600 transition duration-300">
                محصولات
              </Link>

              <Link to="/contact" className="text-sm lg:text-[15px] font-semibold text-[#071936] hover:text-blue-600 transition duration-300">
                ارتباط با ما
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-9">
              <Link to="/account" className="flex items-center gap-2 text-sm font-semibold text-[#071936] hover:text-blue-600 transition">
                <FaUser className="text-xs" />
                <span>حساب کاربری</span>
              </Link>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <Link to="/login" className="text-sm font-semibold text-[#071936] hover:text-blue-600 transition">
                  ورود
                </Link>

                <span className="text-gray-300">/</span>

                <Link to="/register" className="text-sm font-semibold text-[#071936] hover:text-blue-600 transition">
                  ثبت نام
                </Link>
              </div>

              <Link to="/cart" className="relative flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 transition duration-300 shadow-md">
                <HiMiniShoppingBag className="w-5 h-5" />

                <span className="text-sm font-semibold whitespace-nowrap">سبد خرید</span>

                {totalItems > 0 && <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">{totalItems}</span>}
              </Link>
            </div>

            <button
              type="button"
              aria-label="باز کردن منو"
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden relative w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] sm:rounded-[18px] bg-[#061b4f] text-white flex items-center justify-center shadow-lg shadow-blue-200/50 hover:bg-blue-600 active:scale-90 transition-all duration-300"
            >
              <AiOutlineMenu className="w-5 h-5 sm:w-6 sm:h-6" />

              <span className="absolute inset-0.5 rounded-[15px] sm:rounded-2xl border border-white/10 pointer-events-none" />
            </button>
          </nav>
        </div>
      </header>

      {isDrawerOpen && (
        <>
          <div onClick={closeDrawer} className="fixed inset-0 z-60 bg-[#020b1c]/50 backdrop-blur-sm" />

          <aside dir="rtl" className="fixed top-0 right-0 bottom-0 z-70 w-[82%] max-w-90 bg-white shadow-2xl border-l border-blue-100 overflow-hidden animate-[slideIn_0.3s_ease-out]">
            <div className="relative bg-[#061b4f] px-5 sm:px-6 py-5 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-44 h-44 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="absolute -bottom-24 -right-20 w-48 h-48 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <Link to="/" onClick={closeDrawer} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                    <img src="/logo/logo.png" alt="Rezin Turk" className="w-full h-full object-contain" />
                  </div>

                  <div>
                    <p className="text-blue-300 text-[10px] sm:text-xs font-medium tracking-wide">REZIN TURK</p>

                    <h2 className="mt-0.5 text-white text-lg sm:text-xl font-bold">منوی سایت</h2>
                  </div>
                </Link>

                <button
                  type="button"
                  aria-label="بستن منو"
                  onClick={closeDrawer}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 hover:rotate-90 active:scale-90 transition-all duration-300"
                >
                  <AiOutlineClose className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="h-[calc(100%-104px)] overflow-y-auto px-4 sm:px-5 py-5">
              <div className="space-y-2">
                <Link
                  to="/"
                  onClick={closeDrawer}
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-600 hover:text-white active:scale-[0.98] transition-all duration-300"
                >
                  <span>خانه</span>

                  <span className="text-blue-400 group-hover:text-white group-hover:-translate-x-1 transition-transform">←</span>
                </Link>

                <Link
                  to="/products"
                  onClick={closeDrawer}
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-600 hover:text-white active:scale-[0.98] transition-all duration-300"
                >
                  <span>محصولات</span>

                  <span className="text-blue-400 group-hover:text-white group-hover:-translate-x-1 transition-transform">←</span>
                </Link>

                <Link
                  to="/contact"
                  onClick={closeDrawer}
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-600 hover:text-white active:scale-[0.98] transition-all duration-300"
                >
                  <span>ارتباط با ما</span>

                  <span className="text-blue-400 group-hover:text-white group-hover:-translate-x-1 transition-transform">←</span>
                </Link>
              </div>

              <div className="h-px bg-blue-100 my-6" />

              <div className="space-y-2">
                <Link
                  to="/account"
                  onClick={closeDrawer}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-50 hover:text-blue-600 active:scale-[0.98] transition"
                >
                  <span className="flex items-center gap-3">
                    <FaUser className="text-sm text-blue-500" />
                    حساب کاربری
                  </span>

                  <span className="text-blue-400">←</span>
                </Link>

                <Link
                  to="/login"
                  onClick={closeDrawer}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-50 hover:text-blue-600 active:scale-[0.98] transition"
                >
                  <span>ورود</span>

                  <span className="text-blue-400">←</span>
                </Link>

                <Link
                  to="/register"
                  onClick={closeDrawer}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-50 hover:text-blue-600 active:scale-[0.98] transition"
                >
                  <span>ثبت نام</span>

                  <span className="text-blue-400">←</span>
                </Link>

                <Link
                  to="/cart"
                  onClick={closeDrawer}
                  className="mt-3 flex items-center gap-3 px-5 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-200/50 active:scale-[0.98] transition"
                >
                  <HiMiniShoppingBag className="w-5 h-5" />

                  <span>سبد خرید</span>

                  {totalItems > 0 && <span className="mr-auto rounded-full bg-white text-blue-600 text-xs font-bold px-2 py-1">{totalItems}</span>}
                </Link>
              </div>

              <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-5 text-center">
                <p className="text-xs text-blue-400 font-semibold">REZIN TURK</p>

                <p className="mt-2 text-sm text-gray-500 leading-7">ارائه‌دهنده انواع تینر و محصولات شیمیایی</p>
              </div>
            </div>
          </aside>
        </>
      )}

      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0.8;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
