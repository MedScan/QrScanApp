import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { loginDetailDataActions } from "../actions/index";
import LoginDetailCheck from '../components/LoginDetailCheck';

class LoginDetail extends PureComponent {

    constructor(props) {
        super(props)
        this.saveUserDetails = this.saveUserDetails.bind(this)
        if(props.userDetails && props.userDetails.phoneNo != null) {
            props.navigation.navigate("Profile");
        } else {
            props.getUserById(this.props.userId)
        }
    }

    componentWillReceiveProps(props) {
        if(props.userDetails.phoneNo != null) {
            props.navigation.navigate("Profile");
        }
    }

    saveUserDetails = (name, email, photoUrl, dob) => {
        this.props.saveUserDetails(this.props.userId, name, email, photoUrl, this.props.userRegisteredPhoneNumber, dob);
    }

    render() {
        const { children, signOut, userDetails, userDetailLoadingStatus } = this.props;
        return <LoginDetailCheck navigation={this.props.navigation} signOut={signOut} userDetails={userDetails} loadingStatus={userDetailLoadingStatus} saveUserDetails={this.saveUserDetails}></LoginDetailCheck>
    }

}

function mapStateToProps(state) {
    return {
        userRegisteredPhoneNumber: state.userRegisteredPhoneNumber,
        userId: state.userId,
        userDetailLoadingStatus: state.userProfileDetail.userDetailLoadingStatus,
        userDetails: state.userProfileDetail.userDetails,
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginDetailDataActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginDetail);
