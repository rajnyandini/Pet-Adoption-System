<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/petAdoption', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Pet Schema
const petSchema = new mongoose.Schema({
    name: String,
    type: String,
    age: Number,
    breed: String,
    adopted: { type: Boolean, default: false }  // Adoption status
});

const Pet = mongoose.model('Pet', petSchema);

// Adopter Schema (optional, if you want to track adopters separately)
const adopterSchema = new mongoose.Schema({
    name: String,
});

const Adopter = mongoose.model('Adopter', adopterSchema);

// Routes
// Get all pets
app.get('/pets', async (req, res) => {
    try {
        const pets = await Pet.find({ adopted: false });  // Only show pets that are not adopted
        res.json(pets);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching pets' });
    }
});

// Get all adopters
app.get('/adopters', async (req, res) => {
    try {
        const adopters = await Adopter.find();
        res.json(adopters);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching adopters' });
    }
});

// Add a new pet
app.post('/pets', async (req, res) => {
    const { name, type, age, breed } = req.body;
    
    const newPet = new Pet({
        name,
        type,
        age,
        breed
    });

    try {
        await newPet.save();
        res.status(200).json({ message: 'Pet added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error adding pet' });
    }
});

// Add a new adopter
app.post('/adopters', async (req, res) => {
    const { name } = req.body;
    
    const newAdopter = new Adopter({
        name
    });

    try {
        await newAdopter.save();
        res.status(200).json({ message: 'Adopter added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error adding adopter' });
    }
});

// Perform adoption by matching pet and adopter names
app.post('/adopt', async (req, res) => {
    const { petName, adopterName } = req.body;

    try {
        const pet = await Pet.findOne({ name: petName, adopted: false });
        const adopter = await Adopter.findOne({ name: adopterName });

        if (!pet) {
            return res.status(404).json({ error: 'Pet not found or already adopted' });
        }

        if (!adopter) {
            return res.status(404).json({ error: 'Adopter not found' });
        }

        // Mark the pet as adopted
        pet.adopted = true;
        await pet.save();

        res.status(200).json({ message: `${petName} has been adopted by ${adopterName}!` });
    } catch (err) {
        res.status(500).json({ error: 'Error during adoption' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
=======
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/petAdoption', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Pet Schema
const petSchema = new mongoose.Schema({
    name: String,
    type: String,
    age: Number,
    breed: String,
    adopted: { type: Boolean, default: false }  // Adoption status
});

const Pet = mongoose.model('Pet', petSchema);

// Adopter Schema (optional, if you want to track adopters separately)
const adopterSchema = new mongoose.Schema({
    name: String,
});

const Adopter = mongoose.model('Adopter', adopterSchema);

// Routes
// Get all pets
app.get('/pets', async (req, res) => {
    try {
        const pets = await Pet.find({ adopted: false });  // Only show pets that are not adopted
        res.json(pets);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching pets' });
    }
});

// Get all adopters
app.get('/adopters', async (req, res) => {
    try {
        const adopters = await Adopter.find();
        res.json(adopters);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching adopters' });
    }
});

// Add a new pet
app.post('/pets', async (req, res) => {
    const { name, type, age, breed } = req.body;
    
    const newPet = new Pet({
        name,
        type,
        age,
        breed
    });

    try {
        await newPet.save();
        res.status(200).json({ message: 'Pet added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error adding pet' });
    }
});

// Add a new adopter
app.post('/adopters', async (req, res) => {
    const { name } = req.body;
    
    const newAdopter = new Adopter({
        name
    });

    try {
        await newAdopter.save();
        res.status(200).json({ message: 'Adopter added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error adding adopter' });
    }
});

// Perform adoption by matching pet and adopter names
app.post('/adopt', async (req, res) => {
    const { petName, adopterName } = req.body;

    try {
        const pet = await Pet.findOne({ name: petName, adopted: false });
        const adopter = await Adopter.findOne({ name: adopterName });

        if (!pet) {
            return res.status(404).json({ error: 'Pet not found or already adopted' });
        }

        if (!adopter) {
            return res.status(404).json({ error: 'Adopter not found' });
        }

        // Mark the pet as adopted
        pet.adopted = true;
        await pet.save();

        res.status(200).json({ message: `${petName} has been adopted by ${adopterName}!` });
    } catch (err) {
        res.status(500).json({ error: 'Error during adoption' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
>>>>>>> 27b7249aade7708c1921a3caf6767db29707c3f2
