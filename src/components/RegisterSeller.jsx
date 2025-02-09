import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterSeller.css";

const RegisterSeller = () => {
  const [sellerData, setSellerData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gstNumber: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSellerData({
      ...sellerData,
      [name]: value,
    });

    // Validate password dynamically
    if (name === "password") {
      validatePassword(value);
    }
  };

  // Validate password with standard criteria
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setErrors({
        ...errors,
        password:
          "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.",
      });
    } else {
      const { password, ...rest } = errors;
      setErrors(rest); // Remove password error if valid
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (sellerData.password !== sellerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Ensure there are no validation errors
    if (Object.keys(errors).length > 0) {
      alert("Please fix the errors before submitting.");
      return;
    }

    // Store seller data in localStorage (excluding password for security reasons)
    const { password, confirmPassword, ...sellerDataToStore } = sellerData;
    localStorage.setItem("sellerData", JSON.stringify(sellerDataToStore));

    console.log("Registered Seller:", sellerData);
    alert("Registration successful!");

    navigate("/address"); // Redirect to AddressForm page
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register as Seller</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={sellerData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={sellerData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={sellerData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gstNumber">GST Number</label>
          <input
            type="text"
            id="gstNumber"
            name="gstNumber"
            value={sellerData.gstNumber}
            onChange={handleChange}
            placeholder="Enter your GST number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={sellerData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={sellerData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterSeller;
