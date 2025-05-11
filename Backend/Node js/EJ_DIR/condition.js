const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/rollDice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("condition.ejs", {diceVal});
});

app.listen(port, () => {
    console.log(`Listening in port ${port}`);
});