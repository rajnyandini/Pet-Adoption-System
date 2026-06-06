const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  breed: String,
  adopted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pet', petSchema);
