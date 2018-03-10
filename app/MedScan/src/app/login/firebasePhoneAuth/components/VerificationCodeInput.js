import React, { PureComponent } from 'react';
import { View, Button, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as Labels from '../../../../common/constants/labels';
import { basicCompStyles, basicStyles } from '../../../../common/styles/styleSheet';
import colors from '../../../../common/constants/colors';

export default class VerificationCodeInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {codeInput: ''};
    }

    render() {
        return (
            <KeyboardAvoidingView style={[basicStyles.deviceFullViewBgCCC, basicCompStyles.paddingLR10pc]} behavior="padding" >
                <Text style={[basicStyles.headerBoldTextLight]}>{Labels.VERIFY_PHONE_TITLE}</Text>
                <View style={basicCompStyles.padding10pc}>
                    <Image style={{width: 150, height: 150}} source={require('../../../../../images/otp-icon.png')} resizeMode="cover"/>
                </View>
                <Text style={[basicStyles.smallTextLight, basicCompStyles.alignSelfS]}>{Labels.ENTER_VERIFICATION_CODE}</Text>
                <TextInput
                    onSubmitEditing={() => this.props.confirmCode(this.state.codeInput)}
                    underlineColorAndroid={colors.UNDERLINE_COLOR} 
                    selectionColor={colors.CURSOR_COLOR}
                    style={basicCompStyles.darkTextInput}
                    onChangeText={value => this.setState({ codeInput: value })}
                    placeholder={Labels.VERIFICATION_CODE_PLACEHOLDER}
                    placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                    value={this.state.codeInput}
                />
                <TouchableOpacity style={basicCompStyles.alignSelfFe} onPress={this.props.resendCode} >
                    <Text style={basicStyles.smallTextLight}>{Labels.RESEND_CODE}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[basicCompStyles.marginTop15, basicStyles.smoothSquareButton]} onPress={() => this.props.confirmCode(this.state.codeInput)} >
                    <Text style={basicStyles.headerBoldTextDark}>{Labels.CONFIRM_CODE}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.changeNumber} >
                    <Text style={basicStyles.smallTextLight}>{Labels.CHANGE_PHONE_NUMBER}</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
     
}