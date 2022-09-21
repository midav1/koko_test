const mongoose = require('mongoose');
const { secret } = require('../config/secret');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${secret.MONGOUSER}:${secret.MONGOPASSWORD}@cluster0.jzl8ly1.mongodb.net/hw1`);
  console.log("mongo connect black22322")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}