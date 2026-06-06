const express = require('express');
const router = express.Router();
const Adoption = require('../models/adoption');
const Pet = require('../models/pet');

router.post('/', async (req, res) => {
  const adoption = new Adoption(req.body);
  await adoption.save();

  // Mark pet as adopted
  await Pet.findByIdAndUpdate(req.body.petId, { adopted: true });

  res.send(adoption);
});

router.get('/', async (req, res) => {
  const adoptions = await Adoption.find()
    .populate('petId')
    .populate('adopterId');
  res.send(adoptions);
});

module.exports = router;
