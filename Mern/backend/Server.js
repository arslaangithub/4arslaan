const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => console.log("MongoDB Connected"));

const productSchema = new mongoose.Schema({
  name: String,
  price: Number
});
const Product = mongoose.model('Product', productSchema);

app.post('/register', async (req, res) => {
  const { name, price } = req.body;
  try {
    await Product.create({ name, price });
    res.send("Product saved");
  } catch {
    res.status(500).send("Error saving product");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));