import React from "react";
import "./navbar.css";
import navLogo from "../../assest/navlogo.svg";

const Navbar = ({handleModal}) => {
  return (
    <nav className="navbar"> 
      <section className="nav-section">
        <img alt="logo" src={navLogo} />
      </section>
        <ul className="nav-section nav-links">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Place to stay</a>
          </li>
          <li>
            <a>NFTs</a>
          </li>
          <li>
            <a>Community</a>
          </li>
        </ul>
      <section className="nav-section">
        <button className="nav-button" onClick={handleModal}>Connect wallet</button>
      </section>
    </nav>
  );
};

export default Navbar;
