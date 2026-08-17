import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#061b4f] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="text-right">
            <Link to="/" className="inline-block">
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <img src="/logo/logo2.png" alt="Rezin Turk" className="w-full h-full object-contain" />
              </div>
            </Link>

            <p className="mt-6 text-sm leading-8 text-blue-100/70 max-w-xs">Rezin Turk ارائه‌دهنده انواع تینر، حلال‌ها و محصولات شیمیایی با هدف ارائه محصولات باکیفیت و خدمات قابل اعتماد.</p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
              >
                <FaWhatsapp className="text-lg" />
              </a>

              <a
                href="#"
                aria-label="Bale"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
              >
                <FaPaperPlane className="text-lg" />
              </a>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-lg font-bold text-white">دسترسی سریع</h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link to="/" className="text-sm text-blue-100/70 hover:text-blue-400 transition duration-300">
                خانه
              </Link>

              <Link to="/products" className="text-sm text-blue-100/70 hover:text-blue-400 transition duration-300">
                محصولات
              </Link>

              <Link to="/about" className="text-sm text-blue-100/70 hover:text-blue-400 transition duration-300">
                درباره ما
              </Link>

              <Link to="/contact" className="text-sm text-blue-100/70 hover:text-blue-400 transition duration-300">
                تماس با ما
              </Link>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-lg font-bold text-white">محصولات</h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link to="/products" className="text-sm text-blue-100/70 hover:text-blue-400 transition duration-300">
                تینر فوری
              </Link>

              <Link to="/products" className="text-sm text-blue-100/70 hover:text-blue-400 transition duration-300">
                تینر روغنی
              </Link>

              <Link to="/products" className="text-sm text-blue-100/70 hover:text-blue-400 transition duration-300">
                جوهر نمک
              </Link>

              <Link to="/products" className="text-sm text-blue-100/70 hover:text-blue-400 transition duration-300">
                اسید
              </Link>

              <Link to="/products" className="text-sm text-blue-100/70 hover:text-blue-400 transition duration-300">
                لوله بازکن
              </Link>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-lg font-bold text-white">ارتباط با ما</h3>

            <div className="mt-6 flex flex-col gap-5">
              <a href="tel:09120000000" className="flex items-center gap-3 group">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  <FaPhone />
                </div>

                <div className="text-right">
                  <p className="text-xs text-blue-100/40">شماره تماس</p>

                  <p className="mt-1 text-sm font-semibold text-blue-100/80" dir="ltr">
                    0912 000 0000
                  </p>
                </div>
              </a>

              <a href="mailto:info@rezinturk.com" className="flex items-center gap-3 group">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  <FaEnvelope />
                </div>

                <div className="text-right">
                  <p className="text-xs text-blue-100/40">ایمیل</p>

                  <p className="mt-1 text-sm font-semibold text-blue-100/80">info@rezinturk.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <FaMapMarkerAlt />
                </div>

                <div className="text-right">
                  <p className="text-xs text-blue-100/40">آدرس</p>

                  <p className="mt-1 text-sm font-semibold text-blue-100/80">تهران، ایران</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-xs sm:text-sm text-blue-100/40">© {new Date().getFullYear()} Rezin Turk. تمامی حقوق محفوظ است.</p>

            <p className="text-xs sm:text-sm text-blue-100/40">طراحی و توسعه با کیفیت</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
