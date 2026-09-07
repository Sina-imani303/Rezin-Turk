import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Verify from "./pages/Verify/Verify";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import Account from "./pages/Account/Account";
import Orders from "./pages/Account/Orders";
import OrderDetails from "./pages/Account/OrderDetails";
import Addresses from "./pages/Account/Addresses";
import PurchaseHistory from "./pages/Account/PurchaseHistory";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/orders/:id" element={<OrderDetails />} />
        <Route path="/account/addresses" element={<Addresses />} />
        <Route path="/account/history" element={<PurchaseHistory />} />
      </Routes>
    </>
  );
}

export default App;
