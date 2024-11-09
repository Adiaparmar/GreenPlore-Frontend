import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterSeller.css';

const RegisterSeller = () => {
  const [sellerData, setSellerData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gstNumber: '',
  });

  const navigate = useNavigate(); // Use useNavigate hook to redirect

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSellerData({
      ...sellerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle the actual registration logic (API call)

    console.log('Registered Seller:', sellerData);

    // Simulate successful registration and redirect to AddressForm page
    alert('Registration successful! Redirecting to Address Form...');
    navigate('/address'); // Redirect to AddressForm page
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register as Seller</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={sellerData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={sellerData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={sellerData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="form-group">
          <label>GST Number</label>
          <input
            type="text"
            name="gstNumber"
            value={sellerData.gstNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={sellerData.password}
            onChange={handleChange}
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
