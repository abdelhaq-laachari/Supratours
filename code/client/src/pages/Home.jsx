import React from "react";
import NavBar from "../components/navBar/NavBar";
import SearchBox from "../components/Search/SearchBox";
import Background from "../components/video/Background";
import DatePicker from "../components/datePicker/datePicker";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <Background />
      <div className="main">
        <NavBar />
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                From
              </label>
              <SearchBox/>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                From
              </label>
              <SearchBox/>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <DatePicker/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
