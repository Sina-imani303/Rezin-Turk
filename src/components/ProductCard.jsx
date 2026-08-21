import { Link } from "react-router-dom";
import { FaShoppingBag, FaTag } from "react-icons/fa";

export default function ProductCard({ product, variant }) {
  const packageItem = variant?.packages?.[0];

  const unitPrice = Number(packageItem?.unitPrice || 0);
  const originalPrice = Number(packageItem?.originalPrice || 0);
  const discountPercent = Number(packageItem?.discountPercent || 0);

  return (
    <div
      className="group flex h-full min-h-117.5 flex-col overflow-hidden rounded-[26px] border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      dir="rtl"
    >
      <Link to={`/products/${product.id}?variant=${variant.id}`} className="block shrink-0">
        <div className="relative h-47.5 overflow-hidden bg-blue-50">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

          {discountPercent > 0 && (
            <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-[11px] font-bold text-white shadow-md">
              <FaTag className="text-[9px]" />
              {discountPercent}٪ تخفیف
            </div>
          )}

          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-blue-600 shadow-md">{product.category}</span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div>
          <Link to={`/products/${product.id}?variant=${variant.id}`} className="block">
            <h3 className="line-clamp-1 text-base font-bold text-[#071936] transition hover:text-blue-600 sm:text-lg">{product.name}</h3>
          </Link>

          <p className="mt-1 inline-block rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600">مدل {variant.name}</p>

          <p className="mt-3 line-clamp-2 min-h-10.5 text-xs leading-6 text-gray-500 sm:text-sm">{product.description}</p>
        </div>

        <div className="mt-auto">
          <div className="mt-4 rounded-2xl border border-gray-100 bg-gray-50 p-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] text-gray-400">قیمت هر {packageItem?.unit || "واحد"}</p>

                <p className="mt-1 text-lg font-bold text-blue-600">{unitPrice > 0 ? `${unitPrice.toLocaleString("fa-IR")} تومان` : "قیمت وارد نشده"}</p>
              </div>

              {discountPercent > 0 && originalPrice > unitPrice && (
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 line-through">{originalPrice.toLocaleString("fa-IR")} تومان</p>

                  <p className="mt-1 text-[10px] font-bold text-red-500">{discountPercent}٪ تخفیف</p>
                </div>
              )}
            </div>
          </div>

          <Link
            to={`/products/${product.id}?variant=${variant.id}`}
            className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-200/40 transition hover:bg-blue-700"
          >
            <FaShoppingBag className="text-xs" />
            افزودن
          </Link>
        </div>
      </div>
    </div>
  );
}
