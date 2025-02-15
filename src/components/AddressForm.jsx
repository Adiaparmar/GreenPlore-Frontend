import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddressForm.css"; // Importing the CSS file

const AddressForm = () => {
  const [formData, setFormData] = useState({
    pincode: "",
    house: "",
    road: "",
    city: "",
    state: "",
    name: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store address details in localStorage
    localStorage.setItem("addressData", JSON.stringify(formData));

    console.log("Stored Address:", formData);

    // Show success alert
    alert("Registration Successful");

    navigate("/"); // Navigate to the next page
  };

  const handleBack = () => {
    navigate("/"); // Navigate back to the Register Seller page
  };

  return (
    <div className="address-form-container">
      <h1 className="address-form-title">Enter Address</h1>
      <form onSubmit={handleSubmit}>
        <div className="address-form-section">Address</div>

        <label className="address-form-label">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="address-form-input"
          required
        />

        <label className="address-form-label">House/Flat/Office No</label>
        <input
          type="text"
          name="house"
          value={formData.house}
          onChange={handleChange}
          className="address-form-input"
          required
        />

        <label className="address-form-label">Road Name/Area/Colony</label>
        <input
          type="text"
          name="road"
          value={formData.road}
          onChange={handleChange}
          className="address-form-input"
          required
        />

        <label className="address-form-label">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="address-form-input"
          required
        />

        <label className="address-form-label">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="address-form-input"
          required
        />

        <button type="submit" className="address-form-button">
          Ship to this Address
        </button>
      </form>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};

export default AddressForm;
