import React from "react";
import ContactUs from "../components/contact/ContactUs";
import Navbar from "../components/navBar/NavBar";

const Contact = () => {
  return (
    <>
      <div className="bg-slate-400">
        <Navbar/>
        <ContactUs />
      </div>
    </>
  );
};

export default Contact;
