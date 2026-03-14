const mongoose = require('mongoose');

main().then((res) => {
  console.log("connection successful");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Price is too low for Amazon selling"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const book = mongoose.model("Book", bookSchema);

book.findByIdAndUpdate("69b5c51225e56000545ec9ef", {price: -400}, {runValidators: true})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err.errors.price.properties.message);
});

// let book1 = new book({
//   title: "Kishor Dhardube",
//   author: "RD Sharma",
//   price: 7600,
//   category: "fiction",
// });
// book1.save().then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err); 
// });