import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "amir";
const yourPassword = "1234";
const yourAPIKey = "d559ba67-622b-4f65-85b9-24921ce20f19";
const yourBearerToken = "c1e0001f-7f33-4c58-a2ff-862d44714981";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {

  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {content: JSON.stringify(response.data)});
  } catch (error) {
    res.status(404).send("Error : ", error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword
      }
    });

    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    res.status(status).send(`Error: ${error.message}`);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter`, {
      params: {
        score: 5,
        apiKey: yourAPIKey
      }
    });

    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(error.response?.status || 500).send(`Error: ${error.message}`);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    });

    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    res.status(status).send(`Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
