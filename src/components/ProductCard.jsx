import { Link } from "react-router-dom";
import { FaShoppingCart, FaTag } from "react-icons/fa";

export default function ProductCard({ product, variant }) {
  const mainPackage = variant?.packages?.[0];

  const price = mainPackage?.price || 0;
  const originalPrice = mainPackage?.originalPrice || 0;
  const discountPercent = mainPackage?.discountPercent || 0;

  const hasDiscount = discountPercent > 0 && originalPrice > price;

  return (
    <div dir="rtl" className="group overflow-hidden rounded-[22px] sm:rounded-[28px] bg-white border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-44 sm:h-60 overflow-hidden bg-blue-50">
        <img src={product.image} alt={`${product.name} ${variant.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-white/95 backdrop-blur px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold text-blue-600 shadow-sm">
          {product.category}
        </span>

        {hasDiscount && (
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 rounded-full bg-red-500 px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-bold text-white shadow-md">
            <FaTag className="text-[9px]" />
            {discountPercent}% تخفیف
          </span>
        )}
      </div>

      <div className="p-3.5 sm:p-5">
        <h3 className="text-sm sm:text-lg font-bold text-[#071936] truncate">{product.name}</h3>

        <div className="mt-1.5 sm:mt-2 inline-flex rounded-lg sm:rounded-xl bg-blue-50 px-2.5 sm:px-3 py-1 sm:py-1.5">
          <span className="text-[10px] sm:text-xs font-bold text-blue-600">مدل {variant.name}</span>
        </div>

        <p className="mt-2 sm:mt-3 text-[11px] sm:text-sm text-gray-500 leading-6 sm:leading-7 line-clamp-2">{product.description}</p>

        <div className="mt-3 sm:mt-5 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 p-2.5 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] sm:text-xs text-gray-400">قیمت بسته</span>

            {hasDiscount && <span className="text-[10px] sm:text-xs text-gray-400 line-through">{originalPrice.toLocaleString("fa-IR")} تومان</span>}
          </div>

          <div className="mt-1 flex items-center justify-between gap-2">
            <span className="text-xs sm:text-sm text-gray-500">{mainPackage?.name || "بسته"}</span>

            <span className="text-sm sm:text-lg font-bold text-blue-600">{price > 0 ? `${price.toLocaleString("fa-IR")} تومان` : "قیمت تماس"}</span>
          </div>
        </div>

        <Link
          to={`/products/${product.id}?variant=${variant.id}`}
          className="mt-3 sm:mt-4 w-full flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-3 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition shadow-sm"
        >
          <FaShoppingCart className="text-xs sm:text-sm" />
          افزودن
        </Link>
      </div>
    </div>
  );
}
