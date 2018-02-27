import React, {PureComponent} from "react";
import { StackNavigator } from "react-navigation";
import QrScannerUI from "../qrScanner";
import MedicineDetailUI from "../medicineDetail";

const BaseNavigator = StackNavigator({
    Home: { screen: QrScannerUI },
    MedicineDetails: { screen: MedicineDetailUI }
  });


export default BaseNavigator;