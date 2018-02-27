import MedicineDetailUI from "../components/MedicineDetailUI";
import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { medicineDetailDataAction } from "../actions";

class MedicineDetail extends PureComponent {

    componentDidMount() {
        this.props.fetchMedicineDetail(this.props.medicineCode);
    }

    render() {
        return <MedicineDetailUI medicineCode={this.props.medicineCode} fetchMedicineDetails={this.props.fetchMedicineDetails} tryAnotherMedicine={this.props.tryAnotherMedicine}/>
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