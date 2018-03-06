import LoginDetail from "./conatiners/LoginDetail";
import * as loginDetailReducer from './reducers/loginDetailReducer';

export default LoginDetail

export const loginDetailDataReducer = Object.assign({},
    loginDetailReducer,
);