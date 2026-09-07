import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMinus, FaPlus, FaTrash, FaShoppingBag, FaFileInvoice } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

import Navbar from "../../components/Navbar";
import useCart from "../../context/useCart";
import { getMediaUrl } from "../../api/api";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart();

  const invoiceRef = useRef(null);

  const totalItems = cartItems.reduce((sum, item) => sum + Number(item.quantity || 0), 0);

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

  const [invoiceNumber] = useState(() => {
    if (typeof window === "undefined") {
      return 1000;
    }

    const savedNumber = Number(localStorage.getItem("rezin_turk_invoice_number"));

    if (savedNumber >= 1000 && savedNumber <= 9999) {
      return savedNumber;
    }

    const newNumber = Math.floor(1000 + Math.random() * 9000);

    localStorage.setItem("rezin_turk_invoice_number", String(newNumber));

    return newNumber;
  });

  const invoiceDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

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

      pdf.save(`فاکتور-${invoiceNumber}.pdf`);
    } catch (error) {
      console.error("Invoice Error:", error);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white text-black" dir="rtl">
        <Navbar />

        <main className="px-3 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-semibold text-blue-600 sm:text-sm">REZIN TURK</span>

                <h1 className="mt-1.5 text-2xl font-bold text-[#071936] sm:mt-3 sm:text-5xl">سبد خرید</h1>
              </div>

              <Link to="/products" className="hidden items-center gap-2 text-sm text-gray-500 transition hover:text-blue-600 sm:inline-flex">
                ادامه خرید
                <FaArrowRight />
              </Link>
            </div>

            <div className="mt-5 flex min-h-80 flex-col items-center justify-center rounded-2xl border border-blue-100 bg-gray-50 px-4 text-center sm:mt-10 sm:min-h-115 sm:rounded-4xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 sm:h-24 sm:w-24">
                <FaShoppingBag className="text-2xl text-blue-600 sm:text-4xl" />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#071936] sm:mt-8 sm:text-2xl">سبد خرید شما خالی است</h2>

              <p className="mt-2 text-xs text-gray-500 sm:text-sm">هنوز محصولی به سبد خرید خود اضافه نکرده‌اید.</p>

              <Link to="/products" className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700 sm:mt-7 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base">
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

      <main className="px-3 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-semibold text-blue-600 sm:text-sm">REZIN TURK</span>

              <h1 className="mt-1.5 text-2xl font-bold text-[#071936] sm:mt-3 sm:text-5xl">سبد خرید</h1>

              <p className="mt-1.5 text-[10px] text-gray-500 sm:mt-3 sm:text-sm">{totalItems.toLocaleString("fa-IR")} عدد محصول در سبد خرید</p>
            </div>

            <Link to="/products" className="hidden items-center gap-2 text-sm text-gray-500 transition hover:text-blue-600 sm:inline-flex">
              ادامه خرید
              <FaArrowRight />
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-[1fr_360px]">
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {cartItems.map((item) => {
                const itemPrice = Number(item?.price || 0);
                const itemQuantity = Number(item?.quantity || 0);
                const itemTotal = itemPrice * itemQuantity;

                const title = getTitle(item);
                const unit = getUnit(item);
                const image = getImage(item);

                return (
                  <div key={item.id} className="rounded-2xl border border-blue-100 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-5">
                    <div className="flex flex-row gap-3 sm:gap-5">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-blue-50 sm:h-36 sm:w-36 sm:rounded-2xl">
                        <img
                          src={image}
                          alt={title}
                          className="h-full w-full object-contain p-1.5 sm:p-2"
                          onError={(e) => {
                            e.currentTarget.src = "/products/placeholder.jpg";
                          }}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2 sm:gap-4">
                          <div className="min-w-0">
                            <h2 className="truncate text-sm font-bold text-[#071936] sm:text-lg">{title}</h2>

                            <p className="mt-1 text-[9px] text-gray-400 sm:text-sm">{unit}</p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white sm:h-10 sm:w-10 sm:rounded-xl"
                          >
                            <FaTrash className="text-[9px] sm:text-sm" />
                          </button>
                        </div>

                        <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-4">
                          <span className="rounded-lg bg-blue-50 px-2 py-1 text-[8px] font-semibold text-blue-600 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs">نوع فروش: {unit}</span>

                          <span className="rounded-lg bg-gray-50 px-2 py-1 text-[8px] font-semibold text-gray-600 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs">واحد: {unit}</span>
                        </div>

                        <div className="mt-2.5 flex items-center justify-between gap-2 sm:mt-5">
                          <div>
                            <p className="mb-1 text-[8px] text-gray-400 sm:text-xs">تعداد</p>

                            <div className="flex items-center gap-1 sm:gap-2">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, itemQuantity - 1)}
                                className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
                              >
                                <FaMinus className="text-[8px] sm:text-xs" />
                              </button>

                              <span className="w-5 text-center text-xs font-bold sm:w-8 sm:text-base">{itemQuantity.toLocaleString("fa-IR")}</span>

                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, itemQuantity + 1)}
                                className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700 sm:h-9 sm:w-9 sm:rounded-xl"
                              >
                                <FaPlus className="text-[8px] sm:text-xs" />
                              </button>
                            </div>
                          </div>

                          <div className="text-left">
                            <p className="text-[8px] text-gray-400 sm:text-xs">مبلغ کل</p>

                            <p className="mt-1 whitespace-nowrap text-xs font-bold text-blue-600 sm:text-xl">
                              {itemTotal.toLocaleString("fa-IR")}
                              <span className="mr-1 text-[8px] sm:text-sm">تومان</span>
                            </p>
                          </div>
                        </div>

                        <div className="mt-2.5 sm:mt-4">
                          <p className="mb-1 text-[8px] text-gray-400 sm:text-xs">قیمت واحد</p>

                          <p className="whitespace-nowrap text-[10px] font-semibold text-gray-600 sm:text-sm">
                            {itemPrice.toLocaleString("fa-IR")}
                            <span className="mr-1">تومان</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="h-fit rounded-2xl border border-blue-100 bg-gray-50 p-4 sm:sticky sm:top-28 sm:rounded-3xl sm:p-6">
              <h2 className="text-lg font-bold text-[#071936] sm:text-xl">خلاصه سفارش</h2>

              <div className="mt-5 space-y-4 sm:mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">تعداد محصولات</span>

                  <span className="font-bold text-[#071936]">{totalItems.toLocaleString("fa-IR")}</span>
                </div>

                <div className="h-px bg-blue-100" />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">جمع کل</span>

                  <span className="text-lg font-bold text-blue-600 sm:text-xl">{Number(totalAmount || 0).toLocaleString("fa-IR")} تومان</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="mt-5 flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-700 sm:mt-6 sm:h-14 sm:rounded-2xl sm:text-base"
              >
                ادامه فرایند خرید
              </Link>

              <Link
                to="/products"
                className="mt-2.5 flex h-11 w-full items-center justify-center rounded-xl border border-blue-100 bg-white text-sm font-semibold text-[#071936] transition hover:bg-blue-50 sm:mt-3 sm:h-12 sm:rounded-2xl"
              >
                بازگشت به محصولات
              </Link>
            </div>
          </div>

          <section className="mt-8 sm:mt-12">
            <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div>
                <span className="text-[10px] font-semibold text-blue-600 sm:text-sm">REZIN TURK</span>

                <h2 className="mt-1.5 text-lg font-bold text-[#071936] sm:mt-2 sm:text-2xl">فاکتور خرید</h2>
              </div>

              <button
                type="button"
                onClick={downloadInvoice}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#071936] px-5 text-xs font-bold text-white transition hover:bg-blue-700 sm:h-12 sm:w-auto sm:gap-3 sm:rounded-2xl sm:px-6 sm:text-sm"
              >
                <FaFileInvoice />
                دانلود فاکتور
              </button>
            </div>

            <div ref={invoiceRef} className="rounded-2xl border border-gray-300 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-6 lg:p-10">
              <div className="border-b-2 border-[#071936] pb-5 sm:pb-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="text-right">
                    <h2 className="text-xl font-bold text-[#071936] sm:text-3xl">REZIN TURK</h2>

                    <p className="mt-1 text-[9px] text-gray-500 sm:text-xs">فروش و عرضه محصولات شیمیایی</p>
                  </div>

                  <div className="rounded-xl border border-gray-300 px-4 py-3 text-right sm:min-w-56 sm:rounded-2xl sm:px-6 sm:py-4">
                    <div className="flex items-center justify-between gap-5">
                      <span className="text-[10px] font-semibold text-gray-500 sm:text-sm">شماره</span>

                      <span className="text-sm font-bold text-[#071936] sm:text-lg" dir="ltr">
                        {invoiceNumber}
                      </span>
                    </div>

                    <div className="my-2 h-px bg-gray-200" />

                    <div className="flex items-center justify-between gap-5">
                      <span className="text-[10px] font-semibold text-gray-500 sm:text-sm">تاریخ</span>

                      <span className="text-[10px] font-semibold text-[#071936] sm:text-sm">{invoiceDate}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-center sm:mt-6">
                  <h3 className="text-lg font-bold text-blue-600 sm:text-2xl">فاکتور خرید</h3>
                </div>
              </div>

              <div className="mt-8 hidden overflow-hidden sm:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#071936] text-white">
                      <th className="w-16 border border-[#071936] p-3 text-center text-sm lg:p-4">ردیف</th>

                      <th className="border border-[#071936] p-3 text-right text-sm lg:p-4">نام محصول</th>

                      <th className="border border-[#071936] p-3 text-center text-sm lg:p-4">تعداد</th>

                      <th className="border border-[#071936] p-3 text-center text-sm lg:p-4">قیمت واحد</th>

                      <th className="border border-[#071936] p-3 text-center text-sm lg:p-4">مبلغ</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => {
                      const itemPrice = Number(item?.price || 0);
                      const itemQuantity = Number(item?.quantity || 0);
                      const itemTotal = itemPrice * itemQuantity;

                      const title = getTitle(item);

                      return (
                        <tr key={item.id}>
                          <td className="border border-gray-300 p-3 text-center text-sm font-bold lg:p-4">{(index + 1).toLocaleString("fa-IR")}</td>

                          <td className="border border-gray-300 p-3 text-right text-sm font-semibold lg:p-4">{title}</td>

                          <td className="border border-gray-300 p-3 text-center text-sm lg:p-4">{itemQuantity.toLocaleString("fa-IR")}</td>

                          <td className="whitespace-nowrap border border-gray-300 p-3 text-center text-sm lg:p-4">{itemPrice.toLocaleString("fa-IR")} تومان</td>

                          <td className="whitespace-nowrap border border-gray-300 p-3 text-center text-sm font-bold lg:p-4">{itemTotal.toLocaleString("fa-IR")} تومان</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 space-y-2.5 sm:hidden">
                {cartItems.map((item, index) => {
                  const itemPrice = Number(item?.price || 0);
                  const itemQuantity = Number(item?.quantity || 0);
                  const itemTotal = itemPrice * itemQuantity;

                  const title = getTitle(item);

                  return (
                    <div key={item.id} className="rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span className="text-[8px] font-bold text-gray-400">ردیف {(index + 1).toLocaleString("fa-IR")}</span>
                      </div>

                      <div className="mt-2 flex flex-row gap-2">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-blue-50">
                          <img
                            src={getImage(item)}
                            alt={title}
                            className="h-full w-full object-contain p-1"
                            onError={(e) => {
                              e.currentTarget.src = "/products/placeholder.jpg";
                            }}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h2 className="truncate text-xs font-bold text-[#071936]">{title}</h2>

                          <div className="mt-1.5 flex flex-wrap gap-1">
                            <span className="rounded-md bg-gray-50 px-1.5 py-1 text-[7px] font-semibold text-gray-600">تعداد: {itemQuantity.toLocaleString("fa-IR")}</span>
                          </div>

                          <div className="mt-1.5 flex items-center justify-between gap-2">
                            <div>
                              <p className="text-[7px] text-gray-400">قیمت واحد</p>

                              <p className="mt-0.5 whitespace-nowrap text-[9px] font-semibold text-gray-600">{itemPrice.toLocaleString("fa-IR")} تومان</p>
                            </div>

                            <div className="text-left">
                              <p className="text-[7px] text-gray-400">مبلغ کل</p>

                              <p className="mt-0.5 whitespace-nowrap text-[10px] font-bold text-blue-600">{itemTotal.toLocaleString("fa-IR")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex justify-end border-t border-gray-200 pt-4 sm:mt-8 sm:pt-6">
                <div className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 sm:w-96 sm:rounded-2xl sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-gray-600 sm:text-sm">جمع کل</span>

                    <span className="text-base font-bold text-blue-600 sm:text-2xl">{Number(totalAmount || 0).toLocaleString("fa-IR")} تومان</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 border-t border-gray-200 pt-4 text-center sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-5">
                <p className="text-[9px] text-gray-500 sm:text-sm">با تشکر از خرید شما از Rezin Turk</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
