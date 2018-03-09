import * as types from '../../redux/types';
import client from '../../redux/apollo/client';
import { AsyncStorage } from 'react-native'

export function setUserFromLocal() {
    return (dispatch, getState) => {
        console.log("searching user ---");
        AsyncStorage.getItem("user").then(user => {
            console.log("async storage user - ", user)
            if(user) {
                dispatch({type: types.USER_DETAILS_LOADED, data: JSON.parse(user)});
            }
        }).catch();
    }
}