import React from "react";
import NavBar from "../components/navBar/NavBar";
import SearchBox from "../components/Search/SearchBox";
import Background from "../components/video/Background";
import DatePicker from "../components/datePicker/DatePicker";
import "../styles/Home.css";
import Card2 from "../components/cards/Card2";
import Image1 from "../assets/svg/image1.svg";
import Image2 from "../assets/svg/image2.svg";
import Image3 from "../assets/svg/image3.svg";
import MuiCard from "../components/cards/MuiCard";
import Mar from "../assets/img/mar.jpg"
import Casa from "../assets/img/casa.jpg"
import Rabat from "../assets/img/rab2.jpg"

const Home = () => {
  return (
    <>
      <Background />
      <section className="section1">
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
      </section>
      <section className="flex lg:space-y-8 lg:flex-col lg:pt-7 lg:items-center h-screen bg-gray-50">
        <div className="divide-y-4 text-3xl text-black font-bold text-center pt-5">
          <h1 className="">
            Get your ticket <span className="text-red-400">fast</span> and{" "}
            <span className="text-red-400">anywhere</span>.
          </h1>
        </div>
        <hr class="my-8 w-1/2 justify-center h-px bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <p className="text-center text-xl font-medium ">
          You can search all of Morocco's destinations with Supr@Tours <br />{" "}
          thanks to its more than 100 trips, <br /> so you'll never get lost.
        </p>
        <div className="flex w-11/12 lg:flex-row lg:justify-center lg:space-x-6">
          <Card2 src={Image1} msg="Book your bus ticket easily" />
          <Card2 src={Image2} msg="Find your next destination" />
          <Card2 src={Image3} msg="We're here for you 24/7" />
        </div>
        <div>
          <h1>Our most popular routes</h1>
          <p>Explore </p>
        </div>
      </section>
      <section className="h-screen bg-slate-100">
        <div className="flex lg:flex-row lg:w-full lg:justify-around lg:items-center ">
          <MuiCard src={Mar} />
          <MuiCard src={Casa} />
          <MuiCard src={Rabat} />
        </div>
      </section>
    </>
  );
};

export default Home;
