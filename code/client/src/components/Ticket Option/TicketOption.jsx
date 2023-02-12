import React, { useEffect } from "react";

const TicketOption = ({ startTime, startDay, price }) => {
  const [value, setValue] = React.useState(1);
  const stepUp = () => {
    const input = document.querySelector("input[type=number]");
    input.stepUp();
    setValue(input.value);
  };

  const stepDown = () => {
    const input = document.querySelector("input[type=number]");
    input.stepDown();
    setValue(input.value);
  };

  const getValue = () => {
    setValue(document.querySelector("input[type=number]").value);
  };
  let total = value * price;
  console.log(total);

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-3">
      <span className="text-2xl font-bold my-3">Your ticket options</span>
      <div className="flex justify-between">
        <span className="text-xl font-bold py-3">Leaving Time</span>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-lg">{startTime}</span>
          <span className="font-semibold text-lg">-</span>
          <span className="font-semibold text-lg">{startDay}</span>
        </div>
      </div>
      <div className="flex my-3 justify-between items-center text-xl font-bold">
        <span>Company</span>
        <span>CTM</span>
      </div>
      <span className="text-xl font-bold my-3">Number Of Seats</span>
      <div className="flex justify-center items-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={stepDown}
        >
          -
        </button>
        <input
          type="number"
          className="border border-gray-400 px-4 py-2 mx-2 rounded-lg"
          step="1"
          min="1"
          value={value}
          readOnly
          onChange={getValue}
        />
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={stepUp}
        >
          +
        </button>
      </div>
      <div className="flex my-3 justify-between items-center text-xl font-bold">
        <span>Total</span>
        <span className="text-blue-500">{total} DH</span>
      </div>
      <button className="bg-blue-500 rounded-lg py-3 my-3">
        <span className="text-white font-bold text-xl">Book Now</span>
      </button>
    </div>
  );
};

export default TicketOption;
