import React from "react";
import "./navbar.css";
import navLogo from "../../assest/navlogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ handleModal, showModal }) => {
  const [navStyle, setNavStyle] = useState(false);

  const changeNavStyle = () => {
    if(window.scrollY >= 200){
      setNavStyle(true)
    }else{
      setNavStyle(false)
    }
  }
  window.addEventListener('scroll', changeNavStyle)


  return (
    <nav className={navStyle ? ' navbar scrolled' : 'navbar'}>
      <section className="nav-section">
        <Link to={"/"}>
          <img alt="logo" src={navLogo} />
        </Link>
      </section>
      <ul className="nav-section nav-links">
        <li>
          <Link to={"/"}> Home </Link>
        </li>
        <li>
        <Link to={'/wallet'}>  Place to stay</Link>
        </li>
        <li>
          <a>NFTs</a>
        </li>
        <li>
          <a>Community</a>
        </li>
      </ul>
      <section className="nav-section">
        <button className="nav-button" onClick={handleModal}>
          Connect wallet
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
