import Dimensions from 'Dimensions';
import { StyleSheet , Platform} from 'react-native';
import * as Colors from '../Constants/Colors';
import * as Sizes from '../Constants/Sizes';

export const fullHeight = Dimensions.get('window').height;
export const fullWidth = Dimensions.get('window').width;
export const contentFullHeight = fullHeight - (Sizes.HEADER_HEIGHT * 2);
export const pageContentFullHeight = fullHeight - Sizes.HEADER_HEIGHT;
export const fullFilterHeight = fullHeight * 0.6;
export const fullFilterHeightNegate = fullFilterHeight * -1;
export const halfFilterHeightNegate = fullFilterHeightNegate / 2;
export const fullFilterWidth = fullFilterHeight * 2;
export const height30pc = fullHeight * 0.3;
export const width20pc = fullWidth * 0.2;
export const width10pc = fullWidth * 0.1;
const contentFullWidth = fullWidth - (Sizes.DEFAULT_PADDING * 2);
const cardViewWidth = (contentFullWidth - (Sizes.DEFAULT_PADDING * 3) - (Sizes.DEFAULT_BORDER_WIDTH *2)) / 2;
const cardImageViewWidth = cardViewWidth - (Sizes.DEFAULT_PADDING * 2) - (Sizes.DEFAULT_BORDER_WIDTH *2);
const cardImageWidth = cardImageViewWidth - (Sizes.DEFAULT_PADDING * 2);
const cardImageHeight = cardImageWidth * 2 / 3;
const halfHeight = fullHeight/2;
const halfWidth = fullWidth/2;

export const sizes = StyleSheet.create({
    fullViewSize: {
        width: fullWidth,
        height: fullHeight,
    },
    halfViewSize: {
        width: fullWidth,
        height: halfHeight,
    },
    fullWidth: {
        width: fullWidth,
    },
    pageHeader: {
        width: fullWidth,
        height: Sizes.HEADER_HEIGHT,
    },
    contentFullHeight: {
        width: fullWidth,
        height: contentFullHeight,
        padding: Sizes.DEFAULT_PADDING
    },
    contentFullHeightPadLR: {
        width: fullWidth,
        height: contentFullHeight,
        paddingLeft: Sizes.DEFAULT_PADDING,
        paddingRight: Sizes.DEFAULT_PADDING,
    },
    contentFullHeightPad0: {
        width: fullWidth,
        height: contentFullHeight,
    },
    pageContentFullHeightPad0: {
        width: fullWidth,
        height: pageContentFullHeight,
    },
    height30pc: {
        height: height30pc
    },
    mediumCircle: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    subHeader: {
        width: contentFullWidth,
        height: 40, 
    },
    subContent: {
        width: contentFullWidth,
    },
    cardView: {
        width: cardViewWidth
    },
    cardImageView: {
        width: cardImageViewWidth
    },
    cardImage: {
        width: cardImageWidth,
        height: cardImageHeight,
    },
    listImage: {
        width: 40, 
        height: 40
    },
    barHeight: {
        height: Sizes.BAR_SIZE
    },
});

