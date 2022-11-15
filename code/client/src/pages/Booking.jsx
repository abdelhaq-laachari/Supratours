import React from "react";
import BusInfo from "../components/Bus Card/BusInfo";
import Navbar from "../components/NavBar/NavBar";

const Booking = () => {
  return (
    <>
      <div className="flex flex-col space-y-5">
        <section>
          <Navbar />
        </section>
        <div>
          <section>
            <BusInfo />
          </section>
        </div>
      </div>
    </>
  );
};

export default Booking;
