const express = require("express");
const bookRoute = express.Router();

bookRoute.get("/", (req, res) => {
  res.json({ Name: "Harry Potter", Pages: 760 });
});

bookRoute.get("/:bookId", (req, res) => {
  res.json({ Name: "Harry Potter", Pages: 760 });
});

bookRoute.get("/:booksId/authors/:authorsId", (req, res) => {
  res.json({ Name: "Harry Potter", Pages: 760, author: "J.k Rowling" });
});

bookRoute.post("/", (req, res) => {
  res.json({ Message: "Book Created", books: req.body });
});

bookRoute.put("/", (req, res) => {
  res.json({ Message: "Books Updated" });
});

bookRoute.patch("/", (req, res) => {
  res.json({ Message: "Book details Updated" });
});

bookRoute.delete("/", (req, res) => {
  res.json({ Message: "Book Deleted" });
});

module.exports = bookRoute;
