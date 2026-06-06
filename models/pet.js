<<<<<<< HEAD
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  breed: String,
  adopted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pet', petSchema);
=======
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
  breed: String,
  adopted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pet', petSchema);
>>>>>>> 27b7249aade7708c1921a3caf6767db29707c3f2
