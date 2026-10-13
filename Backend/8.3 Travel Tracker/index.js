import express from "express";
import bodyParser from "body-parser";
import postgres from "pg";

const app = express();
const port = 3000;
const db = new postgres.Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "12345678",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(countries);
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {
  // find country code from world_countries table
  const country = req.body.country;
  const result = await db.query(
    "SELECT country_code FROM world_countries WHERE country_name = $1",
    [country]
  );
  await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
    result.rows[0].country_code,
  ]);
  res.redirect("/");
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
