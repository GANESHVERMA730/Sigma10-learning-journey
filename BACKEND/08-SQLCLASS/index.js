const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


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

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for(let i=1; i<=100; i++){
//   data.push(getRandomUser());  // data of 100 fake users:
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     // console.log(result.length);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();


// home rout e
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some errors in DB");
  }
});

// grt/show users route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;

  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      // res.send(result);
      res.render("showusers.ejs", {users});
    });
  } catch (err) {
    console.log(err);
    res.send("some errors in DB");
  }
});


app.listen("8080", () => {
  console.log("server is listening to port 8080");
});