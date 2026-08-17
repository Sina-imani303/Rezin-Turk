import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/productsData";

export default function Products() {
  const [category, setCategory] = useState("همه");

  const categories = ["همه", "تینر", "اسید"];

  const productCards = products.flatMap((product) =>
    product.variants.map((variant) => ({
      ...product,
      variant,
    })),
  );

  const filteredProducts = productCards.filter((product) => {
    return category === "همه" || product.category === category;
  });

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="pt-28 pb-16">
        <section className="px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#f5f8ff] border border-blue-100">
              <div className="absolute -top-24 -left-24 sm:-top-32 sm:-left-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="absolute -bottom-28 -right-20 sm:-bottom-40 sm:right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="absolute top-8 right-8 sm:top-12 sm:right-12 w-12 h-12 sm:w-20 sm:h-20 rounded-full border border-blue-200/60" />

              <div className="relative z-10 px-5 py-9 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
                <div className="max-w-4xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-100 px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />

                    <span className="text-[11px] sm:text-sm font-semibold text-blue-600">REZIN TURK</span>
                  </div>

                  <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#071936] leading-[1.35]">
                    محصولات با کیفیت،
                    <br />
                    انتخاب مطمئن برای شما
                  </h1>

                  <p className="mt-5 sm:mt-6 max-w-3xl text-sm sm:text-base lg:text-lg text-gray-500 leading-8 sm:leading-9">
                    مجموعه‌ای از تینرها و محصولات شیمیایی صنعتی با بسته‌بندی‌های مختلف. محصول مورد نظر خود را انتخاب کنید و اطلاعات کامل مدل، بسته‌بندی و قیمت آن را مشاهده کنید.
                  </p>

                  <p className="mt-3 max-w-3xl text-xs sm:text-sm lg:text-base text-gray-400 leading-7 sm:leading-8">
                    محصولات به صورت بسته‌ای عرضه می‌شوند و قیمت هر واحد نیز در صفحه جزئیات برای اطلاع شما نمایش داده خواهد شد.
                  </p>

                  <div className="mt-7 sm:mt-8">
                    <a
                      href="#products"
                      className="inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-blue-200/50 transition"
                    >
                      مشاهده محصولات
                      <FaArrowLeft className="text-xs sm:text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="px-4 sm:px-6 lg:px-10 mt-12 sm:mt-14">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold text-blue-600">REZIN TURK</span>

              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071936]">محصولات مورد نظر</h2>

              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400">دسته‌بندی مورد نظر خود را انتخاب کنید</p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                    category === item ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200" : "bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100 hover:border-blue-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#071936]">{category === "همه" ? "همه محصولات" : category}</h3>

                <p className="mt-1 text-[11px] sm:text-sm text-gray-400">محصولات موجود در فروشگاه</p>
              </div>

              <span className="rounded-full bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-semibold text-blue-600">{filteredProducts.length.toLocaleString("fa-IR")} محصول</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="mt-5 sm:mt-7 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={`${product.id}-${product.variant.id}`} product={product} variant={product.variant} />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50/50 py-16 px-5 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#071936]">محصولی پیدا نشد</h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-500">این دسته‌بندی در حال حاضر محصولی ندارد.</p>

                <button type="button" onClick={() => setCategory("همه")} className="mt-5 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition">
                  نمایش همه محصولات
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
