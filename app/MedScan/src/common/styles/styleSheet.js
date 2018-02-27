import Dimensions from 'Dimensions';
import { StyleSheet , Platform} from 'react-native';
import * as Colors from '../constants/colors';
import * as Sizes from '../constants/sizes';

export const fullHeight = Dimensions.get('window').height;
export const fullWidth = Dimensions.get('window').width;
export const width10pc = fullWidth * 0.1;

const fonts = StyleSheet.create({
    default: {
        ...Platform.select({
            ios: { 
                fontFamily: 'Arial', 
            }, 
            android: { 
                fontFamily: 'Roboto' 
            }
        })
    },
});

const sizes = StyleSheet.create({
    fullViewSize: {
        width: fullWidth,
        height: fullHeight,
    },
    fullDeviceWidth: {
        width: fullWidth
    },
});

export const basicCompStyles = StyleSheet.create({
    flexColumnCC: { 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    flexColumnCS: { 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'stretch'
    },
    flexColumnNC: { 
        flexDirection: 'column', 
        alignItems: 'center'
    },
    flexColumnNFs: {
        flexDirection: 'column', 
        alignItems: 'flex-start'
    },
    flexRowSbC: {
        flexDirection: "row", 
        justifyContent:"space-between", 
        alignItems:"center"
    },
    flexRowNC: {
        flexDirection: "row", 
        alignItems:"center"
    },
    flexRow: {
        flexDirection: "row", 
    },
    alignSelfS: {
        alignSelf: 'stretch',
    },
    alignSelfFe: {
        alignSelf: 'flex-end',
    }, 

    statusBarPadding: {
        paddingTop: 23
    },
    padding10pc: {
        padding: width10pc
    },
    padding10: {
        padding: 10
    },
    marginBottom10pc: {
        marginBottom: width10pc
    },
    margin10: {
        margin: 10
    },
        

    absoluteAndBlack: {
        backgroundColor: 'black', 
        position: 'absolute'
    },
    absoluteBottomRight20: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    absoluteBottom20: {
        position: 'absolute',
        bottom: 20,
    },
    absoluteBottomLeft0: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    absoluteTopLeft0: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    absoluteTop5Right0: {
        position: 'absolute', 
        top: 5, 
        right: 0
    },
    absoluteTopLeftRight0: {
        position: 'absolute', 
        top: 0, 
        right: 0, 
        left: 0
    },


    black50pc: {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    darkBlueBG: {
        backgroundColor: "#673AB7"
    },
    
    
    Padding20: {
        padding: 20,
    },
    paddingLR10: {
        paddingLeft: 10, 
        paddingRight: 10
    },
    marginBottom15: {
        marginBottom: 15,
    },
    marginTop15: {
        marginTop: 15,
    },
    fullSize: {
        flex: 1
    },

    curvedBorder25: {
        borderRadius: 25
    },

    bigHeaderText: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'white'
    },
    headerText: {
        fontSize: 20, 
        color: 'white'
    },
    mediumBoldText: {
        fontSize: 25, 
        fontWeight: 'bold', 
    },
    titleText: {
        fontSize: 16, 
        color: 'white'
    },
    smallText: {
        fontSize: 12, 
    },
    mediumText: {
        fontSize: 14, 
        color: 'white'
    }
});

export const basicStyles = {
    deviceFullView: [
        sizes.fullViewSize
    ],
    absoluteTopFullDeviceWidth: [
        sizes.fullDeviceWidth,
        basicCompStyles.absoluteTopLeft0,
        basicCompStyles.statusBarPadding,
        basicCompStyles.black50pc
    ],
    absoluteBottomFullDeviceWidth: [
        sizes.fullDeviceWidth,
        basicCompStyles.absoluteBottomLeft0,
        basicCompStyles.black50pc,
        basicCompStyles.padding10pc,
        basicCompStyles.flexColumnCC
    ],
    titleTextLight: [
        fonts.default,
        basicCompStyles.bigHeaderText,

    ],
    headerTextLight: [
        fonts.default,
        basicCompStyles.headerText,

    ],
    buttonTextLight: [
        fonts.default,
        basicCompStyles.titleText,

    ],
    mediumTextLight: [
        fonts.default,
        basicCompStyles.mediumText,

    ],
    innerView: [
        basicCompStyles.padding10pc,
        basicCompStyles.flexColumnCC
    ],
    curvedView: [
        basicCompStyles.darkBlueBG, 
        basicCompStyles.margin10,
        basicCompStyles.curvedBorder25,
        basicCompStyles.flexColumnCC,
        basicCompStyles.padding10,
    ]
}
