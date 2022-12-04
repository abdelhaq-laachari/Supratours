const express = require("express"); // Import express
const router = express.Router(); // Create a router
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
  searchTrip,
  bookingTrip,
  myBooking,
  cancelTrip,
  getTripById,
} = require("../controllers/userController"); // <--- Import the userController

router.route("/register").post(registerUser); // <--- Create a route for the registerUser function
router.route("/login").post(loginUser); // <--- Create a route for the loginUser function
router.route("/me").get(getMe); // <--- Create a route for the getMe function
router.route("/logout").post(logoutUser); // <--- Create a route for the logoutUser function
router.route("/searchTrip").post(searchTrip); // <--- Create a route for the search trip function
router.route("/getTripById/:id").get(getTripById); // <--- Create a route for the search trip function
router.route("/booking/:idUser/:idTrip").post(protect, bookingTrip); // <--- Create a route for the booking trip function
router.route("/myBooking/:id").get(protect, myBooking); // <--- Create a route for the booking trip function
router.route("/cancelTrip/:tripId").delete(protect, cancelTrip); // <--- Create a route for the cancel trip function

module.exports = router;
