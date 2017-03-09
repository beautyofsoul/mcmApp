/**
 * Created by qiaoyang on 3/7/17.
 */
'use strict'
import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';

function loadWarningData(state = {}, action) {
    switch (action.type) {
        case ActionTypes.WARNING_DATA_REQUEST:
            return {
                rows: [{
                    imeiNo: "35245020925296",
                    address: "xxxxxxx",
                    status: 1,
                    longitude: 113.981718,
                    latitude: 22.542449
                }, {
                    imeiNo: "35245020925296",
                    address: "xxxxxxx",
                    status: 1,
                    longitude: 113.981718,
                    latitude: 22.542449
                }]
            }
        default:
            return state
    }
}

const mcmApp = combineReducers({waringData:loadWarningData});

export default mcmApp



