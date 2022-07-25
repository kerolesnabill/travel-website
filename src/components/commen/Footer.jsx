import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark pt-5 pb-5">
      <div className="container mt-5 mb-5">
        <div className="row text-center">
          <div className="col-12 col-lg-4">
            <div className="mb-0 h1 fs-2 text-white">K-Travel</div>
            <p className="text-white-50 mt-3">
              Created By{" "}
              <span className="text-primary fw-bold">Keroles Nabil</span>
              <p>© 2022</p>
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <h4 className="text-white">Links</h4>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white-50">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tours" className="nav-link text-white-50">
                  Tours & Travel
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white-50">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <h4 className="text-white">Contact Us</h4>
            <p className="text-white-50 mt-3">
              Get in touch with us via mail phone.We are waiting for your call
              or message.
            </p>
            <button className="btn btn-primary w-100 mt-3 rounded-pill">
              contact@k-travel.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
