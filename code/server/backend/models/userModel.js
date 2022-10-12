const mongoose = require("mongoose");

// i have an error message show when i try to register new user 
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please add your last name"],
    },
    email: {
      type: String,
      required: [true, "Please add your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add your password"],
    },
    age: {
      type: String,
      required: [true, "Please select your age"],
    },
    address: {
      type: String,
    },
    city: {
      type: String,
      required: [true, "Please select your city"],
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
