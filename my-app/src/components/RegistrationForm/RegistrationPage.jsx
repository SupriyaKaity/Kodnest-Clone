import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation

import "./RegistrationPage.css";

import main_logo from "../../image/main_logo.png";
import coffee from "../../image/coffee.png";
import link from "../../image/link.png";
import security from "../../image/security.png";
import student from "../../image/student.png";
import arrow from "../../image/arrow.png";
import dataImg from "../../image/data.png";
import checkIcon from "../../image/circle.png";
import boltIcon from "../../image/energy.png";
import crownIcon from "../../image/crown.png";
import manImg from "../../image/man.jpg";
import womanImg from "../../image/woman.jpg";
import menImg from "../../image/men.jpg";
import clockIcon from "../../image/clock.png";
import telephoneIcon from "../../image/telephone.png";
import mainLogo from "../../image/main_logo.png";
import facebookIcon from "../../image/facebook.png";
import githubIcon from "../../image/github.png";
import instagramIcon from "../../image/instagram.png";
import linkedinIcon from "../../image/linkedin.png";
import mailIcon from "../../image/mail.png";
import youtubeIcon from "../../image/youtube.png";
import userIcon from "../../image/user.png";
import sendIcon from "../../image/send.png";
import eyeIcon from "../../image/eye.png";
import hiddenIcon from "../../image/hidden.png";






const RegistrationPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showArrow, setShowArrow] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);


  const navigate = useNavigate(); // ✅ Hook for navigation

  React.useEffect(() => {
    document.title = "Kodnest Registration";
  }, []);


  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    graduation: "",
    language: "",
    referral: "",
    mode: "",
    tech: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.whatsapp) newErrors.whatsapp = "WhatsApp Number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.graduation) newErrors.graduation = "Graduation year is required";
    if (!formData.language) newErrors.language = "Language selection is required";
    if (!formData.mode) newErrors.mode = "Select mode of learning";
    if (!formData.tech) newErrors.tech = "Select tech field";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // All fields filled, navigate to login
      navigate("/login");
    }
  };



  useEffect(() => {
  const timer = setTimeout(() => setShowLoader(false), 1500);
  return () => clearTimeout(timer);
}, []);

   useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 200);
    return () => clearTimeout(timer);
  }, []);

 useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

  

    // Navbar hide/show
    if (currentScroll > lastScrollY && currentScroll > 50) { // lowered threshold
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    // Scroll-to-top button show after 100px
    setShowArrow(currentScroll > 100); // lowered threshold
    lastScrollY = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
  const cursor = document.getElementById("customCursor");

  const moveCursor = (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  window.addEventListener("mousemove", moveCursor);
  return () => window.removeEventListener("mousemove", moveCursor);
}, []);




  return (
    
    <div className="registration-page">
      <div className="custom-cursor" id="customCursor"></div>

      {/* Top Loader Line */}
    {showLoader && <div className="top-loader"></div>}


      {/* Navbar */}
      <nav className={`navbar ${showNavbar ? "" : "navbar-hidden"}`}>
        <img src={main_logo} alt="KodNest" className="logo" />
        <ul className="nav-links">
          <li className="nav-item">
            <img src={coffee} alt="" />
            <span>Full Stack Development</span>
          </li>
          <li className="nav-item">
            <img src={link} alt="" />
            <span>Premium Testing Module</span>
          </li>
          <li className="nav-item">
            <img src={security} alt="" />
            <span>Hire from us</span>
          </li>
          <li className="nav-item">
            <span>Blog</span>
          </li>

          {/* Student Login - added click navigation */}
          <li
            className="nav-item student"
            onClick={() => navigate("/login")}
          >
            <img src={student} alt="Student" />
            <span>Student Login</span>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="form-container">
        {/* LEFT SIDE CONTENT */}
         <div className="left-section">
          <h1>
            From <span className="highlight">Learning to Earning:</span> <br />
            Join the Best Software <br />Training & Placement <br />Institute in Bangalore
          </h1>

          <p className="left-paragraph">
            Unlock unlimited placement drives & 1:1 mentorship with top software training and placement institute in Bangalore. Get hands-on training in Full Stack Development or Software Testing and secure your dream tech job.
          </p>

          <img
            src={dataImg}
            alt="Data Illustration"
            className={`left-image ${showImage ? "slide-up" : ""}`}
          />
        </div>



        {/* RIGHT SIDE FORM */}
        <div className="form-box">
          <h2>Book Your Demo Classes, For Free!</h2>

          <form>
            <input 
            type="text" 
            placeholder="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}/>
            {errors.name && <span className="error">{errors.name}</span>}
            
            <input 
            type="email" 
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}/>
            {errors.email && <span className="error">{errors.email}</span>}

            <input 
            type="tel" 
            placeholder="Phone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}/>
            {errors.phone && <span className="error">{errors.phone}</span>}

            <input 
            type="tel" 
            placeholder="WhatsApp Number" 
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}/>
            {errors.whatsapp && <span className="error">{errors.whatsapp}</span>}

            <div className="password-row">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div
                className="eye-box"
                onMouseEnter={() => setShowPassword(true)}
                onMouseLeave={() => setShowPassword(false)}
              >
                <img src={showPassword ? hiddenIcon : eyeIcon} alt="Toggle" />
              </div>
            </div>
            {errors.password && <span className="error">{errors.password}</span>}

            <div className="row">
              <select
                name="graduation"
                value={formData.graduation}
                onChange={handleChange}
              >
                <option value="">Graduation year?</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>Others</option>
              </select>
              {errors.graduation && <span className="error">{errors.graduation}</span>}

              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="">Select language</option>
                <option>English</option>
                <option>Telugu</option>
                <option>Kannada</option>
                <option>Hindi</option>
                <option>Tamil</option>
              </select>
              {errors.language && <span className="error">{errors.language}</span>}
            </div>

            <input
              type="text"
              placeholder="Referred by Friend? Enter KodNest ID and name"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
            />

            <div className="radio-group">
              <p>Preferred Mode of Learning</p>
              <label>
                <input 
                type="radio" 
                name="mode" 
                value="Online"
                onChange={handleChange}
                /> 
                Online
              </label>
              <label>
                <input 
                type="radio" 
                name="mode" 
                value="Offline"
                onChange={handleChange}
                /> 
                Offline
              </label>
              {errors.mode && <span className="error">{errors.mode}</span>}
            </div>

            <div className="radio-group">
              <p>Which tech do you want to start your career with?</p>
              <label>
                <input 
                type="radio" 
                name="tech" 
                value="Development"
                onChange={handleChange}
                /> 
                Development
              </label>
              <label>
                <input 
                type="radio" 
                name="tech" 
                value="Testing"
                onChange={handleChange}
                /> 
                Testing
              </label>
              {errors.tech && <span className="error">{errors.tech}</span>}

            </div>

            <button 
            type="button" 
            className="register-btn"
            onClick={handleSubmit}
            >
              REGISTER NOW
            </button>
          </form>
        </div>
      </div>

            {/* FEATURES SECTION */}
      <h2 className="features-title">Build Real Apps, Land Dream Job</h2>
      <div className="feature-section">
        <div className="features-container">

          {/* CARD 1 */}
        <div className="feature-card">
          <img src={checkIcon} alt="check" className="card-icon" />
          
          <h3>Unlimited Placement Drives</h3>
          <p>Achieve big with 34.4 LPA packages in top product based companies</p>
        </div>

        {/* CARD 2 */}
        <div className="feature-card">
          <img src={boltIcon} alt="bolt" className="card-icon" />
          
          <h3>Daily Live Mentorship</h3>
          <p>Learn directly from expert trainers and get daily support</p>
        </div>

        {/* CARD 3 */}
        <div className="feature-card">
          <img src={crownIcon} alt="crown" className="card-icon" />
          
          <h3>Top-Tier Training</h3>
          <p>From basics to advanced—master skills that companies want</p>
        </div>
        </div>
      </div>

      {/* BLOG SECTION */}
        <section className="blog-section">

          <h2 className="blog-title">
            Get daily updates and ideas<br />from our team of experts.
          </h2>

          <p className="blog-subtitle">
            Creating professional websites has never been easier. Today with Essentials you can build awesome websites in no time!
          </p>

          {/* BLOG CARDS */}
          <div className="blog-cards">

            {/* CARD 1 */}
            <div className="blog-card">
              <img src={manImg} alt="blog" className="blog-img" />

              <div className="blog-content">
                <div className="tags">
                  <span className="tag">Finding a Job</span>
                  <span className="tag">Get Inspired</span>
                  <span className="tag">Industry News</span>
                </div>

                <h3>From Classroom to Cubicle: A Day in the Life of a Junior Java Developer</h3>

                <div className="date-row">
                  <img src={clockIcon} alt="clock" className="clock-icon" />
                  <p>December 7, 2024</p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="blog-card">
              <img src={womanImg} alt="blog" className="blog-img" />

              <div className="blog-content">
                <div className="tags">
                  <span className="tag">Career Advice</span>
                  <span className="tag">Industry News</span>
                  <span className="tag">Learning Tips</span>
                </div>

                <h3>The Top 10 Spring Boot Features Every Java Developer Should Master</h3>

                <div className="date-row">
                  <img src={clockIcon} alt="clock" className="clock-icon" />
                  <p>December 6, 2024</p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="blog-card">
              <img src={menImg} alt="blog" className="blog-img" />

              <div className="blog-content">
                <div className="tags">
                  <span className="tag">Career Advice</span>
                  <span className="tag">Industry News</span>
                </div>

                <h3>7 Essential Skills Every Full Stack Developer Needs in 2025</h3>

                <div className="date-row">
                  <img src={clockIcon} alt="clock" className="clock-icon" />
                  <p>December 3, 2024</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* Support Section */}
        <section className="support-section">
          <h2>KodNest Learner Support</h2>
          <p>Reach out to our experts anytime. We’re here to assist you 24/7.</p>

          <button className="support-btn">
            <img src={telephoneIcon} alt="call" className="call-icon" />
            Talk to a Career Expert
          </button>
        </section>
        {/* ------------------ KodNest Top Section ------------------ */}
        <div className="footer-top-section">

          <h1 className="footer-main-title">
            KodNest – Code, Transform<br />and Succeed
          </h1>

          <p className="footer-subtitle">
            Empowering Tomorrow's Leaders with Cutting-Edge Education<br />
            and Robust Placement Support
          </p>

          <div className="footer-social-row">
            <img src={instagramIcon} className="footer-social-img" />
            <img src={facebookIcon} className="footer-social-img" />
            <img src={linkedinIcon} className="footer-social-img" />
            <img src={youtubeIcon} className="footer-social-img" />
            <img src={githubIcon} className="footer-social-img" />
          </div>

        </div>



        {/* Footer */}
        <footer className="footer">

          <div className="footer-top">

            <div className="footer-left">
              <img src={mainLogo} alt="logo" className="footer-logo" />
              <p>All rights reserved</p>
            </div>

            {/* Explore */}
            <div className="footer-col">
              <h3 className="footer-heading">Explore</h3>
              <a>Full Stack Development</a>
              <a>Premium Testing Module</a>
              <a>Hire from us</a>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h3 className="footer-heading">Company</h3>
              <a>About us</a>
              <a>Contact us</a>
              <a>Blog</a>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <h3 className="footer-heading">Legal</h3>
              <a>Terms and Conditions</a>
              <a>Privacy Policy</a>
              <a>Cookie Policy</a>
              <a>Copyright Policy</a>
            </div>

            {/* Follow Us */}
            <div className="footer-col">
              <h3 className="footer-heading">Follow Us</h3>

              <div className="footer-follow">
                <img src={youtubeIcon} className="social-icon" />
                <span>YouTube</span>
              </div>

              <div className="footer-follow">
                <img src={githubIcon} className="social-icon" />
                <span>GitHub</span>
              </div>

              <div className="footer-follow">
                <img src={instagramIcon} className="social-icon" />
                <span>Instagram</span>
              </div>

              <div className="footer-follow">
                <img src={facebookIcon} className="social-icon" />
                <span>Facebook</span>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">

            <div className="contact-row">
              <div className="contact-item">
                <img src={userIcon} className="contact-icon" />
                <span>Contact us – +91-8095 000 123</span>
              </div>

              <div className="contact-item">
                <img src={mailIcon} className="contact-icon" />
                <span>Email – info@kodnest.com</span>
              </div>
            </div>

            <button className="demo-btn">
              <img src={sendIcon} className="send-icon" />
              Register for Demo
            </button>

          </div>

        </footer>







      {/* Scroll to Top Arrow */}
      <button
        className={`scroll-top ${showArrow ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <img src={arrow} alt="Go to top" />
      </button>


    </div>
  );
};

export default RegistrationPage;
