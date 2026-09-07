import { Link } from "react-router-dom";
import { FaShoppingBag, FaTag } from "react-icons/fa";
import { getMediaUrl } from "../api/api";

export default function ProductCard({ product }) {
  const price = Number(product?.price || 0);

  const discountPrice = product?.discount_price !== null && product?.discount_price !== undefined ? Number(product.discount_price) : 0;

  const hasDiscount = discountPrice > 0 && discountPrice < price;

  const displayPrice = hasDiscount ? discountPrice : price;

  const discountPercent = hasDiscount && price > 0 ? Math.round(((price - discountPrice) / price) * 100) : 0;

  const unitNames = {
    liter: "لیتر",
    gallon: "گالون",
    can: "حلب",
    chemical: "محصول",
  };

  const unitLabel = unitNames[product?.unit] || product?.unit || "محصول";

  const imageUrl = getMediaUrl(product?.main_image);

  return (
    <div
      className="group flex h-full min-h-117.5 flex-col overflow-hidden rounded-[26px] border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      dir="rtl"
    >
      <Link to={`/products/${product.id}`} className="block shrink-0">
        <div className="relative h-60 overflow-hidden bg-blue-50">
          <img
            src={imageUrl}
            alt={product?.title || "محصول"}
            className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/products/placeholder.jpg";
            }}
          />

          {hasDiscount && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-red-500 px-3 py-1.5 text-xs font-bold text-white shadow-md">
              <FaTag />
              {discountPercent}٪ تخفیف
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{unitLabel}</span>
        </div>

        <Link to={`/products/${product.id}`}>
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-700">{product?.title || "محصول"}</h3>
        </Link>

        {product?.description && <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">{product.description}</p>}

        <div className="mt-auto">
          <div className="mb-4">
            {hasDiscount && <div className="mb-1 text-sm text-gray-400 line-through">{price.toLocaleString("fa-IR")} تومان</div>}

            <div className="text-xl font-extrabold text-blue-700">{displayPrice > 0 ? `${displayPrice.toLocaleString("fa-IR")} تومان` : "تماس بگیرید"}</div>
          </div>

          <Link to={`/products/${product.id}`} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 font-bold text-white transition-all hover:bg-blue-700">
            <FaShoppingBag />
            مشاهده محصول
          </Link>
        </div>
      </div>
    </div>
  );
}
