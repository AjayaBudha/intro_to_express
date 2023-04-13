const express = require("express");
const app = express();
const fruits = require("./fruits.json");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chickens", (req, res) => {
  res.send("hello chicken");
});

app.get("/chickens/:id", (req, res) => {
  res.send(req.query);
});

app.get("/fruits", (req, res) => {
  res.send(fruits);
});
module.exports = app;
