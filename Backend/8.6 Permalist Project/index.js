import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "12345678",
  port: 5432,
});
db.connect();

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// load items from the database
let items = [];
async function loadItems() {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC");
  items = result.rows;
  console.log("Items loaded from database:", items);
}

loadItems();

app.get("/", async (req, res) => {

  // update the items array with the latest data from the database
  await loadItems();

  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
  await loadItems();
  res.redirect("/");
});

app.post("/edit", (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;

  db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id])
    .then(() => {
      loadItems().then(() => {
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/delete", (req, res) => {
  const id = req.body.deleteItemId;
  db.query("DELETE FROM items WHERE id = $1", [id])
    .then(() => {
      loadItems().then(() => {
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port} at http://localhost:${port}`);
});
