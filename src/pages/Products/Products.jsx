import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import { apiRequest } from "../../api/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await apiRequest("/products/");

        const productList = Array.isArray(data) ? data : Array.isArray(data?.results) ? data.results : Array.isArray(data?.products) ? data.products : [];

        setProducts(productList);
      } catch (err) {
        setError(err.message || "دریافت محصولات با خطا مواجه شد.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="pt-28 pb-16">
        <section className="px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-[#f5f8ff] sm:rounded-[36px]">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl sm:-left-32 sm:-top-32 sm:h-96 sm:w-96" />

              <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl sm:-bottom-40 sm:right-20 sm:h-96 sm:w-96" />

              <div className="absolute right-8 top-8 h-12 w-12 rounded-full border border-blue-200/60 sm:right-12 sm:top-12 sm:h-20 sm:w-20" />

              <div className="relative z-10 px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                <div className="max-w-4xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 shadow-sm sm:px-4 sm:py-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />

                    <span className="text-[11px] font-semibold text-blue-600 sm:text-sm">REZIN TURK</span>
                  </div>

                  <h1 className="mt-5 text-3xl font-bold leading-[1.35] tracking-tight text-[#071936] sm:mt-6 sm:text-4xl lg:text-6xl">صنایع شیمیایی حبیبی</h1>

                  <h3 className="mt-5 text-2xl font-bold leading-[1.35] tracking-tight text-[#071936] sm:mt-6 sm:text-4xl lg:text-6xl">
                    محصولات با کیفیت
                    <br />
                    انتخاب مطمئن برای شما
                  </h3>

                  <p className="mt-5 max-w-3xl text-sm leading-8 text-gray-500 sm:mt-6 sm:text-base sm:leading-9 lg:text-lg">
                    مجموعه‌ای از محصولات با کیفیت صنعتی با قیمت مناسب. محصول مورد نظر خود را انتخاب کنید و اطلاعات کامل، توضیحات و قیمت آن را مشاهده کنید.
                  </p>

                  <p className="mt-3 max-w-3xl text-xs leading-7 text-gray-400 sm:text-sm sm:leading-8 lg:text-base">
                    قیمت محصولات از اطلاعات به‌روز فروشگاه دریافت می‌شود و تخفیف‌ها نیز به صورت مستقیم روی محصولات نمایش داده می‌شوند.
                  </p>

                  <div className="mt-7 sm:mt-8">
                    <a
                      href="#products"
                      className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200/50 transition hover:bg-blue-700 sm:rounded-2xl sm:px-6 sm:py-3.5 sm:text-base"
                    >
                      مشاهده محصولات
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mt-12 px-4 sm:mt-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="text-xs font-semibold text-blue-600 sm:text-sm">REZIN TURK</span>

              <h2 className="mt-2 text-2xl font-bold text-[#071936] sm:text-3xl lg:text-4xl">محصولات ما</h2>

              <p className="mt-2 text-xs text-gray-400 sm:mt-3 sm:text-sm">محصول مورد نظر خود را انتخاب کنید</p>
            </div>

            <div className="mt-8 flex items-center justify-between sm:mt-10">
              <div>
                <h3 className="text-lg font-bold text-[#071936] sm:text-2xl">همه محصولات</h3>

                <p className="mt-1 text-[11px] text-gray-400 sm:text-sm">محصولات موجود در فروشگاه</p>
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-600 sm:px-4 sm:py-2 sm:text-sm">{products.length.toLocaleString("fa-IR")} محصول</span>
            </div>

            {loading ? (
              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-117.5 animate-pulse overflow-hidden rounded-[26px] border border-blue-100 bg-gray-50">
                    <div className="h-47.5 bg-blue-50" />

                    <div className="space-y-4 p-5">
                      <div className="h-5 w-3/4 rounded-full bg-gray-200" />

                      <div className="h-4 w-full rounded-full bg-gray-200" />

                      <div className="h-4 w-2/3 rounded-full bg-gray-200" />

                      <div className="mt-8 h-20 rounded-2xl bg-gray-200" />

                      <div className="h-11 rounded-xl bg-gray-200" />
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="mt-7 rounded-3xl border border-red-100 bg-red-50 px-5 py-16 text-center">
                <h3 className="text-lg font-bold text-[#071936] sm:text-xl">دریافت محصولات ناموفق بود</h3>

                <p className="mt-2 text-xs text-gray-500 sm:text-sm">{error}</p>

                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700 sm:text-sm"
                >
                  تلاش دوباره
                </button>
              </div>
            ) : products.length > 0 ? (
              <>
                <div className="mt-5 flex gap-4 overflow-x-auto pb-4 sm:hidden [&::-webkit-scrollbar]:hidden">
                  {products.map((product) => (
                    <div key={product.id} className="w-70 min-w-70 shrink-0">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>

                <div className="mt-7 hidden grid-cols-2 gap-5 sm:grid lg:grid-cols-3 xl:grid-cols-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50/50 px-5 py-16 text-center">
                <h3 className="text-lg font-bold text-[#071936] sm:text-xl">محصولی وجود ندارد</h3>

                <p className="mt-2 text-xs text-gray-500 sm:text-sm">در حال حاضر محصولی برای نمایش وجود ندارد.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
