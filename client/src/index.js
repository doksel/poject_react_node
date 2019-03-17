import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe} from './redux/state';

import * as serviceWorker from './serviceWorker';

let rerender = () => {
    ReactDOM.render(<App state={state}/>, document.getElementById('root'));
}
rerender(state);
subscribe(rerender);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
