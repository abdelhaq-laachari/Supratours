import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BusCard from "../components/Bus Card/BusCard";
import Navbar from "../components/NavBar/NavBar";
import { searchTrip } from "../features/trips/tripSlice";

const Result = () => {
  // const [data, setData] = useState();
  // const dispatch = useDispatch();
  // const { trips } = useSelector((state) => state.trip);
  // const formData = JSON.parse(localStorage.getItem("formData"));
  // useEffect(() => {
  //   dispatch(searchTrip(formData));
    
  // },[]);
  
  return (
    <>
      <section className="bg-red-400">
        <Navbar />
      </section>
      <section className="flex flex-col items-center w-full bg-slate-300">
        <BusCard/>
      </section>
    </>
  );
};

export default Result;
