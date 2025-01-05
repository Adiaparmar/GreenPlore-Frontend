import React from 'react';
import './Privacy_Policy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h1>Privacy Policy</h1>
        <p>
          Welcome to <strong>GreenPlore</strong>, your trusted e-commerce marketplace for eco-friendly and sustainable products. This Privacy Policy explains how we collect, use, store, and protect your personal information when you access and use our platform.
        </p>
      </div>
      <div className="privacy-policy-section">
        <h2>Your Consent</h2>
        <p>
          By using the Platform, you agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with the terms, please refrain from using our services.
        </p>
      </div>
      <div className="privacy-policy-section">
        <h2>What Information Do We Collect?</h2>
        <ul>
          <li><strong>Personal Information:</strong> Name, email, phone number, shipping address, and more.</li>
          <li><strong>Account Information:</strong> Username, password, and preferences.</li>
          <li><strong>Transaction Data:</strong> Payment details.</li>
          <li><strong>Device and Usage Data:</strong> Information about your device and browsing patterns.</li>
          <li><strong>Location Data:</strong> For delivery and recommendations.</li>
          <li><strong>Sensitive Data:</strong> Securely processed financial data.</li>
        </ul>
      </div>
      <div className="privacy-policy-section">
        <h2>How Do We Use Your Information?</h2>
        <ul>
          <li>Process orders and provide customer support.</li>
          <li>Personalize your shopping experience.</li>
          <li>Securely process payments and manage transactions.</li>
          <li>Send updates and promotional content (you can opt-out).</li>
          <li>Prevent fraud and unauthorized access.</li>
          <li>Ensure legal compliance.</li>
        </ul>
      </div>
      <div className="privacy-policy-section">
        <h2>Who Do We Share Your Information With?</h2>
        <p>We may share your data with:</p>
        <ul>
          <li><strong>Third-Party Sellers:</strong> To fulfill your orders.</li>
          <li><strong>Service Providers:</strong> For payment processing, delivery, and analytics.</li>
          <li><strong>Legal and Regulatory Authorities:</strong> When required by law.</li>
          <li><strong>Business Transfers:</strong> During mergers or acquisitions.</li>
        </ul>
      </div>
      <div className="privacy-policy-section">
        <h2>Children's Privacy</h2>
        <p>
          GreenPlore is not intended for children under 18. If we inadvertently collect data from children, we will delete it promptly.
        </p>
      </div>
      <div className="privacy-policy-section">
        <h2>Your Rights</h2>
        <ul>
          <li><strong>Access:</strong> Request a copy of your data.</li>
          <li><strong>Rectification:</strong> Correct inaccurate information.</li>
          <li><strong>Erasure:</strong> Request data deletion.</li>
          <li><strong>Withdraw Consent:</strong> Opt-out of marketing communications.</li>
          <li><strong>Data Portability:</strong> Request your data in a portable format.</li>
        </ul>
        <p>Contact us at <a href="mailto:infogreenplore@gmail.com">infogreenplore@gmail.com</a> to exercise your rights.</p>
      </div>
      <div className="privacy-policy-footer">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, contact us at <a href="mailto:infogreenplore@gmail.com">infogreenplore@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
