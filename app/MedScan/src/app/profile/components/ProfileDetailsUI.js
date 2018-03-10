import React, { PureComponent } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {basicStyles, basicCompStyles} from '../../../common/styles/styleSheet';

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getDateFormatted = (dateStr) => {
    let date = new Date(dateStr);
    let dd = date.getDate();
    if(dd < 10) {dd = "0" + dd}
    return `${dd} - ${monthNames[date.getMonth()]} - ${date.getFullYear()}`
}

function sentenceCase (str) {
    if (!str || (str===null) || (str===''))
         return "";
    else
     str = str.toString();
  
   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export default class ProfileDetailsUI extends PureComponent {

    renderImage = (imageUrl) => {
        if(imageUrl) {
            return <Image style={{width: 150, height: 150, borderRadius: 75}} source={{uri : imageUrl}} />
        } else {
            return <Image style={{width: 150, height: 150}} source={require('../../../../images/login-icon.png')} />
        }
    }

    render() {
        const {userDetails, navigateBack, signOut} = this.props;
        return <View style={[basicStyles.deviceFullView, basicCompStyles.darkerBlueBG]}>
            <View style={[basicCompStyles.darkBlueBG, basicCompStyles.statusBarPadding, basicCompStyles.alignSelfS, {height: 70}]}>
                <View style={[basicCompStyles.fullSize, basicCompStyles.padding10, basicCompStyles.flexRowNC]}>
                    <TouchableOpacity onPress={navigateBack}>
                        <Image style={{width: 30, height: 30}} source={require('../../../../images/back-arrow.png')} resizeMode="contain"/>
                    </TouchableOpacity>
                    <Text style={[basicStyles.headerTextLight, {paddingLeft: 10}]}>Profile</Text>
                </View>
            </View>
            <View style={[basicCompStyles.flexColumnCC, basicCompStyles.fullSize]}>
                <View style={[basicCompStyles.margin10pc, basicCompStyles.flexColumnCC, {width: 150, height: 150, borderRadius: 75}]}>
                    {this.renderImage(userDetails.imageUrl)}
                </View>
                <Text style={[basicStyles.titleTextLight]}>{sentenceCase(userDetails.name)}</Text>
                <Text style={[basicStyles.smallTextLight]}>{userDetails.email}</Text>
                <Text style={[basicStyles.smallTextLight]}>{userDetails.phoneNo}</Text>
                <View style={[basicCompStyles.flexRowNC, basicCompStyles.paddingT10pc]}>
                    <Image style={{width: 60, height: 60}} source={require('../../../../images/baby.png')} resizeMode="contain"/>
                    <Text style={[basicStyles.mediumTextLight, {paddingLeft: 10}]}>{getDateFormatted(userDetails.dateOfBirth)}</Text>
                </View>
            </View>
            <TouchableOpacity style={basicStyles.curvedView} onPress={signOut}>
                <Text style={basicStyles.buttonTextLight}>Sign out</Text>
            </TouchableOpacity>
        </View>
    }
}