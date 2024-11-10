import React, { useEffect, useState } from 'react';
import '../styles/header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : 'navbar_bg'} mx-auto fixed-top`}>
        <div className="container">
          <a className="navbar-brand fw-2 fs-1" href="#">Hexnode</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 gap-3 ps-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Why Hexnode</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Platform</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Customer</a>
              </li>
            </ul>
            <button className="btn btn-danger btn_nav" type="submit">14 DAY FREE TRIAL</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
