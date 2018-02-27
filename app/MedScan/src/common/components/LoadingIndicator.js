import React, {PureComponent} from "react";
import {View, Text} from "react-native";
import * as GeneralConstants from '../constants/generalConstants';
import { Spinner } from 'native-base';

const renderItem = (loadingStatus, spinnerColor, children) => {
    if(loadingStatus != GeneralConstants.LOADED) {
        return <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
            <Spinner color={spinnerColor} />
        </View>
    } else {
        return children
    }
}

const LoadingIndicator = (props) => {
    return <View style={props.containerStyle}>
        {renderItem(props.loadingStatus, props.spinnerColor, props.children)}
    </View>        
}

export default LoadingIndicator;