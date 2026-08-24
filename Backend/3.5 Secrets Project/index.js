import path from "path";
import { fileURLToPath } from "url";
import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/check", (req, res) => {
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    res.sendFile(path.join(__dirname, "public", "secret.html"));
  } else {
    res.send(`
      <script>
        alert("Password is incorrect !!!");
        window.location.href = "/";
      </script>
    `);
  }
});


app.listen(port, () => {
    console.log("app is listening on http://localhost:3000")
})