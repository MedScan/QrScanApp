import React, { PureComponent } from 'react';
import { View, Button, Text, TextInput, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { basicStyles, basicCompStyles } from '../../../../StyleSheets/styles';
import * as Labels from '../../../../Constants/Labels';
import * as Colors from '../../../../Constants/Colors';
import * as IconName from '../../../../Constants/IconName';

export default class VerificationCodeInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {codeInput: ''};
    }

    render() {
        return (
            <View style={[basicStyles.fullContentNC, basicCompStyles.padding10pc]}>
                <Text style={basicStyles.darkHeaderText}>{Labels.VERIFY_PHONE_TITLE}</Text>
                {/* <Icon style={basicCompStyles.padding10pc} name={IconName.CHAT_ICON_NAME} size={100} color={Colors.HEADER_BACKGROUND_COLOR} /> */}
                <Text style={[basicStyles.darkSmallText, basicCompStyles.alignSelfS]}>{Labels.ENTER_VERIFICATION_CODE}</Text>
                <TextInput
                    onSubmitEditing={() => this.props.confirmCode(this.state.codeInput)}
                    underlineColorAndroid={Colors.DARK_TEXT_COLOR} 
                    selectionColor={Colors.DARK_TEXT_COLOR}
                    style={basicCompStyles.darkTextInput}
                    onChangeText={value => this.setState({ codeInput: value })}
                    placeholder={Labels.VERIFICATION_CODE_PLACEHOLDER}
                    placeholderTextColor={Colors.IN_ACTIVE_ICON_COLOR} 
                    value={this.state.codeInput}
                />
                <TouchableOpacity style={basicCompStyles.alignSelfFe} onPress={this.props.resendCode} >
                    <Text style={basicStyles.darkSmallText}>{Labels.RESEND_CODE}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[basicCompStyles.marginTop15, basicStyles.darkButton]} onPress={() => this.props.confirmCode(this.state.codeInput)} >
                    <Text style={basicStyles.headerText}>{Labels.CONFIRM_CODE}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.changeNumber} >
                    <Text style={basicStyles.darkSmallText}>{Labels.CHANGE_PHONE_NUMBER}</Text>
                </TouchableOpacity>
            </View>
        );
    }
     
}