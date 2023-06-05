const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const products = require('./products');

const app = express();
app.use(
  cors({ origin: "http://localhost:3000", methods: ["GET", "POST", "DELETE"] })
);

app.use(express.json());

// MongoDB connection setup
mongoose.connect("mongodb://localhost:27017/product_catalog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the Product collection
const productSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  id: Number,
  name: String,
  description: String,
  price: Number,
  imageURL: String,
});

// Create a model based on the schema
const Product = mongoose.model("Product", productSchema);

async function saveProducts() {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products); // Insert new products
    console.log("Products saved successfully!");
  } catch (error) {
    console.error("Error saving products:", error);
  }
}

saveProducts();

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.sendStatus(500); // Internal Server Error
  }
});

// Delete a product by ID
app.delete("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Product.deleteOne({ id: id });
    res.sendStatus(204); // Success with no content
  } catch (error) {
    console.error("Error deleting product:", error);
    res.sendStatus(500); // Internal Server Error
  }
});


// Add a new product
app.post("/api/products", async (req, res) => {
  const { name, description, price, imageURL } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
    imageURL,
  });
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.sendStatus(500); // Internal Server Error
  }
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;