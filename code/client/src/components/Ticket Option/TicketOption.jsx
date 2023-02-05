import React from "react";

const TicketOption = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-3">
      <span className="text-2xl font-bold my-3">Your ticket options</span>
      <div className="flex justify-between">
        <span className="text-xl font-bold py-3">Leaving Time</span>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-lg">08:15</span>
          <span className="font-semibold text-lg">-</span>
          <span className="font-semibold text-lg">07/02/2023</span>
        </div>
      </div>
      <div className="flex my-3 justify-between items-center text-xl font-bold">
        <span>Company</span>
        <span>CTM</span>
      </div>
      <div className="flex my-3 justify-between items-center text-xl font-bold">
        <span>Total</span>
        <span className="text-blue-500">120 DH</span>
      </div>
      <button className="bg-blue-500 rounded-lg py-3 my-3">
        <span className="text-white font-bold text-xl">Book Now</span>
      </button>
    </div>
  );
};

export default TicketOption;
