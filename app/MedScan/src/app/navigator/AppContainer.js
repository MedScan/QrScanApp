import React, { PureComponent } from "react";
import { StatusBar, View } from "react-native";
import BaseNavigator from "./BaseNavigator";
import { basicStyles } from "../../common/styles/styleSheet";

class AppContainer extends PureComponent {

    componentDidMount() {
        // StatusBar.setHidden(GeneralConstants.IS_STATUS_BAR_HIDDEN);
    }

    render() {
        return <View style={basicStyles.deviceFullView}>
            <StatusBar
                backgroundColor="rgba(0, 0, 0, 0.2)"
                barStyle="light-content"
                translucent={true}
            />
            <BaseNavigator/>
        </View>        
    }    
}

export default AppContainer;