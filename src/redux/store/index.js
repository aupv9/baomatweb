// configureStore.js
import {createStore,applyMiddleware} from 'redux'
import  mainReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore=() =>{
    let store = createStore(mainReducer, applyMiddleware(thunk,logger)
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) ;// create store sử dụng thunk, logger
    return store;
}

export default configureStore;