const express = require('express');
const app = express();

console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
}); 

// app.use((req, res) => {
//   // console.log(req);
//   console.log("new incoming request received");
//   res.send({
//     name: "Bibek",
//     age: "21",
//     address: "Nepal",
//   });
// });

app.get("/", (req, res) => {
  res.send("You contacted root path");
});

app.get("/search", (req, res) => {
  res.send("You contacted search path");
});
app.get("/help", (req, res) => {
  res.send("You contacted help path");
});
app.get("/document", (req, res) => {
  res.send("You contacted document path");
});


// generally we used to use this code at this place but now because of express 5 compatiblity we use the next set of code.
// app.get("*", (req, res) => {
//   res.send("this path is not reachable!! ");
// });

// the new code:
app.use((req, res) => {
  res.status(404).send("this path is not reachable!!");
});
