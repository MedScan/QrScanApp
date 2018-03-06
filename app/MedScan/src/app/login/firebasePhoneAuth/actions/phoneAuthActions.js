import * as types from '../../../redux/types';
import client from '../../../redux/apollo/client';
import { authenticateUser } from '../graphql/quries';
import { AsyncStorage } from 'react-native'

export function setPhoneNumber(phoneNumber) {
    return (dispatch, getState) => {
        dispatch({type: types.SET_PHONE_NUMBER, data: phoneNumber});
    }
}

export function clearTokenId() {
    return (dispatch, getState) => {
        AsyncStorage.removeItem('token');
        dispatch({type: types.GRAPHCOOL_AUTH_TOKEN_CLEAR});
        dispatch({type: types.CLEAR_USER_ID});
        dispatch({type: types.CLEAR_USER_DETAILS});
    }
}

export function setTokenId(token) {
    return (dispatch, getState) => {
        client.mutate({
            mutation: authenticateUser,
            variables: {firebaseToken: token}
        }).then((resp) => {
            if (resp.data) {
                AsyncStorage.setItem('token', resp.data.authenticateFirebaseUser.token);
                dispatch({ type: types.SET_USER_ID, data: resp.data.authenticateFirebaseUser.id});
                dispatch({ type: types.GRAPHCOOL_AUTH_TOKEN_OBTAINED});
            } else {
                dispatch({ type: types.GRAPHCOOL_AUTH_TOKEN_ERROR});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
} 