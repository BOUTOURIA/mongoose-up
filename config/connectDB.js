const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect('mongodb://localhost/mongoose_check', () => {
    try {
      console.log("database connected... ")
    } catch (error) {
      console.log(error);
    }
  })
}

module.exports = connectDB;