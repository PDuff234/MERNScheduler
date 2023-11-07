// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  role: String, // "standard", "advanced", or "admin"
  password: String,
  // Other fields as needed
});

module.exports = mongoose.model('User', UserSchema);
