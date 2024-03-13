const express = require("express");
const authorRoute = express.Router();

authorRoute.get("/", (req, res) => {
  res.json({ Name: "J.k Rowling", age: 58 });
});

authorRoute.get("/:authorId", (req, res) => {
  res.json({ Name: "J.k Rowling" });
});

authorRoute.post("/", (req, res) => {
  res.json({ Message: "New Author added", author: req.body });
});

authorRoute.put("/", (req, res) => {
  res.json({ Message: "Author details updated" });
});

authorRoute.patch("/", (req, res) => {
  res.json({ Message: "Author details updated" });
});

authorRoute.delete("/", (req, res) => {
  res.json({ Message: "Author deleted" });
});

module.exports = authorRoute;
