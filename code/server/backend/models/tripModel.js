const mongoose = require("mongoose");
const {
  reqString,
  reqDate,
  reqNumber,
} = require("../helpers/required/required");

const stationSchema = mongoose.Schema({
  nameStation: reqString,
  arrivalDate: reqDate,
  breakTime: reqNumber,
});

// trip schema
const tripSchema = mongoose.Schema(
  {
    startPoint: reqString,
    endPoint: reqString,
    startDate: reqDate,
    endDate: reqDate,
    price: reqNumber,
    // availableSeats: reqNumber,
    station: [stationSchema],
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Bus",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trip", tripSchema);
