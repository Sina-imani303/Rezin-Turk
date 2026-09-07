import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight, FaShoppingBag, FaTruck, FaCheck } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import { apiRequest } from "../../api/api";

export default function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const token = localStorage.getItem("access_token");

        if (!token) {
          setError("برای مشاهده سفارش ابتدا وارد حساب کاربری شوید.");
          return;
        }

        const data = await apiRequest(`/orders/${id}/`);

        setOrder(data);
      } catch (err) {
        setError(err.message || "دریافت اطلاعات سفارش ناموفق بود.");
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, [id]);

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

  const statusSteps = [
    {
      key: "pending",
      title: "ثبت سفارش",
      description: "سفارش شما با موفقیت ثبت شده است.",
    },
    {
      key: "confirmed",
      title: "تأیید سفارش",
      description: "سفارش توسط فروشگاه بررسی و تأیید می‌شود.",
    },
    {
      key: "preparing",
      title: "در حال آماده‌سازی",
      description: "محصولات سفارش شما در حال آماده‌سازی هستند.",
    },
    {
      key: "shipped",
      title: "ارسال شده",
      description: "سفارش تحویل شرکت حمل‌ونقل شده است.",
    },
    {
      key: "delivered",
      title: "تحویل داده شده",
      description: "سفارش به شما تحویل داده شده است.",
    },
  ];

  const getStepIndex = (status) => {
    const index = statusSteps.findIndex((step) => step.key === status);

    return index >= 0 ? index : 0;
  };

  const getItemName = (item) => {
    return item.product_name || item.product?.name || item.name || "محصول";
  };

  const getItemPrice = (item) => {
    return Number(item.price || item.unit_price || item.product_price || item.product?.price || 0);
  };

  const getItemQuantity = (item) => {
    return Number(item.quantity || 1);
  };

  const getItemTotal = (item) => {
    if (item.total_price != null) {
      return Number(item.total_price);
    }

    if (item.total != null) {
      return Number(item.total);
    }

    return getItemPrice(item) * getItemQuantity(item);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black" dir="rtl">
        <Navbar />

        <main className="px-4 pb-16 pt-32 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-[#f5f8ff]">
              <div className="text-center">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />

                <p className="mt-4 text-sm text-gray-500">در حال دریافت اطلاعات سفارش...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-white text-black" dir="rtl">
        <Navbar />

        <main className="px-4 pb-16 pt-32 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-red-100 bg-red-50 px-5 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-500">
                <FaShoppingBag className="text-xl" />
              </div>

              <h1 className="mt-5 text-xl font-bold text-[#071936]">سفارش پیدا نشد</h1>

              <p className="mt-2 text-sm text-gray-500">{error || "اطلاعات این سفارش در دسترس نیست."}</p>

              <Link to="/account/orders" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                بازگشت به سفارش‌ها
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentStatusIndex = getStepIndex(order.status);
  const items = Array.isArray(order.items) ? order.items : [];

  const calculatedTotal = items.reduce((total, item) => total + getItemTotal(item), 0);

  const orderTotal = Number(order.total_price || order.total || order.final_price || calculatedTotal || 0);

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <Link to="/account/orders" className="inline-flex items-center gap-2 text-xs text-gray-500 transition hover:text-blue-600 sm:text-sm">
            <FaArrowRight />
            بازگشت به سفارش‌ها
          </Link>

          <div className="mt-5 rounded-[28px] border border-blue-100 bg-[#f5f8ff] p-5 sm:mt-7 sm:rounded-[32px] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-semibold text-blue-600 sm:text-xs">REZIN TURK</span>

                <h1 className="mt-1 text-2xl font-bold text-[#071936] sm:text-3xl">سفارش #{order.id}</h1>

                {order.created_at && <p className="mt-2 text-xs text-gray-400 sm:text-sm">تاریخ ثبت: {new Date(order.created_at).toLocaleDateString("fa-IR")}</p>}
              </div>

              <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">{getStatus(order.status)}</span>
            </div>
          </div>

          <div className="mt-5 rounded-[28px] border border-blue-100 bg-white p-5 shadow-sm sm:mt-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FaTruck />
              </div>

              <div>
                <h2 className="font-bold text-[#071936]">وضعیت سفارش</h2>

                <p className="mt-1 text-xs text-gray-400">آخرین وضعیت سفارش خود را مشاهده کنید.</p>
              </div>
            </div>

            <div className="mt-8">
              {statusSteps.map((step, index) => {
                const active = index <= currentStatusIndex;
                const current = index === currentStatusIndex;

                return (
                  <div key={step.key} className="relative flex gap-4">
                    {index !== statusSteps.length - 1 && <div className={`absolute right-3.75 top-8 h-[calc(100%+16px)] w-px ${index < currentStatusIndex ? "bg-blue-600" : "bg-blue-100"}`} />}

                    <div className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-300"}`}>
                      {active ? <FaCheck className="text-[10px]" /> : <span className="text-[10px]">{index + 1}</span>}
                    </div>

                    <div className="pb-8">
                      <h3 className={`text-sm font-bold ${current ? "text-blue-600" : active ? "text-[#071936]" : "text-gray-400"}`}>{step.title}</h3>

                      <p className="mt-1 text-xs leading-6 text-gray-400">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 rounded-[28px] border border-blue-100 bg-white p-5 shadow-sm sm:mt-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FaShoppingBag />
              </div>

              <div>
                <h2 className="font-bold text-[#071936]">فاکتور سفارش</h2>

                <p className="mt-1 text-xs text-gray-400">اقلام موجود در این سفارش</p>
              </div>
            </div>

            {items.length > 0 ? (
              <div className="mt-6 overflow-hidden rounded-2xl border border-blue-100">
                <div className="hidden grid-cols-[1fr_auto_auto] gap-4 bg-blue-50 px-5 py-3 text-xs font-semibold text-gray-500 sm:grid">
                  <span>محصول</span>
                  <span>تعداد</span>
                  <span>مبلغ</span>
                </div>

                <div className="divide-y divide-blue-50">
                  {items.map((item, index) => {
                    const itemPrice = getItemPrice(item);
                    const itemQuantity = getItemQuantity(item);
                    const itemTotal = getItemTotal(item);

                    return (
                      <div key={item.id || index} className="grid grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-4 sm:px-5">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-[#071936]">{getItemName(item)}</p>

                          {itemPrice > 0 && <p className="mt-1 text-[11px] text-gray-400">قیمت واحد: {itemPrice.toLocaleString("fa-IR")} تومان</p>}
                        </div>

                        <div className="text-xs text-gray-500">
                          <span className="sm:hidden">تعداد: </span>
                          {itemQuantity.toLocaleString("fa-IR")}
                        </div>

                        <div className="text-left text-sm font-bold text-blue-600">{itemTotal > 0 ? `${itemTotal.toLocaleString("fa-IR")} تومان` : "قیمت وارد نشده"}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between border-t border-blue-100 bg-[#071936] px-5 py-4 text-white">
                  <span className="text-xs text-white/60">مبلغ کل سفارش</span>

                  <span className="text-base font-bold text-blue-400 sm:text-lg">{orderTotal > 0 ? `${orderTotal.toLocaleString("fa-IR")} تومان` : "قیمت وارد نشده"}</span>
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl bg-gray-50 px-5 py-10 text-center">
                <p className="text-sm text-gray-400">اطلاعات اقلام این سفارش موجود نیست.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
