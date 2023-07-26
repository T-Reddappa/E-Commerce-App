import "./App.css";
// import "./index.css";
import { Toaster } from "react-hot-toast";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/Login";
import Navbar from "./components/navbar/Navbar";
import Signup from "./pages/authentication/SignUp";
import ProductListingPage from "./pages/product listing page/ProductListingPage";
import SingleProduct from "./pages/singleProductPage/SingleProduct";
import WishlistPage from "./pages/wishlist/WishlistPage";
import RequiresAuth from "./routes/RequiresAuth";
import CartPage from "./pages/cart/CartPage";
import Logout from "./pages/authentication/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddressModal from "./components/addressModal/AddressModal";
import ProfilePage from "./pages/profile/ProfilePage";
import AddressList from "./components/addressList/AddressList";
import UserProfile from "./components/userProfile/UserProfile";
import Orders from "./components/orders/Orders";
import Loading from "./components/loading/Loading";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const notify = () => toast("Wow so easy !");
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishlistPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />
        <Route path="/addressModal" element={<AddressModal />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <ProfilePage />
            </RequiresAuth>
          }
        >
          <Route path="" element={<UserProfile />} />
          <Route path="address" element={<AddressList />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
