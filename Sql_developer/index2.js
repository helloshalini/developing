const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'developer_app',
    password: 'Shalini#1234'
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password()
    ];
};

app.get("/", (req, res) => {
    let q = `select count(*) from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
            res.send("Success");
        });
    }
    catch (err) {
        console.log(err);
        res.send("some error in database");
    }
});

app.listen("8080", () => {
    console.log("server is listening to port 8080")
})

console.log(getRandomUser());


// connection.end();