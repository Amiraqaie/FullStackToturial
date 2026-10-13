import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "FamilyTravelTracker",
  password: "12345678",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

// get all users from the database and store them in the users array
let users = [];
function getUsers() {
  db.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log(err);
    } else {
      users = res.rows;
    }
  });
}
getUsers();

async function getCurrentUser() {
  const result = await db.query("SELECT * FROM users");
  users = result.rows;
  return users.find((user) => user.id == currentUserId);
}

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries JOIN users ON users.id = user_id WHERE user_id = $1; ", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: (await getCurrentUser()).color,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );
    
    const data = result.rows[0];
    console.log(data);
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  if (req.body["user"]) {
    const userId = parseInt(req.body["user"]);
    currentUserId = userId;
    res.render("index.ejs", {
      countries: await checkVisisted(),
      total: (await checkVisisted()).length,
      users: users,
      color: (await getCurrentUser()).color
    });
  } 

  if (req.body["add"]) {
    res.render("new.ejs");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const name = req.body["name"];
  const color = req.body["color"];
  try {
    const result = await db.query(
      "INSERT INTO users (name, color) VALUES ($1, $2) RETURNING *;",
      [name, color]
    );
    const newUser = result.rows[0];
    currentUserId = newUser.id;
    getUsers(); // Update the users array with the new user
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
