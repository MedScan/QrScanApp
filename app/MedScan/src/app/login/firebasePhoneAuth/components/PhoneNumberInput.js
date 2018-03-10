import React, { PureComponent } from 'react';
import { View, Button, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as Labels from '../../../../common/constants/labels';
import { basicCompStyles, basicStyles } from '../../../../common/styles/styleSheet';
import colors from '../../../../common/constants/colors';

export default class PhoneNumberInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {phoneNumber: props.phoneNumber.length > 0 ? props.phoneNumber : Labels.DEFAULT_PHONE_CODE};
    }

    render() {
        return (
            <KeyboardAvoidingView style={[basicStyles.deviceFullViewBgCCC, basicCompStyles.paddingLR10pc]} behavior="padding" >
                <Text style={[basicStyles.headerBoldTextLight]}>{Labels.LOGIN_TITLE}</Text>
                <View style={basicCompStyles.padding10pc}>
                    <Image style={{width: 150, height: 150}} source={require('../../../../../images/login-icon.png')} />
                </View>
                <Text style={[basicStyles.smallTextLight, basicCompStyles.alignSelfS]}>{Labels.ENTER_PHONE_NUMBER}</Text>
                <TextInput
                    onSubmitEditing={() => this.props.signIn(this.state.phoneNumber)}
                    underlineColorAndroid={colors.UNDERLINE_COLOR} 
                    selectionColor={colors.CURSOR_COLOR}
                    returnKeyType={"send"}
                    style={[basicCompStyles.darkTextInput, basicCompStyles.marginBottom15]}
                    onChangeText={value => this.setState({ phoneNumber: value })}
                    placeholder={Labels.PHONE_NUMBER_PLACEHOLDER}
                    placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                    value={this.state.phoneNumber}
                />
                <TouchableOpacity style={basicStyles.smoothSquareButton} onPress={() => this.props.signIn(this.state.phoneNumber)} >
                    <Text style={basicStyles.headerBoldTextDark}>{Labels.SEND_VERIFICATION_CODE}</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
     
}