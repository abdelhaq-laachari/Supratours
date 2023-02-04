const mongoose = require("mongoose");
const { reqString } = require("../helpers/required/required");

const featuresSchema = mongoose.Schema({
  featuresName: reqString,
});

const busSchema = mongoose.Schema(
  {
    busName: {
      type: String,
      required: [true, "Please enter the bus name"],
    },
    numberOfSeats: {
      type: Number,
      required: [true, "Please enter number of seats"],
    },
  },
  {
    busFeatures: [featuresSchema],
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Bus", busSchema);
