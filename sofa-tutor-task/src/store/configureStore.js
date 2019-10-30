import { createStore, combineReducers, applyMiddleware } from 'redux';
import emailsReducer from '../reducers/emailsReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

// Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            emails: emailsReducer
        }),
        applyMiddleware(logger, thunk, promise)
    );
    return store;
};