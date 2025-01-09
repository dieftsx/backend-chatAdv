const mongoose = require("mongoose");

const LawSchema = new mongoose.Schema({
  title: String,
  content: String,
  updatedAt: Date,
});

const Law = mongoose.model("Law", LawSchema);
module.exports = Law;
