import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");

  const totalItems = 0;

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("Search:", search);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header dir="rtl" className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-7xl mx-auto">
          <nav className="h-20 px-4 sm:px-6 md:px-8 bg-white/95 backdrop-blur-xl border border-blue-100 shadow-lg rounded-full flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center shrink-0">
              <img src="/logo/logo.png" alt="Rezin Turk" className="w-20 sm:w-24 h-14 sm:h-16 object-contain" />
            </Link>

            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              <Link to="/" className="text-black font-medium hover:text-blue-600 transition duration-300">
                خانه
              </Link>

              <Link to="/products" className="text-black font-medium hover:text-blue-600 transition duration-300">
                محصولات
              </Link>

              <Link to="/contact" className="text-black font-medium hover:text-blue-600 transition duration-300">
                ارتباط با ما
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-3 lg:gap-5">
              <form onSubmit={handleSearch} className="relative">
                <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="جستجوی محصول..."
                  className="w-36 lg:w-52 xl:w-60 h-10 pr-10 pl-4 rounded-full bg-blue-50/60 border border-blue-100 text-black text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
              </form>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <Link to="/login" className="text-sm font-semibold text-black hover:text-blue-600 transition">
                  ورود
                </Link>

                <span className="text-gray-300">/</span>

                <Link to="/register" className="text-sm font-semibold text-black hover:text-blue-600 transition">
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
              className="md:hidden relative w-12 h-12 rounded-[18px] bg-[#061b4f] text-white flex items-center justify-center shadow-lg shadow-blue-200/60 hover:bg-blue-600 hover:shadow-blue-300/70 active:scale-90 transition-all duration-300"
            >
              <AiOutlineMenu className="w-6 h-6" />

              <span className="absolute inset-0.5 rounded-2xl border border-white/10 pointer-events-none" />
            </button>
          </nav>
        </div>
      </header>

      {isDrawerOpen && (
        <>
          <div onClick={closeDrawer} className="fixed inset-0 z-60 bg-[#020b1c]/50 backdrop-blur-md" />

          <div className="fixed top-3 bottom-3 right-3 z-70 w-[calc(100%-24px)] max-w-97.5 overflow-hidden rounded-[30px] bg-white shadow-2xl border border-blue-100" dir="rtl">
            <div className="relative bg-[#061b4f] px-6 py-5">
              <div className="absolute -top-20 -left-20 w-44 h-44 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="absolute -bottom-24 -right-20 w-48 h-48 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-blue-300 text-xs font-medium tracking-wide">REZIN TURK</p>

                  <h2 className="mt-1 text-white text-xl font-bold">منوی سایت</h2>
                </div>

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

            <div className="p-5 overflow-y-auto h-[calc(100%-104px)]">
              <form onSubmit={handleSearch} className="relative mb-6">
                <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="جستجوی محصول..."
                  className="w-full h-12 pr-11 pl-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-black text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100/60 transition"
                />
              </form>

              <div className="space-y-2">
                <Link
                  to="/"
                  onClick={closeDrawer}
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <span>خانه</span>

                  <span className="text-blue-400 group-hover:text-white group-hover:-translate-x-1 transition-transform">←</span>
                </Link>

                <Link
                  to="/products"
                  onClick={closeDrawer}
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <span>محصولات</span>

                  <span className="text-blue-400 group-hover:text-white group-hover:-translate-x-1 transition-transform">←</span>
                </Link>

                <Link
                  to="/about"
                  onClick={closeDrawer}
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <span>درباره ما</span>

                  <span className="text-blue-400 group-hover:text-white group-hover:-translate-x-1 transition-transform">←</span>
                </Link>

                <Link
                  to="/contact"
                  onClick={closeDrawer}
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <span>ارتباط با ما</span>

                  <span className="text-blue-400 group-hover:text-white group-hover:-translate-x-1 transition-transform">←</span>
                </Link>
              </div>

              <div className="h-px bg-blue-100 my-6" />

              <div className="space-y-2">
                <Link to="/login" onClick={closeDrawer} className="block px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-50 hover:text-blue-600 transition">
                  ورود
                </Link>

                <Link to="/register" onClick={closeDrawer} className="block px-5 py-4 rounded-2xl text-[#071936] font-semibold hover:bg-blue-50 hover:text-blue-600 transition">
                  ثبت نام
                </Link>

                <Link
                  to="/cart"
                  onClick={closeDrawer}
                  className="mt-3 flex items-center gap-3 px-5 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-200/50 transition"
                >
                  <HiMiniShoppingBag className="w-5 h-5" />

                  <span>سبد خرید</span>

                  {totalItems > 0 && <span className="mr-auto rounded-full bg-white text-blue-600 text-xs font-bold px-2 py-1">{totalItems}</span>}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
