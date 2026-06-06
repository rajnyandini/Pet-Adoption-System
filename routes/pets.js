<<<<<<< HEAD
const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

// Route to add a pet
router.post('/', async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to view all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
=======
const express = require('express');
const Pet = require('../models/pet');

const router = express.Router();

// Route to add a pet
router.post('/', async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to view all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
>>>>>>> 27b7249aade7708c1921a3caf6767db29707c3f2
