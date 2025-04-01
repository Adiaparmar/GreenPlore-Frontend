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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl">
          {/* Get to Know Us */}
          <div className="w-full md:w-auto">
            <h2 className="font-bold text-lg text-green-600">Get to Know Us</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-600 hover:opacity-50 text-white no-underline"
                >
                  FAQs
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open("https://forms.gle/ee79A8PexkcYUnCB9", "_blank")
                  }
                  className="hover:text-green-600 transition duration-600 hover:opacity-50"
                >
                  Bulk & Corporate Req
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open("https://forms.gle/FzjdnznktYmVmHJF6", "_blank")
                  }
                  className="hover:text-green-600 transition duration-600 hover:opacity-50"
                >
                  Affiliate Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/register-seller")}
                  className="hover:text-green-600 transition duration-600 hover:opacity-50"
                >
                  Register as a Seller
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition duration-600 hover:opacity-50 text-white no-underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="w-full md:w-auto">
            <h2 className="font-bold text-lg text-green-600">Policies</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <button
                  onClick={() => navigate("/privacy-policy")}
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50 text-white no-underline"
                >
                  Track My Order
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate("/return-and-refund-policy")}
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                >
                  Return and Refund Policy
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50 text-white no-underline"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate("/terms-and-conditions")}
                  className="hover:text-green-300 transition duration-600 hover:opacity-50"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full md:w-auto">
            <h2 className="font-bold text-lg text-green-600">Support</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50 text-white no-underline"
                >
                  Get Customer Support
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate("/wishlist")}
                  className="hover:text-green-600 transition duration-600 hover:opacity-50"
                >
                  Wishlist
                </button>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="w-full md:w-auto">
            <h2 className="font-bold text-lg text-green-600">Company Info</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50 text-white no-underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 transition duration-600 hover:opacity-50 text-white no-underline"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex gap-4 col-span-full justify-center">
            <a
              href="https://www.facebook.com/61566546863902/photos/?_rdr"
              target="_blank"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/greenplore_/"
              target="_blank"
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
              target="_blank"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-500 hover:text-green-300 transition duration-600"
            >
              <FaPinterest className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Cart Image */}
        <div className="flex items-center mt-5 justify-center">
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
