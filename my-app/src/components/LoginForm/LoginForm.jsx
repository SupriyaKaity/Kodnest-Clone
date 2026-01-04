import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import React from "react";
import "./LoginForm.css";
// import LoginPage from "./components/LoginForm/LoginForm";
import loginImage from "../../image/login.png";
import logo from "../../image/main_logo.png";
import hiddenIcon from "../../image/hidden.png";
import eyeIcon from "../../image/eye.png";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
      document.title = "Kodnest Login";
    }, []);



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
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

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, password: "Please enter your password" }));
    } else {
      setErrors((prev) => {
        const { password, ...rest } = prev;
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

    if (!password.trim()) {
      newErrors.password = "Please enter your password";
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

        <h2>Welcome Back, Kodnestians!</h2>
        <p>Let's hustle and make your dreams come true!</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input type="email" placeholder="your-email@gmail.com" value={email}
          onChange={handleEmailChange}/>
          {errors.email && <p className="error-text">{errors.email}</p>} 


          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Please enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div
              className="password-toggle"
              onClick={togglePasswordVisibility}
            //   title={showPassword ? "Hide Password" : "Show Password"}
            >
              <img
                src={showPassword ? eyeIcon : hiddenIcon}
                alt="toggle password visibility"
                className="toggle-icon"
              />
            </div>
          </div>
          {errors.password && <p className="error-text">{errors.password}</p>}

          <button
            type="button"
            className="forgot-button"
            onClick={() => navigate("/forgot")}
          >
            Forgot your password?
          </button>



          
          <button type="submit">
            <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png"
                alt="exit icon"
                className="btn-icon"
            />
            Log In
            </button>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;



