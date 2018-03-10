import MedicineDetailUI from "../components/MedicineDetailUI";
import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { medicineDetailDataAction } from "../actions";

class MedicineDetail extends PureComponent {
    static navigationOptions = {
        header: null
      };

    constructor() {
        super()
        this.navigateToLogin = this.navigateToLogin.bind(this)
    }

    componentDidMount() {
        this.props.fetchMedicineDetail(this.props.navigation.state.params.medicineCode);
        this.props.setUserFromLocal();
    }

    navigateToLogin = () => {
        if(this.props.userDetails && this.props.userDetails.phoneNo) {
            this.props.navigation.navigate("Profile");
        } else {
            this.props.navigation.navigate("Login");
        }
    }

    tryAnotherMedicine = () => {
        if(this.props.navigation.state.params.tryAnotherMedicine) {
            console.log("call try another medicine")
            this.props.navigation.state.params.tryAnotherMedicine();
        }
        this.props.navigation.dispatch({
            routeName: 'Home',
            type: 'GoToRoute',
        })
    }

    render() {
        return <MedicineDetailUI userDetails={this.props.userDetails} medicineCode={this.props.navigation.state.params.medicineCode} fetchMedicineDetails={this.props.fetchMedicineDetails} tryAnotherMedicine={this.tryAnotherMedicine} navigateToLogin={this.navigateToLogin}/>
    }
}

function mapStateToProps(state) {
    return {
        fetchMedicineDetails: state.fetchMedicineDetails,
        userDetailLoadingStatus: state.userProfileDetail.userDetailLoadingStatus,
        userDetails: state.userProfileDetail.userDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(medicineDetailDataAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicineDetail);