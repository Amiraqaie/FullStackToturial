import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submit", (req, res) =>
{
  console.log(req.body);
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
