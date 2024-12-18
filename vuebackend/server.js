const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const Goods = require('./models/Goods'); // Import the Goods schema

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect('mongodb+srv://furahaemire5:l7PX49wccImnse8L@emile.u9gop.mongodb.net/?retryWrites=true&w=majority&appName=emile', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Route to Add Goods
app.post('/api/goods', async (req, res) => {
  try {
    const { name, price, description, quantity } = req.body; // Get data from request body
    const newGood = new Goods({ name, price, description, quantity }); // Create a new good
    await newGood.save(); // Save the good to the database
    res.status(201).json({ message: 'Goods added successfully', good: newGood });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding goods to the database' });
  }
});



// Route to Fetch Goods
app.get('/api/goods', async (req, res) => {
    try {
      const goods = await Goods.find(); // Fetch all goods from the database
      res.status(200).json(goods); // Send goods data as a JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching goods from the database' });
    }
  });






// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
