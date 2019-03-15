import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schemaCommentPost = new Schema({
        title: {
            type: String
        },
        text: {
            type: String
        },
        idPost: {
            type: String
        }
    },    
    {
        timestamps: true
    }
);

schemaCommentPost.set('toJSON',{virtuals: true});

module.exports = mongoose.model('CommentPost', schemaCommentPost);