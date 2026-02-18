import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="footer-section">
        <div className="container">
          <div className="row align-items-center text-white text-center text-md-start">
            <div className="col-12 col-sm-6 col-xl-3 mb-3 mb-sm-0 mb-lg-auto order-2 order-xl-0 d-flex align-items-center">
              <p className="m-0">Copyright 2025. All rights reserved.</p>
            </div>

            <div className="col-12 col-xl-7 mb-3 order-1 mb-3 mb-xl-0 order-xl-0">
              <div className="footer-links small">
                <NavLink to="/" className="text-white mx-1">
                  Home
                </NavLink>{" "}
                |
                <NavLink to="/#about" className="text-white mx-1">
                  About Us
                </NavLink>{" "}
                |
                <NavLink to="/#services" className="text-white mx-1">
                  Services
                </NavLink>{" "}
                |
                <NavLink to="/#works" className="text-white mx-1">
                  Works
                </NavLink>{" "}
                |
                <a href="#" className="text-white mx-1">
                  Career
                </a>{" "}
                |
                <NavLink to="/#contact" className="text-white mx-1">
                  Contact
                </NavLink>{" "}
                |
                <NavLink to="/privacy-policy" className="text-white mx-1">
                  Privacy Policy
                </NavLink>{" "}
                |
                <NavLink to="/terms" className="text-white mx-1">
                  Terms
                </NavLink>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-2 d-flex justify-content-center justify-content-md-end order-2 order-xl-0">
              <div className="social-icons">
                <a href="#" className="icon facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="icon google">
                  <i className="fa-brands fa-google"></i>
                </a>
                <a href="#" className="icon linkedin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
