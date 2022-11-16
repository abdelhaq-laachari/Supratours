import React from "react";
import { MdAir } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { IoTvSharp } from "react-icons/io5";
import { GiCharging } from "react-icons/gi";
import { FaLuggageCart } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay]);
const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
const BusInfo = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 px-3 w-3/5 min-h-screen bg-[#F8F8F8] rounded-sm shadow-sm">
        <div className="space-x-1 ">
          <span className="text-md font-medium text-gray-900 dark:text-white">
            From
            <span className="text-xl font-semibold text-orange-400 ">
              {" "}
              Safi
            </span>
          </span>
          <span className="text-md font-medium text-gray-900 dark:text-white">
            To
            <span className="text-xl font-semibold text-orange-400 ">
              {" "}
              Casablanca
            </span>
          </span>
        </div>
        <div>
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            CTM Company
          </span>
        </div>
        <div className="">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
            }}
          >
            <SwiperSlide>
              <img src={images[0]} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[1]} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[2]} alt="image" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="text-2xl font-bold">Bus Features</span>
          <div className="flex space-x-2">
            <MdAir size={30} className="text-red-500" />
            <AiOutlineWifi size={30} className="text-red-500" />
            <IoTvSharp size={30} className="text-red-500" />
            <GiCharging size={30} className="text-red-500" />
            <FaLuggageCart size={30} className="text-red-500" />
          </div>
        </div>
        <div>
          <span className="text-2xl font-bold">Schedule and stations</span>
          <p className="text-md text-gray-500 dark:text-gray-400">
            This ride takes 4 hours and 45 minutes. <br /> It departs from Safi
            at 8:00 AM and arrives at Casablanca at 12:45 PM. The bus stops at 3
            stations along the way.
          </p>
          <div class="container">
            <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
              {/* <!-- left --> */}
              <div class="flex flex-row-reverse md:contents">
                <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  <h3 class="font-semibold text-lg mb-1">Safi</h3>
                  <p class="leading-tight text-justify">
                    Departs from Safi at 8:00 AM
                  </p>
                </div>
                <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                  </div>
                  <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                </div>
              </div>
              {/* <!-- right --> */}
              <div class="flex md:contents">
                <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                  </div>
                  <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                </div>
                <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                  <h3 class="font-semibold text-lg mb-1">El jadida</h3>
                  <p class="leading-tight text-justify">
                    Arrives at El jadida at 10:00 AM. <br /> Departs from El
                    jadida at 10:30 AM
                  </p>
                </div>
              </div>
              {/* <!-- left --> */}
              <div class="flex flex-row-reverse md:contents">
                <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  <h3 class="font-semibold text-lg mb-1">Casablanca</h3>
                  <p class="leading-tight text-justify">
                    Arrives at Casablanca at 12:45 PM. <br />
                  </p>
                </div>
                <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                  </div>
                  <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                </div>
              </div>
              {/* <!-- right --> */}
              {/* <div class="flex md:contents">
                  <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                    </div>
                    <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                  </div>
                  <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                    <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p class="leading-tight text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, facilis.
                    </p>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
        <div>
          <span
          className="text-2xl font-bold"
          >About the operator</span>
          <p className="text-md text-gray-500 dark:text-gray-400">
            This ride is operated by <span className="font-bold">CTM</span>.
            <br /> Compagnie de Transports au Maroc is a transport company in
            Morocco. It was established in November 1919 and is thus the oldest
            Moroccan public transport company
          </p>
        </div>
      </div>
    </>
  );
};

export default BusInfo;
