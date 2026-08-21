import { useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FaArrowRight, FaMinus, FaPlus, FaShoppingBag, FaTag } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import { products } from "../../data/productsData";
import useCart from "../../context/useCart";

export default function ProductDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((item) => String(item.id) === String(id));

  const variantId = searchParams.get("variant");

  const selectedVariant = product?.variants?.find((variant) => String(variant.id) === String(variantId)) || product?.variants?.[0];

  const selectedPackage = selectedVariant?.packages?.[0];

  const [quantity, setQuantity] = useState(1);

  if (!product || !selectedVariant || !selectedPackage) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white" dir="rtl">
        <div className="px-5 text-center">
          <h1 className="text-2xl font-bold text-[#071936]">محصول پیدا نشد</h1>

          <Link to="/products" className="mt-5 inline-flex rounded-2xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
            بازگشت به محصولات
          </Link>
        </div>
      </div>
    );
  }

  const unitPrice = Number(selectedPackage.unitPrice || 0);
  const originalPrice = Number(selectedPackage.originalPrice || 0);
  const discountPercent = Number(selectedPackage.discountPercent || 0);

  const totalBeforeDiscount = unitPrice * quantity;

  const discountAmount = discountPercent > 0 ? Math.round((totalBeforeDiscount * discountPercent) / 100) : 0;

  const totalPrice = totalBeforeDiscount - discountAmount;

  const increaseQuantity = () => {
    setQuantity((value) => value + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((value) => Math.max(1, value - 1));
  };

  const handleAddToCart = () => {
    if (unitPrice <= 0) return;

    addToCart({
      id: `${product.id}-${selectedVariant.id}-${selectedPackage.id}`,

      productId: product.id,
      variantId: selectedVariant.id,
      packageId: selectedPackage.id,

      name: product.name,
      variantName: selectedVariant.name,
      packageName: selectedPackage.name,

      image: product.image,

      unit: selectedPackage.unit,
      quantityPerPackage: selectedPackage.quantityPerPackage,

      unitPrice,
      originalPrice,
      price: totalPrice,
      discountPercent,

      quantity,
    });

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-blue-600">
            <FaArrowRight />
            بازگشت به محصولات
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="h-87.5 overflow-hidden rounded-[32px] border border-blue-100 bg-blue-50 sm:h-112.5 lg:h-137.5">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>

            <div className="rounded-[32px] border border-blue-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-[#071936] sm:text-4xl">{product.name}</h1>

                  <p className="mt-2 text-sm text-gray-400">مدل {selectedVariant.name}</p>
                </div>

                {discountPercent > 0 && (
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                    <FaTag className="text-[10px]" />
                    {discountPercent}٪ تخفیف
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">{product.description}</p>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs text-gray-400">قیمت هر {selectedPackage.unit || "واحد"}</p>

                <p className="mt-2 text-2xl font-bold text-blue-600">{unitPrice > 0 ? `${unitPrice.toLocaleString("fa-IR")} تومان` : "قیمت وارد نشده"}</p>
              </div>

              {selectedPackage.quantityPerPackage > 1 && (
                <div className="mt-5 rounded-2xl border border-blue-100 bg-white p-4">
                  <p className="text-xs text-gray-400">تعداد در بسته</p>

                  <p className="mt-1 font-bold text-[#071936]">
                    {selectedPackage.quantityPerPackage.toLocaleString("fa-IR")} {selectedPackage.unit}
                  </p>
                </div>
              )}

              <div className="mt-7">
                <h2 className="text-sm font-bold text-[#071936]">تعداد</h2>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    <FaMinus />
                  </button>

                  <span className="w-14 text-center text-lg font-bold">{quantity.toLocaleString("fa-IR")}</span>

                  <button type="button" onClick={increaseQuantity} className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700">
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-[#071936] p-5 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-white/50">مبلغ کل</p>

                    {discountPercent > 0 && discountAmount > 0 && (
                      <p className="mt-2 text-xs text-red-400">
                        تخفیف {discountPercent}٪: {discountAmount.toLocaleString("fa-IR")} تومان
                      </p>
                    )}
                  </div>

                  <div className="text-left">
                    {discountAmount > 0 && <p className="text-sm text-white/40 line-through">{totalBeforeDiscount.toLocaleString("fa-IR")} تومان</p>}

                    <p className="mt-1 text-xl font-bold text-blue-400 sm:text-2xl">{totalPrice > 0 ? `${totalPrice.toLocaleString("fa-IR")} تومان` : "قیمت وارد نشده"}</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={unitPrice <= 0}
                className={`mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-2xl font-bold text-white shadow-lg transition ${
                  unitPrice > 0 ? "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200" : "cursor-not-allowed bg-gray-300"
                }`}
              >
                <FaShoppingBag />

                {unitPrice > 0 ? "افزودن به سبد خرید" : "قیمت محصول وارد نشده"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
