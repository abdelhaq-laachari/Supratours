import React from "react";
import Collapsible from "react-collapsible";
import { IoIosArrowDropdown } from "react-icons/io";

const Card = () => {
  return (
    <div className="flex items-end">
      <Collapsible trigger={<IoIosArrowDropdown size={20} />}>
        <div className="flex justify-end items-end">
          <div className="flex items-center space-x-4 my-3 justify-between">
            <div className="flex flex-col items-center justify-center">
              <time className="text-center text-md md:text-lg font-semibold text-gray-900 dark:text-white">
                08:15
              </time>
              <span className="text-center mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Safi Station.
              </span>
            </div>
            <div className="flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            <div className="flex flex-col items-center justify-center">
              <time className="text-center text-md md:text-lg font-semibold text-gray-900 dark:text-white">
                11:15
              </time>
              <span className="text-center mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                EL jadida Station.
              </span>
            </div>
            <div className="flex w-20 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            <div className="flex flex-col items-center justify-center">
              <time className="text-center text-md md:text-lg font-semibold text-gray-900 dark:text-white">
                13:15
              </time>
              <span className="text-center mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Casablanca Station.
              </span>
            </div>
          </div>
        </div>
      </Collapsible>
    </div>
  );
};

export default Card;
