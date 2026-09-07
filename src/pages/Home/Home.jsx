import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaFlask, FaIndustry, FaShippingFast, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const banners = [
  {
    id: 1,
    image: "/banner/banner (1).png",
  },
  {
    id: 2,
    image: "/banner/banner (2).png",
  },
  {
    id: 3,
    image: "/banner/banner (3).png",
  },
  {
    id: 4,
    image: "/banner/banner (4).png",
  },
];

const productImages = [
  {
    id: 1,
    image: "/product/product1.png",
    title: "تینر فوری",
    description: "مناسب برای مصارف صنعتی و کارگاهی",
  },
  {
    id: 2,
    image: "/product/product2.png",
    title: "تینر روغنی",
    description: "انتخابی مناسب برای کاربردهای تخصصی",
  },
  {
    id: 3,
    image: "/product/product3.png",
    title: "جوهر نمک",
    description: "محصول شیمیایی با کاربردهای متنوع",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <>
      <Navbar />

      <main dir="rtl" className="overflow-hidden bg-white text-[#071936]">
        <section className="relative min-h-screen overflow-hidden bg-white pt-24 sm:pt-28">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/banner/hero.png')",
            }}
          />

          <div className="absolute inset-0 bg-white/15" />

          <div className="absolute inset-0 bg-linear-to-l from-white/95 via-white/55 to-white/10" />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white/55 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
            <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="ml-auto w-full max-w-3xl text-center lg:text-right">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-blue-600 shadow-md shadow-blue-500/40" />

                <span className="text-xs font-medium text-blue-700 sm:text-sm">REZIN TURK</span>
              </div>
              <h1 className="text-4xl font-black leading-[1.2] tracking-tight text-[#071936] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                راهکارهای حرفه‌ای
                <br />
                <span className="text-blue-600">صنایع شیمیایی حبیبی</span>
              </h1>

              <p className="mx-auto  mt-7 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base sm:leading-9 lg:mx-0  lg:text-lg">
                ارائه انواع تینر، حلال‌ها و محصولات شیمیایی برای مصارف صنعتی، کارگاهی و تخصصی با تمرکز بر کیفیت و تأمین مطمئن.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 lg:justify-start">
                <a
                  href="/products"
                  className="group flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 sm:px-7 sm:py-4"
                >
                  مشاهده محصولات
                  <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
                </a>

                <a
                  href="/contact"
                  className="rounded-2xl border border-blue-100 bg-white/95 px-6 py-3.5 text-sm font-bold text-[#071936] shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 sm:px-7 sm:py-4"
                >
                  ارتباط با ما
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-slate-200/90 pt-7 sm:mt-12 sm:gap-6 sm:pt-8">
                <div>
                  <span className="block text-xl font-black text-[#071936] sm:text-3xl">20+</span>

                  <span className="mt-1 block text-[10px] text-slate-500 sm:text-xs">تنوع محصول</span>
                </div>

                <div className="border-x border-slate-200/90">
                  <span className="block text-xl font-black text-[#071936] sm:text-3xl">100%</span>

                  <span className="mt-1 block text-[10px] text-slate-500 sm:text-xs">تمرکز بر کیفیت</span>
                </div>

                <div>
                  <span className="block text-xl font-black text-[#071936] sm:text-3xl">24/7</span>

                  <span className="mt-1 block text-[10px] text-slate-500 sm:text-xs">پاسخگویی</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="bg-white px-3 py-6 sm:px-6 sm:py-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg sm:rounded-3xl">
              <div className="relative h-112.5 sm:h-130 lg:h-150 ...">
                {banners.map((banner, index) => (
                  <img
                    key={banner.id}
                    src={banner.image}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${currentSlide === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
                  />
                ))}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="بنر قبلی"
                  className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-blue-600 shadow-lg transition hover:bg-blue-600 hover:text-white sm:left-5 sm:h-11 sm:w-11"
                >
                  <FaChevronLeft className="text-xs sm:text-sm" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="بنر بعدی"
                  className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-blue-600 shadow-lg transition hover:bg-blue-600 hover:text-white sm:right-5 sm:h-11 sm:w-11"
                >
                  <FaChevronRight className="text-xs sm:text-sm" />
                </button>
                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
                  {banners.map((banner, index) => (
                    <button
                      key={banner.id}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`اسلاید ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-blue-600" : "w-2 bg-white/90 hover:bg-blue-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                    <FaFlask />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#071936]">تنوع محصولات</h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">مجموعه‌ای از تینر، حلال و محصولات شیمیایی</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                    <FaShippingFast />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#071936]">تأمین و ارسال</h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">ثبت سفارش و هماهنگی برای ارسال محصولات</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                    <FaIndustry />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#071936]">مناسب کسب‌وکارها</h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">مناسب استفاده‌های صنعتی، کارگاهی و تخصصی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f8fc] px-3 py-12 sm:px-6 sm:py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex flex-col items-start justify-between gap-4 sm:mb-9 sm:flex-row sm:items-end">
              <div>
                <span className="text-[10px] font-bold tracking-[3px] text-blue-600 sm:text-xs">REZIN TURK</span>

                <h2 className="mt-2 text-2xl font-black text-[#071936] sm:text-4xl">نگاهی به محصولات</h2>

                <p className="mt-2 max-w-xl text-xs leading-6 text-gray-500 sm:text-sm">بخشی از محصولات فروشگاه را مشاهده کنید و برای بررسی کامل، وارد صفحه محصولات شوید.</p>
              </div>

              <a
                href="/products"
                className="group flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-xs font-bold text-blue-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:px-5 sm:py-3 sm:text-sm"
              >
                مشاهده همه محصولات
                <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {productImages.map((product, index) => (
                <motion.a
                  key={product.id}
                  href={`/products/${product.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl"
                >
                  <div className="relative h-65 overflow-hidden bg-linaer-to-br from-blue-50 to-slate-50 sm:h-75">
                    <div className="absolute right-4 top-4 z-10 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-bold text-blue-600 shadow-sm backdrop-blur">
                      REZIN TURK
                    </div>

                    <img src={product.image} alt={product.title} className="h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-110 sm:p-10" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-black text-[#071936] sm:text-lg">{product.title}</h3>

                        <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">{product.description}</p>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                        <FaArrowLeft className="text-xs" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-blue-50">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />

              <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />

              <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-14">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <FaFlask />
                    </div>

                    <span className="text-xs font-bold text-blue-600">راهنمای انتخاب محصول</span>
                  </div>

                  <h2 className="text-2xl font-black leading-tight text-[#071936] sm:text-3xl lg:text-4xl">
                    برای انتخاب محصول مناسب
                    <br className="hidden sm:block" />
                    نیاز به راهنمایی دارید؟
                  </h2>

                  <p className="mt-4 max-w-2xl text-xs leading-7 text-gray-500 sm:text-sm sm:leading-8">
                    اگر برای انتخاب تینر، حلال یا سایر محصولات شیمیایی مطمئن نیستید، با ما در ارتباط باشید تا بر اساس نیاز و کاربرد شما راهنمایی‌تان کنیم.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                      <FaCheckCircle className="text-blue-600" />
                      مشاوره برای انتخاب محصول
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                      <FaCheckCircle className="text-blue-600" />
                      پاسخگویی به سوالات
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-white px-8 py-4 text-sm font-bold text-blue-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <FaPhoneAlt className="text-xs" />
                    تماس با ما
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
