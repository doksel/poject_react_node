import { combineReducers } from 'redux';
import { newsReducer } from './news_reducer';
import { usersReducer } from './users_reducer';

const rootReducer = combineReducers({
    newsReducer,
    usersReducer
});

export default rootReducer;