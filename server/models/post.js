import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schemaPost = new Schema({
        title: {
            type: String
        },
        text: {
            type: String
        },
        comments: {
            type: Boolean
        }
    },    
    {
        timestamps: true
    }
);

schemaPost.set('toJSON',{virtuals: true});

module.exports = mongoose.model('Post', schemaPost);