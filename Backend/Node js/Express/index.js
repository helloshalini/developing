const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.use((req, res) => {
    console.log("request recieve");
    // res.send("this is a response");
    res.send({
        name: "apple",
        color: "red",
    });
});

