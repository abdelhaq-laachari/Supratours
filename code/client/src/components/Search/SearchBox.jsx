import React from "react";
import AsyncSelect from "react-select/async";

const SearchBox = () => {
  const { cities } = require("morocco-cities"); // Import cities from morocco-cities package
  const newCities = JSON.parse(JSON.stringify(cities)); // Convert cities to JSON format to be able to use it in the component
  // Create a new array of objects with the name and value of each city
  const city = newCities.map(function (item) {
    return { name: item.name, label: item.name };
  });
  // handleInputChange function to get the value of the input
  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };
  // LoadOptions function to get the value of the input and filter the cities 
  const loadCities = (searchValue, callback) => {
    setTimeout(() => {
      const filteredCities = city.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      console.log("loadCities", searchValue, filteredCities);
      callback(filteredCities);
    }, 200);
  };

  return (
    <div>
      <AsyncSelect
        loadOptions={loadCities}
        defaultOptions={city}
        isClearable
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
