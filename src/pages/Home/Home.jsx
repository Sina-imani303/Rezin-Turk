import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Home.css";

const STAGGER = 0.035;

const TextRoll = ({ children, className = "", center = false }) => {
  return (
    <motion.span initial="initial" whileHover="hovered" className={`relative block h-[1.15em] overflow-hidden ${className}`}>
      <span className="block">
        {children.split("").map((letter, index) => {
          const delay = center ? STAGGER * Math.abs(index - (children.length - 1) / 2) : STAGGER * index;

          return (
            <motion.span
              key={`top-${index}`}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                ease: "easeInOut",
                delay,
                duration: 0.35,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </span>

      <span className="absolute inset-0">
        {children.split("").map((letter, index) => {
          const delay = center ? STAGGER * Math.abs(index - (children.length - 1) / 2) : STAGGER * index;

          return (
            <motion.span
              key={`bottom-${index}`}
              variants={{
                initial: {
                  y: "110%",
                  opacity: 0,
                },
                hovered: {
                  y: 0,
                  opacity: 1,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
                duration: 0.35,
              }}
              className="inline-block text-blue-600"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </span>
    </motion.span>
  );
};

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
  },
  {
    id: 2,
    image: "/product/product2.png",
    title: "تینر روغنی",
  },
  {
    id: 3,
    image: "/product/product3.png",
    title: "جوهر نمک دیس‌کیلر",
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

      <main dir="rtl" className="font-vazir bg-white text-black">
        <section className="relative overflow-hidden bg-white pt-28 sm:pt-32">
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl sm:-right-40 sm:-top-40 sm:h-105 sm:w-105" />

          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl sm:-bottom-40 sm:-left-40 sm:h-105 sm:w-105" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-5 py-12 sm:px-8 lg:px-10">
            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-end lg:text-right">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 sm:mb-6">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />

                  <span className="text-xs font-medium text-blue-700 sm:text-sm">REZIN TURK</span>
                </div>

                <h1 className="text-4xl font-black leading-[1.2] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                  کیفیتی که
                  <br />
                  <span className="text-blue-600">اعتماد می‌سازد</span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-8 text-gray-600 sm:text-base sm:leading-9 lg:text-lg">
                  ارائه انواع تینر، حلال‌ها و محصولات شیمیایی با کیفیت مناسب برای مصارف صنعتی، کارگاهی و تخصصی.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-9 sm:gap-4 lg:justify-end">
                  <a
                    href="/products"
                    className="rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700 sm:px-7"
                  >
                    مشاهده محصولات
                  </a>

                  <a href="/contact" className="rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:border-blue-600 hover:text-blue-600 sm:px-7">
                    تماس با ما
                  </a>
                </div>

                <div className="mt-9 flex justify-center gap-5 sm:mt-10 sm:gap-8 lg:justify-end">
                  <div className="text-center lg:text-right">
                    <span className="block text-xl font-bold text-blue-600 sm:text-2xl">100%</span>

                    <span className="text-[11px] text-gray-500 sm:text-sm">کیفیت و دقت</span>
                  </div>

                  <div className="h-10 w-px bg-gray-200" />

                  <div className="text-center lg:text-right">
                    <span className="block text-xl font-bold text-blue-600 sm:text-2xl">4+</span>

                    <span className="text-[11px] text-gray-500 sm:text-sm">محصول اصلی</span>
                  </div>

                  <div className="h-10 w-px bg-gray-200" />

                  <div className="text-center lg:text-right">
                    <span className="block text-xl font-bold text-blue-600 sm:text-2xl">24/7</span>

                    <span className="text-[11px] text-gray-500 sm:text-sm">پشتیبانی</span>
                  </div>
                </div>
              </div>

              <div className="order-1 flex w-full items-center justify-center lg:order-2">
                <div className="relative h-65 w-65 sm:h-90 sm:w-90 md:h-102.5 md:w-102.5 lg:h-125 lg:w-125">
                  <div className="absolute inset-0 rounded-full bg-blue-600" />

                  <div className="absolute inset-4 rounded-full border border-white/20 sm:inset-7" />

                  <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-blue-200 sm:-right-6 sm:-top-6 sm:h-28 sm:w-28" />

                  <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border border-blue-100 sm:-bottom-8 sm:-left-8 sm:h-36 sm:w-36" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white sm:px-8">
                    <span className="text-[10px] tracking-[4px] text-blue-100 sm:text-sm sm:tracking-[5px]">REZIN</span>

                    <h2 className="mt-2 text-4xl font-black sm:text-6xl md:text-7xl lg:text-8xl">TURK</h2>

                    <div className="mt-4 h-px w-12 bg-white/50 sm:mt-5 sm:w-16" />

                    <p className="mt-4 text-[11px] leading-6 text-blue-50 sm:mt-5 sm:text-sm sm:leading-7">
                      راهکارهای مطمئن برای
                      <br />
                      نیازهای شیمیایی شما
                    </p>
                  </div>

                  <motion.div
                    animate={{ y: [0, -10, 0, 10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-3 right-1 rounded-2xl border border-gray-100 bg-white px-3 py-2.5 shadow-2xl sm:-bottom-5 sm:-right-5 sm:px-5 sm:py-4"
                  >
                    <p className="text-[11px] font-bold text-black sm:text-sm">محصولات متنوع</p>

                    <p className="mt-1 text-[9px] text-gray-500 sm:text-xs">کیفیت قابل اعتماد</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-3 py-8 sm:px-6 sm:py-12 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 text-center sm:mb-8">
              <span className="text-xs font-semibold tracking-[3px] text-blue-600 sm:text-sm">REZIN TURK</span>

              <div className="flex flex-col items-center justify-center px-3 py-5">
                <div className="words space-y-2 px-5 py-3">
                  <h1 className="word text-2xl sm:text-3xl">تینر فوری</h1>

                  <h1 className="word text-2xl sm:text-3xl">تینر روغنی</h1>

                  <h1 className="word text-2xl sm:text-3xl">جوهر نمک</h1>

                  <h1 className="word text-2xl sm:text-3xl">فروشگاه رزین ترک</h1>
                </div>
              </div>

              <p className="mx-auto mt-2 max-w-xl text-xs leading-7 text-gray-500 sm:text-sm">با محصولات منتخب Rezin Turk آشنا شوید و اطلاعات بیشتری درباره محصولات مورد نیاز خود به دست آورید.</p>
            </div>

            <div className="relative overflow-hidden rounded-[22px] bg-blue-50 shadow-xl sm:rounded-[32px]">
              <div className="relative h-57.5 w-full sm:h-90 md:h-107.5 lg:h-150 xl:h-155">
                {banners.map((banner, index) => (
                  <div key={banner.id} className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === index ? "z-10 opacity-100" : "pointer-events-none opacity-0"}`}>
                    <img src={banner.image} alt="" className="h-full w-full object-cover object-center" />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="اسلاید قبلی"
                  className="absolute left-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-md transition hover:bg-blue-600 hover:text-white sm:left-4 sm:h-11 sm:w-11"
                >
                  <FaChevronLeft className="text-[10px] sm:text-sm" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="اسلاید بعدی"
                  className="absolute right-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-md transition hover:bg-blue-600 hover:text-white sm:right-4 sm:h-11 sm:w-11"
                >
                  <FaChevronRight className="text-[10px] sm:text-sm" />
                </button>

                <div className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-4 sm:gap-2">
                  {banners.map((banner, index) => (
                    <button
                      key={banner.id}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`اسلاید ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${currentSlide === index ? "w-7 bg-blue-400 sm:w-9" : "w-1.5 bg-white/70 hover:bg-white sm:w-2"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 mt-6 sm:mb-10 sm:mt-8">
                <div className="flex items-center justify-center gap-1 pt-3 sm:gap-2 lg:gap-3 sm:pt-4" dir="ltr">
                  <TextRoll center className="text-4xl font-extrabold tracking-[0.08em] text-[#071936] sm:text-5xl lg:text-6xl">
                    REZIN
                  </TextRoll>

                  <TextRoll center className="text-4xl font-extrabold tracking-[0.08em] text-[#071936] sm:text-5xl lg:text-6xl">
                    TURK
                  </TextRoll>
                </div>
              </div>

              <p className="mx-auto max-w-2xl text-sm leading-8 text-gray-500 sm:text-base sm:leading-9">انتخابی مطمئن برای تهیه محصولات شیمیایی و حلال‌های مورد نیاز شما.</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              <div className="group rounded-3xl border border-gray-100 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white sm:h-14 sm:w-14">
                  ✓
                </div>

                <h3 className="mt-5 text-base font-bold text-black sm:text-xl">کیفیت مطمئن</h3>

                <p className="mt-3 text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">ارائه محصولاتی با کیفیت مناسب و قابل اعتماد.</p>
              </div>

              <div className="group rounded-3xl border border-gray-100 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white sm:h-14 sm:w-14">
                  ◇
                </div>

                <h3 className="mt-5 text-base font-bold text-black sm:text-xl">تأمین مطمئن</h3>

                <p className="mt-3 text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">تلاش برای تأمین منظم محصولات مورد نیاز مشتریان.</p>
              </div>

              <div className="group rounded-3xl border border-gray-100 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white sm:h-14 sm:w-14">
                  $
                </div>

                <h3 className="mt-5 text-base font-bold text-black sm:text-xl">قیمت رقابتی</h3>

                <p className="mt-3 text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">ارائه قیمت مناسب برای خریدی اقتصادی و مطمئن.</p>
              </div>

              <div className="group rounded-3xl border border-gray-100 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white sm:h-14 sm:w-14">
                  +
                </div>

                <h3 className="mt-5 text-base font-bold text-black sm:text-xl">پشتیبانی</h3>

                <p className="mt-3 text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7">همراهی برای انتخاب بهتر محصولات.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center">
              <span className="text-xs font-semibold tracking-[3px] text-blue-600 sm:text-sm">PRODUCTS</span>

              <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">محصولات ما</h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-gray-500">محصولات اصلی Rezin Turk را مشاهده کنید.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
              {productImages.map((product) => (
                <div key={product.id} className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-blue-50 sm:h-64 lg:h-72">
                    <img src={product.image} alt={product.title} className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-4" />
                  </div>

                  <div className="p-4 text-center sm:p-5">
                    <h3 className="text-sm font-bold text-[#071936] sm:text-base">{product.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
