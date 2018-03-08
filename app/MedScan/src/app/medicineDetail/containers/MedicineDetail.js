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
    }

    navigateToLogin = () => {
        this.props.navigation.navigate("Login");
    }

    tryAnotherMedicine = () => {
        this.props.navigation.navigate("Home");
    }

    render() {
        return <MedicineDetailUI medicineCode={this.props.navigation.state.params.medicineCode} fetchMedicineDetails={this.props.fetchMedicineDetails} tryAnotherMedicine={this.tryAnotherMedicine} navigateToLogin={this.navigateToLogin}/>
    }
}

function mapStateToProps(state) {
    return {
        fetchMedicineDetails: state.fetchMedicineDetails
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(medicineDetailDataAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicineDetail);