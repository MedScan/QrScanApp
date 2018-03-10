import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { basicStyles, basicCompStyles } from '../../../common/styles/styleSheet';
import LoadingIndicator from '../../../common/components/LoadingIndicator';
import colors from '../../../common/constants/colors';

const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

export default class MedicineDetailUI extends PureComponent {
    renderDetail = (title,description) => {
        return <View style={[ {alignItems: 'flex-start', paddingTop: 20}]}>
            <Text style={basicStyles.headerTextLight}>{title}</Text>
            <Text style={basicStyles.mediumTextLight}>{`           ${description}`}</Text>
        </View> 
    }

    renderListDetail = (title,description) => {
        return <View key={title} style={[ {alignItems: 'flex-start', paddingTop: 20, height: ((description.length * 15) + 60)}]}>
            <Text style={basicStyles.headerTextLight}>{title}</Text>
            <FlatList
                key={title}
                data={description}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Text style={basicStyles.mediumTextLight}>{`           ${item}`}</Text>}
            />
        </View> 
    }

    renderMedDetails = () => {
        return <View style={[basicCompStyles.fullSize, basicCompStyles.padding10, {alignItems: 'flex-start', justifyContent: 'flex-start'}]}>
            {this.renderCompatability()}
            <Text style={[basicStyles.titleTextLight]}>{this.props.fetchMedicineDetails.detail.name}</Text>
            <ScrollView>
                {this.renderDetail('Description', this.props.fetchMedicineDetails.detail.description)}
                {this.renderDetail('Dosage', this.props.fetchMedicineDetails.detail.dosing)}
                {this.renderDetail('Age limit', `Above ${this.props.fetchMedicineDetails.detail.ageLowerLimit}`)}
                {this.renderListDetail('Side effets', this.props.fetchMedicineDetails.detail.sideEffects)}
                {this.renderListDetail('Usage', this.props.fetchMedicineDetails.detail.defaultUsage)}
            </ScrollView>
        </View>
    }

    renderNoDetails = () => {
        return <View style={[basicStyles.innerView, basicCompStyles.fullSize, basicCompStyles.flexColumnCC]}>
            <Text style={basicStyles.titleTextLight}>No details found</Text>
        </View> 
    }

    renderItems = () => {
        if(this.props.fetchMedicineDetails.detail.name) {
            return this.renderMedDetails()
        } else {
            return this.renderNoDetails()
        }
    }

    renderCompatability = () => {
        let buttonLabel = "Login to check compatability";
        let color = colors.DARK_BG
        if(this.props.userDetails && this.props.userDetails.dateOfBirth) {
            if(getAge(this.props.userDetails.dateOfBirth) >= this.props.fetchMedicineDetails.detail.ageLowerLimit) {
                buttonLabel = "Compatable to you"
                color = colors.ACCEPT_COLOR
            } else  {
                buttonLabel = "Not compatable to you"
                color = colors.REJECT_COLOR
            }
        }
        return <TouchableOpacity style={[basicStyles.curvedView, basicCompStyles.alignSelfS, {backgroundColor : color}]} onPress={this.props.navigateToLogin}>
            <Text style={basicStyles.buttonTextLight}>{buttonLabel}</Text>
        </TouchableOpacity>
    }

  render() {
    return <View style={basicCompStyles.darkBlueBG}>
        <LoadingIndicator containerStyle={[basicStyles.deviceFullView, basicCompStyles.black50pc]} spinnerColor={colors.SPINNER_COL0R} loadingStatus={this.props.fetchMedicineDetails.loadingStatus}>
            <View style={[basicCompStyles.darkBlueBG, basicCompStyles.statusBarPadding, {height: 70}]}>
                <View style={[basicCompStyles.fullSize, basicCompStyles.padding10, basicCompStyles.flexColumnCS]}>
                    <Text style={[basicStyles.headerTextLight]}>Medicine details</Text>
                </View>
            </View>
            
            {this.renderItems()}
            <TouchableOpacity style={basicStyles.curvedView} onPress={this.props.tryAnotherMedicine}>
                <Text style={basicStyles.buttonTextLight}>Scan another medicine</Text>
            </TouchableOpacity>
        </LoadingIndicator>
    </View>
  }
}