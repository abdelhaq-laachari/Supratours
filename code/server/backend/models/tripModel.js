const mongoose = require("mongoose");
const { reqString, reqNumber } = require("../helpers/required/required");

const stationSchema = mongoose.Schema({
  nameStation: reqString,
  arrivalDate: reqString,
  breakTime: reqNumber,
});

// trip schema
const tripSchema = mongoose.Schema(
  {
    startPoint: reqString,
    endPoint: reqString,
    startDate: reqString,
    endDate: reqString,
    startTime: reqString,
    endTime: reqString,
    price: reqNumber,
    tripDuration: {
      type: String,
    },
    station: [stationSchema],
    status: {
      type: Boolean
    },
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
