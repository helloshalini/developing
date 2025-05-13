const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`standard Get respond. Wellcome ${user}`);
});

app.post("/register", (req, res) => {
    res.send("standard Post respond");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});