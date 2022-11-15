import React from "react";
import { MdAir } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { IoTvSharp } from "react-icons/io5";
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BusInfo;
