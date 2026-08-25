import express from "express"


const app = express();
const port = 3000;

app.get("/", (req, res) => {
    var date = new Date();
    var day = date.getDay(); 

    let type = "a weekday";
    let advice = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        advice = "it's time to have some fun";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: advice,
    });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});