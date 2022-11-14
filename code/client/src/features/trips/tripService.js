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

const tripService = {
  searchTrips,
};

export default tripService;
