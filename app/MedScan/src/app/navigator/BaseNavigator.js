import React, {PureComponent} from "react";
import { StackNavigator } from "react-navigation";
import QrScannerUI from "../qrScanner";
import MedicineDetailUI from "../medicineDetail";
import Login from "../login/firebasePhoneAuth";

const BaseNavigator = StackNavigator({
    Home: { screen: QrScannerUI },
    MedicineDetails: { screen: MedicineDetailUI },
    Login: { screen: Login },
  });


export default BaseNavigator;