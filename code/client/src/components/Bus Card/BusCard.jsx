import React from "react";
import Ctm from "../../assets/bus/ctm1.jpg";
import { BiBus } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import NewCard from "./new";

const BusCard = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:w-max rounded-lg bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={Ctm}
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <div className="flex items-center space-x-2">
              <BiBus size={30} />
              <h5 className="text-black text-xl font-semibold">CTM Company</h5>
            </div>
            <div className="flex items-center space-x-4 my-3">
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  08:15
                </h3>
                <time className="block  text-sm font-normal  leading-none text-gray-400 dark:text-gray-500">
                  Safi Station.
                </time>
              </div>
              <div className="hidden sm:flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              <div className="flex items-center">
                <time className="flex text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  <AiOutlineClockCircle /> <span className="pl-2">6h</span>
                </time>
              </div>
              <div className="hidden sm:flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              <div className="flex flex-col items-center ">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  13:15
                </h3>
                <time className="block text-sm font-normal  leading-none text-gray-400 dark:text-gray-500">
                  Casablanca Station.
                </time>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-4"></div>
          </div>
          <div className="flex w-40 justify-center items-center">
            <h1 className="text-3xl text-orange-400">80DH</h1>
          </div>
        </div>
      </div>
      {/* <NewCard /> */}
    </>
  );
};

export default BusCard;
