import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main dir="rtl" className="font-vazir bg-white text-black">
        <section className="relative min-h-screen overflow-hidden bg-white pt-28">
          <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto min-h-[calc(100vh-7rem)] px-6 lg:px-10 flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="text-right order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium text-blue-700">REZIN TURK</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight text-black">
                  کیفیتی که
                  <br />
                  <span className="text-blue-600">اعتماد می‌سازد</span>
                </h1>

                <p className="mt-7 max-w-xl ml-auto text-base sm:text-lg leading-8 text-gray-600">ارائه انواع تینر، حلال‌ها و محصولات شیمیایی با کیفیت مناسب برای مصارف صنعتی، کارگاهی و تخصصی.</p>

                <div className="mt-9 flex flex-wrap justify-end gap-4">
                  <a
                    href="/products"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
                  >
                    مشاهده محصولات
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-black font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  >
                    تماس با ما
                  </a>
                </div>

                <div className="mt-10 flex justify-end gap-8">
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-blue-600">100%</span>

                    <span className="text-sm text-gray-500">کیفیت و دقت</span>
                  </div>

                  <div className="w-px h-12 bg-gray-200" />

                  <div className="text-right">
                    <span className="block text-2xl font-bold text-blue-600">4+</span>

                    <span className="text-sm text-gray-500">محصول اصلی</span>
                  </div>

                  <div className="w-px h-12 bg-gray-200" />

                  <div className="text-right">
                    <span className="block text-2xl font-bold text-blue-600">24/7</span>

                    <span className="text-sm text-gray-500">پشتیبانی</span>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2 flex items-center justify-center">
                <div className="relative w-[320px] h-80 sm:w-107.5 sm:h-107.5 lg:w-125 lg:h-125">
                  <div className="absolute inset-0 rounded-full bg-blue-600" />

                  <div className="absolute inset-5 rounded-full border border-white/20" />

                  <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full border border-blue-200" />

                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-blue-100" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-10">
                    <span className="text-sm tracking-[5px] uppercase text-blue-100">REZIN</span>

                    <h2 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">TURK</h2>

                    <div className="mt-5 w-16 h-px bg-white/50" />

                    <p className="mt-5 text-sm sm:text-base text-blue-50 leading-7 max-w-xs">
                      راهکارهای مطمئن برای
                      <br />
                      نیازهای شیمیایی شما
                    </p>
                  </div>

                  <div className="absolute -bottom-5 right-0 sm:-right-5 bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-600" />
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-bold text-black">محصولات متنوع</p>

                        <p className="text-xs text-gray-500 mt-1">کیفیت قابل اعتماد</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <span className="text-sm font-semibold tracking-[3px] text-blue-600">PRODUCTS</span>

            <h2 className="mt-3 text-4xl font-bold text-black">محصولات ما</h2>

            <p className="mt-4 text-gray-500">محصولات اصلی Rezin Turk را مشاهده کنید.</p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
                <div className="aspect-square overflow-hidden">
                  <img src="/product/images(1).jpg" alt="تینر فوری" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
              </div>

              <div className="group overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
                <div className="aspect-square overflow-hidden">
                  <img src="/product/images(2).jpg" alt="تینر روغنی" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
              </div>

              <div className="group overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
                <div className="aspect-square overflow-hidden">
                  <img src="/product/images(3).jpg" alt="جوهر نمک" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
              </div>

              <div className="group overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
                <div className="aspect-square overflow-hidden">
                  <img src="/product/images(4).jpg" alt="اسید" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
              <img src="/logo/logo.png" alt="Rezin Turk" className="w-28 h-20 object-contain" />

              <span className="mt-3 text-sm font-semibold tracking-[3px] text-blue-600">WHY REZIN TURK</span>

              <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-black">چرا Rezin Turk؟</h2>

              <p className="mt-5 text-gray-500 leading-8">انتخابی مطمئن برای تهیه محصولات شیمیایی و حلال‌های مورد نیاز شما.</p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                  <span className="text-2xl text-blue-600 group-hover:text-white transition">✓</span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-black">کیفیت مطمئن</h3>

                <p className="mt-3 text-gray-500 leading-7 text-sm">ارائه محصولاتی با کیفیت مناسب و قابل اعتماد برای مصارف مختلف.</p>
              </div>

              <div className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                  <span className="text-2xl text-blue-600 group-hover:text-white transition">◇</span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-black">تأمین مطمئن</h3>

                <p className="mt-3 text-gray-500 leading-7 text-sm">تلاش برای تأمین منظم محصولات مورد نیاز مشتریان و کسب‌وکارها.</p>
              </div>

              <div className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                  <span className="text-2xl text-blue-600 group-hover:text-white transition">$</span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-black">قیمت رقابتی</h3>

                <p className="mt-3 text-gray-500 leading-7 text-sm">ارائه قیمت مناسب با هدف ایجاد خریدی اقتصادی و مطمئن.</p>
              </div>

              <div className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                  <span className="text-2xl text-blue-600 group-hover:text-white transition">+</span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-black">پشتیبانی</h3>

                <p className="mt-3 text-gray-500 leading-7 text-sm">همراهی با مشتریان برای انتخاب بهتر و دریافت اطلاعات محصول.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-5 items-start">
              <div className="w-full lg:w-67.5 overflow-hidden rounded-4xl border border-blue-100 shadow-lg bg-white">
                <img src="/banner/banner 2.png" alt="لوله باز کن Rezin Turk" className="block w-full h-auto object-contain" />
              </div>
              <div className="w-full lg:flex-1 overflow-hidden rounded-4xl border border-blue-100 shadow-lg bg-white">
                <img src="/banner/banner 1.png" alt="محصولات شیمیایی Rezin Turk" className="block w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
