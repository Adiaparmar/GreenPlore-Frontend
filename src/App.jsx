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
import BankDetails from "./components/Bank_Details.jsx";
import RegisterBuyer from "./components/RegisterBuyer.jsx";
import Wishlist from "./components/Wishlist.jsx";
import SubCategory from "./components/SubCategory.jsx";
import Privacy_Policy from "./components/Privacy_Policy.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import ReturnAndRefundPolicy from "./components/ReturnAndRefundPolicy.jsx"


function App() {
  return (
    <Router>
      {/* <SubCategory /> */}
      <div className="w-full h-screen bg-[#EDF1F1]" style={{ height: "auto" }}>
        {/* Static components */}
        <Navbar1 />
        <Navbar2 />

        <Routes>
          {/* Routes for navigation */}
          <Route
            path="/"
            element={
              <>
                <Upcat />
                <Hero />
                <WebCat />
                <PhotoSlider headerText="Trending" />
                {/* <PhotoSlider headerText="Category 1" /> */}
                {/* <PhotoSlider headerText="Category 2" /> */}
                {/* // <PhotoSlider headerText="Category 3" /> */}
                {/* // <PhotoSlider headerText="Category 4" /> */}
                {/* // <PhotoSlider headerText="Category 5" /> */}
                {/* // <PhotoSlider headerText="More categories!" /> */}
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
          <Route path="/privacy-policy" element={<Privacy_Policy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/ReturnAndRefundPolicy" element={<ReturnAndRefundPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
