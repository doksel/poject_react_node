import { combineReducers } from 'redux';
import { newsReducer } from './news_reducer';
import { commentsReducer } from './comments_reducer';
import { usersReducer } from './users_reducer';

const rootReducer = combineReducers({
    newsReducer,
    commentsReducer,
    usersReducer
});

export default rootReducer;