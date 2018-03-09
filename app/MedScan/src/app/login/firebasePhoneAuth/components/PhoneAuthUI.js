import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image } from 'react-native';
import firebase from 'react-native-firebase';
import Toast from 'react-native-simple-toast';
// import { LoginManager } from 'react-native-fbsdk';
// import { GoogleSignin } from 'react-native-google-signin';
import PhoneNumberInput from './PhoneNumberInput';
import VerificationCodeInput from './VerificationCodeInput';
import { basicCompStyles } from '../../../../StyleSheets/styles';
import LoginDetail from '../../loginDetail';

export default class PhoneAuthUI extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      message: null,
      confirmResult: null,
    };
    this.renderMessage = this.renderMessage.bind(this)
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
    this.confirmCode = this.confirmCode.bind(this)
    this.changeNumber = this.changeNumber.bind(this)
    this.resendCode = this.resendCode.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setPhoneNumber(user._user.phoneNumber)
        user.getIdToken(false).then(token => {
          this.props.setTokenId(token);
        }).catch(error => {
          this.setState({
            message: 'Unable to get user details',
            confirmResult: null,
          });
        })
      } else {
        this.setState({
          message: null,
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }



  signIn = (phoneNumber) => {
    this.setState({ message: 'Sending code ...' });
    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult =>  {
        this.setState({ confirmResult, message: 'Code has been sent!' })
      })
      .catch(error => {
        let msg = error.message.substr(0, error.message.indexOf('.'))
        this.setState({ message: `Error during sign in : ${msg}` })
      }
       
      );
  };

  resendCode = () => {
    this.signIn(this.props.userPhoneNumber)
    
  }

  changeNumber = () => {
    this.setState({
      confirmResult: null,
      message: null
    });
  }

  confirmCode = (codeInput) => {
    const { confirmResult } = this.state;
    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Code Confirmed!' });
        })
        .catch(error => {
            let msg = error.message.substr(0, error.message.indexOf('.'))
            this.setState({ message: `Code Confirm Error: ${msg}` })
        });
    }
  };

  signOut = () => {
    this.props.setPhoneNumber('')
    this.props.clearTokenId()
    firebase.auth().signOut();
    // try {
    //   LoginManager.logOut()
    // } catch(e) {}
    // try {
    //   GoogleSignin.signOut()
    // } catch(e) {}
    this.setState({
      message: null,
      confirmResult: null,
    });
  }

  renderMessage = (message) => {
    if (!!message) Toast.show(message, Toast.LONG)
  }

  componentWillReceiveProps() {
    if(this.props.graphcoolTokenStatus == -1) {
      this.setState({
        message: 'Unable to get user details',
        confirmResult: null,
      });
    }
  }

  render() {
    const { confirmResult, message } = this.state;
    const { children, userPhoneNumber, graphcoolTokenStatus } = this.props;
    this.renderMessage(message)
    return (
      <View style={basicCompStyles.fullSize}>
        {graphcoolTokenStatus != 2 && !confirmResult && <PhoneNumberInput signIn={this.signIn} phoneNumber={userPhoneNumber}/>}
        {graphcoolTokenStatus != 2 && confirmResult && <VerificationCodeInput confirmCode={this.confirmCode} resendCode={this.resendCode} changeNumber={this.changeNumber}/>}
        {graphcoolTokenStatus == 2 && <LoginDetail signOut={this.signOut} navigation={this.props.navigation}></LoginDetail>}
      </View>
    );
  }
}

//React.Children.map(children, child => React.cloneElement(child, { signOut: this.signOut }))


//<LoginDetail signOut={this.signOut}>{children}</LoginDetail>