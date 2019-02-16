const dotenv = require('dotenv');
const path = require('path');

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('.env') });

module.exports = {
    PORT: process.env.PORT || 3001,
    // MONGO_URL: 'mongodb://localhost:27017/mydb',
    MONGO_URL: process.env.MONGO_URL,
    IS_PRODUCTION: process.env.NODE_EVN === 'production',
    jwtSecret: 'secret doksel'
};