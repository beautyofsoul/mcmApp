/**
 * Created by qiaoyang on 3/7/17.
 */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import mcmReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore)

export default function configureStore(initalState) {
    return createStoreWithMiddleware(mcmReducer,initialState);
}
