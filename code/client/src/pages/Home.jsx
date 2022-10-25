import React from "react";
import NavBar from "../components/navBar/NavBar";
import SearchBox from "../components/Search/SearchBox";
import Background from "../components/video/Background";
import DatePicker from "../components/datePicker/DatePicker";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <Background />
      <div className="main">
        <NavBar />
        <h1 className="absolute lg:top-60 top-52 text-center  lg:text-center text-white lg:text-3xl">
          Join <span className="lg:text-3xl font-serif bold text-red-300 ">Supr@tours</span> to explore the best locations in <span className="lg:text-3xl font-serif bold text-red-300 ">Morocco</span>.
        </h1>
        <form className="absolute lg:top-2/4 top-1/3 flex justify-center bg-white p-3 items-center w-11/12 rounded-md shadow-lg ">
          <div className="flex items-center flex-wrap -mx-3 mb-2">
            <div className="w-full z-20 md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                From
              </label>
              <SearchBox />
            </div>
            <div className="w-full z-10 md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                From
              </label>
              <SearchBox />
            </div>
            <div className="flex space-x-5 w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <DatePicker />
              <DatePicker />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
