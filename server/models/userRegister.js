const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
 
const UserRegister= new Schema({
  email: String,
  username: String,
  password: String
}, {
 
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

UserRegister.set('toJSON',{virtuals: true});

module.exports = mongoose.model('UserRegister', UserRegister);