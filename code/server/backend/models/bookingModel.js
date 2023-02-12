const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Trip",
    },
    numberOfSeats: {
      type: Number,
      required: true,
    },
  }
);

module.exports = mongoose.model("Booking",bookingSchema)