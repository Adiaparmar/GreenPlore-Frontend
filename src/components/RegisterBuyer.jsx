import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterSeller.css"; // Keeping the same CSS file for now

const RegisterBuyer = () => {
  // Initial state for buyer data
  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({}); // State for validation errors
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerData({
      ...buyerData,
      [name]: value,
    });

    // Dynamically validate password
    if (name === "password") {
      validatePassword(value);
    }
  };

  // Password validation logic
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

    // Ensure passwords match
    if (buyerData.password !== buyerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Ensure no validation errors exist
    if (Object.keys(errors).length > 0) {
      alert("Please fix the errors before submitting.");
      return;
    }

    // Store buyer data in localStorage (excluding password for security reasons)
    const { password, confirmPassword, ...buyerDataToStore } = buyerData;
    localStorage.setItem("buyerData", JSON.stringify(buyerDataToStore));

    console.log("Registered Buyer:", buyerDataToStore);
    alert("Registration successful!");

    navigate("/home"); // Redirect to buyer's homepage
  };

  return (
    <div className="register-container my-5">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register as Buyer</h2>

        {/* Name field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyerData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyerData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Phone Number field */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={buyerData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="Enter your 10-digit phone number"
            required
          />
        </div>

        {/* Password field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={buyerData.password}
            onChange={handleChange}
            placeholder="Create a strong password"
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* Confirm Password field */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={buyerData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="register-btn my-1">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterBuyer;
