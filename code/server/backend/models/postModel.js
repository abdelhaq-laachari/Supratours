const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: [true, "This field is required"],
};

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: reqString,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Post", postSchema);
