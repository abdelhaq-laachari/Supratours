import React, {useState} from "react";
import AsyncSelect from "react-select/async";
const { cities } = require("list-of-moroccan-cities"); // Import cities from list-of-moroccan-cities package

const SearchBox = () => {

  const [name, setName] = useState('')
  console.log(name)
  
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
    <div>
      <AsyncSelect
        loadOptions={loadCities}
        defaultOptions={cities}
        isClearable
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
