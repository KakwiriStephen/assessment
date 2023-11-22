const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  createRandomProducts,
} = require("../controllers/productController");

// Create a new product
router.post("/products", createProduct);

// Get a product by ID
router.get("/products/:id", getProduct);

// Get all products
router.get("/products", getAllProducts);

// Update a product by ID
router.put("/products/:id", updateProduct);

// Delete a product by ID
router.delete("/products/:id", deleteProduct);

//Generate random products
router.get("/generate-products", createRandomProducts);

module.exports = router;
