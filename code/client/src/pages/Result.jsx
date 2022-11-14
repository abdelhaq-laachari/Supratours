import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BusCard from "../components/Bus Card/BusCard";
import Navbar from "../components/NavBar/NavBar";
import { searchTrip } from "../features/trips/tripSlice";

const Result = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state.trip);
  const formData = JSON.parse(localStorage.getItem("formData"));
  useEffect(() => {
    setTimeout(() => {
      dispatch(searchTrip(formData));
      // console.log(trips)
      setData(trips);
      console.log(data);
    }, 30);   
    // dispatch(searchTrip(formData));
    // setData(trips)
  }, []);
  // setData(trips)

  // console.log("trips: ",trips);

  return (
    <>
      <section className="bg-red-400">
        <Navbar />
      </section>
      <section className="flex flex-col items-center w-full bg-slate-300">
        {/* <BusCard/> */}
      </section>
    </>
  );
};

export default Result;
