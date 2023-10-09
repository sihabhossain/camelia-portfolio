// ICONS
import { FaBars, FaTimes } from "react-icons/fa";

//CSS
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="#" className="logo">
          <div className="text-3xl text-[#E4B40D] font-bold shadow-sm">
            CAMELIA
          </div>
        </a>

        {/* Navbar menu */}

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#Home">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#About">ABOUT ME</a>
          </li>
          <li className="nav-item">
            <a href="#Services">SERVICES</a>
          </li>
          <li className="nav-item">
            <a href="#Portfolio">PORTFOLIO</a>
          </li>
          <li className="nav-item">
            <a href="#Clients">CLIENTS</a>
          </li>
          <li className="nav-item">
            <a href="#Blog">BLOG</a>
          </li>
          <li className="nav-item">
            <a href="#Contact">CONTACT</a>
          </li>
        </ul>

        {/* DOWNLOAD CV BUTTON */}
        <button className="text-white bg-[#E4B40D] hover:bg-yellow-400 px-5 py-3 rounded-full">
          DOWNLOAD CV
        </button>

        {/* Hamburger menu */}
        <div onClick={handleClick} className="hamburger">
          {click ? (
            <FaTimes size={30} className="text-white"></FaTimes>
          ) : (
            <FaBars size={30} className="text-white"></FaBars>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
