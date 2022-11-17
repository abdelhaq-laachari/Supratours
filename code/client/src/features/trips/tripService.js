import axios from "axios";

// Search for trips
const searchTrips = async (tripData) => {
  localStorage.setItem("formData", JSON.stringify(tripData))
  const response = await axios.post("user/searchTrip", tripData);
  // if (response.data) {
  //   localStorage.setItem("trips", JSON.stringify(response.data));
  // }
  return response.data;
};

// get trip by id
const getTripById = async (id) => {
  const response = await axios.get(`user/getTripById/${id}`);
  return response.data;
};


const tripService = {
  searchTrips,
  getTripById,
};

export default tripService;
