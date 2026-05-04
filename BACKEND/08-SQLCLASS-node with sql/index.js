const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
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
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some errors in DB");
  }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some errors in DB");
  }
});


// UPDATE (DB) route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("wrong password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some errors in DB");
  }
});

// HOMEWORK TASK
//insert new user to the database:
// insert new user to the database
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  try {
    let { username, email, password } = req.body;
    let id = uuidv4();

    // query to insert new user
    let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

    connection.query(q, [id, username, email, password], (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Database error");
      }

      console.log("added new user");
      res.redirect("/user");
    });

  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

// delete a user only if the email and password are correct

// Route to Show Delete Page
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = "SELECT * FROM user WHERE id = ?";

  try {
    connection.query(q, [id], (err, result) => {
      if (err) return res.send("Database error");

      let user = result[0];

      if (!user) {
        return res.send("User not found");
      }

      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});


// DELETING Route
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;

  let q = "SELECT * FROM user WHERE id = ?";

  try {
    connection.query(q, [id], (err, result) => {
      if (err) return res.send("Database error");

      let user = result[0];

      if (!user) {
        return res.send("User not found");
      }

      if (user.password !== password) {
        return res.send("WRONG password entered");
      }

      // SQL query to delete
      let q2 = "DELETE FROM user WHERE id = ?";

      connection.query(q2, [id], (err, result) => {
        if (err) return res.send("Error deleting user");

        console.log("Deleted!");
        res.redirect("/user");
      });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});