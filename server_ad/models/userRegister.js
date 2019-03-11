const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const UserRegister= new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
 
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

UserRegister.set('toJSON',{virtuals: true});

module.exports = mongoose.model('UserRegister', UserRegister);