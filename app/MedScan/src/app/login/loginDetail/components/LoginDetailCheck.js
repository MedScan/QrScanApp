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
        console.log("inside loader ---", userDetails)
        if(userDetails.phoneNo != null) {
            return React.Children.map(children, child => React.cloneElement(child, { signOut: signOut }))
        } else {
            return <LoginDetailUI signOut={signOut} saveUserDetails={saveUserDetails}/>
        }
    }

    render() {
        const { children, signOut, userDetails, loadingStatus, saveUserDetails } = this.props;
        return <LoadingIndicator loadingStatus={loadingStatus} spinnerColor={Colors.MEDIUM_INDICATOR_COLOR} containerStyle={basicStyles.fullContentPad0}>
            {this.renderLoginCheck(children, signOut, userDetails, saveUserDetails)}
        </LoadingIndicator>
    }
}