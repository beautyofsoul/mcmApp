/**
 * Created by qiaoyang on 3/7/17.
 */
'use strict'


export const WARNING_DATA_REQUEST = "WARNING_DATA_REQUEST";
export const WARNING_DATA_SUCCESS = "WARNING_DATA_SUCCESS";
export const WARNING_DATA_FAILURE = 'WARNING_DATA_FAILURE';

export const fetchWarningData = (queryObj) => {
    return {
        ...queryObj, type: WARNING_DATA_SUCCESS
    }
}


