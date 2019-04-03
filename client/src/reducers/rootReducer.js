import { combineReducers } from 'redux';
import { newsReducer } from './news_reducer';
import { commentsReducer } from './comments_reducer';
import { authReducer } from './auth_reducer';

const rootReducer = combineReducers({
    newsReducer,
    commentsReducer,
    authReducer
});

export default rootReducer;