import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./components/context/WishlistContext.jsx"; // ✅ Import Wishlist Context
import { CartProvider } from "./components/CartContext.jsx"; // ✅ Import CartContext Context

import Navbar1 from "./components/Navbar/Navbar1.jsx";
import Navbar2 from "./components/Navbar/Navbar2.jsx";
import Hero from "./components/Hero.jsx";
import PhotoSlider from "./components/PhotoSlider.jsx";
import Marquee from "./components/Marquee.jsx";
import Gifting from "./components/Gifting.jsx";
import Footer from "./components/Footer.jsx";
import Upcat from "./components/HeroCategories.jsx";
import WebCat from "./components/WebCat.jsx";
import RegisterSeller from "./components/RegisterSeller.jsx";
import AddressForm from "./components/AddressForm.jsx";
import BankDetails from "./components/Bank_Details.jsx";
import RegisterBuyer from "./components/RegisterBuyer.jsx";
import LogIn from "./components/Login.jsx";
import WishlistPage from "./components/WishlistPage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import PrivacyPolicy from "./components/Privacy_Policy.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import ReturnAndRefundPolicy from "./components/ReturnAndRefundPolicy.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import CartPage from "./components/CartPage.jsx";
import Seller_Login from "./components/Seller_Login.jsx";

import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <GoogleOAuthProvider clientId="119628890642-hil069l7la5bh5s4ab2n02g3rkarirpj.apps.googleusercontent.com">
          {" "}
          {/* Wrap with GoogleOAuthProvider */}{" "}
          {/* ✅ Wrap the entire app with WishlistProvider */}
          <Router>
            <div className="w-full bg-[#EDF1F1]" style={{ height: "auto" }}>
              {/* Static components */}
              <Navbar1 />
              <Navbar2 />

              <Routes>
                {/* Home Page */}
                <Route
                  path="/"
                  element={
                    <>
                      <Upcat />
                      <Hero />
                      <WebCat />
                      <PhotoSlider />
                      <Marquee />
                      <Gifting />
                      <Footer />
                    </>
                  }
                />
                <Route path="/register-seller" element={<RegisterSeller />} />
                <Route path="/address-form" element={<AddressForm />} />
                <Route path="/bank-details" element={<BankDetails />} />
                <Route path="/navbar2" element={<Navbar2 />} />
                <Route path="/register-buyer" element={<RegisterBuyer />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cartpage" element={<CartPage />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/seller-login" element={<Seller_Login />} />
                {/* <Route path="/subcategory" element={<SubCategory />} /> */}
                <Route
                  path="/products/:subcategoryId"
                  element={<ProductPage />}
                />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
                <Route
                  path="/return-and-refund-policy"
                  element={<ReturnAndRefundPolicy />}
                />

                {/* ✅ Fixed ProductDetails Route */}
                <Route path="/product/:id" element={<ProductDetails />} />

                {/* Catch-all Route for 404 */}
                <Route
                  path="*"
                  element={
                    <h1 className="text-center text-2xl font-bold">
                      404 - Page Not Found
                    </h1>
                  }
                />
              </Routes>
            </div>
          </Router>
        </GoogleOAuthProvider>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
