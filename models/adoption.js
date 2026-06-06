<<<<<<< HEAD
const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
  adopterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Adopter' },
  adoptionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Adoption', adoptionSchema);
=======
const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
  adopterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Adopter' },
  adoptionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Adoption', adoptionSchema);
>>>>>>> 27b7249aade7708c1921a3caf6767db29707c3f2
