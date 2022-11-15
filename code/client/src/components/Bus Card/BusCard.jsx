import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Ctm from "../../assets/bus/ctm1.jpg";
import { BiBus } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import NewCard from "./new";
import { searchTrip } from "../../features/trips/tripSlice";

const BusCard = () => {
  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state.trip);
  const formData = JSON.parse(localStorage.getItem("formData"));
  useEffect(() => {
    dispatch(searchTrip(formData));
  }, []);

  return (
    <>
      {trips?.map((trip) => (
        <div key={trip._id} className="flex w-3/4 justify-center p-3">
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
                    <AiOutlineClockCircle /> <span className="pl-2"> {trip.tripDuration} </span>
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
                <h1 className="md:hidden text-xl text-orange-400">80DH</h1>
              </div>
              {/* <NewCard /> */}
            </div>
            <div className="hidden md:flex w-40 md:justify-center md:items-center">
              <h1 className="text-3xl text-orange-400">80DH</h1>
            </div>
          </div>
        </div>
      ))}
      {/* <NewCard /> */}
    </>
  );
};

export default BusCard;
