import { useState } from "react";

import { FaPhone, FaMapMarkerAlt, FaInstagram, FaTelegramPlane, FaWhatsapp, FaPaperPlane, FaMap } from "react-icons/fa";

import Navbar from "../../components/Navbar";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const aboutText = `Rezin Turk یک فروشگاه تخصصی در زمینه عرضه و تأمین محصولات شیمیایی و حلال‌ها است. هدف ما ارائه محصولاتی با کیفیت مناسب، قیمت رقابتی و خدمات قابل اعتماد به مشتریان است.

محصولات فروشگاه شامل انواع تینر فوری، تینر روغنی، جوهر نمک، اسید، لوله بازکن و سایر محصولات شیمیایی می‌باشد.

ما تلاش می‌کنیم با ارائه محصولات مناسب و پاسخگویی سریع، تجربه‌ای ساده و مطمئن برای مشتریان خود ایجاد کنیم و در مسیر فعالیت خود کیفیت محصولات و رضایت مشتری را در اولویت قرار دهیم.`;

  return (
    <>
      <Navbar />
      <div className="font-vazir min-h-screen bg-white text-black" dir="rtl">
        <main className="pt-28 pb-16">
          <section className="px-5 sm:px-8 lg:px-12 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-4xl bg-[#061b4f] px-7 py-12 sm:px-10 sm:py-14 lg:px-14">
                <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl" />

                <div className="relative z-10 max-w-3xl">
                  <span className="text-blue-400 text-sm sm:text-base font-semibold">REZIN TURK</span>

                  <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">درباره فروشگاه Rezin Turk</h1>

                  <p className="mt-5 text-blue-100/75 leading-8 text-sm sm:text-base lg:text-lg max-w-2xl">عرضه محصولات شیمیایی و حلال‌ها با کیفیت مناسب، قیمت رقابتی و خدمات قابل اعتماد.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 sm:px-8 lg:px-12 py-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                <div className="w-full md:w-1/2 lg:w-2/5">
                  <div className="relative w-full h-72 sm:h-80 md:h-full min-h-87.5 rounded-3xl overflow-hidden shadow-lg bg-blue-50">
                    <img src="/banner/about.jpg" alt="فروشگاه Rezin Turk" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-3/5">
                  <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 shadow-md h-full">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#071936]"> Rezin Turk</h2>

                    <div className="mt-3 w-14 h-1 bg-blue-600 rounded-full" />

                    <p className={`mt-6 text-justify leading-8 text-gray-700 whitespace-pre-line ${!showMore ? "line-clamp-5" : ""}`}>{aboutText}</p>

                    <button
                      type="button"
                      onClick={() => setShowMore(!showMore)}
                      className="mt-6 py-2.5 px-6 rounded-full bg-white border border-blue-100 text-black text-sm font-bold shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      {showMore ? "بستن متن" : "مشاهده ادامه متن"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
    </>
  );
}
