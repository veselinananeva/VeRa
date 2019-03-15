import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './assets/scss/style.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'

// pravim asociaciq v metoda m/u reducers i store 
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
