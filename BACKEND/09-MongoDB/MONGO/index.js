const mongoose = require('mongoose');

main().then((res) => {
  console.log("connection successful");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete({ _id: "69b1c4a90ec4cd6217300c2a"}).then((res) => {
  console.log(res);
});

// User.updateMany({ age: { $gt: 30 } }, { age: 75 }).then((res) => {

// User.findByIdAndUpdate({ _id: "69b59863b4cc5498c6d14456"}, { age: 17 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });

// User.findOne({ _id: "69b59863b4cc5498c6d14456" }).then((res) => {
// User.findById("69b59863b4cc5498c6d14456").then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.insertMany([
//   {name: "Rahul", email: "rahul23@gmail.com", age: 59},
//   {name: "Krishna", email: "krishna34@gmail.com", age: 30},
//   {name: "Tushar", email: "tushar@gmail.com", age: 18},
// ]).then((res) => {
//   console.log(res);
// });

// const user2 = new User({
//   name: "bibekverma",
//   email: "bibek@234gmail.com",
//   age: 21,
// });

// user2
// .save()
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });
// user1.save();