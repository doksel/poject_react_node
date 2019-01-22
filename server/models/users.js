const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
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

schema.set('toJSON',{virtuals: true});

module.exports = mongoose.model('Users', schema);