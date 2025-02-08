import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import BankDetails from "./components/Bank_Details.jsx"; // FIXED IMPORT
import RegisterBuyer from "./components/RegisterBuyer.jsx";
import Wishlist from "./components/Wishlist.jsx";
import SubCategory from "./components/SubCategory.jsx";
import PrivacyPolicy from "./components/Privacy_Policy.jsx"; // FIXED IMPORT
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import ReturnAndRefundPolicy from "./components/ReturnAndRefundPolicy.jsx"; // FIXED IMPORT

function App() {
  return (
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
                <PhotoSlider headerText="Trending" />
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
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/subcategory" element={<SubCategory />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/return-and-refund-policy" element={<ReturnAndRefundPolicy />} />

          {/* Catch-all Route for 404 */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
