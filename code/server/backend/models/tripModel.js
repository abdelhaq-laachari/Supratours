const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: [true, "This field is required"],
};

const reqDate = {
  type: Date,
  required: [true, "This field is required"],
};

const reqNumber = {
  type: Number,
  required: [true, "This field is required"],
};

const stationSchema = mongoose.Schema(
  {
    nameStation: reqString,
    arrivalDate: reqDate,
    break: reqDate,
  },
  {
    timestamps: true,
  }
);

const tripSchema = mongoose.Schema(
  {
    startPoint: reqString,
    endPoint: reqString,
    startDate: reqDate,
    endDate: reqDate,
    price: reqNumber,
    availableSeats: reqNumber,
    station: stationSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trip", tripSchema);
