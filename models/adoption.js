const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
  adopterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Adopter' },
  adoptionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Adoption', adoptionSchema);
