import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaShoppingBag, FaArrowLeft, FaTruck } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import { apiRequest } from "../../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const token = localStorage.getItem("access_token");

        if (!token) {
          setError("برای مشاهده سفارش‌ها ابتدا وارد حساب کاربری شوید.");
          return;
        }

        const data = await apiRequest("/orders/");

        const orderList = Array.isArray(data) ? data : Array.isArray(data?.results) ? data.results : Array.isArray(data?.orders) ? data.orders : [];

        setOrders(orderList);
      } catch (err) {
        setError(err.message || "دریافت سفارش‌ها با خطا مواجه شد.");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  const getStatus = (status) => {
    const statuses = {
      pending: "در انتظار بررسی",
      confirmed: "تأیید شده",
      preparing: "در حال آماده‌سازی",
      shipped: "ارسال شده",
      delivered: "تحویل داده شده",
      cancelled: "لغو شده",
    };

    return statuses[status] || status || "در انتظار بررسی";
  };

  const getStatusStyle = (status) => {
    if (status === "delivered") {
      return "bg-green-50 text-green-600 border-green-100";
    }

    if (status === "cancelled") {
      return "bg-red-50 text-red-600 border-red-100";
    }

    if (status === "shipped") {
      return "bg-purple-50 text-purple-600 border-purple-100";
    }

    return "bg-blue-50 text-blue-600 border-blue-100";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black" dir="rtl">
        <Navbar />

        <main className="px-4 pb-16 pt-32 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-[#f5f8ff]">
              <div className="text-center">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />

                <p className="mt-4 text-sm text-gray-500">در حال دریافت سفارش‌ها...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Link to="/account" className="inline-flex items-center gap-2 text-xs text-gray-500 transition hover:text-blue-600 sm:text-sm">
            <FaArrowRight />
            بازگشت به حساب کاربری
          </Link>

          <div className="mt-5 sm:mt-7">
            <span className="text-[10px] font-semibold text-blue-600 sm:text-xs">REZIN TURK</span>

            <h1 className="mt-1 text-2xl font-bold text-[#071936] sm:text-4xl">سفارش‌های من</h1>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">مشاهده و پیگیری سفارش‌های ثبت شده</p>
          </div>

          {error ? (
            <div className="mt-7 rounded-3xl border border-red-100 bg-red-50 px-5 py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-500">
                <FaShoppingBag />
              </div>

              <h2 className="mt-4 text-lg font-bold text-[#071936]">دریافت سفارش‌ها ناموفق بود</h2>

              <p className="mt-2 text-xs text-gray-500 sm:text-sm">{error}</p>

              <Link to="/login" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-700 sm:text-sm">
                ورود به حساب
                <FaArrowLeft />
              </Link>
            </div>
          ) : orders.length === 0 ? (
            <div className="mt-7 flex min-h-80 flex-col items-center justify-center rounded-3xl border border-blue-100 bg-gray-50 px-5 text-center sm:mt-10 sm:min-h-96">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <FaShoppingBag className="text-2xl" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#071936] sm:text-xl">هنوز سفارشی ثبت نکرده‌اید</h2>

              <p className="mt-2 text-xs text-gray-500 sm:text-sm">سفارش‌های شما بعد از ثبت در این قسمت نمایش داده می‌شوند.</p>

              <Link to="/products" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-700 sm:text-sm">
                مشاهده محصولات
                <FaArrowLeft />
              </Link>
            </div>
          ) : (
            <div className="mt-7 space-y-4 sm:mt-10">
              {orders.map((order) => (
                <Link
                  key={order.id}
                  to={`/account/orders/${order.id}`}
                  className="group block rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <FaShoppingBag />
                      </div>

                      <div>
                        <p className="text-[10px] text-gray-400 sm:text-xs">شماره سفارش</p>

                        <h2 className="mt-1 text-sm font-bold text-[#071936] sm:text-base">#{order.id}</h2>
                      </div>
                    </div>

                    <span className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold sm:text-xs ${getStatusStyle(order.status)}`}>{getStatus(order.status)}</span>
                  </div>

                  {Array.isArray(order.items) && order.items.length > 0 && (
                    <div className="mt-5 border-t border-gray-100 pt-4">
                      <p className="text-xs text-gray-400">اقلام سفارش</p>

                      <div className="mt-2 space-y-2">
                        {order.items.slice(0, 3).map((item, index) => (
                          <div key={item.id || index} className="flex items-center justify-between gap-3 text-xs">
                            <span className="truncate font-medium text-[#071936]">{item.product_name || item.product?.name || item.name || "محصول"}</span>

                            <span className="shrink-0 text-gray-400">× {item.quantity || 1}</span>
                          </div>
                        ))}

                        {order.items.length > 3 && <p className="pt-1 text-[10px] text-blue-600">+ {order.items.length - 3} محصول دیگر</p>}
                      </div>
                    </div>
                  )}

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <FaTruck />

                      <span>{order.created_at ? new Date(order.created_at).toLocaleDateString("fa-IR") : "تاریخ سفارش"}</span>
                    </div>

                    <span className="flex items-center gap-2 text-xs font-semibold text-blue-600">
                      مشاهده جزئیات
                      <FaArrowLeft className="text-[10px] transition group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
