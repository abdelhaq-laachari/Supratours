import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import DatePicker from '../Date Picker/DatePicker'

// Import cities from list-of-moroccan-cities package
const { cities } = require("list-of-moroccan-cities");


const SearchForm = () => {
  // handleInputChange function to get the value of the input
  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption.name);
  };

  // LoadOptions function to get the value of the input and filter the cities
  const loadCities = (searchValue, callback) => {
    setTimeout(() => {
      const filteredCities = cities.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      console.log("loadCities", searchValue, filteredCities);
      callback(filteredCities);
    }, 200);
  };
  return (
    <>
      <form className="absolute md:top-2/4 top-1/3 flex justify-center bg-white p-3 items-center w-10/12 rounded-md shadow-lg ">
        <div className="flex md:w-full items-center flex-wrap mx-3 p-2 justify-center">
          <div className="w-full z-20 md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              From
            </label>
            <div>
              <AsyncSelect
                loadOptions={loadCities}
                defaultOptions={cities}
                isClearable
                getOptionValue={(cities) => cities.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full z-10 md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              To
            </label>
            <div>
              <AsyncSelect
                loadOptions={loadCities}
                defaultOptions={cities}
                isClearable
                getOptionValue={(cities) => cities.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
            <DatePicker />
          </div>
          <button className="bg-red-400 hover:bg-red-500 text-white w-full font-bold py-2 px-4 rounded-full md:max-w-max">
            Find Ticket
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;