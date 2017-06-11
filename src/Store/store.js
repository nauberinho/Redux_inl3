/**
 * Created by Iamnauber on 2017-06-11.
 */

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import form from '../reducers/formReducer';
import product from '../reducers/productsReducer';

export default createStore(combineReducers({form, product }),
    {},
    applyMiddleware(createLogger())
);
