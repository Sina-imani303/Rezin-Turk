import { FaPhone, FaMapMarkerAlt, FaInstagram, FaTelegramPlane, FaWhatsapp, FaPaperPlane, FaMap } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="font-vazir min-h-screen bg-white text-black" dir="rtl">
        <main className="pt-28 pb-16">
          <section className="px-5 sm:px-8 lg:px-12 py-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-blue-600 text-sm font-semibold">REZIN TURK</span>

                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#071936]">ارتباط با ما</h2>

                <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-blue-600" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-[30px] bg-[#061b4f] p-5 sm:p-7 lg:p-8 shadow-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="tel:09120000000" className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-blue-600 transition duration-300">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                        <FaPhone />
                      </div>

                      <div>
                        <p className="text-xs text-blue-100/50">شماره تماس</p>

                        <p className="text-sm font-semibold text-white mt-1" dir="ltr">
                          0912 000 0000
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-lg">🕐</div>

                      <div>
                        <p className="text-xs text-blue-100/50">ساعت کاری و پاسخگویی</p>

                        <p className="text-sm font-semibold text-white mt-1">شنبه تا پنجشنبه</p>

                        <p className="text-xs text-blue-100/60 mt-1">۹ صبح تا ۶ عصر</p>
                      </div>
                    </div>

                    <a href="#" className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-blue-600 transition duration-300">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center">
                        <FaTelegramPlane className="text-blue-400 text-lg" />
                      </div>

                      <div>
                        <p className="text-xs text-blue-100/50">تلگرام</p>

                        <p className="text-sm font-semibold text-white mt-1">Telegram</p>
                      </div>
                    </a>

                    <a href="#" className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-blue-600 transition duration-300">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center">
                        <FaWhatsapp className="text-blue-400 text-lg" />
                      </div>

                      <div>
                        <p className="text-xs text-blue-100/50">واتساپ</p>

                        <p className="text-sm font-semibold text-white mt-1">WhatsApp</p>
                      </div>
                    </a>

                    <a href="#" className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-blue-600 transition duration-300">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center">
                        <FaPaperPlane className="text-blue-400 text-lg" />
                      </div>

                      <div>
                        <p className="text-xs text-blue-100/50">پیام‌رسان بله</p>

                        <p className="text-sm font-semibold text-white mt-1">Bale</p>
                      </div>
                    </a>

                    <a href="#" className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-blue-600 transition duration-300">
                      <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center">
                        <FaInstagram className="text-blue-400 text-lg" />
                      </div>

                      <div>
                        <p className="text-xs text-blue-100/50">اینستاگرام</p>

                        <p className="text-sm font-semibold text-white mt-1">Instagram</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <p className="text-xs text-blue-100/50">آدرس</p>

                      <p className="text-sm font-semibold text-white mt-1">تهران، ایران</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[30px] bg-white border border-blue-100 shadow-lg p-5 sm:p-6">
                  <div className="h-full min-h-87.5 rounded-3xl bg-blue-50 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <FaMapMarkerAlt className="text-3xl" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[#071936]">موقعیت فروشگاه</h3>

                    <p className="mt-3 text-gray-500 leading-7">تهران، ایران</p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Tehran,Iran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 font-semibold transition duration-300 shadow-md"
                    >
                      <FaMap />
                      مشاهده موقعیت روی نقشه
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
