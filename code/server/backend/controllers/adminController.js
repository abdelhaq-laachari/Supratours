const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const Bus = require("../models/busModel");
const Trip = require("../models/tripModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register a new admin
// @route   POST /admin/register
// @access  Public

const registerAdmin = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //   check if any of the fields are empty
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //   check if the admin already exists

  const userExists = await Admin.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create admin
  const admin = await Admin.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  //   if admin created send success message
  if (admin) {
    res.status(201).json({
      _id: admin.id,
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Incorrect email or password");
  }
});

// @desc    Login admin
// @route   POST /admin/login
// @access  Public

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check for admin email
  const admin = await Admin.findOne({ email });
  const adminPassword = await bcrypt.compare(password, admin.password);

  if (admin && adminPassword) {
    res.status(201).json({
      _id: admin.id,
      firstName: admin.firstName,
      email: admin.email,
      Token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Incorrect email or password");
  }
});

// @desc    Get admin information
// @route   GET /admin/getMe
// @access  Private

const getAdmin = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, _id } = await Admin.findById(
    req.admin.id
  );

  res.status(200).json({
    id: _id,
    firstName,
    lastName,
    email,
  });
});

// @desc    Update admin information
// @route   PUT /admin/updateMe
// @access  Private

const updateProfile = asyncHandler(async (req, res) => {
  const adminId = req.admin.id;
  const admin = await Admin.findById(adminId);

  if (!admin) {
    res.status(404);
    throw new Error("Admin not found");
  }
  const updateProfile = await Admin.findByIdAndUpdate(req.admin.id, req.body, {
    new: true,
  });
  res.status(200).json(updateProfile);
});

// @desc    Add buses
// @route   POST /admin/addBus
// @access  Private

const addBus = asyncHandler(async (req, res) => {
  const { busName, numberOfSeats } = req.body;

  // check if any of the fields are empty
  if (!busName || !numberOfSeats) {
    res.status(400);
    throw new Error("Please fill in all field");
  }

  // create bus
  const bus = await Bus.create({
    busName,
    numberOfSeats,
  });

  // if bus crated send a success message
  if (bus) {
    res.status(201).json({
      _id: bus.id,
      busName: bus.busName,
      numberOfSeats: bus.numberOfSeats,
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

// @desc    get buses
// @route   GET /admin/buses
// @access  Private

const getBuses = asyncHandler(async (req, res) => {
  const buses = await Bus.find();
  res.status(200).json(buses);
});

// @desc    get bus by id
// @route   GET /admin/bus/:id
// @access  Private

const getBus = asyncHandler(async (req, res) => {
  const bus = await Bus.findById(req.params.id);

  if (!bus) {
    res.status(404);
    throw new Error("Bus not found");
  }
  res.status(200).json(bus);
});

// @desc    Update bus information
// @route   PUT /admin/updateBus/:id
// @access  Private

const updateBus = asyncHandler(async (req, res) => {
  const bus = await Bus.findById(req.params.id);

  if (!bus) {
    res.status(404);
    throw new Error("Bus not found");
  }

  // update bus
  const updateBus = await Bus.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateBus);
});

// @desc    Delete bus
// @route   DELETE /admin/deleteBus/:id
// @access  Private

const deleteBus = asyncHandler(async (req, res) => {
  const bus = await Bus.findById(req.params.id);

  if (!bus) {
    res.status(404);
    throw new Error("Bus not found");
  }
  await bus.remove();
  res.status(200).json({ message: `Bus has been deleted` });
});

// @desc    Add trips
// @route   POST /admin/addTrip
// @access  Private
const addTrip = asyncHandler(async (req, res) => {
  const {
    startPoint,
    endPoint,
    startDate,
    endDate,
    price,
    station,
    bus,
  } = req.body;

  // check if any of the fields are empty
  if (
    !startPoint ||
    !endPoint ||
    !startDate ||
    !endDate ||
    !price ||
    !bus
  ) {
    res.status(400);
    throw new Error("Please fill in all field");
  }

  // create bus
  const trip = await Trip.create({
    startPoint,
    endPoint,
    startDate,
    endDate,
    price,
    station,
    bus,
  });

  // if bus crated send a success message
  if (trip) {
    res.status(201).json({
      _id: trip.id,
      startPoint: trip.startPoint,
      endPoint: trip.endPoint,
      startDate: trip.startDate,
      endDate: trip.endDate,
      price: trip.price,
      station: trip.station,
      bus: trip.bus,
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});


// @desc    Update trips
// @route   POST /admin/updateTrip
// @access  Private

const updateTrip = asyncHandler(async (req, res) => {
  const tripId = req.params.id;
  const trip = await Trip.findById(tripId);

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }
  const updateTrip = await Trip.findByIdAndUpdate(tripId, req.body, {
    new: true,
  });
  res.status(200).json(updateTrip);
});

// @desc    Generate token for admin

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdmin,
  updateProfile,
  addBus,
  getBuses,
  getBus,
  updateBus,
  deleteBus,
  addTrip,
  updateTrip,
  generateToken,
};
