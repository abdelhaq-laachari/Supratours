import React from "react";
import ContactUs from "../components/Contact/ContactUs";
import Navbar from "../components/NavBar/NavBar";

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
