const mongoose = require("mongoose");

//Creating a schema for the product.
const productSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  amount: Number,
  currency: String,
});

//Creating a model for the product
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
