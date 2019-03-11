const dotenv = require('dotenv');
const path = require('path');

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('.env') });

module.exports = {
    PORT: process.env.PORT || 3001,
    MONGO_URL: 'mongodb://doksel:d07m04g78@ds135335.mlab.com:35335/blog',
    // MONGO_URL: process.env.MONGO_URL,
    IS_PRODUCTION: process.env.NODE_EVN === 'production',
    SESSION_SECRET: process.env.SESSION_SECRET,
    jwtSecret: 'secretdoksel'
};