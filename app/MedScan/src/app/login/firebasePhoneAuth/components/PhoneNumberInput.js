import React, { PureComponent } from 'react';
import { View, Button, Text, TextInput, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { basicStyles, basicCompStyles } from '../../../../StyleSheets/styles';
import * as Labels from '../../../../Constants/Labels';
import * as Colors from '../../../../Constants/Colors';
import * as IconName from '../../../../Constants/IconName';

export default class PhoneNumberInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {phoneNumber: props.phoneNumber.length > 0 ? props.phoneNumber : Labels.DEFAULT_PHONE_CODE};
    }

    render() {
        return (
            <View style={[basicStyles.fullContentNC, basicCompStyles.padding10pc]}>
                <Text style={basicStyles.darkHeaderText}>{Labels.LOGIN_TITLE}</Text>
                {/* <Icon style={basicCompStyles.padding10pc} name={IconName.LOG_IN_ICON_NAME} size={100} color={Colors.HEADER_BACKGROUND_COLOR} /> */}
                <Text style={[basicStyles.darkSmallText, basicCompStyles.alignSelfS]}>{Labels.ENTER_PHONE_NUMBER}</Text>
                <TextInput
                    onSubmitEditing={() => this.props.signIn(this.state.phoneNumber)}
                    underlineColorAndroid={Colors.DARK_TEXT_COLOR} 
                    selectionColor={Colors.DARK_TEXT_COLOR}
                    returnKeyType={"send"}
                    style={[basicCompStyles.darkTextInput, basicCompStyles.marginBottom15]}
                    onChangeText={value => this.setState({ phoneNumber: value })}
                    placeholder={Labels.PHONE_NUMBER_PLACEHOLDER}
                    placeholderTextColor={Colors.IN_ACTIVE_ICON_COLOR} 
                    value={this.state.phoneNumber}
                />
                <TouchableOpacity style={basicStyles.darkButton} onPress={() => this.props.signIn(this.state.phoneNumber)} >
                    <Text style={basicStyles.headerText}>{Labels.SEND_VERIFICATION_CODE}</Text>
                </TouchableOpacity>
            </View>
        );
    }
     
}