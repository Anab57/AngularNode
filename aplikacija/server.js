const express = require("express");
const path = require("path");
const app = express();
const posts = require("./server/routes/posts");
const mysql = require("promise-mysql");
const axios = require("axios");

app.use(express.static(path.join(__dirname, "dist/aplikacija")));

app.use("/posts", posts);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/aplikacija/index.html"));
});

const port = process.env.PORT || 4600;
app.listen(port, (req, res) => {
  console.log(`running on port ${port}`);
});
