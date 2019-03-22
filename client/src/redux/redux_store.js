import { combineReducers, createStore } from 'redux';
import newsReduser from './reducers/news_reducer';
import usersReduser from './reducers/users_reducer';

let redusers = combineReducers({
    newsReduser,
    usersReduser
});

let store = createStore(redusers);

export default store;