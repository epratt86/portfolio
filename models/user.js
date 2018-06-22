const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter your name'
  },
  email: {
    type: String,
    required: 'Please enter a valid email address',
    trim: true,
    minlength: 1
  },
  phone: {
    type: String,
    trim: true
  },
  comment: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
