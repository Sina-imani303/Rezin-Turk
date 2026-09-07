import { FaPhone, FaMapMarkerAlt, FaTelegramPlane, FaWhatsapp, FaMap } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

function BaleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c1.35 0 2.64-.267 3.816-.75l3.254.686a1 1 0 0 0 1.18-1.18l-.686-3.254A9.96 9.96 0 0 0 22 12C22 6.477 17.523 2 12 2Zm-3.2 6.2c.34-.34.89-.34 1.23 0l1.05 1.05 1.93-1.93a.87.87 0 0 1 1.23 1.23l-2.545 2.545a.87.87 0 0 1-1.23 0L8.8 9.43a.87.87 0 0 1 0-1.23Zm7.2 7.6H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2Z" />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Navbar />

      <div className="font-vazir min-h-screen bg-white text-black" dir="rtl">
        <main className="pt-28 pb-16">
          <section className="px-5 py-10 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
              {/* عنوان */}
              <div className="mb-10 text-center">
                <span className="text-sm font-semibold text-blue-600">REZIN TURK</span>

                <h2 className="mt-3 text-3xl font-bold text-[#071936] sm:text-4xl">ارتباط با ما</h2>

                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* اطلاعات تماس */}
                <div className="rounded-[30px] bg-[#061b4f] p-5 shadow-xl sm:p-7 lg:p-8">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* شماره تماس */}
                    <a href="tel:09056429319" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-blue-600">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                        <FaPhone />
                      </div>

                      <div>
                        <p className="text-xs text-blue-100/50">شماره تماس</p>

                        <p className="mt-1 text-sm font-semibold text-white" dir="ltr">
                          0905 642 93 19
                          <br />
                          0938 371 7818
                        </p>
                      </div>
                    </a>

                    {/* ساعت کاری */}
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">🕐</div>

                      <div>
                        <p className="text-xs text-blue-100/50">ساعت کاری و پاسخگویی</p>

                        <p className="mt-1 text-sm font-semibold text-white">شنبه تا پنجشنبه</p>

                        <p className="mt-1 text-xs text-blue-100/60">۹ صبح تا ۶ عصر</p>
                      </div>
                    </div>

                    {/* تلگرام */}
                    <a
                      href="https://t.me/Emir_Habibii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-blue-600"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20">
                        <FaTelegramPlane className="text-lg text-blue-400" />
                      </div>

                      <div>
                        <p className="text-xs text-blue-100/50">تلگرام</p>

                        <p className="mt-1 text-sm font-semibold text-white">@Emir_Habibii</p>
                      </div>
                    </a>

                    <a href="https://wa.me/Emir_Habibii" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-blue-600">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20">
                        <FaWhatsapp className="text-lg text-blue-400" />
                      </div>

                      <div>
                        <p className="text-xs text-blue-100/50">واتساپ</p>

                        <p className="mt-1 text-sm font-semibold text-white">WhatsApp</p>
                      </div>
                    </a>

                    <a
                      href="https://ble.ir/Emir_Habibii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-blue-600"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20">
                        <BaleIcon className="h-5 w-5 text-blue-400" />
                      </div>

                      <div>
                        <p className="text-xs text-blue-100/50">پیام‌رسان بله</p>

                        <p className="mt-1 text-sm font-semibold text-white">@Emir_Habibii</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <p className="text-xs text-blue-100/50">آدرس</p>

                      <p className="mt-1 text-sm font-semibold leading-7 text-white">
                        تهران جاده قدیم قم ناحیه صنعتی شوراباد روبه روی بلوار سالمندان جنب کشتارگاه سامان گوشت آسیا خیابان فدک رنگسازی رزین ترک
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[30px] border border-blue-100 bg-white p-5 shadow-lg sm:p-6">
                  <div className="flex h-full min-h-87.5 flex-col items-center justify-center rounded-3xl bg-blue-50 p-8 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <FaMapMarkerAlt className="text-3xl" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[#071936]">موقعیت فروشگاه</h3>

                    <p className="mt-3 leading-7 text-gray-500">تهران، ایران</p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=تهران%20جاده%20قدیم%20قم%20ناحیه%20صنعتی%20شورآباد%20روبه%20روی%20بلوار%20سالمندان%20جنب%20کشتارگاه%20سامان%20گوشت%20آسیا%20خیابان%20فدک%20رنگسازی%20رزین%20ترک"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700"
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
