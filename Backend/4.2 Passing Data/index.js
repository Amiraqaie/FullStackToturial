import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.js");
});

app.post("/submit", (req, res) => {
  var fName = req.body["fName"];
  var lName = req.body["lName"];

  res.render("index.ejs", {nameLength: fName.length + lName.length});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
