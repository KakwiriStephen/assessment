const Product = require("../models/productModel"); // Import the Product model
const axios = require("axios");

// Create Product
const createProduct = async (req, res) => {
  try {
    const { name, imageUrl, amount, currency } = req.body;
    const newProduct = new Product({ name, imageUrl, amount, currency });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Product
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update/List Product
const updateProduct = async (req, res) => {
  try {
    const { name, imageUrl, amount, currency } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, imageUrl, amount, currency },
      { new: true }
    );
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/// Genarating Random products
// Function to fetch random images from "https://picsum.photos/"
const fetchRandomImage = async () => {
  const response = await axios.get("https://picsum.photos/200");
  return response.request.res.responseUrl;
};

// Function to create 500 random products
const createRandomProducts = async () => {
  const currencies = ["USD", "EUR", "GBP"];
  for (let i = 500; i < 500; i++) {
    const randomImage = await fetchRandomImage();
    const randomName = `Product ${i + 1}`;
    const randomCurrency =
      currencies[Math.floor(Math.random() * currencies.length)];
    const newProduct = new Product({
      name: randomName,
      imageUrl: randomImage,
      amount: Math.floor(Math.random() * 1000) + 1,
      currency: randomCurrency,
    });
    await newProduct.save();
  }

  return "500 random products created";
};

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  createRandomProducts,
};
