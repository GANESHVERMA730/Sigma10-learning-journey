// Importing mongoose
const mongoose = require("mongoose");

// require
const {Schema} = mongoose;

// Connecting to MongoDB
main()
.then(() => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// Defining/creating schema
const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,  // used if we dont want to create ID attribute.
      location: String,
      city: String,
    },
  ],
});

// creating model 
const User = mongoose.model("User", userSchema);

// Insurting Data
const addUsers = async() => {
  let user1 = new User({
    username: "Bibek Verma",
    addresses: [{
      location: "charbaag Railway Station",
      city: "Lucknow"
    }]
  });
  user1.addresses.push({location: "Polytechnic chauraha", city: "Lucknow"});
 let result = await user1.save();
 console.log(result);
};

addUsers();