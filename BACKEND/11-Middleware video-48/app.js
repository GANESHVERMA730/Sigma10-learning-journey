// middlewares
const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) => {
//   console.log("Hi, I am 1st middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hi, I am 2nd middleware");
//   next();
// });

// utility middleware
// logger

// app.use((req, res, next) => {
//   req.time = new Date (Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

app.use("/random", (req, res, next) => {
  console.log("I am only for random");
  next();
});

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");  // custome error handling
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});


app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin if forbidden");
});

// Error handling middleware
// app.use((err, req, res, next) => {
//   console.log("______ERROR______");
//   res.send(err);
// });

app.use((err, req, res, next) => {
  let { status = 500, message = "SOME ERROR" } = err; // setting the status,message by default to 500 and "some error" if it is undefined. 
  res.status(status).send(message);
});


// 404
app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(8080, () => {
  console.log("server listining to port 8080");
});