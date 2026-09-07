import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import useCart from "../../context/useCart";
import { getMediaUrl } from "../../api/api";

export default function Checkout() {
  const navigate = useNavigate();

  const { cartItems, totalAmount } = useCart();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    province: "",
    city: "",
    postalCode: "",
    address: "",
  });

  const [error, setError] = useState("");

  const getTitle = (item) => {
    return item?.title || item?.name || "محصول";
  };

  const getUnit = (item) => {
    const units = {
      liter: "لیتر",
      gallon: "گالون",
      can: "حلب",
      chemical: "شیمیایی",
    };

    return units[item?.unit] || item?.unit || "محصول";
  };

  const getImage = (item) => {
    return getMediaUrl(item?.main_image || item?.image);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.province.trim() || !form.city.trim() || !form.postalCode.trim() || !form.address.trim()) {
      setError("لطفاً تمام اطلاعات ضروری را وارد کنید.");
      return;
    }

    if (!/^09\d{9}$/.test(form.phone.trim())) {
      setError("شماره تلفن را به صورت صحیح وارد کنید.");
      return;
    }

    if (!/^\d{10}$/.test(form.postalCode.trim())) {
      setError("کد پستی باید ۱۰ رقم باشد.");
      return;
    }

    localStorage.setItem("checkout-info", JSON.stringify(form));

    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white" dir="rtl">
        <Navbar />

        <main className="px-5 pb-16 pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-[#071936]">سبد خرید خالی است</h1>

            <Link to="/products" className="mt-6 inline-flex rounded-2xl bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-700">
              مشاهده محصولات
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="px-4 pb-20 pt-32 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-blue-600">
            <FaArrowRight />
            بازگشت به سبد خرید
          </Link>

          <div className="mt-8">
            <span className="text-sm font-semibold text-blue-600">REZIN TURK</span>

            <h1 className="mt-3 text-3xl font-bold text-[#071936] sm:text-4xl lg:text-5xl">اطلاعات گیرنده</h1>

            <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">اطلاعات دریافت‌کننده سفارش را وارد کنید تا سفارش شما به آدرس مورد نظر ارسال شود.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] lg:gap-8">
            <div className="rounded-[28px] border border-blue-100 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
              <div className="flex items-center gap-4 border-b border-blue-100 pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                  <FaUser className="text-blue-600" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#071936]">مشخصات گیرنده</h2>

                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">اطلاعات شخصی دریافت‌کننده سفارش</p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#071936]">
                    نام
                    <span className="mr-1 text-red-500">*</span>
                  </label>

                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="نام گیرنده"
                    autoComplete="given-name"
                    className="h-13 w-full rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#071936]">
                    نام خانوادگی
                    <span className="mr-1 text-red-500">*</span>
                  </label>

                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="نام خانوادگی گیرنده"
                    autoComplete="family-name"
                    className="h-13 w-full rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100/50"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-[#071936]">
                  شماره تلفن
                  <span className="mr-1 text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400" />

                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="09123456789"
                    autoComplete="tel"
                    inputMode="numeric"
                    maxLength={11}
                    dir="ltr"
                    className="h-13 w-full rounded-2xl border border-blue-100 bg-gray-50 py-0 pl-4 pr-11 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100/50"
                  />
                </div>

                <p className="mt-2 text-xs text-gray-400">شماره تلفن برای هماهنگی ارسال سفارش استفاده می‌شود.</p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-b border-blue-100 pb-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#071936]">آدرس ارسال</h2>

                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">آدرس دقیق محل تحویل سفارش</p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#071936]">
                    استان
                    <span className="mr-1 text-red-500">*</span>
                  </label>

                  <input
                    name="province"
                    value={form.province}
                    onChange={handleChange}
                    placeholder="مثلاً تهران"
                    autoComplete="address-level1"
                    className="h-13 w-full rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#071936]">
                    شهر
                    <span className="mr-1 text-red-500">*</span>
                  </label>

                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="مثلاً تهران"
                    autoComplete="address-level2"
                    className="h-13 w-full rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100/50"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-[#071936]">
                  کد پستی
                  <span className="mr-1 text-red-500">*</span>
                </label>

                <input
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  placeholder="کد پستی ۱۰ رقمی"
                  autoComplete="postal-code"
                  inputMode="numeric"
                  maxLength={10}
                  dir="ltr"
                  className="h-13 w-full rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100/50"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-[#071936]">
                  آدرس کامل
                  <span className="mr-1 text-red-500">*</span>
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={5}
                  placeholder="استان، شهر، خیابان، کوچه، پلاک، واحد و..."
                  autoComplete="street-address"
                  className="w-full resize-none rounded-2xl border border-blue-100 bg-gray-50 p-4 text-sm leading-7 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100/50"
                />
              </div>

              {error && <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}

              <button
                type="submit"
                className="mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-200/40 transition hover:bg-blue-700"
              >
                ادامه فرایند خرید
                <FaArrowRight className="text-sm" />
              </button>
            </div>

            <div className="h-fit rounded-[28px] border border-blue-100 bg-[#f7f9fd] p-5 sm:p-6 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-[#071936]">خلاصه سفارش</h2>

              <div className="mt-6 space-y-4">
                {cartItems.map((item) => {
                  const title = getTitle(item);
                  const unit = getUnit(item);
                  const image = getImage(item);
                  const quantity = Number(item?.quantity || 0);
                  const price = Number(item?.price || 0);

                  return (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-blue-100 bg-white">
                        <img
                          src={image}
                          alt={title}
                          className="h-full w-full object-contain p-1"
                          onError={(e) => {
                            e.currentTarget.src = "/products/placeholder.jpg";
                          }}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#071936]">{title}</p>

                        <p className="mt-1 text-xs text-gray-400">
                          {unit} × {quantity.toLocaleString("fa-IR")}
                        </p>
                      </div>

                      <span className="whitespace-nowrap text-xs font-bold text-blue-600 sm:text-sm">{(price * quantity).toLocaleString("fa-IR")}</span>
                    </div>
                  );
                })}
              </div>

              <div className="my-6 h-px bg-blue-100" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">تعداد کالا</span>

                <span className="font-bold text-[#071936]">{cartItems.reduce((sum, item) => sum + Number(item?.quantity || 0), 0).toLocaleString("fa-IR")}</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">مبلغ کل</span>

                <span className="text-xl font-bold text-blue-600">{Number(totalAmount || 0).toLocaleString("fa-IR")} تومان</span>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-4">
                <p className="text-xs text-gray-400">توجه</p>

                <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">لطفاً اطلاعات گیرنده و آدرس را با دقت وارد کنید.</p>
              </div>

              <Link to="/cart" className="mt-4 flex h-12 w-full items-center justify-center rounded-2xl border border-blue-100 bg-white font-semibold text-[#071936] transition hover:bg-blue-50">
                بازگشت به سبد خرید
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
