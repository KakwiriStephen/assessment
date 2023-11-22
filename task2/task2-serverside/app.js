const express = require("express");
const app = express();
const cors = require("cors"); //Handling cors error
const bodyParser = require("body-parser"); //Formatting url encoded data and json

const productsRoutes = require("./routes/productRoutes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", productsRoutes);

module.exports = app;
