import React from "react";
import Ctm from "../../assets/bus/ctm1.jpg";
import { BiBus } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";

const newCard = () => {
  return (
    <>
      <div className="flex justify-between border-x w-2/3 bg-slate-3 rounded-lg bg-white shadow-lg">
        <div className="w-20">
          <img
            className="w-full md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={Ctm}
            alt=""
          />
        </div>
        <div className="flex flex-col p-2">
          <div className="flex px-1 items-center space-x-2 rounded-sm  ">
            <BiBus size={22} />
            <span className="text-black text-xl font-semibold">
              CTM Company
            </span>
          </div>
          <div className="flex items-center w-full">
            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                08:15
              </h3>
              <div className="hidden sm:flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              <div className="flex items-center">
                <time className="flex text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  <AiOutlineClockCircle /> <span className="pl-2">6h</span>
                </time>
              </div>
              <div className="hidden sm:flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                13:15
              </h3>
            </div>
            {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Safi Station.
              </time> */}
            <div>

            </div>
          </div>
          <div></div>
        </div>
        <div>
            ffff
        </div>
      </div>
    </>
  );
};

export default newCard;
