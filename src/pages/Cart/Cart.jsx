import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMinus, FaPlus, FaTrash, FaShoppingBag, FaFileInvoice } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

import Navbar from "../../components/Navbar";
import useCart from "../../context/useCart";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart();

  const invoiceRef = useRef(null);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const downloadInvoice = async () => {
    if (!invoiceRef.current || cartItems.length === 0) {
      return;
    }

    try {
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const image = canvas.toDataURL("image/png", 1);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 210;
      const pageHeight = 297;

      const imageHeight = (canvas.height * pageWidth) / canvas.width;

      let heightLeft = imageHeight;
      let position = 0;

      pdf.addImage(image, "PNG", 0, position, pageWidth, imageHeight);

      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imageHeight;

        pdf.addPage();

        pdf.addImage(image, "PNG", 0, position, pageWidth, imageHeight);

        heightLeft -= pageHeight;
      }

      pdf.save("rezin-turk-invoice.pdf");
    } catch (error) {
      console.error("Invoice Error:", error);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white text-black" dir="rtl">
        <Navbar />

        <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-blue-600">REZIN TURK</span>

                <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl font-bold text-[#071936]">سبد خرید</h1>
              </div>

              <Link to="/products" className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition">
                ادامه خرید
                <FaArrowRight />
              </Link>
            </div>

            <div className="mt-7 sm:mt-10 min-h-100 sm:min-h-115 rounded-[28px] sm:rounded-4xl border border-blue-100 bg-gray-50 flex flex-col items-center justify-center text-center px-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-100 flex items-center justify-center">
                <FaShoppingBag className="text-3xl sm:text-4xl text-blue-600" />
              </div>

              <h2 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-[#071936]">سبد خرید شما خالی است</h2>

              <p className="mt-3 text-sm text-gray-500">هنوز محصولی به سبد خرید خود اضافه نکرده‌اید.</p>

              <Link to="/products" className="mt-6 sm:mt-7 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white font-bold transition">
                مشاهده محصولات
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Navbar />

      <main className="pt-32 pb-16 sm:pb-20 px-3 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-blue-600">REZIN TURK</span>

              <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl font-bold text-[#071936]">سبد خرید</h1>

              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">{totalItems.toLocaleString("fa-IR")} عدد محصول در سبد خرید</p>
            </div>

            <Link to="/products" className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition">
              ادامه خرید
              <FaArrowRight />
            </Link>
          </div>

          <div className="mt-7 sm:mt-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5 sm:gap-6">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-1">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <div key={item.id} className="rounded-2xl sm:rounded-3xl border border-blue-100 bg-white p-2.5 sm:p-5 shadow-sm">
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-5">
                      <div className="w-full h-28 sm:w-36 sm:h-36 rounded-xl sm:rounded-2xl overflow-hidden bg-blue-50 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 sm:gap-4">
                          <div className="min-w-0">
                            <h2 className="text-sm sm:text-lg font-bold text-[#071936] truncate">{item.name}</h2>

                            <p className="mt-1 text-[10px] sm:text-sm text-gray-400">{item.category}</p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition shrink-0"
                          >
                            <FaTrash className="text-[10px] sm:text-sm" />
                          </button>
                        </div>

                        <div className="mt-2 sm:mt-4 flex flex-wrap gap-1.5">
                          <span className="rounded-lg sm:rounded-xl bg-blue-50 px-2 sm:px-3 py-1.5 sm:py-2 text-[9px] sm:text-xs font-semibold text-blue-600">{item.type}</span>

                          <span className="rounded-lg sm:rounded-xl bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2 text-[9px] sm:text-xs font-semibold text-gray-600">{item.unit}</span>
                        </div>

                        <div className="mt-3 sm:mt-5">
                          <p className="text-[9px] sm:text-xs text-gray-400 mb-1.5 sm:mb-2">تعداد</p>

                          <div className="flex items-center gap-1.5 sm:gap-3">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl border border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
                            >
                              <FaMinus className="text-[9px] sm:text-xs" />
                            </button>

                            <span className="w-6 sm:w-8 text-center text-xs sm:text-base font-bold">{item.quantity.toLocaleString("fa-IR")}</span>

                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center transition"
                            >
                              <FaPlus className="text-[9px] sm:text-xs" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-3 sm:mt-5 flex items-end justify-between gap-2">
                          <div>
                            <p className="text-[9px] sm:text-xs text-gray-400">قیمت واحد</p>

                            <p className="mt-1 text-[10px] sm:text-sm font-semibold text-gray-600 whitespace-nowrap">
                              {item.price.toLocaleString("fa-IR")}
                              <span className="mr-1">تومان</span>
                            </p>
                          </div>

                          <div className="text-left">
                            <p className="text-[9px] sm:text-xs text-gray-400">مبلغ کل</p>

                            <p className="mt-1 text-xs sm:text-xl font-bold text-blue-600 whitespace-nowrap">
                              {itemTotal.toLocaleString("fa-IR")}
                              <span className="mr-1 text-[9px] sm:text-sm">تومان</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:sticky lg:top-28 h-fit rounded-2xl sm:rounded-3xl border border-blue-100 bg-gray-50 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-[#071936]">خلاصه سفارش</h2>

              <div className="mt-5 sm:mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">تعداد محصولات</span>

                  <span className="font-bold text-[#071936]">{totalItems.toLocaleString("fa-IR")}</span>
                </div>

                <div className="h-px bg-blue-100" />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">جمع کل</span>

                  <span className="text-lg sm:text-xl font-bold text-blue-600">{totalAmount.toLocaleString("fa-IR")} تومان</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="mt-5 sm:mt-6 w-full min-h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-bold flex items-center justify-center transition"
              >
                ادامه فرایند خرید
              </Link>

              <Link
                to="/products"
                className="mt-2.5 sm:mt-3 w-full h-11 sm:h-12 rounded-xl sm:rounded-2xl border border-blue-100 bg-white hover:bg-blue-50 text-[#071936] text-sm font-semibold flex items-center justify-center transition"
              >
                بازگشت به محصولات
              </Link>
            </div>
          </div>

          <section className="mt-10 sm:mt-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-blue-600">REZIN TURK</span>

                <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#071936]">فاکتور خرید</h2>
              </div>

              <button
                type="button"
                onClick={downloadInvoice}
                className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-[#071936] hover:bg-blue-700 text-white text-sm font-bold flex items-center justify-center gap-2 sm:gap-3 transition"
              >
                <FaFileInvoice />
                دانلود فاکتور
              </button>
            </div>

            <div ref={invoiceRef} className="bg-white border border-blue-100 rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-10 shadow-sm">
              <div className="text-center border-b border-gray-200 pb-5 sm:pb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#071936]">REZIN TURK</h2>

                <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold text-blue-600">فاکتور خرید</h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-500">فاکتور محصولات خریداری شده</p>
              </div>

              <div className="hidden sm:block mt-8 overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#071936] text-white">
                      <th className="p-3 lg:p-4 text-right text-sm">نام محصول</th>

                      <th className="p-3 lg:p-4 text-right text-sm">کد محصول</th>

                      <th className="p-3 lg:p-4 text-right text-sm">نوع فروش</th>

                      <th className="p-3 lg:p-4 text-center text-sm">تعداد</th>

                      <th className="p-3 lg:p-4 text-right text-sm">قیمت واحد</th>

                      <th className="p-3 lg:p-4 text-right text-sm">مبلغ</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => {
                      const itemTotal = item.price * item.quantity;

                      return (
                        <tr key={item.id}>
                          <td className="border border-gray-200 p-3 lg:p-4 font-semibold text-sm">{item.name}</td>

                          <td className="border border-gray-200 p-3 lg:p-4 text-sm" dir="ltr">
                            {item.id}
                          </td>

                          <td className="border border-gray-200 p-3 lg:p-4 text-sm">{item.type}</td>

                          <td className="border border-gray-200 p-3 lg:p-4 text-center text-sm">{item.quantity.toLocaleString("fa-IR")}</td>

                          <td className="border border-gray-200 p-3 lg:p-4 whitespace-nowrap text-sm">{item.price.toLocaleString("fa-IR")} تومان</td>

                          <td className="border border-gray-200 p-3 lg:p-4 font-bold whitespace-nowrap text-sm">{itemTotal.toLocaleString("fa-IR")} تومان</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="sm:hidden mt-5 space-y-3">
                {cartItems.map((item) => {
                  const itemTotal = item.price * item.quantity;

                  return (
                    <div key={item.id} className="rounded-xl border border-blue-100 bg-white p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-xs font-bold text-[#071936] truncate">{item.name}</h3>

                          <p className="mt-1 text-[9px] text-gray-400 truncate" dir="ltr">
                            {item.id}
                          </p>
                        </div>

                        <span className="shrink-0 rounded-lg bg-blue-50 px-2 py-1 text-[9px] font-semibold text-blue-600">{item.type}</span>
                      </div>

                      <div className="mt-3 grid grid-cols-3 gap-1.5">
                        <div className="rounded-lg bg-gray-50 p-2 text-center">
                          <p className="text-[8px] text-gray-400">تعداد</p>

                          <p className="mt-1 text-[10px] font-bold text-[#071936]">{item.quantity.toLocaleString("fa-IR")}</p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-2 text-center">
                          <p className="text-[8px] text-gray-400">قیمت واحد</p>

                          <p className="mt-1 text-[9px] font-bold text-[#071936]">{item.price.toLocaleString("fa-IR")}</p>
                        </div>

                        <div className="rounded-lg bg-blue-50 p-2 text-center">
                          <p className="text-[8px] text-gray-400">مبلغ</p>

                          <p className="mt-1 text-[9px] font-bold text-blue-600">{itemTotal.toLocaleString("fa-IR")}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 sm:mt-8 flex justify-end">
                <div className="w-full sm:w-96 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-600">جمع کل</span>

                    <span className="text-lg sm:text-2xl font-bold text-blue-600 text-left">{totalAmount.toLocaleString("fa-IR")} تومان</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-8 pt-4 sm:pt-5 border-t border-gray-200 text-center">
                <p className="text-xs sm:text-sm text-gray-500">با تشکر از خرید شما از Rezin Turk</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
