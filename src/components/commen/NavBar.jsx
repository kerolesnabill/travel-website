import * as React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid container">
        <Link
          to="/"
          className="navbar-brand mb-0 h1 fs-2"
          onClick={() => setClick(false)}
        >
          K-Travel
        </Link>
        <button
          className={click ? "navbar-toggler collapsed" : "navbar-toggler"}
          onClick={clickHandler}
        >
          <i className="navbar-toggler-icon"></i>
        </button>
        <div
          className={
            click
              ? "fs-5 navbar-collapse collapse show"
              : "fs-5 navbar-collapse collapse"
          }
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => setClick(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tours"
                className="nav-link"
                onClick={() => setClick(false)}
              >
                Tours & Travel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setClick(false)}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
