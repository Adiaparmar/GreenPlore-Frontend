import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bank_Details.css";

const BankDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    accountNumber: "",
    confirmAccount: "",
    ifscCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store bank details in localStorage
    localStorage.setItem("bankDetails", JSON.stringify(formData));

    // Log data from localStorage to verify it's stored correctly
    console.log(
      "Stored Bank Details in Local Storage:",
      JSON.parse(localStorage.getItem("bankDetails"))
    );

    navigate("/address-form"); // Navigate to the next page
  };

  const handleBack = () => {
    navigate("/address"); // Navigate back to the Address Form page
  };

  return (
    <div className="bank-details-form-container">
      <h1 className="bank-details-form-title">Bank Details</h1>
      <form onSubmit={handleSubmit}>
        <label className="bank-details-form-label">Your Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="bank-details-form-input"
          placeholder="Your Full Name"
          required
        />

        <label className="bank-details-form-label">Account Number</label>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          className="bank-details-form-input"
          placeholder="Account Number"
          required
        />

        <label className="bank-details-form-label">Confirm Account</label>
        <input
          type="text"
          name="confirmAccount"
          value={formData.confirmAccount}
          onChange={handleChange}
          className="bank-details-form-input"
          placeholder="Confirm Account Number"
          required
        />

        <label className="bank-details-form-label">IFSC Code</label>
        <input
          type="text"
          name="ifscCode"
          value={formData.ifscCode}
          onChange={handleChange}
          className="bank-details-form-input"
          placeholder="IFSC Code"
          required
        />

        <button type="submit" className="bank-details-form-button">
          Submit Bank Details
        </button>
      </form>

      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default BankDetailsForm;
