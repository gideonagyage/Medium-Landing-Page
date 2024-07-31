import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Footer Links */}
      <div className="container d-flex justify-content-center align-items-center gap-3 txt-grey">
        <a
          href="https://help.medium.com/hc/en-us"
          rel="noopener noreferrer"
          target="_blank"
        >
          Help
        </a>
        <a
          className="d-none d-lg-block"
          href="https://medium.statuspage.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Status
        </a>
        <a
          href="https://medium.com/about?autoplay=1"
          rel="noopener noreferrer"
          target="_blank"
        >
          About
        </a>
        <a
          className="d-none d-lg-block"
          href="https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e"
          rel="noopener noreferrer"
          target="_blank"
        >
          Careers
        </a>
        <a
          className="d-none d-lg-block"
          href="mailto:pressinquiries@medium.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Press
        </a>
        <a
          className="d-none d-lg-block"
          href="https://blog.medium.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Blog
        </a>
        <a
          href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9"
          rel="noopener noreferrer"
          target="_blank"
        >
          Privacy
        </a>
        <a
          href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f"
          rel="noopener noreferrer"
          target="_blank"
        >
          Terms
        </a>
        <a
          className="d-none d-lg-block"
          href="https://speechify.com/medium"
          rel="noopener noreferrer"
          target="_blank"
        >
          Text to speech
        </a>
        <a
          className="d-none d-lg-block"
          href="https://medium.com/business"
          rel="noopener noreferrer"
          target="_blank"
        >
          Teams
        </a>
      </div>
    </footer>
  );
}

export default Footer;
