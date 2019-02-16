const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaUsers = new Schema({
        name: {
            type: String,
            required : true
        },
        sername: {
            type: String
        },
        age: {
            type: Number
        }
    },    
    {
        timestamps: true
    }
);

schemaUsers.set('toJSON',{virtuals: true});

module.exports = mongoose.model('Users', schemaUsers);