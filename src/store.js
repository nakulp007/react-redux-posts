import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index'

const initialState = {};

//by default dont expand statements in console
const logger = createLogger({ collapsed: true });

//Redux middleware is code that intercepts actions 
//coming into the store via the dispatch() method, 
//and does something.
const middleware = [thunk];

//we only want to log if it is not in production environment
//also always put logger middleware last per logger doc
//this doesn't quiet work properly because we have to setup env variables
if(process.env.ENVIRONMENT !== 'production'){
    middleware.push(logger);
}

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        //maybe only do this in non-prod env
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;