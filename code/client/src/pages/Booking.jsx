import React from "react";
import BusInfo from "../components/Bus Card/BusInfo";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import TicketOption from "../components/Ticket Option/TicketOption";

const Booking = () => {
  return (
    <>
      <div className="flex flex-col space-y-5">
        <section className=" bg-gray-400 ">
          <Navbar />
        </section>
        <section className="flex flex-col md:flex-row w-full items-center md:items-start md:justify-around ">
          <div className="w-[95%] md:w-[60%]">
            <BusInfo />
          </div>
          <div className="w-[95%] md:w-[30%]">
            <TicketOption />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Booking;
