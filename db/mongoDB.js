const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wuphf');

// const db = mongoose.connection; // Checks if there's a connection

const wuphfSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  message: String,
  phoneNumber: String,
  twitterHandle: String,
  email: String,
});

const BarkModel = mongoose.model('BarkModel', wuphfSchema);

module.exports = BarkModel;
