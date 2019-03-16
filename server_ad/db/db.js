import config from '../config';
import mongoose from 'mongoose';

module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise;
        mongoose.set('debug', config.IS_PRODUCTION);

        mongoose.connection
            .on('error', error => reject(error))
            .on('close', () => console.log('Database connection closed.'))
            .once('open', () => resolve(mongoose.connection));
    
        mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });
    });
}
