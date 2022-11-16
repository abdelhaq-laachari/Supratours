import React from "react";
import BusInfo from "../components/Bus Card/BusInfo";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Booking = () => {
  return (
    <>
      <div className="flex flex-col space-y-5">
        <section className=" bg-gray-400 ">
          <Navbar />
        </section>
        <div>
          <section>
            <BusInfo />
          </section>
        </div>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Booking;
