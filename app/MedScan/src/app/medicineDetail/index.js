import MedicineDetailUI from "./containers/MedicineDetail";
import * as medicineDetailReducer from './reducers/medicineDetailReducer';

export default MedicineDetailUI

export const medicineDetailDataReducer = Object.assign({},
    medicineDetailReducer,
);