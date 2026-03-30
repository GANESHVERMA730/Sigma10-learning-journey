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
const orderSchema = new Schema({
  item: String,
  price: Number,
});

// customer schema
const customerschema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// creating model
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerschema);

// function 
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

 // function to add a customer in database.

// const addCustomer = async() => {
//   let cust1 = new Customer({
//     name: "Bibek Verma",
//   });

//   let order1 = await Order.findOne({ item: "chips"});
//   let order2 = await Order.findOne({ item: "chocolate"});

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);
// };

// addCustomer();

// Insurting Data
// const addOrders = async () => {
//   let res = await Order.insertMany([
//     {item: "Samosa", price: 10},
//     {item: "chips", price: 10},
//     {item: "chocolate", price: 40},
//   ]);
//   console.log(res);
// };

// addOrders();
