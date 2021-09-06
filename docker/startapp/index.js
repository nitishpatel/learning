const mongoose = require("mongoose");

const DATABASE = "mongodb://localhost:27017/test";

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database");
  });
