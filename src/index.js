import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Provider is basically a glue for react and redux.
//wrap entire app in provider
//it takes in a store which holds state for entire application
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>    
    , document.getElementById('root'));

registerServiceWorker();
