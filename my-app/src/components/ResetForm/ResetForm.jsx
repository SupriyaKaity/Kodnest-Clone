import React, { useState, useEffect } from "react";
import "./ResetForm.css";

import resetImage from "../../image/login.png"; 
import logo from "../../image/main_logo.png";
import hiddenIcon from "../../image/hidden.png";
import eyeIcon from "../../image/eye.png";
import checkIcon from "../../image/check.png";

const ResetForm = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [otpVerified, setOtpVerified] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  useEffect(() => {
    document.title = "Kodnest Reset Password";
  }, []);

  const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.trim());

  const passwordRules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[@#$%]/.test(password),
  };

  // ==========================
  // Email Validation
  // ==========================
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.trim())
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    else if (!isValidEmail(value))
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    else {
      setErrors((prev) => {
        const { email, ...rest } = prev;
        return rest;
      });
    }
  };

  // ==========================
  // OTP Validation
  // ==========================
  const handleOtpChange = (e) => {
    const value = e.target.value;
    setOtp(value);

    if (!value.trim()) {
      setOtpVerified(false);
      setErrors((prev) => ({ ...prev, otp: "OTP is required" }));
    } else if (value === "123456") {
      // sample OTP for demo
      setOtpVerified(true);
      setErrors((prev) => {
        const { otp, ...rest } = prev;
        return rest;
      });
    } else {
      setOtpVerified(false);
      setErrors((prev) => ({ ...prev, otp: "Invalid OTP" }));
    }
  };

  // ==========================
  // Submit
  // ==========================
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(email)) newErrors.email = "Invalid email format";

    if (!otp.trim()) newErrors.otp = "OTP is required";

    if (!password.trim()) newErrors.password = "Password is required";

    if (!confirmPassword.trim()) newErrors.confirmPassword = "Password is required";
    else if (password !== confirmPassword) 
      newErrors.confirmPassword = "Passwords do not match";
    

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && otpVerified) {
      alert("Password reset successful!");
    }
  };


  return (
    <div className="reset-container">
      {/* LEFT YELLOW SECTION */}
      <div className="left-section-reset">
        <img src={resetImage} className="illustration-reset" alt="Reset Illustraction" />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="right-section-reset">
        <div className="logo-reset-container">
          <img src={logo} alt="KodNest Logo" className="kodnest-logo-reset" />
        </div>

        <h2>Reset Password</h2>
        <p>Let's activate your KodNest account!</p>

        <form className="reset-form" onSubmit={handleSubmit}>

          {/* Email */}
          <label>Email Address</label>
          <input 
          type="email" placeholder="your-email@gmail.com" 
          value={email}
          onChange={handleEmailChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

  
          {/* OTP */}
            <label>Enter OTP</label>

            <div className="otp-input-container">
              <input
                type="text"
                placeholder="Enter the OTP sent to your email"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value;
                  setOtp(value);

                  // REMOVE popup when typing
                  setErrors((prev) => {
                    const { otp, ...rest } = prev;
                    return rest;
                  });

                  // CASE 1 — Empty input → show popup, hide verify box
                  if (!value.trim()) {
                    setOtpVerified(false);
                    return; // verify box will not show
                  }

                  // CASE 2 — Check OTP
                  if (value === "123456") {
                    setOtpVerified(true);
                  } else {
                    setOtpVerified(false);
                  }
                }}
              />

              {/* Show check-icon only when verified */}
              {otpVerified && (
                <img src={checkIcon} alt="verified" className="otp-check-icon" />
              )}
            </div>

            {/* STATUS ROW */}
            <div className="otp-status-row">
              {/* Popup ONLY when OTP is empty and user pressed submit */}
              {errors.otp && <p className="error">{errors.otp}</p>}

              {/* Verify box only when otp.length > 0 */}
              {otp.trim() !== "" && (
                <div className={`otp-verify-box ${otpVerified ? "verified" : "invalid"}`}>
                  {otpVerified ? "OTP Verified ✔" : "Invalid OTP"}
                </div>
              )}
            </div>

          {/* PASSWORD */}
          <label>New Password</label>
          <div className="password-container-reset">
            <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={password}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);

              setErrors((prev) => {
                const newErrors = { ...prev };

                if (value.trim() !== "") {
                  delete newErrors.password;
                }

                if (value.trim() === "") {
                  newErrors.password = "Password is required";
                }

                return newErrors;
              });
            }}
            
          />
          </div>

          {errors.password && <p className="error">{errors.password}</p>}


          {/* PASSWORD RULES */}
          <div className="criteria-box-reset">
            <ul>
              <li className={passwordRules.length ? "valid" : ""}>
                Minimum 8 characters
              </li>
              <li className={passwordRules.upper ? "valid" : ""}>
                At least one uppercase letter
              </li>
              <li className={passwordRules.lower ? "valid" : ""}>
                At least one lowercase letter
              </li>
              <li className={passwordRules.number ? "valid" : ""}>
                At least one number
              </li>
              <li className={passwordRules.special ? "valid" : ""}>
                At least one special character (@, #, $, %)
              </li>
            </ul>
          </div>

          {/* Confirm Password */}
          <label>Confirm Password</label>
          <div className="password-container-reset">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your new password"
              value={confirmPassword}
              onChange={(e) => {
              const value = e.target.value;
              setConfirmPassword(value);

              // Always remove previous confirmPassword errors when typing
              setErrors((prev) => {
                const { confirmPassword, ...rest } = prev;
                return rest;
              });

              // If confirm password is empty → show "Password is required"
              if (!value.trim()) {
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: "Password is required",
                }));
                return;
              }

              // If values don't match → show mismatch
              if (password.trim() && value.trim() && password !== value) {
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: "Passwords do not match",
                }));
                return;
              }
            }}

            />
            <div className="password-toggle-reset" onClick={toggleConfirmPassword}>
              <img
                src={showConfirmPassword ? eyeIcon : hiddenIcon}
                alt="toggle"
                className="toggle-icon-reset"
              />
            </div>
          </div>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button type="submit" className="reset-btn-reset">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetForm;
