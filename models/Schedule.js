const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  date: Date,
  major: String,
});

module.exports = mongoose.model('Schedule', scheduleSchema);
