import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import useCart from "../../context/useCart";

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

        <main className="pt-32 px-5 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-[#071936]">سبد خرید خالی است</h1>

            <Link to="/products" className="inline-flex mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-7 py-3 font-bold transition">
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

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition">
            <FaArrowRight />
            بازگشت به سبد خرید
          </Link>

          <div className="mt-8">
            <span className="text-sm font-semibold text-blue-600">REZIN TURK</span>

            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071936]">اطلاعات گیرنده</h1>

            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-7">اطلاعات دریافت‌کننده سفارش را وارد کنید تا سفارش شما به آدرس مورد نظر ارسال شود.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
            <div className="rounded-[28px] border border-blue-100 bg-white shadow-sm p-5 sm:p-7 lg:p-8">
              <div className="flex items-center gap-4 pb-6 border-b border-blue-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <FaUser className="text-blue-600" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#071936]">مشخصات گیرنده</h2>

                  <p className="mt-1 text-xs sm:text-sm text-gray-400">اطلاعات شخصی دریافت‌کننده سفارش</p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#071936]">
                    نام
                    <span className="text-red-500 mr-1">*</span>
                  </label>

                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="نام گیرنده"
                    autoComplete="given-name"
                    className="w-full h-13 rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#071936]">
                    نام خانوادگی
                    <span className="text-red-500 mr-1">*</span>
                  </label>

                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="نام خانوادگی گیرنده"
                    autoComplete="family-name"
                    className="w-full h-13 rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block mb-2 text-sm font-semibold text-[#071936]">
                  شماره تلفن
                  <span className="text-red-500 mr-1">*</span>
                </label>

                <div className="relative">
                  <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

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
                    className="w-full h-13 rounded-2xl border border-blue-100 bg-gray-50 pr-11 pl-4 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition"
                  />
                </div>

                <p className="mt-2 text-xs text-gray-400">شماره تلفن برای هماهنگی ارسال سفارش استفاده می‌شود.</p>
              </div>

              <div className="mt-8 flex items-center gap-4 pb-5 border-b border-blue-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#071936]">آدرس ارسال</h2>

                  <p className="mt-1 text-xs sm:text-sm text-gray-400">آدرس دقیق محل تحویل سفارش</p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#071936]">
                    استان
                    <span className="text-red-500 mr-1">*</span>
                  </label>

                  <input
                    name="province"
                    value={form.province}
                    onChange={handleChange}
                    placeholder="مثلاً تهران"
                    autoComplete="address-level1"
                    className="w-full h-13 rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#071936]">
                    شهر
                    <span className="text-red-500 mr-1">*</span>
                  </label>

                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="مثلاً تهران"
                    autoComplete="address-level2"
                    className="w-full h-13 rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block mb-2 text-sm font-semibold text-[#071936]">
                  کد پستی
                  <span className="text-red-500 mr-1">*</span>
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
                  className="w-full h-13 rounded-2xl border border-blue-100 bg-gray-50 px-4 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition"
                />
              </div>

              <div className="mt-5">
                <label className="block mb-2 text-sm font-semibold text-[#071936]">
                  آدرس کامل
                  <span className="text-red-500 mr-1">*</span>
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={5}
                  placeholder="استان، شهر، خیابان، کوچه، پلاک، واحد و..."
                  autoComplete="street-address"
                  className="w-full rounded-2xl border border-blue-100 bg-gray-50 p-4 text-sm leading-7 outline-none resize-none placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition"
                />
              </div>

              {error && <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}

              <button
                type="submit"
                className="mt-7 w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-200/40 transition"
              >
                ادامه فرایند خرید
                <FaArrowRight className="text-sm" />
              </button>
            </div>

            <div className="lg:sticky lg:top-28 h-fit rounded-[28px] border border-blue-100 bg-[#f7f9fd] p-5 sm:p-6">
              <h2 className="text-xl font-bold text-[#071936]">خلاصه سفارش</h2>

              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white border border-blue-100 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm text-[#071936] truncate">{item.name}</p>

                      <p className="mt-1 text-xs text-gray-400">
                        {item.type} × {item.quantity.toLocaleString("fa-IR")}
                      </p>
                    </div>

                    <span className="text-xs sm:text-sm font-bold text-blue-600 whitespace-nowrap">{(item.price * item.quantity).toLocaleString("fa-IR")}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-blue-100 my-6" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">تعداد کالا</span>

                <span className="font-bold text-[#071936]">{cartItems.reduce((sum, item) => sum + item.quantity, 0).toLocaleString("fa-IR")}</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">مبلغ کل</span>

                <span className="text-xl font-bold text-blue-600">{totalAmount.toLocaleString("fa-IR")} تومان</span>
              </div>

              <div className="mt-6 rounded-2xl bg-white border border-blue-100 p-4">
                <p className="text-xs text-gray-400">توجه</p>

                <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-6">لطفاً اطلاعات گیرنده و آدرس را با دقت وارد کنید.</p>
              </div>

              <Link to="/cart" className="mt-4 w-full h-12 rounded-2xl border border-blue-100 bg-white hover:bg-blue-50 text-[#071936] font-semibold flex items-center justify-center transition">
                بازگشت به سبد خرید
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
