import React from "react";
import Ctm from "../../assets/bus/ctm1.jpg";
import { BiBus } from "react-icons/bi";
import {AiOutlineClockCircle} from "react-icons/ai"
import NewCard from "./new";

const BusCard = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
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
            {/* <div>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <BiBus
                      className="text-blue-600 dark:text-blue-400"
                      size={15}
                    />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    From Safi
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      Latest
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Departure time, 08:15
                  </time>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <BiBus
                      className="text-blue-600 dark:text-blue-400"
                      size={15}
                    />
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    El jadida
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Break time (20 minutes), 10:15
                  </time>
                </li>
                <li className="ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <BiBus
                      className="text-blue-600 dark:text-blue-400"
                      size={15}
                    />
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    To Casablanca
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Arrival date, 14:15
                  </time>
                </li>
              </ol>
            </div> */}
            {/* tt */}
            <div>
              <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <BiBus
                        className="text-blue-600 dark:text-blue-400"
                        size={15}
                      />
                    </span>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Safi
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Departure time, 08:15
                    </time>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-blue-600 dark:text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      
                    </h3>
                    <time className="flex mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      <AiOutlineClockCircle/>, 6h
                    </time>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <BiBus
                        className="text-blue-600 dark:text-blue-400"
                        size={15}
                      />
                    </span>
                    {/* <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div> */}
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Casablanca
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Arrival time, 13:15
                    </time>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <NewCard/>
    </>
  );
};

export default BusCard;
