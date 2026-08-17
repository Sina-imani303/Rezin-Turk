import { useContext } from "react";
import { CartContext } from "./cart-context";

export default function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart باید داخل CartProvider استفاده شود");
  }

  return context;
}
