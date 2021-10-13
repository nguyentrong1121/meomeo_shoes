import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from "redux";
import {createLogger} from 'redux-logger';
import login from './Login/LoginReducer';

const logger = createLogger();

export const rootReducer = combineReducers({
    login,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);
