import createReducer from '../../lib/createReducer';
import *  as types from '../../redux/types';
import *  as GeneralConstants from '../../../common/constants/generalConstants';

const initialMedDetail = {
    loadingStatus: 0,
    detail: {}
}

export const fetchMedicineDetails = createReducer(initialMedDetail, {
    [types.FETCH_MEDICINE_DETAIL_LOADING](state, action) {
        return {
            ...state,
            loadingStatus: GeneralConstants.LOADING,
            detail: {},
        }
    },
    [types.SET_MEDICINE_DETAIL](state, action) {
        if(action.data != null) {
            return {
                ...state,
                loadingStatus: GeneralConstants.LOADED,
                detail: {
                    ...action.data,
                    sideEffects: action.data.sideEffects.map(data => data),
                    usage: action.data.defaultUsage.map(data => data),
                }
            }
        } else {
            return {
                ...state,
                loadingStatus: GeneralConstants.LOADED,
                detail: {},
            }
        }
    },
    [types.FETCH_MEDICINE_DETAIL_ERROR](state, action) {
        return {
            ...state,
            loadingStatus: GeneralConstants.ERROR,
            detail: {},
            
        }
    }
});