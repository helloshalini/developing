const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Your contracted root path");
});

app.get("/apple", (req, res) => {
    res.send("Your contract apple path");
});

app.get("/orange", (req, res) => {
    res.send("Your contract orange path");
});

// app.get("*", (req, res) => {
//     res.send("this path doesn't exist");
// });
