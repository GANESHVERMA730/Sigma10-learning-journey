const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bibek_app',
  password: 'bibekverma123@'
});

// let q = "SHOW TABLES"; // we can also make a variable like this fir query and use it.

// Inserrting new data.
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["7323b", "guru_123b", "choducid@femail.comb", "lodu@123b"],
  ["7323c", "guru_123c", "choducid@femail.comc", "lodu@123c"],
];

try {
  connection.query(q, [users], (err, result) => {
    if (err) throw err;
    console.log(result);
    // console.log(result.length);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
