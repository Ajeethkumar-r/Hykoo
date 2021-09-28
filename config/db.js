const mongoose = require('mongoose');
const config = require('config');
const colors = require('colors');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log(colors.underline.cyan('MongoDB Connected...'));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
