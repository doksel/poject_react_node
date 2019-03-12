import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Post = new Schema({
    title: {
        type: String,
        required : true
    },
    text: {
        type: String,
    }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

Post.set('toJSON',{virtuals: true});

module.exports - mongoose.model('Post', Post);