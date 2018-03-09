import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import LoadingIndicator from '../../../../common/components/LoadingIndicator';
import LoginDetailUI from './LoginDetailUI';
import colors from '../../../../common/constants/colors';
import { basicStyles } from '../../../../common/styles/styleSheet';

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
        return <LoadingIndicator loadingStatus={loadingStatus} spinnerColor={colors.SPINNER_COL0R} containerStyle={basicStyles.deviceFullViewBgCCC}>
            {this.renderLoginCheck(children, signOut, userDetails, saveUserDetails)}
        </LoadingIndicator>
    }
}