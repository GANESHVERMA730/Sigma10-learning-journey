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
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//   ['7342d', 'guud_123b', 'newemailb@gmail.com', 'lodu@123b'],
//   ['7323e', 'gure_123c', 'newemailc@gmail.com', 'lond@123c'],
// ];

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];
for(let i=1; i<=100; i++){
  data.push(getRandomUser());  // data of 100 fake users:
}

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
    // console.log(result.length);
  });
} catch (err) {
  console.log(err);
}

connection.end();


