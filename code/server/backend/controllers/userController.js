const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const Trip = require("../models/tripModel");
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
      _id: user.id,
      firstName: user.firstName,
      email: user.email,
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
  const userPassword = await bcrypt.compare(password, user.password);

  if (user && userPassword) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      email: user.email,
      Token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Incorrect email or password");
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
    startPoint: startPoint.charAt(0).toUpperCase() + startPoint.slice(1).toLowerCase(),
    endPoint:endPoint.charAt(0).toUpperCase() + endPoint.slice(1).toLowerCase(),
    startDate,
  }).populate('bus');

  if (trip) {
    res.status(201).json(trip);
  } else {
    res.status(400);
    throw new Error("There is no trip available");
  }
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
  generateToken,
};
