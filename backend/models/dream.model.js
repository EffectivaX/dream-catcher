const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dreamSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    theme: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Dream = mongoose.model("Dream", dreamSchema);

module.exports = Dream;
