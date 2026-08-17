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

  const [quantity, setQuantity] = useState(1);

  const [selectedPackageId, setSelectedPackageId] = useState(selectedVariant?.packages?.[0]?.id || "");

  if (!product || !selectedVariant) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" dir="rtl">
        <div className="text-center px-5">
          <h1 className="text-2xl font-bold text-[#071936]">محصول پیدا نشد</h1>

          <Link to="/products" className="inline-flex mt-5 rounded-2xl bg-blue-600 px-6 py-3 text-white">
            بازگشت به محصولات
          </Link>
        </div>
      </div>
    );
  }

  const selectedPackage = selectedVariant.packages.find((pkg) => pkg.id === selectedPackageId) || selectedVariant.packages[0];

  const price = selectedPackage?.price || 0;
  const originalPrice = selectedPackage?.originalPrice || 0;
  const unitPrice = selectedPackage?.unitPrice || 0;
  const discountPercent = selectedPackage?.discountPercent || 0;

  const totalPrice = price * quantity;

  const increaseQuantity = () => {
    setQuantity((value) => value + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((value) => Math.max(1, value - 1));
  };

  const handlePackageChange = (packageId) => {
    setSelectedPackageId(packageId);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (!selectedPackage || price <= 0) {
      return;
    }

    addToCart({
      id: `${product.id}-${selectedVariant.id}-${selectedPackage.id}`,

      productId: product.id,
      variantId: selectedVariant.id,
      packageId: selectedPackage.id,

      name: product.name,
      variantName: selectedVariant.name,
      packageName: selectedPackage.name,

      image: product.image,
      category: product.category,

      unit: selectedPackage.unit,
      quantityPerPackage: selectedPackage.quantityPerPackage,

      unitPrice,
      originalPrice,
      price,
      discountPercent,

      quantity,
    });

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition">
            <FaArrowRight />
            بازگشت به محصولات
          </Link>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden bg-blue-50 border border-blue-100 h-90 sm:h-120 lg:h-140">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="rounded-[28px] sm:rounded-[36px] border border-blue-100 bg-white shadow-sm p-5 sm:p-7 lg:p-10">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-blue-600">{product.category}</span>

                {discountPercent > 0 && (
                  <span className="flex items-center gap-1.5 rounded-full bg-red-50 text-red-600 px-3 py-1.5 text-xs font-bold">
                    <FaTag className="text-[10px]" />
                    {discountPercent}% تخفیف
                  </span>
                )}
              </div>

              <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-[#071936]">{product.name}</h1>

              <div className="mt-3 inline-flex rounded-xl bg-blue-50 px-4 py-2">
                <span className="text-sm font-bold text-blue-600">مدل {selectedVariant.name}</span>
              </div>

              <p className="mt-5 text-sm sm:text-base text-gray-500 leading-8">{product.description}</p>

              <div className="mt-8">
                <h2 className="text-sm font-bold text-[#071936]">نوع بسته‌بندی</h2>

                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {selectedVariant.packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => handlePackageChange(pkg.id)}
                      className={`rounded-2xl border py-3 px-2 text-sm font-semibold transition ${
                        selectedPackage.id === pkg.id ? "border-blue-600 bg-blue-600 text-white shadow-md" : "border-blue-100 bg-white text-gray-700 hover:border-blue-400"
                      }`}
                    >
                      {pkg.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-blue-50 border border-blue-100 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">بسته انتخاب شده</p>

                    <p className="mt-1 font-bold text-[#071936]">{selectedPackage.name}</p>
                  </div>

                  {selectedPackage.quantityPerPackage > 1 && (
                    <div className="text-left">
                      <p className="text-xs text-gray-400">تعداد در کارتن</p>

                      <p className="mt-1 font-bold text-[#071936]">
                        {selectedPackage.quantityPerPackage} {selectedPackage.unit}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-5 border-t border-blue-100">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-400">قیمت هر {selectedPackage.unit || "واحد"}</p>

                      <p className="mt-1 text-base font-bold text-[#071936]">{unitPrice > 0 ? `${unitPrice.toLocaleString("fa-IR")} تومان` : "قیمت وارد نشده"}</p>
                    </div>

                    {discountPercent > 0 && <span className="rounded-xl bg-red-500 px-3 py-1.5 text-xs font-bold text-white">{discountPercent}% تخفیف</span>}
                  </div>

                  <div className="mt-5">
                    {originalPrice > price && <p className="text-xs text-gray-400 line-through">{originalPrice.toLocaleString("fa-IR")} تومان</p>}

                    <p className="mt-1 text-xs text-gray-400">قیمت نهایی بسته</p>

                    <p className="mt-1 text-2xl font-bold text-blue-600">{price > 0 ? `${price.toLocaleString("fa-IR")} تومان` : "قیمت وارد نشده"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <h2 className="text-sm font-bold text-[#071936]">تعداد بسته</h2>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="w-11 h-11 rounded-xl border border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
                  >
                    <FaMinus />
                  </button>

                  <span className="w-14 text-center text-lg font-bold">{quantity.toLocaleString("fa-IR")}</span>

                  <button type="button" onClick={increaseQuantity} className="w-11 h-11 rounded-xl bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center transition">
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-[#071936] p-5 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-white/50">تعداد بسته</p>

                    <p className="mt-1 font-bold">{quantity.toLocaleString("fa-IR")}</p>
                  </div>

                  <div className="text-left">
                    <p className="text-xs text-white/50">مبلغ کل</p>

                    <p className="mt-1 text-xl sm:text-2xl font-bold text-blue-400">{totalPrice > 0 ? `${totalPrice.toLocaleString("fa-IR")} تومان` : "قیمت وارد نشده"}</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!selectedPackage || price <= 0}
                className={`mt-6 w-full h-14 rounded-2xl text-white font-bold flex items-center justify-center gap-3 shadow-lg transition duration-300 ${
                  selectedPackage && price > 0 ? "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200" : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                <FaShoppingBag />

                {price > 0 ? "افزودن به سبد خرید" : "قیمت محصول وارد نشده"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
