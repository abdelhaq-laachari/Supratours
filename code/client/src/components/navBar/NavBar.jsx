import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Service from "../../pages/Services";
import Contact from "../../pages/Contact";
import SignIn from "../../pages/SignIn";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="shadow-lg ">
      <img src="/assets/logo/supratours.png" alt="" className="logo" />
      <nav ref={navRef}>
        <span>
          <Link to="/" element={<Home />}>
            Home
          </Link>
        </span>
        <span>
          <Link to="/service" element={<Service />}>
            Our services
          </Link>
        </span>
        <span>
          <Link to="/About" element={<About />}>
            About Us
          </Link>
        </span>
        <span>
          <Link to="/Contact" element={<Contact />}>
            Contact Us
          </Link>
        </span>
        <Link to="/signIn" element={<SignIn />}>
          <button className="res-sign px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            sign in
          </button>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <Link to="/signIn" element={<SignIn />}>
        <button className="sign px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          sign in
        </button>
      </Link>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
