import { combineReducers } from 'redux';
import * as handleException from './handleException';
import { medicineDetailDataReducer } from '../../medicineDetail';

export default combineReducers(Object.assign(
    handleException,
    medicineDetailDataReducer
));