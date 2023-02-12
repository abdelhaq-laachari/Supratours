import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../features/auth/authSlice";
import { getTripById } from "../features/trips/tripSlice";
import BusInfo from "../components/Bus Card/BusInfo";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import TicketOption from "../components/Ticket Option/TicketOption";

const Booking = () => {
  const dispatch = useDispatch();
  const idTrip = localStorage.getItem("idTrip");
  const { trips } = useSelector((state) => state.trip);
  useEffect(() => {
    dispatch(getTripById(idTrip));
    dispatch(reset());
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-5">
        <section className=" bg-gray-400 ">
          <Navbar />
        </section>
        <section className="flex flex-col md:flex-row w-full items-center md:items-start md:justify-around ">
          <div className="w-[95%] md:w-[60%]">
            <BusInfo
              startPoint={trips && trips[0].startPoint}
              endPoint={trips && trips[0].endPoint}
              startTime={trips && trips[0].startTime}
              endTime={trips && trips[0].endTime}
              price={trips && trips[0].price}
              tripDuration={trips && trips[0].tripDuration}
            />
          </div>
          <div className="w-[95%] md:w-[30%]">
            <TicketOption
              startTime={trips && trips[0].startTime}
              startDay={trips && trips[0].startDate}
              price={trips && trips[0].price}
            />
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
