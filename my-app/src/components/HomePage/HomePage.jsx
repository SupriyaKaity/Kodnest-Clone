import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import mainLogo from "../../image/main_logo.png";
import welcomeImg from "../../image/welcome.png";
import mailIcon from "../../image/mail.png";
import phoneIcon from "../../image/phone.png";
import RupeeIcon from "../../image/rupee.png";
import launchIcon from "../../image/launch.png";
import communityIcon from "../../image/community.png";
import pointerIcon from "../../image/pointer.png";
import clockIcon from "../../image/clock.png";
import helpIcon from "../../image/help.png";
import userIcon from "../../image/user.png";
import user1Icon from "../../image/user1.png";
import codeIcon from "../../image/code.png";
import feedbackIcon from "../../image/feedback.png";
import resumeIcon from "../../image/resume.png";
import interviewIcon from "../../image/interview.png";
import calendarIcon from "../../image/calendar.png";
import bellIcon from "../../image/bell.png";
import supportIcon from "../../image/support.png";
import outIcon from "../../image/out.png";



export default function HomePage() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);
  const [hoverPhone, setHoverPhone] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [navLine, setNavLine] = useState(false);
  const [active, setActive] = useState("Home");
  const [communityOpen, setCommunityOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showArrow, setShowArrow] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const dropdownRef = useRef(null);






  useEffect(() => {
  function handleDocMouseDown(e) {
    const target = e.target;

    if (
      dropdownRef.current?.contains(target) ||
      profileRef.current?.contains(target)
    ) {
      return; // CLICK INSIDE → DO NOTHING
    }

    setProfileOpen(false); // CLICK OUTSIDE → CLOSE
  }

  document.addEventListener("mousedown", handleDocMouseDown);
  return () => document.removeEventListener("mousedown", handleDocMouseDown);
}, []);



  function triggerNavAnimation(tab) {
    setActiveTab(tab);
    setNavLine(true);

    setTimeout(() => setNavLine(false), 700);
  }

  return (
    <div className="homepage-container">
      {/* NAVBAR */}
      <div className="navbarHome">
        {/* Logo */}
        <img
          src={mainLogo}
          alt="logo"
          className="logoHome"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />



        {/* Navigation */}
        {/* <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Practice</a>
          <a href="#">Placements</a>
          <a href="#">Community</a>
        </div> */}
        {/* Yellow animated slide bar */}
        {navLine && <div className="nav-animate-line"></div>}

        {/* Logo */}
        {/* <img src={mainLogo} alt="logo" className="logoHome" /> */}

        {/* Navigation */}
        <div className="nav-links">
          <a
            className={activeTab === "Home" ? "active" : ""}
            onClick={() => {
              triggerNavAnimation("Home");
              navigate("/home");
            }}
            style={{ cursor: "pointer" }}
          >
            Home
          </a>


          <a
            href="#"
            className={activeTab === "Courses" ? "active" : ""}
            onClick={() => triggerNavAnimation("Courses")}
          >
            Courses
          </a>

          <a
            href="#"
            className={activeTab === "Practice" ? "active" : ""}
            onClick={() => triggerNavAnimation("Practice")}
          >
            Practice
          </a>

          <a
            href="#"
            className={`${activeTab === "Placements" ? "active" : ""} placements-rgb`}
            onClick={() => triggerNavAnimation("Placements")}
          >
            Placements
          </a>


          {/* ---------------- COMMUNITY (MEGA MENU) ---------------- */}
          <div
            className="community-wrapper"
            onMouseEnter={() => setCommunityOpen(true)}
            onMouseLeave={() => setCommunityOpen(false)}
          >
            <div className="community-link">
              Community
              <span className={`arrow ${communityOpen ? "rotate" : ""}`}>⌄</span>
            </div>

            {/* Dropdown ALWAYS mounted */}
            <div
              className={`community-dropdown ${communityOpen ? "show" : ""}`}
            >

              {/* LEFT BLOCK */}
              <div className="community-column">
                <div className="community-item no-hover">
                  <img src={launchIcon} className="item-icon" />
                  <div>
                    <h4>Kodnest Community</h4>
                  </div>
                </div>

                <div className="community-item">
                  <img src={communityIcon} className="item-icon" />
                  <div>
                    <h4>Community</h4>
                    <p>Join a like-minded community to share ideas</p>
                  </div>
                  <span className="right-arrow">›</span>
                </div>

                <div className="community-item">
                  <img src={pointerIcon} className="item-icon" />
                  <div>
                    <h4>Road Map</h4>
                    <p>Discover upcoming features and share your input</p>
                  </div>
                  <span className="right-arrow">›</span>
                </div>
              </div>

              {/* RIGHT BLOCK */}
              <div className="community-column">
                <div className="community-item">
                  <img src={clockIcon} className="item-icon" />
                  <div>
                    <h4>Change Log</h4>
                    <p>Catch up on the latest updates and new features</p>
                  </div>
                  <span className="right-arrow">›</span>
                </div>

                <div className="community-item">
                  <img src={helpIcon} className="item-icon" />
                  <div>
                    <h4>Help</h4>
                    <p>Get help from the community</p>
                  </div>
                  <span className="right-arrow">›</span>
                </div>
              </div>

  

              </div>
            
          </div>
        </div>

        {/* Right Icons */}
        <div className="right-icons">
          {/* MAIL */}
            <div
              className="icon-box"
              onMouseEnter={() => setHoverMail(true)}
              onMouseLeave={() => setHoverMail(false)}
            >
              <img src={mailIcon} className="emoji-icon" alt="mail" />
              {hoverMail && <div className="tooltip">Feedback</div>}
            </div>

            {/* MONEY */}
            <a href="/refer-page" className="wallet-icon">
              <img src={RupeeIcon} alt="money" className="wallet-emoji" />
            </a>

            {/* PHONE */}
            <div
              className="icon-box"
              onMouseEnter={() => setHoverPhone(true)}
              onMouseLeave={() => setHoverPhone(false)}
            >
              <img src={phoneIcon} className="emoji-icon" alt="phone" />
              {hoverPhone && <div className="tooltip">Mentor Connect</div>}
            </div>


          {/* PROFILE */}
          <div className="profile-section">

            <img
              ref={profileRef}
              src={user1Icon}
              className="profile-img"
              onClick={(e) => {
                e.stopPropagation();

                setTimeout(() => {
                  setProfileOpen(prev => !prev);
                }, 0);
              }}
              alt="profile"
            />
           

            {profileOpen && (
              <motion.div
                ref={dropdownRef}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="profile-dropdown"
              >
                {/* Top info */}
                <div className="profile-header">
                  <img
                    src={user1Icon}
                    className="profile-img-sm"
                    alt="profile"
                  />
                  <div>
                    <h3>Supriya</h3>
                    <p className="batch">November Batch <br/>2025</p>
                    <p className="status">Offline</p>
                  </div>
                </div>

                <div className="profile-links">

                  <div className="profile-option">
                    <img src={userIcon} className="option-icon" />
                    <a onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>
                      My Account
                    </a>
                  </div>

                  <div className="divider"></div>

                  <div className="profile-option">
                    <img src={codeIcon} className="option-icon" />
                    <a href="#">Compiler</a>
                  </div>
                  <div className="divider"></div>

                  <div className="profile-option">
                    <img src={feedbackIcon} className="option-icon" />
                    <a href="#">User Feedback</a>
                  </div>
                  <div className="divider"></div>

                  <div className="profile-option">
                    <img src={resumeIcon} className="option-icon" />
                    <a href="#">Resume Builder</a>
                  </div>
                  <div className="divider"></div>

                  <div className="profile-option">
                    <img src={interviewIcon} className="option-icon" />
                    <a href="#">Mock Interview</a>
                  </div>
                  <div className="divider"></div>

                  <div className="profile-option">
                    <img src={calendarIcon} className="option-icon" />
                    <a href="#">Apply for Leave</a>
                  </div>
                  <div className="divider"></div>

                  <div className="profile-option">
                    <img src={bellIcon} className="option-icon" />
                    <a href="#">What's New</a>
                  </div>
                  <div className="divider"></div>

                  <div className="profile-option">
                    <img src={supportIcon} className="option-icon" />
                    <a href="#">Help Center</a>
                  </div>
                  <div className="divider"></div>

                  <div className="profile-option">
                    <img src={outIcon} className="option-icon" />
                    <a href="#">Log Out</a>
                  </div>

                </div>

              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="main-wrapper">
        <div className="hero-card">
          <div className="hero-text">
            <h2>BroKod: Your Learning Ally at KodNest</h2>
            <p>
              Unlock your potential with BroKod – your mentor, friend, coach,
              guide, and companion. Available 24/7 to support your journey.
            </p>
            <button className="hero-btn">Chat with BroKod</button>
          </div>

          <img src={welcomeImg} className="hero-img" />

        </div>
      </div>
      
    </div>
  );
}
