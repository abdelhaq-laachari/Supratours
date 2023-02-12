import React from "react";
import BusCard from "../components/Bus Card/BusCard";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/NavBar/NavBar";
import SearchForm from "../components/Search Form/SearchForm";

const Result = () => {
  return (
    <>
      <div className="flex w-full flex-col bg-[#f8f8f8] min-h-screen">
        <section className="bg-gray-400">
          <Navbar />
        </section>
        <section className="flex justify-around w-[100%] my-5">
          <div className="hidden md:flex md:w-[25%]">
            <Filter/>
          </div>
          <div className="w-[95%] md:w-[65%] ">
            <BusCard />
          </div>
        </section>
      </div>
    </>
  );
};

export default Result;
