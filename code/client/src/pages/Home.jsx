import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Background from "../components/Video/Background";
import "../styles/Home.css";
import Card from "../components/Cards/Card";
import Image1 from "../assets/svg/image1.svg";
import Image2 from "../assets/svg/image2.svg";
import Image3 from "../assets/svg/image3.svg";
import MuiCard from "../components/Cards/MuiCard";
import Mar from "../assets/img/mar.jpg";
import Casa from "../assets/img/casa.jpg";
import Rabat from "../assets/img/rab2.jpg";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/Search Form/SearchForm";

const Home = () => {
  return (
    <>
      <Background />
      <section className="section1">
        <div className="main">
          <NavBar />
          <h1 className="absolute md:top-60 top-52 text-center text-2xl md:text-center text-white md:text-3xl">
            Join{" "}
            <span className="md:text-3xl font-serif bold text-red-300 ">
              Supr@tours
            </span>{" "}
            to explore the best locations in{" "}
            <span className="md:text-3xl font-serif bold text-red-300 ">
              Morocco
            </span>
            .
          </h1>
          <SearchForm/>
        </div>
      </section>
      <section className="flex flex-col bg-gray-50 items-center md:pt-7 md:space-y-8 md:h-screen ">
        <div className="divide-y-4 text-3xl text-black font-bold text-center pt-5">
          <h1 className="">
            Get your ticket <span className="text-red-400">fast</span> and{" "}
            <span className="text-red-400">anywhere</span>.
          </h1>
        </div>
        <hr className="my-8 w-1/2 justify-center h-px bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <p className="text-center text-base md:text-xl font-medium ">
          You can search all of Morocco's destinations with Supr@Tours <br />
          thanks to its more than 100 trips, <br /> so you'll never get lost.
        </p>
        <div className="flex flex-col w-11/12 md:flex-row md:justify-center md:space-x-6">
          <Card src={Image1} msg="Book your bus ticket easily" />
          <Card src={Image2} msg="Find your next destination" />
          <Card src={Image3} msg="We're here for you 24/7" />
        </div>
        <div className="flex flex-col items-center p-6">
          <h1 className="text-2xl font-semibold md:mt-8 md:text-3xl ">
            Our most popular routes
          </h1>
          <p className="font-thin text-center md:text-xl md:mt-5">
            Visit our most popular route by booking your ticket online with{" "}
            <span className="md:text-xl font-serif bold text-red-300 ">
              Supr@tours
            </span>
          </p>
        </div>
      </section>
      <section className="py-3 md:h-screen px-6 bg-slate-100">
        <div className="w-full flex flex-col items-center space-y-8 md:h-screen md:space-y-0 md:flex-row md:w-full md:justify-around md:items-center ">
          <MuiCard
            src={Mar}
            city="Marrakech"
            about="Marrakesh, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire."
          />
          <MuiCard
            src={Rabat}
            city="Rabat"
            about="Rabat, Morocco's capital, rests along the shores of the Bouregreg River and the Atlantic Ocean. It's known for landmarks that speak to its Islamic and French-colonial heritage, including the Kasbah of the Udayas"
          />
          <MuiCard
            src={Casa}
            city="Casablanca"
            about="Casablanca is a port city and commercial hub in western Morocco, fronting the Atlantic Ocean. The city's French colonial legacy is seen in its downtown Mauresque architecture, a blend of Moorish style and European art deco"
          />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
