import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submit logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <img src="your-logo-url-here" alt="GreenPlore Logo" className="logo" />
          <h2 className="brand-name">GreenPlore</h2>
        </div>
        <p className="subtext">Get access to your Orders, Wishlist, and Recommendations</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">SIGN IN</button>
        </form>
        <div className="footer-links">
          <a href="#" className="forgot-password">Forget your password?</a>
          <a href="#" className="create-account">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
