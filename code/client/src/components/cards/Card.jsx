import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="lg:w-1/4 w-11/12 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="lg:w-4/5 p-8  rounded-t-lg" src={props.src} alt="product image" />
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Book your bus ticket easily
          </h5>
          <p>
            Supr@Tours allow you to search and book your bus ticket easily from
            your home.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-white bg-blue-700 center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
