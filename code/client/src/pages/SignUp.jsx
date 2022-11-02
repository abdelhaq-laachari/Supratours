import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import '../styles/SignUp.css'

const SignUp = () => {
  return (
    <>
      <div className="section1 flex justify-center md:h-screen w-full bg-slate-800">
        <section className="w-full dark:bg-gray-900 ">
          <div className="w-full flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:w-1/2 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create your account
                </h1>
                <form className="space-y-4 md:space-y-2" >
                  <div className="flex flex-col w-full  md:space-x-4 md:flex-row">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Alex"
                        required=""
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Parker"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:space-x-4 md:flex-row">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:space-x-4 md:flex-row">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address line
                      </label>
                      <input
                        type="address"
                        name="address"
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="5357 Layla Passage"
                        required=""
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </label>
                      <input
                        type="city"
                        name="city"
                        id="city"
                        placeholder="London"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:space-x-4 md:flex-row">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address line
                      </label>
                      <input
                        type="address"
                        name="address"
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="5357 Layla Passage"
                        required=""
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </label>
                      <input
                        type="city"
                        name="city"
                        id="city"
                        placeholder="London"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between"></div>
                  <button
                    type="submit"
                    className="w-full text-white border bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign up
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    You already have an account?{" "}
                    <Link to="/signIn" element={<SignIn />}>
                      <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Sign in
                      </span>
                    </Link>
                  </p>
                  <Link to="/" element={<Home />}>
                    <span className="font-medium text-center text-primary-600  hover:underline dark:text-primary-500">
                      Go Home
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
