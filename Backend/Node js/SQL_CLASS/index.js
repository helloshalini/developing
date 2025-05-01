const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'node_related',
  password: 'Shalini#1234',
});

try {
    connection.query("SHOW TABLE", (err, result) => {
        if(err) throw err;
        console.log(result);
    });
} catch (err){
    console.log(err);
}

let createRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

// console.log(createRandomUser());