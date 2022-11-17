import React, { useEffect } from "react";
import { MdAir } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { IoTvSharp } from "react-icons/io5";
import { GiCharging } from "react-icons/gi";
import { FaLuggageCart } from "react-icons/fa";
import Seats1 from "../../assets/bus/seats1.jpg";
import Seats2 from "../../assets/bus/seats2.jpg";
import Seats3 from "../../assets/bus/seats3.jpg";
import Ctm1 from "../../assets/bus/ctm1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/auth/authSlice";
import { getTripById } from "../../features/trips/tripSlice";

SwiperCore.use([Autoplay]);

const BusInfo = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const idTrip = localStorage.getItem("idTrip");
  const { trips, isSuccess } = useSelector((state) => state.trip);
  useEffect(() => {
    dispatch(getTripById(idTrip));
  }, []);
  if (isSuccess) {
    dispatch(reset());
  }
  return (
    <>
      {trips?.map((trip) => (
        <div
          key={trip._id}
          className="flex flex-col space-y-6 px-5 pb-3 mb-4 w-3/5 min-h-screen bg-[#F8F8F8] rounded-sm shadow-lg"
        >
          <div className="space-x-1 ">
            <span className="text-md font-medium text-gray-900 dark:text-white">
              From
              <span className="text-xl font-semibold text-orange-400 ">
                {" "}
                {trip.startPoint}
              </span>
            </span>
            <span className="text-md font-medium text-gray-900 dark:text-white">
              To
              <span className="text-xl font-semibold text-orange-400 ">
                {" "}
                {trip.endPoint}
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
                <img src={Ctm1} alt="image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Seats1} alt="image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Seats2} alt="image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Seats3} alt="image" />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* line */}
          <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex flex-col space-y-5">
            <span className="text-2xl font-bold">Bus Features</span>
            <div className="flex space-x-2">
              <MdAir size={25} className=" text-gray-500 " />
              <AiOutlineWifi size={25} className=" text-gray-500 " />
              <IoTvSharp size={25} className=" text-gray-500 " />
              <GiCharging size={25} className=" text-gray-500 " />
              <FaLuggageCart size={25} className=" text-gray-500 " />
            </div>
          </div>
          {/* line */}
          <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div>
            <span className="text-2xl font-bold">Schedule and stations</span>
            <p className="text-md text-gray-500 dark:text-gray-400">
              This ride takes {trip.tripDuration}. <br /> It departs from
              Safi at 8:00 AM and arrives at Casablanca at 12:45 . The bus
              stops at 3 stations along the way.
            </p>
            <div className="container">
              <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                {/* <!-- left --> */}
                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-semibold text-lg mb-1">
                      {trip.startPoint}
                    </h3>
                    <p className="leading-tight text-justify">
                      Departs from Safi at {trip.startTime}
                    </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                  </div>
                </div>
                {/* <!-- right --> */}
                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                  </div>
                  <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                    <h3 className="font-semibold text-lg mb-1">El jadida</h3>
                    <p className="leading-tight text-justify">
                      Arrives at El jadida at 10:00 . <br /> Departs from El
                      jadida at 10:30 .
                    </p>
                  </div>
                </div>
                {/* <!-- left --> */}
                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-semibold text-lg mb-1">
                      {trip.endPoint}
                    </h3>
                    <p className="leading-tight text-justify">
                      Arrives at Casablanca at {trip.endTime} . <br />
                    </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                  </div>
                </div>
                {/* <!-- right --> */}
                {/* <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                  </div>
                  <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                    <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p className="leading-tight text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, facilis.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* line */}
          <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div>
            <span className="text-2xl font-bold">About the operator</span>
            <p className="text-md text-gray-500 dark:text-gray-400">
              This ride is operated by <span className="font-bold">CTM</span>.
              <br /> Compagnie de Transports au Maroc is a transport company in
              Morocco. It was established in November 1919 and is thus the
              oldest Moroccan public transport company
            </p>
          </div>
          <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
      ))}
    </>
  );
};

export default BusInfo;
