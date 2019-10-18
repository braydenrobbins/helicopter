const mongoose = require("mongoose");

const HelicopterSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true,
    unique: true
  },
  capWeight: {
    type: Number
  },
  crewMax: {
    type: Number,
    required: true
  },
  crewMin: {
    type: Number,
    required: true
  },
  fuseLength: {
    type: Number,
    required: true
  },
  heliHeight: {
    type: Number,
    required: true
  },
  rotorDiam: {
    type: Number,
    required: true
  },
  maxSpeed: {
    type: Number,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("helicopter", HelicopterSchema);
