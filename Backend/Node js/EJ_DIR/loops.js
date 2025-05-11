const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    const followers = ["Nani", "Tanav", "Julli", "Cherry"]
    let {username} = req.params;
    res.render("loops.ejs", {username, followers});
});

app.listen(port, () => {
    console.log(`Listening in port ${port}`);
});
