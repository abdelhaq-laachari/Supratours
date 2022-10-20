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
} = require("../controllers/userController"); // <--- Import the userController

router.route("/register").post(registerUser); // <--- Create a route for the registerUser function
router.route("/login").post(loginUser); // <--- Create a route for the loginUser function
router.route("/me").get(protect, getMe); // <--- Create a route for the getMe function
router.route("/logout").post(logoutUser); // <--- Create a route for the logoutUser function
router.route("/searchTrip").post(protect, searchTrip); // <--- Create a route for the search trip function
router.route("/booking/:idUser/:idTrip").post(protect,bookingTrip)

module.exports = router;
