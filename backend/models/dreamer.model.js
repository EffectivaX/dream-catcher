const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dreamerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const Dreamer = mongoose.model("Dreamer", dreamerSchema);

module.exports = Dreamer;
