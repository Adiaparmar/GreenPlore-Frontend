import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing_Page.css"; // Ensure correct import of CSS file

const Landing_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/wishlist");
    }, 5000); // 5 seconds delay before redirect

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigate]);

  return (
    <div className="landing-page-container">
      <img
        src="path_to_your_logo_or_image"
        alt="Brand Logo"
        className="brand-logo"
      />
      <h1>Welcome to Our App</h1>
      <p>Preparing to redirect...</p>
      <p>You will be redirected to your wishlist shortly...</p>
    </div>
  );
};

export default Landing_Page;
