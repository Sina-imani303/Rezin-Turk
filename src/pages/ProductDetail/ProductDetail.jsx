import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowRight, FaMinus, FaPlus, FaShoppingBag, FaTag } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import { apiRequest } from "../../api/api";
import useCart from "../../context/useCart";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await apiRequest(`/products/${id}/`);

        setProduct(data?.product || data);
      } catch (err) {
        setError(err.message || "دریافت اطلاعات محصول با خطا مواجه شد.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((value) => value + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((value) => Math.max(1, value - 1));
  };

  const getImageUrl = (image) => {
    if (!image) {
      return "/products/placeholder.jpg";
    }

    if (image.startsWith("http://193.228.90.14/media/")) {
      return image.replace("http://193.228.90.14/media/", "http://193.228.90.14:8080/media/");
    }

    if (image.startsWith("/media/")) {
      return `http://193.228.90.14:8080${image}`;
    }

    return image;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white" dir="rtl">
        <Navbar />

        <main className="px-5 pb-16 pt-32 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="h-87.5 animate-pulse rounded-[32px] bg-blue-50 sm:h-112.5 lg:h-137.5" />

              <div className="rounded-[32px] border border-blue-100 p-6 sm:p-8 lg:p-10">
                <div className="h-9 w-3/4 animate-pulse rounded-full bg-gray-100" />

                <div className="mt-6 h-20 animate-pulse rounded-2xl bg-gray-100" />

                <div className="mt-8 h-24 animate-pulse rounded-2xl bg-blue-50" />

                <div className="mt-7 h-14 animate-pulse rounded-2xl bg-gray-100" />

                <div className="mt-6 h-14 animate-pulse rounded-2xl bg-gray-100" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white" dir="rtl">
        <Navbar />

        <main className="flex min-h-screen items-center justify-center px-5 pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#071936]">محصول پیدا نشد</h1>

            <p className="mt-3 text-sm text-gray-500">{error || "اطلاعات این محصول در دسترس نیست."}</p>

            <Link to="/products" className="mt-5 inline-flex rounded-2xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
              بازگشت به محصولات
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const title = product?.title || "محصول";

  const description = product?.description || "توضیحات محصول وارد نشده است.";

  const unit = product?.unit || "";

  const price = Number(product?.price || 0);

  const discountPrice = product?.discount_price !== null && product?.discount_price !== undefined ? Number(product.discount_price) : 0;

  const hasDiscount = discountPrice > 0 && discountPrice < price;

  const finalPrice = hasDiscount ? discountPrice : price;

  const discountPercent = hasDiscount && price > 0 ? Math.round(((price - discountPrice) / price) * 100) : 0;

  const totalBeforeDiscount = price * quantity;

  const totalPrice = finalPrice * quantity;

  const discountAmount = hasDiscount ? totalBeforeDiscount - totalPrice : 0;

  const unitNames = {
    liter: "لیتر",
    gallon: "گالون",
    can: "حلب",
    bottle: "بطری",
    barrel: "بشکه",
    chemical: "شیمیایی",
  };

  const unitLabel = unitNames[unit] || unit || "واحد";

  const imageUrl = getImageUrl(product?.main_image);

  const handleAddToCart = () => {
    if (!product?.id || finalPrice <= 0) {
      return;
    }

    addToCart({
      id: String(product.id),
      productId: product.id,
      title,
      description,
      main_image: imageUrl,
      unit,
      unitLabel,
      price: finalPrice,
      originalPrice: price,
      discountPrice: hasDiscount ? discountPrice : null,
      discountPercent,
      quantity,
      is_available: product.is_available,
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
            <div className="flex h-87.5 items-center justify-center overflow-hidden rounded-[32px] border border-blue-100 bg-blue-50 sm:h-112.5 lg:h-137.5">
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-contain p-5"
                onError={(e) => {
                  if (!e.currentTarget.src.includes("placeholder.jpg")) {
                    e.currentTarget.src = "/products/placeholder.jpg";
                  }
                }}
              />
            </div>

            <div className="rounded-[32px] border border-blue-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">{unitLabel}</span>

                  <h1 className="mt-4 text-3xl font-bold text-[#071936] sm:text-4xl">{title}</h1>
                </div>

                {hasDiscount && discountPercent > 0 && (
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                    <FaTag className="text-[10px]" />
                    {discountPercent}٪ تخفیف
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">{description}</p>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs text-gray-400">قیمت هر {unitLabel}</p>

                {hasDiscount && <p className="mt-2 text-sm text-gray-400 line-through">{price.toLocaleString("fa-IR")} تومان</p>}

                <p className="mt-1 text-2xl font-bold text-blue-600">{finalPrice > 0 ? `${finalPrice.toLocaleString("fa-IR")} تومان` : "قیمت وارد نشده"}</p>

                {hasDiscount && <p className="mt-2 text-xs font-semibold text-red-500">{discountPercent}٪ تخفیف</p>}
              </div>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-white p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-gray-400">وضعیت محصول</span>

                  <span className={`text-sm font-bold ${product?.is_available ? "text-green-600" : "text-red-500"}`}>{product?.is_available ? "موجود" : "ناموجود"}</span>
                </div>
              </div>

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

                    {discountAmount > 0 && (
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
                disabled={finalPrice <= 0 || !product?.is_available}
                className={`mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-2xl font-bold text-white shadow-lg transition ${
                  finalPrice > 0 && product?.is_available ? "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200" : "cursor-not-allowed bg-gray-300"
                }`}
              >
                <FaShoppingBag />

                {!product?.is_available ? "محصول ناموجود است" : finalPrice > 0 ? "افزودن به سبد خرید" : "قیمت محصول وارد نشده"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
