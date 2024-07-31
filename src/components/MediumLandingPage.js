import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import landingImage from "./../img/landing-img.webp";

function MediumLandingPage() {
  return (
    <div className="container d-flex flex-column min-vh-80">
      <div className="row h-100">
        {/* Hero Text & Button */}
        <div className="col-md-9">
          <h1 className="display-1 my-4 fw-bolder hero-title">
            Human <br /> stories & ideas
          </h1>
          <div className="lead my-5 fw-medium ">
            A place to read, write, and deepen your understanding
          </div>
          <div className="my-4">
            <a
              className="btn btn-black"
              href="https://medium.com/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h5 className="px-4">Start reading</h5>
            </a>
          </div>
        </div>
        {/* Illustration Image */}
        <div className="col-md-3 d-none d-lg-block">
          <img
            src={landingImage}
            alt="Illustration - Drawing a flower"
            className="landing-image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default MediumLandingPage;
