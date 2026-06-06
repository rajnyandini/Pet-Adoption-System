<<<<<<< HEAD
const mongoose = require('mongoose');

const adopterSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('Adopter', adopterSchema);
=======
const mongoose = require('mongoose');

const adopterSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('Adopter', adopterSchema);
>>>>>>> 27b7249aade7708c1921a3caf6767db29707c3f2
