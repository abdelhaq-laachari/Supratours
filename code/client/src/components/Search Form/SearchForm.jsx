import { useState, useEffect } from "react";
// import AsyncSelect from "react-select/async";
import DatePicker from "../Date Picker/DatePicker";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { searchTrip, reset } from "../../features/trips/tripSlice";
import Spinner from "../Spinner/Spinner";

// Import cities from list-of-moroccan-cities package
const { cities } = require("list-of-moroccan-cities");

const SearchForm = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [date, setDate] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { trips, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.trip
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // if success redirect to result page and return this state to initial state
    if (isSuccess) {
      navigate("/result");
      dispatch(reset());
    }
    dispatch(reset())
  }, [trips, isError, isSuccess, message, navigate, dispatch]);

  // handleInputChange function to get the value of the input
  const handleChange1 = (selectedOption) => {
    if (selectedOption != null) setFrom(selectedOption.name);
  };
  const handleChange2 = (selectedOption) => {
    if (selectedOption != null) setTo(selectedOption.name);
  };

  const searchFunction = (e) => {
    e.preventDefault();
    const formData = {
      startPoint: from,
      endPoint: to,
      startDate: date,
    };
    dispatch(searchTrip(formData));
  };

  // check for loading
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <form
        onSubmit={searchFunction}
        className="absolute md:top-2/4 top-1/3 flex justify-center bg-white p-3 items-center w-10/12 rounded-md shadow-lg "
      >
        <div className="flex md:w-full items-center flex-wrap mx-3 p-2 justify-center">
          <div className="w-full z-20 md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              From
            </label>
            <div>
              <Select
                isClearable
                getOptionValue={(cities) => cities.name}
                options={cities}
                onChange={handleChange1}
              />
            </div>
          </div>
          <div className="w-full z-10 md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              To
            </label>
            <div>
              <Select
                isClearable
                getOptionValue={(cities) => cities.name}
                options={cities}
                onChange={handleChange2}
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
            <DatePicker setDate={setDate} />
          </div>
          <button className="bg-red-400 hover:bg-red-500 text-white w-full font-bold py-2 px-4 rounded-full md:max-w-max">
            Find Ticket
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
