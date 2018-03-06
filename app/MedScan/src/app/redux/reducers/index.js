import { combineReducers } from 'redux';
import * as handleException from './handleException';
import { medicineDetailDataReducer } from '../../medicineDetail';
import { phoneAuthDataReducer } from '../../login/firebasePhoneAuth';
import { loginDetailDataReducer } from '../../login/loginDetail/index';

export default combineReducers(Object.assign(
    handleException,
    medicineDetailDataReducer,
    phoneAuthDataReducer,
    loginDetailDataReducer
));