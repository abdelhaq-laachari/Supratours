import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import Service from "../../pages/Services";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="shadow-lg">
      <img src="/assets/logo/supratours.png" alt="" className="logo" />
      <nav ref={navRef}>
        <a >
          <Link to="/contact" element={<Home />}>
            Home
          </Link>
        </a>
        <a>
          <Link to="/service" element={<Service/>}>Our services</Link>
        </a>
        <a href="/#">About us</a>
        <a href="/#">Contact us</a>
        <button className="res-sign px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          sign in
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="sign px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        sign in
      </button>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
