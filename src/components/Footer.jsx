import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import cart from "../images/cart.png";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1d1f1e] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* For Small Screens */}
        <div className="grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl flex flex-wrap md:flex-nowrap sm:hidden">
          {/* Get to Know Us */}
          <div className="w-38 md:w-40 mx-2 ">
            <h2 className="font-bold text-lg">Get to Know Us</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-opacity opacity-75 text-xs md:text-sm duration-500 hover:opacity-50 no-underline"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  FAQs
                </a>
              </li>
              {/* <li>
                <button
                  onClick={() =>
                    window.open("https://forms.gle/ee79A8PexkcYUnCB9", "_blank")
                  }
                  className="hover:text-green-600 transition opacity-75 text-xs md:text-sm duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  Bulk & Corporate Req
                </button>
              </li> */}

              <li>
                <a
                  className="hover:text-green-600 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                  onClick={() => {
                    navigate("/register-seller");
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Register as a Seller
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="w-38 md:w-40 mx-2 ">
            <h2 className="font-bold text-lg">Policies</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  className="hover:text-green-300 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                  onClick={() => {
                    navigate("/Privacy_Policy");
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                >
                  Track My Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                >
                  Return and Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition opacity-75  text-xs md:text-sm  duration-600 hover:opacity-50"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-38 md:w-40 mx-2 ">
            <h2 className="font-bold text-lg">Support</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                >
                  Get Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                  onClick={() => navigate("/wishlist")}
                >
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="w-38 md:w-40 mx-2 ">
            <h2 className="font-bold text-lg">Company Info</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition  opacity-75  text-xs md:text-sm duration-600 hover:opacity-50"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex gap-4 mx-5">
            <a
              href="#"
              className="text-gray-500  hover:text-green-300 transition  opacity-75  text-sm duration-600"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition  opacity-75  text-sm duration-600"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition  opacity-75 text-sm  duration-600"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition  opacity-75 text-sm  duration-600"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition  opacity-75  text-sm duration-600"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition  opacity-75  text-sm duration-600"
            >
              <FaPinterest className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* For Medium and Larger Screens */}
        <div className="grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl flex justify-evenly hidden sm:flex">
          {/* Get to Know Us */}
          <div>
            <h2 className="font-bold text-lg" style={{ color: "green" }}>
              Get to Know Us
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  FAQs
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open("https://forms.gle/ee79A8PexkcYUnCB9", "_blank")
                  }
                  className="hover:text-green-600 transition opacity-75 text-xs md:text-sm duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Bulk & Corporate Req
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open("https://forms.gle/FzjdnznktYmVmHJF6", "_blank")
                  }
                  className="hover:text-green-600 transition opacity-75 text-xs md:text-sm duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Affiliate Program
                </button>
              </li>

              <li>
                <a
                  className="hover:text-green-600 transition duration-600 hover:opacity-50 cursor-pointer"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/register-seller")}
                >
                  Register as a Seller
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h2 className="font-bold text-lg" style={{ color: "green" }}>
              Policies
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                  onClick={() => navigate("/privacy-policy")}
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Track My Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                  onClick={() => navigate("/return-and-refund-policy")}
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Return and Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                  onClick={() => navigate("/terms-and-conditions")}
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-bold text-lg" style={{ color: "green" }}>
              Support
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Get Customer Support
                </a>
              </li>
              <li>
                <a
                  className="hover:text-green-600 transition duration-600 hover:opacity-50 cursor-pointer"
                  onClick={() => navigate("/wishlist")}
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h2 className="font-bold text-base" style={{ color: "green" }}>
              Company Info
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                  style={{
                    background: "none",
                    border: "none",
                    textDecoration: "none",
                    color: "White",
                    cursor: "pointer",
                  }}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://in.linkedin.com/company/greenplore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaPinterest className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Cart Image */}
        <div className="flex items-center mt-5">
          <img src={cart} alt="cart" className="h-[6vh] cursor-pointer" />
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-gray-500">
          <p className="text-xs sm:text-sm lg:text-base text-center">
            © 2024 GreenPlore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
