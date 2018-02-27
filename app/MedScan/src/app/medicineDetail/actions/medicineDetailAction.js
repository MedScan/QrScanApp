import * as types from '../../redux/types';
import client from '../../redux/apollo/client';
import { medDetByQR } from '../graphql/quries';

export function fetchMedicineDetail(qrCode) {
    return (dispatch, getState) => {
        console.log('in action ccall')
        dispatch({type: types.FETCH_MEDICINE_DETAIL_LOADING,});
        client.query({
            query: medDetByQR,
            variables: {qrCode: qrCode}
        }).then((resp) => {
            console.log('in resp')
            if (resp.data) {
                console.log('in data')
                dispatch({type: types.FETCH_MEDICINE_DETAIL_LOADED});
                dispatch({type: types.SET_MEDICINE_DETAIL, data: resp.data.Medicine});
            }
            if(resp.errors) {
                console.log('in error')
                dispatch({ type: types.FETCH_MEDICINE_DETAIL_ERROR});
            }
        }).catch( (exception) => {
            console.log('in exception')
            dispatch({ type: types.EXCEPTION, exception: exception});
        });
    }
}