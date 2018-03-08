import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import { basicStyles, basicCompStyles } from '../../../../StyleSheets/styles';
import * as Labels from '../../../../Constants/Labels';
import * as Colors from '../../../../Constants/Colors';
import * as IconName from '../../../../Constants/IconName';
import LoadingIndicator from '../../../../common/components/LoadingIndicator';
import LoginDetailUI from './LoginDetailUI';

export default class LoginDetailCheck extends PureComponent {
    renderLoginCheck(children, signOut, userDetails, saveUserDetails) {
        return <LoginDetailUI signOut={signOut} saveUserDetails={saveUserDetails}/>
    }

    componentWillReceiveProps(props) {
        if(props.userDetails.phoneNo != null) {
            props.navigation.goBack();
        }
    }

    render() {
        const { children, signOut, userDetails, loadingStatus, saveUserDetails } = this.props;
        return <LoadingIndicator loadingStatus={loadingStatus} spinnerColor={Colors.MEDIUM_INDICATOR_COLOR} containerStyle={basicStyles.fullContentPad0}>
            {this.renderLoginCheck(children, signOut, userDetails, saveUserDetails)}
        </LoadingIndicator>
    }
}