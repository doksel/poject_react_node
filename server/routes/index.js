const api = require('./api');
const admin = require('./admin');
const posts = require('./api/posts/posts');
const comments = require('./api/posts/comments');

module.exports = {
    api,
    admin,
    posts,
    comments
};