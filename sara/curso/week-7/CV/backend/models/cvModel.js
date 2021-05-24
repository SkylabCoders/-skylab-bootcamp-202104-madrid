const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  userInfo: {
    name: String,
    mail: String,
    phone: Number,
  },
  skills: Array,
  education: Array,
  experience: Array,
});

module.exports = model('User', userSchema);
