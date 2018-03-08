import React, { PureComponent } from 'react';
import {
  Text,
  View,
} from 'react-native';
import QrCodeScanner from './QrCodeScanner';
import { basicStyles } from '../../../common/styles/styleSheet';
import MedicineDetailUI from '../../medicineDetail';


export default class QrScannerUI extends PureComponent {
    constructor() {
        super()
        this.onScanFinished = this.onScanFinished.bind(this);
        this.state = { medicineCode: null };
    }

    onScanFinished = (data) => {
        console.log(data);
        this.setState({medicineCode : data});
        this.props.navigation.navigate("MedicineDetails", {medicineCode: data});
    }

    tryAnotherMedicine = () => {
        this.setState({medicineCode : null});
    }

    renderScanner = () => {
        return <View style={basicStyles.deviceFullView}>
            <QrCodeScanner style={basicStyles.deviceFullView} onScanFinished={this.onScanFinished}/>
            <View style={basicStyles.absoluteTopFullDeviceWidth}>
                <View style={basicStyles.innerView}>
                    <Text style={basicStyles.titleTextLight}>Welcome to MedScan</Text>
                    <Text style={[basicStyles.mediumTextLight, {paddingTop: 20, textAlign: 'center'}]}>Make sure the QRcode is clearly visible to rear camera</Text>
                </View>
            </View> 
            <View style={basicStyles.absoluteBottomFullDeviceWidth}>
                <Text style={basicStyles.mediumTextLight}>Please wait, QRcode will be automaticlly debucted</Text>
            </View> 
        </View>
    }

    renderItem = () => {
        // if(this.state.medicineCode) {
        //     return <MedicineDetailUI medicineCode={this.state.medicineCode} tryAnotherMedicine={this.tryAnotherMedicine} navigation={this.props.navigation}/>;
        // } else {
            return this.renderScanner();
        // }
    }

    render() {
        const {navigation} = this.props;
        return this.renderItem();
    }
}