import React, { PureComponent } from 'react';
import QrScannerUI from "../components/QrScannerUI";

export default class QrScanner extends PureComponent {
    static navigationOptions = {
        header: null
    };

    render() {
        return <QrScannerUI navigation={this.props.navigation}/>
    }
}