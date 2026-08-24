import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


function logger(req, res, next)
{
  console.log("Request method: ", req.method);
  console.log("Request url: ", req.url);
  next();
}

app.use(logger);
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  console.log("Body in GET:", req.body);
  res.send("Hello");
});

app.post("/submit", (req, res) => {
  // req.body is populated by bodyParser.urlencoded
  console.log("Form Data Received:", req.body);
  res.send(`Form received! Data: ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
