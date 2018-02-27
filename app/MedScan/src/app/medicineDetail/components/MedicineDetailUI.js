import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { basicStyles, basicCompStyles } from '../../../common/styles/styleSheet';
import LoadingIndicator from '../../../common/components/LoadingIndicator';

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
        return <ScrollView>
            <View style={[basicCompStyles.fullSize, basicCompStyles.padding10, {alignItems: 'flex-start', justifyContent: 'flex-start'}]}>
                <Text style={[basicStyles.titleTextLight]}>{this.props.fetchMedicineDetails.detail.name}</Text>
                {this.renderDetail('Describtion', this.props.fetchMedicineDetails.detail.description)}
                {this.renderDetail('Dosage', this.props.fetchMedicineDetails.detail.dosing)}
                {this.renderDetail('Age limit', `Above ${this.props.fetchMedicineDetails.detail.ageLowerLimit}`)}
                {/* <View key={'title'} style={[ {alignItems: 'flex-start', paddingTop: 20}]}>
                    <Text style={basicStyles.headerTextLight}>{'Usage'}</Text>
                    <FlatList
                        key={'title'}
                        data={this.props.fetchMedicineDetails.detail.defaultUsage}
                        keyExtractor={(item, index) => index.toString()}
                        style={{height: 150, backgroundColor: 'red'}}
                        renderItem={({item}) => <Text style={basicStyles.mediumTextLight}>{`           ${item}`}</Text>}
                    />
                </View> */}
                {this.renderListDetail('Side effets', this.props.fetchMedicineDetails.detail.sideEffects)}
                {this.renderListDetail('Usage', this.props.fetchMedicineDetails.detail.defaultUsage)}
            </View>
        </ScrollView>
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

  render() {
    return <View style={basicCompStyles.darkBlueBG}>
        <LoadingIndicator containerStyle={[basicStyles.deviceFullView, basicCompStyles.black50pc]} spinnerColor={"#ffffff"} loadingStatus={this.props.fetchMedicineDetails.loadingStatus}>
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