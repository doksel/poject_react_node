const api = require('./api');
const admin = require('./admin');
const auth = require('./api/auth');
const users = require('./api/users');
const posts = require('./api/posts');
const comments = require('./api/comments');

module.exports = {
    api,
    admin,
    auth,
    users,
    posts,
    comments,
};