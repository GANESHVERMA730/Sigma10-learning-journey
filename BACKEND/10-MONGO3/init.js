const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
  console.log("connection successful");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
  {
   from: "Bibek",
  to: "Tushar",
  msg: "Hamka lagat hai wo dai..",
  created_at: new Date(), 
  },
  {
   from: "ramesh",
  to: "rahul",
  msg: "a raja hi baja baji ki na baji!!",
  created_at: new Date(), 
  },
  {
   from: "Shimran",
  to: "Aryan",
  msg: "Kis color ki chaddi pehne ho? bata do na. hum!",
  created_at: new Date(), 
  },
  {
   from: "suraj",
  to: "prakash",
  msg: "tohar fulal fulal fulauna kahiyo aawaj kar jai...",
  created_at: new Date(), 
  },
  {
   from: "Aman",
  to: "Raj",
  msg: "lagai dihi choliya ke hook raja ji!!",
  created_at: new Date(), 
  },
];

Chat.insertMany(allChats);

