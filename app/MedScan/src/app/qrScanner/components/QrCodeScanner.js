import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QrCodeScannerUI extends Component {
    onSuccess(e) {
        this.props.onScanFinished(e.data);
    }

    render() {
        return <QRCodeScanner onRead={this.onSuccess.bind(this)} cameraStyle={this.props.style} />
    }
}