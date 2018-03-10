import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import ProfileDetailsUI from "../components/ProfileDetailsUI";

class ProfileDetails extends PureComponent {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)
        this.navigateBack = this.navigateBack.bind(this)
    }

    navigateBack = () => {
        this.props.navigation.dispatch({
            routeName: 'MedicineDetails',
            type: 'GoToRoute',
        })
    }

    signOut = () => {
        this.props.navigation.navigate("Login", {isSignOut: true});
    }

    render() {
        return <ProfileDetailsUI navigateBack={this.navigateBack} signOut={this.signOut} userDetails={this.props.userDetails}/>
    }
}

function mapStateToProps(state) {
    return {
        userDetails: state.userProfileDetail.userDetails,
    }
}

export default connect(mapStateToProps)(ProfileDetails);