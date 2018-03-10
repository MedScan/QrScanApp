import React, { PureComponent } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { basicStyles, basicCompStyles } from '../../../../common/styles/styleSheet';
import DatePicker from 'react-native-datepicker'
import { googleLogin } from './FirebaseGoogleAuth';
import { facebookLogin } from './FirebaseFacebookAuth';
import Toast from 'react-native-simple-toast';
import colors from '../../../../common/constants/colors';

const validateEmail = (emailInput) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return reg.test(emailInput)
}

const today = new Date(); 
const dd = today.getDate(); 
const mm = today.getMonth()+1; //January is 0! 
const yyyy = today.getFullYear(); 
if(dd<10){dd='0'+dd} 
if(mm<10){mm='0'+mm} 
const todayStr = yyyy+"-"+mm+"-"+dd; 

export default class LoginDetailUI extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {name: "", email: "", imageUrl: "", date:""};
    }

    saveManualEntry = () => {
        if(this.state.name.length == 0) {
            Toast.show("Please enter your name", Toast.LONG)
            this.refs.nameInput.focus(); 
        } else if (!validateEmail(this.state.email)) {
            Toast.show("Please enter valid email id", Toast.LONG)
            this.refs.emailInput.focus(); 
        } else if (this.state.date.length == 0) {
            Toast.show("Please select your birth date", Toast.LONG)
        } else {
            const dob = new Date(this.state.date);
            const dobStr = dob.toISOString();
            this.props.saveUserDetails(this.state.name, this.state.email, this.state.imageUrl, dobStr);
            // save in db
        }
    }

    setUserDetail = (name, email, photoUrl) => {
        this.setState({
            name: name, 
            email: email, 
            imageUrl: photoUrl
        })
    }

    render() {
        const { signOut, saveUserDetails } = this.props;
        return <KeyboardAvoidingView style={[basicStyles.deviceFullViewBgCCC, basicCompStyles.paddingLR10pc]} behavior="padding">
            <Text style={basicStyles.headerBoldTextLight}>{"Congrats, Logged in successfully!!!"}</Text>
            <Text style={[basicStyles.headerTextLight, basicCompStyles.paddingT10pc]}>{"Get bio details from"}</Text>
            <View style={basicCompStyles.flexRowNC}>
                <TouchableOpacity style={basicCompStyles.padding10pc} onPress={() => googleLogin(this.setUserDetail)}>
                    <Image style={{width: 80, height: 80}} source={require('../../../../../images/google-logo.png')} />
                    <Text style={[basicStyles.mediumTextLight, {textAlign: 'center', paddingTop: 5}]}>{"Google"}</Text>
                </TouchableOpacity>
                <Text style={basicStyles.headerTextLight}>{"Or"}</Text>
                <TouchableOpacity style={basicCompStyles.padding10pc} onPress={() => facebookLogin(this.setUserDetail)}>
                    <Image style={{width: 80, height: 80}} source={require('../../../../../images/facebook-logo.png')} />
                    <Text style={[basicStyles.mediumTextLight, {textAlign: 'center', paddingTop: 5}]}>{"Facebook"}</Text>
                </TouchableOpacity>
            </View>
            <Text style={basicStyles.mediumTextLight}>{"Or enter manually"}</Text> 
            <TextInput
                ref="nameInput"
                onSubmitEditing={(event) => { 
                    this.refs.emailInput.focus(); 
                }}
                returnKeyType={"next"}
                autoCorrect={false}
                underlineColorAndroid={colors.UNDERLINE_COLOR} 
                selectionColor={colors.CURSOR_COLOR}
                style={[basicCompStyles.darkTextInput, basicCompStyles.marginBottom15]}
                onChangeText={value => this.setState({ name : value })}
                placeholder={"Name"}
                placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                value={this.state.name}
            />
            <TextInput
                ref="emailInput"
                onSubmitEditing={this.saveManualEntry}
                returnKeyType={"done"}
                autoCorrect={false}
                underlineColorAndroid={colors.UNDERLINE_COLOR} 
                selectionColor={colors.CURSOR_COLOR}
                style={[basicCompStyles.darkTextInput, basicCompStyles.marginBottom15]}
                onChangeText={value => this.setState({ email: value })}
                placeholder={"Email"}
                placeholderTextColor={colors.PLACEHOLDER_COLOR} 
                value={this.state.email}
            />
            <DatePicker
                style={[ basicCompStyles.marginBottom15, {borderWidth : 0, alignSelf: 'flex-start'}]}
                date={this.state.date}
                mode="date"
                placeholder="Date of birth"
                format="YYYY-MM-DD"
                maxDate={todayStr}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                // showIcon={false}
                customStyles={{
                    dateInput: {borderWidth: 0, marginLeft: 36, justifyContent: 'center'},
                    dateText: {color : "white"},
                    placeholderText: {color : colors.PLACEHOLDER_COLOR},
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
            <TouchableOpacity style={[basicStyles.smoothSquareButton, basicCompStyles.alignSelfS]} onPress={this.saveManualEntry} >
                <Text style={[basicStyles.headerBoldTextDark, {textAlign: 'center'}]}>{"Save"}</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={[basicStyles.squareButton, basicCompStyles.absoluteBottomLeftRight0]} onPress={signOut} > 
                <Text style={[basicStyles.headerBoldTextDark, basicCompStyles.alignSelfC, {textAlign: 'center'}]}>{"Sign Out"}</Text>
            </TouchableOpacity> 
        </KeyboardAvoidingView>
    }
}

 //