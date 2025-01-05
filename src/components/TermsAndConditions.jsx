import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-header">Terms and Conditions</h1>
      <p>
        Welcome to GreenPlore! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our platform.
      </p>

      <h2>Introduction</h2>
      <p>
        These Terms and Conditions ("Terms") govern your use of GreenPlore, an online marketplace dedicated to offering eco-friendly and sustainable products in India. By using our website, you agree to be bound by these Terms, our Privacy Policy, and any additional guidelines or rules posted on the platform.
      </p>

      <h2>Definitions</h2>
      <ul>
        <li>
          <strong>Marketplace:</strong> Refers to the platform, services, and website offered by GreenPlore.
        </li>
        <li>
          <strong>User:</strong> Refers to any individual or entity accessing or using the Marketplace, either as a buyer, seller, or any other participant.
        </li>
        <li>
          <strong>Product:</strong> Refers to the goods sold on the Marketplace, which are eco-friendly, sustainable, or otherwise aligned with environmentally responsible practices.
        </li>
        <li>
          <strong>Seller:</strong> Refers to individuals or businesses offering products on the Marketplace.
        </li>
        <li>
          <strong>Buyer:</strong> Refers to individuals purchasing products from the Marketplace.
        </li>
      </ul>

      <h2>Eligibility</h2>
      <p>
        You must be at least 18 years old to use our platform, create an account, or make purchases. By using our Marketplace, you represent and warrant that you are 18 years or older.
      </p>

      <h2>Account Registration</h2>
      <ul>
        <li>You must provide accurate, complete, and current information.</li>
        <li>
          You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
        </li>
        <li>
          You agree to notify us immediately if you suspect unauthorized use of your account.
        </li>
      </ul>

      <h2>Products and Listings</h2>
      <ul>
        <li>Sellers are responsible for accurately representing their products and ensuring they align with our eco-friendly and sustainable standards.</li>
        <li>
          We reserve the right to remove any listing that does not meet our sustainability criteria or violates any laws or regulations.
        </li>
      </ul>

      {/* Add more sections as necessary */}
      <h2>Contact Information</h2>
      <p>
        If you have any questions or concerns regarding these Terms, please contact us at:
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:Infogreenplore@gmail.com">Infogreenplore@gmail.com</a>
      </p>
    </div>
  );
};

export default TermsAndConditions;
