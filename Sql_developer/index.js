const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database:'developer_app',
  password: 'Shalini#1234'
});

try {
  connection.query("SHOW TABLES", (err, result) => {
    // if(err) throw err;
    console.log(result);
  });
}
catch (err) {
  console.log(err);
}

connection.end();

// export function getRandomUser() {
let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password()
  };
};

console.log(getRandomUser());