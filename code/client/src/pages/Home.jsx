import React from "react";
import NavBar from "../components/navBar/NavBar";
import SearchBox from "../components/Search/SearchBox";
import Background from "../components/video/Background";
import DatePicker from "../components/datePicker/DatePicker";
import Card from "../components/cards/Card";
import "../styles/Home.css";
import Traveler from "../assets/svg/traveler.svg";
import Support from "../assets/svg/support.svg";
import Map from "../assets/svg/map.svg";
const Home = () => {
  return (
    <>
      <Background />
      <div className="section1">
        <div className="main">
          <NavBar />
          <h1 className="absolute lg:top-60 top-52 text-center  lg:text-center text-white lg:text-3xl">
            Join{" "}
            <span className="lg:text-3xl font-serif bold text-red-300 ">
              Supr@tours
            </span>{" "}
            to explore the best locations in{" "}
            <span className="lg:text-3xl font-serif bold text-red-300 ">
              Morocco
            </span>
            .
          </h1>
          <form className="absolute lg:top-2/4 top-1/3 flex justify-center bg-white p-3 items-center w-10/12 rounded-md shadow-lg ">
            <div className="flex lg:w-full items-center flex-wrap mx-3 p-2 justify-center">
              <div className="w-full z-20 lg:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  From
                </label>
                <SearchBox />
              </div>
              <div className="w-full z-10 lg:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  From
                </label>
                <SearchBox />
              </div>
              <div className="w-full lg:w-1/4 px-2 mb-6 md:mb-0">
                <DatePicker />
              </div>
              <button className="bg-red-400 hover:bg-red-500 text-white w-full lg:max-w-max font-bold py-2 px-4 rounded-full">
                Find Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex lg:flex-col lg:items-center section2 h-screen bg-white">
        <div className="divide-y-4 text-3xl font-bold text-center pt-5">
          <h1 className="">Get your ticket <span className="text-red-400">fast</span> and <span className="text-red-400">anywhere</span>.</h1>
        </div>
        <hr class="my-8 w-1/2 justify-center h-px bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-col">
          <img className="w-2/12" src={Traveler} alt="" />
          <span className="text-xl font-bold font-serif text-black">Book your bus ticket easily</span>
          {/* <p>Supr@Tours allow you to search and book your bus ticket easily from your home.</p> */}
        </div>
        {/* <div className="space-y-6 w-full my-5 flex flex-col items-center lg:flex lg:flex-row lg:w-full lg:justify-center lg:space-x-8 lg:items-center lg:pt-5">
          <Card src={Traveler} />
          <Card src={Support} />
          <Card src={Map} />
        </div> */}
      </div>
    </>
  );
};

export default Home;
