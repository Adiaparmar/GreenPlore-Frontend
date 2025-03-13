import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Redirect to home page
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    console.log("Stored Credentials - Email:", email);
    setIsAuthenticated(true); // Mark user as authenticated
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
    localStorage.setItem("googleUser", JSON.stringify(credentialResponse));
    setIsAuthenticated(true);
  };

  const handleGoogleFailure = (error) => {
    console.log("Google Login Failed:", error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EDF1F1]">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src="your-logo-url-here"
            alt="GreenPlore Logo"
            className="w-20 h-20 mb-2"
          />
          <h2 className="text-2xl font-semibold text-gray-800">GreenPlore</h2>
        </div>
        <p className="text-center text-sm text-gray-600 mb-6">
          Get access to your Orders, Wishlist, and Recommendations
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            SIGN IN
          </button>
        </form>

        <div className="mt-6 flex flex-col items-center space-y-2">
          <a href="#" className="text-sm text-green-500 hover:underline">
            Forget your password?
          </a>
          <a
            href="#"
            className="text-sm text-green-500 hover:underline"
            onClick={() => navigate("/register-buyer")}
          >
            Create account
          </a>
        </div>

        <div className="mt-6 flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
