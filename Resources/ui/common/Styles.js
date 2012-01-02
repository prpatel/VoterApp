//Globally available theme object to hold theme colors/constants
globals.ui.colors = {
	greenColor: '#59A04F',
	goldColor: '#F8A712',
	silverColor: '#B8C2C1',
}

globals.ui.theme = {
	textColor : '#000000',
	grayTextColor : '#888888',
	headerColor : '#333333',
	lightBlue : '#006cb1',
	darkBlue : '#93caed',
	fontFamily : globals.os({
		iphone : 'Helvetica Neue',
		android : 'Droid Sans'
	}),

	// overriding above element
	textColor: globals.ui.colors.goldColor,
	backgroundColor: globals.ui.colors.silverColor,
	formFieldBackgroundColor: 'white'
	
};

//All shared property sets are declared here.
globals.ui.properties = {
	//grab platform dimensions only once to save a trip over the bridge
	platformWidth : Ti.Platform.displayCaps.platformWidth,
	platformHeight : Ti.Platform.displayCaps.platformHeight,

	barColor : globals.ui.colors.greenColor,
		//we use these for default components
	Button: {
			//backgroundImage:'images/button_bg.png',
			font: {
				fontSize:18,
				fontWeight:'bold'
			},
			color: G.ui.theme.textColor,
			backgroundColor: 'transparent',
			top: 20,
			width: 100,
			height:40
			
		},	
	Label : {
		color : globals.ui.theme.textColor,
		font : {
			fontFamily : globals.ui.theme.fontFamily,
			fontSize : 12
		},
		height : 'auto'
	},
	LargeLabel : {
		color : globals.ui.theme.textColor,
		font : {
			fontFamily : globals.ui.theme.fontFamily,
			fontSize : 28
		},
		height : 'auto'
	},
	Window : {
		backgroundImage : 'images/ruff.png',
		navBarHidden : true,
		softInputMode : (Ti.UI.Android) ? Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE : ''
	},
	TableView : {
		backgroundImage : 'images/ruff.png',
		separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE
	},
	TableViewRow : {
		backgroundImage : 'images/tweet_bg.png',
		selectedBackgroundColor : globals.ui.theme.darkBlue, //I know, this is dumb, but it's currently inconsistent x-platform
		backgroundSelectedColor : globals.ui.theme.darkBlue,
		//height:110,
		className : 'tvRow'
	},
	TextField : {
		color: G.ui.theme.textColor,
		backgroundColor: G.ui.theme.formFieldBackgroundColor,
		height:35,
		top: 10,
		//left:10,
		width:250,
		borderRadius: 10,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	},
	TextArea : {
		borderRadius : 10,
		backgroundColor : '#efefef',
		//gradient will only work on iOS
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : '#efefef',
				position : 0.0
			}, {
				color : '#cdcdcd',
				position : 0.50
			}, {
				color : '#efefef',
				position : 1.0
			}]
		}
	},

	//we use these as JS-based 'style classes'
	animationDuration : 500,
	stretch : {
		top : 0,
		bottom : 0,
		left : 0,
		right : 0
	},
	headerText : {
		top : 8,
		height : 'auto',
		textAlign : 'center',
		color : globals.ui.theme.headerColor,
		font : {
			fontFamily : globals.ui.theme.fontFamily,
			fontSize : 18,
			fontWeight : 'bold'
		}
	},
	headerView : {
		backgroundImage : 'images/header_bg.png',
		height : 40
	},
	boldHeaderText : {
		height : 'auto',
		color : '#000000',
		font : {
			fontFamily : globals.ui.theme.fontFamily,
			fontSize : 14,
			fontWeight : 'bold'
		}
	},
	smallText : {
		color : globals.ui.theme.grayTextColor,
		font : {
			fontFamily : globals.ui.theme.fontFamily,
			fontSize : 10
		},
		height : 'auto'
	},
	spacerRow : {
		backgroundImage : 'images/spacer_row.png',
		height : 30,
		className : 'spacerRow'
	}
};