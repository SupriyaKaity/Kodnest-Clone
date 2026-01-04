import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import React from "react";
import "./ForgotPage.css";
import loginImage from "../../image/login.png";
import logo from "../../image/main_logo.png";

const ForgotPage = () => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
      document.title = "Kodnest Forgot Password";
    }, []);


  
  //  Email validation regex pattern
  const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.trim());

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!isValidEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    } else {
      setErrors((prev) => {
        const { email, ...rest } = prev;
        return rest;
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <img src={loginImage} alt="Login illustration" className="illustration" />
      </div>

  
      <div className="right-section">
        <div className="logo-container">
          <img src={logo} alt="KodNest Logo" className="kodnest-logo" />
        </div>

        <h2>Forgot Your Password?</h2>
        <p>Enter your email address to receive a password reset link.</p>

        <form className="forgot-form" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email address" value={email}
          onChange={handleEmailChange}/>
          {errors.email && <p className="error-text">{errors.email}</p>} 

          <button type="submit">
            Send Reset Link
            </button>

          <p 
            className="back-login-btn"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </p>

        </form>
      </div>
    </div>
  );
};

export default ForgotPage;



