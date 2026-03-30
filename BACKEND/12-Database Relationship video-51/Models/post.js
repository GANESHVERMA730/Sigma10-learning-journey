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
  email: String
})

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// creating Model
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user = await User.findOne({username: "bibek kumar"});

  let post2 = new Post({
    content: "Aur batao kaise ho!!",
    likes: 184,
  });

  post2.user = user;
  await post2.save();
};

addData();
