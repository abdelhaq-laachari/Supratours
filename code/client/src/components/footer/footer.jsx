import React from "react";
import { BsMedium } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Supr@<span className="text-red-400">Tours</span>
            </p>
            <div className="flex gap-6 pb-5">
              <a
                href="https://twitter.com/_Godfather_y"
                rel="noreferrer"
                target="_blank"
              >
                <FaTwitter className="text-2xl cursor-pointer hover:text-red-400" />
              </a>
              <a
                href="https://medium.com/@abdelhaqlaachari"
                rel="noreferrer"
                target="_blank"
              >
                <BsMedium className="text-2xl cursor-pointer  hover:text-red-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdelhaq-laachari"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-2xl cursor-pointer hover:text-red-400" />
              </a>
              <a
                href="https://github.com/abdelhaq-laachari"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithubAlt className="text-2xl cursor-pointer hover:text-red-400" />
              </a>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Get to know us
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-500 cursor-pointer">
              About us
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-500 cursor-pointer">
              What our customers think
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-500 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              We’re here for you
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-500 cursor-pointer">
              Contact us
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-500 cursor-pointer">
              Help center
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Legal</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-500 cursor-pointer">
              Privacy policy
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-500 cursor-pointer">
              Terms and conditions
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2022 All rights reserved
        </h1>
      </div>
    </>
  );
};

export default footer;
