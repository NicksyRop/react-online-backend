const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const products = require("./products");

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const Port = process.env.PORT || 5000;

app.listen(Port, console.log(`Server running on port ${Port}`));
