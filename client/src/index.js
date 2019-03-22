import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
// import store from './redux/redux_store';
import {BrowserRouter} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

let rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App data={store.getState()} getAllPost={store.getAllPost.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerender(store.getState());
store.subscribe(store._rerender);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
