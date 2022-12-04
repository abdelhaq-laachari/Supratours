import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Ctm from "../../assets/bus/ctm1.jpg";
import { BiBus } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import NewCard from "./new";
import {
  reset,
  resetSuccess, 
  searchTrip,
} from "../../features/trips/tripSlice";
import { useNavigate } from "react-router-dom";

const BusCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const idTrip = localStorage.getItem("idTrip");
  const { trips, isSuccess } = useSelector((state) => state.trip);
  const formData = JSON.parse(localStorage.getItem("formData"));
  useEffect(() => {
    dispatch(searchTrip(formData));
  }, []);
  if (isSuccess) {
    dispatch(resetSuccess());
  }
  // store trip id in local storage after clicking on book button
  const storeId = (id) => {
    // clear local storage
    localStorage.removeItem("idTrip");
    // set id trip local storage
    localStorage.setItem("idTrip", id);
    // navigate to login page
    if (!user) {
      navigate("/signIn");
    }
    if (idTrip) {
      navigate("/booking");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {trips?.map((trip) => (
        <div key={trip._id} className="flex md:w-3/4 justify-center p-3">
          <div className="flex flex-col md:flex-row md:w-max rounded-lg bg-white shadow-lg">
            <img
              className="w-full h-52 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={Ctm}
              alt=""
            />
            <div className="p-3 flex flex-col justify-start bg-slate-50 relative md:p-6">
              <div className="flex items-center space-x-2">
                <BiBus size={30} />
                <h5 className="text-black text-xl font-semibold">
                  CTM Company
                </h5>
              </div>
              <div className="flex items-center space-x-4 my-3 justify-between">
                <div className="flex flex-col items-center justify-center">
                  <time className="text-center text-md md:text-lg font-semibold text-gray-900 dark:text-white">
                    {trip.startTime}
                  </time>
                  <span className="text-center mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {trip.startPoint} Station.
                  </span>
                </div>
                <div className="flex w-10 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                <div className="flex items-center">
                  <time className="flex text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    <AiOutlineClockCircle />{" "}
                    <span className="pl-2"> {trip.tripDuration} </span>
                  </time>
                </div>
                <div className="flex w-10 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                <div className="flex flex-col items-center justify-center">
                  <time className="text-center text-md md:text-lg font-semibold text-gray-900 dark:text-white">
                    {trip.endTime}
                  </time>
                  <span className="text-center mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {trip.endPoint} Station.
                  </span>
                </div>
              </div>
              {/* <NewCard /> */}
            </div>
            <div className="hidden w-40  md:flex md:flex-col md:justify-between md:items-center ">
              <h1 className="text-3xl h-1/2 w-full flex justify-center items-end text-orange-400">
                80DH
              </h1>
              <button
                className="hover:bg-orange-500 bg-orange-400 text-white text-sm px-3 py-3 w-full"
                onClick={() => {
                  storeId(trip._id);
                }}
              >
                Book Now
              </button>
            </div>
            <div className="md:hidden w-full p-3 flex ">
              <h1 className="text-2xl ml-8 w-full flex items-center text-orange-400">
                80DH
              </h1>
              <button
                className="hover:bg-orange-500 bg-orange-400 text-white rounded text-sm py-2 w-full"
                onClick={() => {
                  storeId(trip._id);
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* <NewCard /> */}
    </>
  );
};

export default BusCard;
