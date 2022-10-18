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

module.exports = {
  reqString,
  reqDate,
  reqNumber,
};