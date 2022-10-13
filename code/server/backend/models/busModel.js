const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
  {
    busName: {
      type: String,
      required: [true, "Please enter the bus name"],
    },
    NumberOfSeats: {
      type: Number,
      required: [true, "Please enter number of seats"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Bus", busSchema)
