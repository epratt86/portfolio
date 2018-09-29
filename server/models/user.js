const { mongoose } = require('../db/mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 1
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
});


const User = mongoose.model('User', UserSchema);
module.exports = { User };