const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public/JS")));


app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if(data) {
        res.render("data.ejs", {data});
    }
    else {
        res.render("dataError.ejs");
    }
});

app.listen(port, () => {
    console.log(`Listening in port ${port}`);
});
