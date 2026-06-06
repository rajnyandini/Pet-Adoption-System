const mongoose = require('mongoose');

const adopterSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('Adopter', adopterSchema);
