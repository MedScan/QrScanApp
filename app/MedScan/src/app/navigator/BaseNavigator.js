import React, {PureComponent} from "react";
import { StackNavigator } from "react-navigation";
import QrScannerUI from "../qrScanner";
import MedicineDetailUI from "../medicineDetail";
import Login from "../login/firebasePhoneAuth";
import ProfileDetails from "../profile";

const BaseNavigator = StackNavigator({
    Home: { screen: QrScannerUI },
    MedicineDetails: { screen: MedicineDetailUI },
    Login: { screen: Login },
    Profile: {screen: ProfileDetails}
  });

  const defaultGetStateForAction = BaseNavigator.router.getStateForAction;
  BaseNavigator.router.getStateForAction = (action, state) => {            
    if (state && action.type === 'GoToRoute') {           
        let index = state.routes.findIndex((item) => {
            return item.routeName === action.routeName
        });
        const routes = state.routes.slice(0, index+1);
        return {
            routes,
            index
        };    
    }       
    return defaultGetStateForAction(action, state);
};

export default BaseNavigator;