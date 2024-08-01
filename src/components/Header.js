import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./../App.css";
import logo from "./../img/logo.png";

function Header() {
  return (
    <div>
      <header
        className="container header header-nav navbar navbar-expand-lg"
        id="top"
      >
        <div className="container-fluid">
          {/* Medium Brand Logo */}
          <a className="navbar-brand" href="#top">
            <img src={logo} alt="Medium Logo" className="brand-logo" />
          </a>

          {/* Nabar Links */}
          <div className="text-center" id="navbarSupportedContent">
            {/* List */}
            <ul className="navbar-nav navbar-expand ms-auto mb-2 nav-list gap-2 justify-content-center align-items-center d-flex flex-row">
              {/* Our Story */}
              <li className="nav-item mx-2 d-none d-lg-block">
                <a
                  href="https://medium.com/about?autoplay=1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Our Story
                </a>
              </li>
              {/* Membership */}
              <li className="nav-item mx-2 d-none d-lg-block">
                <a
                  href="https://medium.com/membership"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Membership
                </a>
              </li>
              {/* Write */}
              <li className="nav-item mx-2 d-none d-lg-block">
                <a
                  href="https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2Fnew-story"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Write
                </a>
              </li>
              {/* Sign in */}
              <li className="nav-item mx-2 d-none d-sm-block">
                <a
                  href="https://medium.com/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Sign in
                </a>
              </li>
              {/* Get started */}
              <li className="nav-item mx-2">
                <a
                  class="btn btn-get-started"
                  href="https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2F"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Get started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="gold-strip d-flex justify-content-center align-content-center">
        <p className="d-flex flex-wrap align-items-center">
          <span className="fw-semibold fs-6 mx-2">
            Be part of a better internet.
          </span>
          <span className="fw-normal fs-6 mx-2 membership">
            <a
              rel="noopener follow"
              href="https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2Fplans%3FisOnboardingUpsell%3D1"
            >
              Get 20% off membership for a limited time
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Header;
