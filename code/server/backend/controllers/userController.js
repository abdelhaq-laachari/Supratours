const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const Trip = require("../models/tripModel");
const Bus = require("../models/busModel");
const Booking = require("../models/bookingModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register a new user
// @route   POST /users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, age, address, city, phone, email, password } =
    req.body;

  //   check if any of the fields are empty

  if (
    !firstName ||
    !lastName ||
    !age ||
    !city ||
    !phone ||
    !email ||
    !password
  ) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //   check if the user already exists

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //   hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //   create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    age,
    address,
    city,
    phone,
  });

  if (user) {
    res.status(201).json({
      Token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authentication a user
// @route   POST /users/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check for user email
  const user = await User.findOne({ email });
  if (user) {
    // check for password
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.status(201).json({
        user,
        Token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get user data
// @route   GET /users/me
// @access  Private

const getMe = asyncHandler(async (req, res) => {
  const { firstName, email, _id } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    firstName,
    email,
  });
});

// @desc    Logout user
// @route   POST /users/logout
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
  res.json({ message: "User has logged out" });
});

// @desc    Search for trip
// @route   POST /users/SearchTrip
// @access  Private

const searchTrip = asyncHandler(async (req, res) => {
  const { startPoint, endPoint, startDate } = req.body;

  const trip = await Trip.find({
    startPoint:
      startPoint.charAt(0).toUpperCase() + startPoint.slice(1).toLowerCase(),
    endPoint:
      endPoint.charAt(0).toUpperCase() + endPoint.slice(1).toLowerCase(),
    startDate,
  }).populate("bus", "busName numberOfSeats");

  if (trip.length > 0) {
    const numberOfSeats = trip[0].bus.numberOfSeats;
    if (numberOfSeats > 0) {
      res.status(201).json(trip);
    } else {
      res.status(404);
      throw new Error("There is no trip available");
    }
  } else {
    res.status(404);
    throw new Error("There is no trip available");
  }
});

// @desc    Search for trip
// @route   POST /users/SearchTrip
// @access  Private

// get trip by id
// const getTripById = asyncHandler(async (req, res) => {
//   const trip = await Trip.findById(req.params.id).populate(
//     "bus",
//     "busName numberOfSeats"
//   );

//   if (trip) {
//     res.status(201).json(trip);
//   } else {
//     res.status(404);
//     throw new Error("Trip not found");
//   }
// });

const getTripById = asyncHandler(async (req, res) => {
  // const { id } = req.params;

  const trip = await Trip.findById(req.params.id).populate(
    "bus",
    "busName numberOfSeats"
  );
  const numberOfSeats = trip.bus.numberOfSeats;
  if (numberOfSeats > 0) {
    res.status(201).json([trip]);
  } else {
    res.status(404);
    throw new Error("There is no trip available");
  }
});

// @desc    Booking trip
// @route   POST /users/booking
// @access  Private

const bookingTrip = asyncHandler(async (req, res) => {
  const userId = await User.findById(req.params.idUser);
  const tripId = await Trip.findById(req.params.idTrip);

  const bus = await Bus.findById(tripId.bus);
  const numberOfSeats = bus.numberOfSeats;

  if (numberOfSeats > 0) {
    const number = req.body.number;
    if (!userId || !tripId) {
      res.status(404);
      throw new Error("error");
    }

    const ticket = await Booking.create({
      user: req.params.idUser,
      trip: req.params.idTrip,
    });

    if (ticket) {
      // res.status(201).json({ message: "trip book successfully" });

      res.status(201).json(numberOfSeats);
      await Trip.findByIdAndUpdate(tripId, {
        status: 0,
      });
      await Bus.findByIdAndUpdate(tripId.bus, {
        numberOfSeats: numberOfSeats - number,
      });
    } else {
      res.status(400);
      throw new Error("error 2");
    }
  } else {
    res.status(404);
    throw new Error("there is no available seats");
  }
});

// @desc    Display trip that user has book
// @route   GET /users/myBooking
// @access  Private

const myBooking = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    res.status(404);
    throw new Error("there is no user with id");
  }

  const myBookings = await Booking.find().populate({
    path: "trip",
    populate: { path: "bus" },
  });

  if (myBookings) {
    res.status(201).json(myBookings);
  } else {
    res.status(404);
    throw new Error("You have no booking yet");
  }
});

// @desc    Cancel trip
// @route   DELETE /users/cancelTrip
// @access  Private

const cancelTrip = asyncHandler(async (req, res) => {
  const trip = await Booking.findById(req.params.tripId);

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }
  await trip.remove();
  res.status(200).json({ message: `Trip has been deleted` });
});

// @desc    Generate token for user

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
  searchTrip,
  bookingTrip,
  myBooking,
  cancelTrip,
  generateToken,
  getTripById,
};
