import React from "react";
import AsyncSelect from "react-select/async";

const SearchBox = () => {
  const options = [
    { name: "kamal", label: "kamal" },
    { name: "mohammed", label: "mohammed" },
    { name: "marouan", label: "marouan" },
    { name: "amine", label: "amine" },
    { name: "ayoub", label: "ayoub" },
  ];
  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };
  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options.filter((option) =>
        option.label
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
      console.log('loadOptions', searchValue, filteredOptions)
      callback(filteredOptions)
    }, 200);
  };
  return (
    <div>
      <AsyncSelect loadOptions={loadOptions} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
