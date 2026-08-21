import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#061b4f] text-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-4 lg:gap-10">
          <div className="col-span-2 text-right lg:col-span-1">
            <Link to="/" className="inline-block">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img src="/logo/logo2.png" alt="Rezin Turk" className="h-full w-full object-contain" />
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-7 text-blue-100/65 sm:text-sm">
              Rezin Turk ارائه‌دهنده انواع تینر، حلال‌ها و محصولات شیمیایی با هدف ارائه محصولات باکیفیت و خدمات قابل اعتماد.
            </p>

            <div className="mt-4 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-300 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-300 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaWhatsapp className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Bale"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-300 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaPaperPlane className="text-sm" />
              </a>
            </div>
          </div>

          <div className="text-right lg:pt-2">
            <h3 className="text-sm font-bold text-white sm:text-base">دسترسی سریع</h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <Link to="/" className="text-xs text-blue-100/65 transition hover:text-blue-400 sm:text-sm">
                خانه
              </Link>

              <Link to="/products" className="text-xs text-blue-100/65 transition hover:text-blue-400 sm:text-sm">
                محصولات
              </Link>

              <Link to="/about" className="text-xs text-blue-100/65 transition hover:text-blue-400 sm:text-sm">
                درباره ما
              </Link>

              <Link to="/contact" className="text-xs text-blue-100/65 transition hover:text-blue-400 sm:text-sm">
                تماس با ما
              </Link>
            </div>
          </div>

          <div className="text-right lg:pt-2">
            <h3 className="text-sm font-bold text-white sm:text-base">محصولات</h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <Link to="/products" className="text-xs text-blue-100/65 transition hover:text-blue-400 sm:text-sm">
                تینر فوری
              </Link>

              <Link to="/products" className="text-xs text-blue-100/65 transition hover:text-blue-400 sm:text-sm">
                تینر روغنی
              </Link>

              <Link to="/products" className="text-xs text-blue-100/65 transition hover:text-blue-400 sm:text-sm">
                جوهر نمک
              </Link>

              <Link to="/products" className="text-xs text-blue-100/65 transition hover:text-blue-400 sm:text-sm">
                اسید
              </Link>
            </div>
          </div>

          <div className="col-span-2 text-right lg:col-span-1 lg:pt-2">
            <h3 className="text-sm font-bold text-white sm:text-base">ارتباط با ما</h3>

            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:09120000000" className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-xs text-blue-400">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-[10px] text-blue-100/35">شماره تماس</p>

                  <p dir="ltr" className="mt-0.5 text-xs font-medium text-blue-100/70 sm:text-sm">
                    0912 000 0000
                  </p>
                </div>
              </a>

              <a href="mailto:info@rezinturk.com" className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-xs text-blue-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-[10px] text-blue-100/35">ایمیل</p>

                  <p className="mt-0.5 text-xs font-medium text-blue-100/70 sm:text-sm">info@rezinturk.com</p>
                </div>
              </a>

              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-xs text-blue-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-[10px] text-blue-100/35">آدرس</p>

                  <p className="mt-0.5 text-xs font-medium text-blue-100/70 sm:text-sm">تهران، ایران</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row">
            <p className="text-[10px] text-blue-100/35 sm:text-xs">© {new Date().getFullYear()} Rezin Turk. تمامی حقوق محفوظ است.</p>

            <p className="text-[10px] text-blue-100/35 sm:text-xs">طراحی و توسعه با کیفیت</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
