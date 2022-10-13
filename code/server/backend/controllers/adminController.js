const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
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

// @desc    Update admin information
// @route   POST /admin/update
// @access  Private

const updateProfile = asyncHandler(async (req, res) => {
    const adminId = req.admin.id
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

// @desc    Get admin information
// @route   GET /admin/get
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
  generateToken,
};
