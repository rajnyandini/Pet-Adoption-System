const express = require('express');
const router = express.Router();
const Adopter = require('../models/adopter');

router.post('/', async (req, res) => {
  const adopter = new Adopter(req.body);
  await adopter.save();
  res.send(adopter);
});

router.get('/', async (req, res) => {
  const adopters = await Adopter.find();
  res.send(adopters);
});

module.exports = router;
