import React from "react";
import BusCard from "../components/Bus Card/BusCard";
import Navbar from "../components/NavBar/NavBar";
import SearchForm from "../components/Search Form/SearchForm";

const Result = () => {

  return (
    <>
      <div className="flex flex-col bg-[#f8f8f8] min-h-screen">
        <section className="bg-red-400">
          <Navbar />
        </section>
        <section className="flex flex-col items-center w-full ">
          <BusCard />
        </section>
      </div>
    </>
  );
};

export default Result;
