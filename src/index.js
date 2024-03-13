const express = require("express");

const app = express();
const logger = require("./logger");
const bookRoute = require("./routes/bookRoute");
const authorRoute = require("./routes/authorRoute");

//Middlewares
app.use(express.json());
app.use(logger);
app.use("/books", bookRoute);
app.use("/authors", authorRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.all("*", (req, res) => {
  res.status(404).json({ Message: "Page not found" });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

//Node
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.end("This is the home page");
  }
});
