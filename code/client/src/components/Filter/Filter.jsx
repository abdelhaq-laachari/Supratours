import React from "react";
import { MdAir, MdMeetingRoom } from "react-icons/md";
import { AiOutlineMedicineBox, AiOutlineWifi } from "react-icons/ai";
import { IoTvSharp } from "react-icons/io5";
import { GiCharging } from "react-icons/gi";
import { FaLuggageCart } from "react-icons/fa";
import { BsLamp } from "react-icons/bs";

const Filter = () => {
  return (
    <div class="w-full bg-white p-2 rounded-lg shadow dark:bg-gray-700">
      <div className="flex w-full justify-between px-3">
        <span className="text-lg font-bold">Filter</span>
        <span className="text-lg font-bold text-blue-500">Reset</span>
      </div>
      <hr className="my-4 w-full justify-center h-px bg-gray-300 border-0 "></hr>
      <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
        Operators
      </h6>
      <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            CTM
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            ONCF
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            LIBRA TOURS
          </label>
        </li>
      </ul>
      <hr className="my-4 w-full justify-center h-px bg-gray-300 border-0 "></hr>
      <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
        TIME OF DEPARTURE
      </h6>
      <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Morning (00-11)
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Midday (11-15)
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Evening (15-00)
          </label>
        </li>
      </ul>
      <hr className="my-4 w-full justify-center h-px bg-gray-300 border-0 "></hr>
      <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
        AMENITIES
      </h6>
      <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 flex items-center gap-x-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            <IoTvSharp className="text-red-500" /> TV
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 flex items-center gap-x-2  text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            <MdAir className="text-red-500" /> Air conditioning
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 flex items-center gap-x-2  text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            <AiOutlineMedicineBox className="text-red-500" /> Pharmacy box
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 flex items-center gap-x-2  text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            <BsLamp className="text-red-500" /> Individual lamp
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 flex items-center gap-x-2  text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            <MdMeetingRoom className="text-red-500" /> Waiting Room
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 flex items-center gap-x-2  text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            <FaLuggageCart className="text-red-500" /> Luggage Services
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 flex items-center gap-x-2  text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            <AiOutlineWifi className="text-red-500" /> WIFI
          </label>
        </li>
        <li class="flex items-center">
          <input
            id="apple"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />

          <label
            for="apple"
            class="ml-2 flex items-center gap-x-2  text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            <GiCharging className="text-red-500" /> USB charger
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