export const fonts = StyleSheet.create({
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
    alignSelfC: {
        alignSelf: 'center',
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
    absoluteBottomMiddle: {
        position: 'absolute',
        bottom: 20,
        left: halfWidth-20
    },
    absoluteBottomLeft0: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    absoluteBottomLeftRight0: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
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


    
    defaultBorder: {
        borderWidth: Sizes.DEFAULT_BORDER_WIDTH,
        borderColor: Colors.LIGHT_BACKGROUND_COLOR,
    },
    defaultDarkBorderRight: {
        borderRightWidth: Sizes.DEFAULT_BORDER_WIDTH,
        borderColor: Colors.DARK_HIGHLIGHT_COLOR,
    },
    defaultDarkBorder: {
        borderWidth: Sizes.DEFAULT_BORDER_WIDTH,
        borderColor: Colors.DARK_HIGHLIGHT_COLOR,
    },
    defaultDarkBorderBottem: {
        borderBottomWidth: Sizes.DEFAULT_BORDER_WIDTH,
        borderColor: Colors.DARK_HIGHLIGHT_COLOR,
    },
    defaultPadding: {
        padding: Sizes.DEFAULT_PADDING,
    },
    Padding10: {
        padding: Sizes.PADDING_10,
    },
    Padding20: {
        padding: 20,
    },
    halfPadding: {
        padding: Sizes.HALF_DEF_PADDING,
    },
    padding20pc: {
        padding: width20pc,
    },
    padding10pc: {
        padding: width10pc,
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

    activeBackGround: {
        backgroundColor: Colors.ACTIVE_ICON_COLOR
    },
    blackBackGround: {
        backgroundColor: 'black'
    },
    greenBackGround: { 
        backgroundColor: 'green'
    },
    contentBackGround: {
        backgroundColor: Colors.CONTENT_BACKGROUND_COLOR,
    },
    darkBackGround: {
        backgroundColor: Colors.MEDIUM_TEXT_COLOR,
    },
    lightBackGround: {
        backgroundColor: Colors.LIGHT_BACKGROUND_COLOR,
    },
    transparentBackGround: {
        backgroundColor: Colors.TRANSPARENT
    },


    darkTextColor: {
        color: Colors.MEDIUM_TEXT_COLOR
    },
    darkerTextColor: {
        color: Colors.DARK_TEXT_COLOR
    },
    lightTextColor: {
        color: Colors.LIGHT_TEXT_COLOR
    },

    defaultBorderRadius: {
        borderRadius: Sizes.DEFAULT_BORDER_RADIUS
    },


    pageHeader: {
        borderBottomWidth: Sizes.DEFAULT_BORDER_WIDTH,
        borderColor: Colors.IN_ACTIVE_ICON_COLOR, 
        backgroundColor: Colors.HEADER_BACKGROUND_COLOR,
        padding: Sizes.DEFAULT_PADDING,
    },
    subHeader: {  
        backgroundColor: Colors.LIGHT_BACKGROUND_COLOR, 
        padding: Sizes.DEFAULT_PADDING,
    },
    dishListView: {
        backgroundColor: Colors.ACTIVE_ICON_COLOR, 
        padding: Sizes.DEFAULT_PADDING
    },
    dishCardView: {
        backgroundColor: Colors.ACTIVE_ICON_COLOR, 
        padding: Sizes.DEFAULT_PADDING, 
    },
    subContent: { 
        backgroundColor: Colors.ACTIVE_ICON_COLOR,
    },
    subContentPad: { 
        backgroundColor: Colors.ACTIVE_ICON_COLOR,
        padding: Sizes.DEFAULT_PADDING,
    },

    bigHeaderText: {
        fontSize: 40, 
        fontWeight: 'bold', 
        color: 'white'
    },
    headerText: {
        fontSize: 16, 
        fontWeight: 'bold', 
    },
    mediumBoldText: {
        fontSize: 25, 
        fontWeight: 'bold', 
    },
    titleText: {
        fontSize: 16, 
        paddingRight: 10
    },
    smallText: {
        fontSize: 12, 
    },
    mediumText: {
        fontSize: 25, 
        color: 'white'
    },
    defaultIcon: {
        fontSize: Sizes.DEFAULT_ICON_SIZE, 
    },
    mediumIcon: {
        fontSize: Sizes.MEDIUM_ICON_SIZE, 
    },

    darkTextInput: {
        height: 40,
        color: Colors.DARK_TEXT_COLOR, 
        alignSelf: 'stretch'
    }
});

export const basicStyles = {
    bigHeaderText: [
        fonts.default , 
        basicCompStyles.bigHeaderText
    ],
    mediumText: [
        fonts.default , 
        basicCompStyles.mediumText
    ],
    headerText: [
        fonts.default , 
        basicCompStyles.headerText,
        basicCompStyles.lightTextColor
    ],
    paddedHeaderText: [
        fonts.default , 
        basicCompStyles.headerText,
        basicCompStyles.lightTextColor,
        basicCompStyles.paddingLR10
    ],
    darkHeaderText: [
        fonts.default , 
        basicCompStyles.headerText,
        basicCompStyles.darkTextColor
    ],
    darkMediumHeaderText: [
        fonts.default , 
        basicCompStyles.mediumBoldText,
        basicCompStyles.darkTextColor
    ],
    darkTitleText: [
        fonts.default , 
        basicCompStyles.titleText,
        basicCompStyles.darkerTextColor
    ],
    darkSmallText: [
        fonts.default , 
        basicCompStyles.smallText,
        basicCompStyles.darkerTextColor
    ],


    darkButton: [
        basicCompStyles.darkBackGround,
        basicCompStyles.Padding10,
        basicCompStyles.defaultBorderRadius,
    ],
    darkButtonRad0: [
        basicCompStyles.darkBackGround,
        basicCompStyles.Padding10,
    ],

    darkDefaultIcon: [
        fonts.default , 
        basicCompStyles.defaultIcon,
        basicCompStyles.darkerTextColor
    ],
    darkMediumIcon: [
        fonts.default , 
        basicCompStyles.mediumIcon,
        basicCompStyles.darkerTextColor
    ],


    fullSizeColumnCC: [
        sizes.fullViewSize,
        basicCompStyles.flexColumnCC,
        basicCompStyles.blackBackGround
    ],
    fullSizeAbsolute: [
        sizes.fullViewSize, 
        basicCompStyles.absoluteAndBlack
    ],
    fullContentSizeAbsolute: [
        sizes.contentFullHeightPad0, 
        basicCompStyles.absoluteBottomLeft0
    ],


    pageHeader: [
        sizes.pageHeader,
        basicCompStyles.pageHeader
    ],
    subHeader: [
        sizes.subHeader,
        basicCompStyles.flexRowSbC,
        basicCompStyles.subHeader
    ],


    activeBackGround: [
        basicCompStyles.activeBackGround
    ],
    fullFlexColumnCCPad10: [
        basicCompStyles.fullSize,
        basicCompStyles.activeBackGround,
        basicCompStyles.flexColumnCC,
        basicCompStyles.Padding10
    ],
    fullWidthFlexRow: [
        basicCompStyles.flexRow,
        sizes.fullWidth,
    ],
    fullContent: [
        sizes.contentFullHeight,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnCC,
    ],
    fullContentNC: [
        sizes.contentFullHeight,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnNC,
    ],
    fullContentStretched: [
        sizes.contentFullHeight,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnCS,
    ],
    fullContentPadLR: [
        sizes.contentFullHeightPadLR,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnCC,
    ],
    fullContentPad0: [
        sizes.contentFullHeightPad0,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnCC,
    ],
    fullPageContentPad0: [
        sizes.pageContentFullHeightPad0,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnCC,
    ],
    halfContent: [
        sizes.halfViewSize,
        basicCompStyles.contentBackGround,
        basicCompStyles.flexColumnCC,
    ],
    absoluteBottomCircle: [
        sizes.mediumCircle,
        basicCompStyles.flexColumnCC,
        basicCompStyles.darkBackGround,
        basicCompStyles.absoluteBottomRight20
    ],
    absoluteBottomMiddleCircle: [
        sizes.mediumCircle,
        basicCompStyles.flexColumnCC,
        basicCompStyles.darkBackGround,
        basicCompStyles.absoluteBottomMiddle
    ],
    vegImageView: [
        basicCompStyles.absoluteBottomLeft0,
        
    ],
    subContent: [
        sizes.subContent,
        basicCompStyles.subContent,
        basicCompStyles.defaultBorder
    ],
    subContentCardView: [
        sizes.subContent,
        basicCompStyles.subContent,
        basicCompStyles.defaultBorder,
        basicCompStyles.halfPadding
    ],
    container30pc: [
        sizes.height30pc,
        basicCompStyles.flexColumnCC
    ],
    


    aboutUsHeader: [
        basicCompStyles.subHeader
    ],
    aboutUsContent: [
        basicCompStyles.fullSize,
        basicCompStyles.subContentPad
    ],



    bar: [
        basicCompStyles.absoluteTopLeft0,
        basicCompStyles.darkBackGround,
        sizes.barHeight
    ],
    barTrack: [
        sizes.barHeight,
        basicCompStyles.lightBackGround,
    ],
    barContainer: [
        basicCompStyles.absoluteBottom20,
        basicCompStyles.flexRow
    ],


    dishListView: [
        basicCompStyles.flexRowNC,
        basicCompStyles.dishListView,
        basicCompStyles.defaultBorder
    ],
    dishListImageView: [
        basicCompStyles.flexColumnCC,
        basicCompStyles.transparentBackGround,
        basicCompStyles.defaultPadding,
    ],
    dishListTextView: [
        basicCompStyles.flexRowSbC,
        basicCompStyles.transparentBackGround,
        basicCompStyles.defaultPadding,
        basicCompStyles.fullSize
    ],
    dishListTextIconView: [
        basicCompStyles.flexColumnNFs,
        basicCompStyles.defaultPadding,
        basicCompStyles.fullSize
    ],




    dishCardView: [
        sizes.cardView,
        basicCompStyles.flexColumnCC,
        basicCompStyles.dishCardView,
        basicCompStyles.defaultBorder
    ],
    dishCardImageView: [
        sizes.cardImageView,
        basicCompStyles.flexColumnCC,
        basicCompStyles.transparentBackGround,
        basicCompStyles.defaultPadding,
    ],
    dishCardImage: [
        sizes.cardImage,
    ],
    dishCardTextView: [
        sizes.cardImageView,
        basicCompStyles.flexColumnCC,
        basicCompStyles.transparentBackGround,
        basicCompStyles.defaultPadding,
    ],
}

export const animate = (isAnimate) => StyleSheet.create({
    rotation: {
        transform:[{
            rotate: isAnimate ? '0deg' : '180deg'
        }]
    }
})