import * as types from '../../../redux/types';
import client from '../../../redux/apollo/client';
import { userByIdQuery , updateUser} from '../graphql/quries';

export function getUserById(userId) {
    return (dispatch, getState) => {
        dispatch({type: types.USER_DETAILS_LOADING});
        client.query({
            query: userByIdQuery,
            variables: {id: userId}
        }).then((resp) => {
            if (resp.data) {
                dispatch({type: types.USER_DETAILS_LOADED, data: resp.data.User});
            }
            if(resp.errors) {
                 dispatch({ type: types.USER_DETAILS_ERROR, errors: resp.errors});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}

export function saveUserDetails(userId, name, email, photoUrl, phoneNumber) {
    return (dispatch, getState) => {
        dispatch({type: types.USER_DETAILS_LOADING});
        client.mutate({
            mutation: updateUser,
            variables: {id: userId, name: name, email: email, phoneNo: phoneNumber, imageUrl: photoUrl}
        }).then((resp) => {
            if (resp.data) {
                dispatch({type: types.USER_DETAILS_LOADED, data: resp.data.updateUser});
            }
            if(resp.errors) {
                 dispatch({ type: types.USER_DETAILS_ERROR, errors: resp.errors});
            }
        }).catch( (exception) => {
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}