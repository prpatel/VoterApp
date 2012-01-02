exports.iPhoneWindow = function() {
 	createREPL();
	require('ui/common/Styles');
	var $$ = globals.ui.properties;
	
	
	var ToolTipView = require('ui/common/ToolTipView'),
		LoginView = require('ui/common/LoginView')
		//TeamChooserTableView = require('ui/common/TeamChooserTableView'),
		//ArticleWebView = require('ui/common/ArticleWebView');
	Ti.API.log('barColor:'+ $$.barColor);
	var instance = Ti.UI.createWindow({
		
	});
	
	var loginWindow = Ti.UI.createWindow({
		title:'Login',
		backgroundColor: G.ui.theme.backgroundColor,
		barColor: $$.barColor
	});
	loginWindow.add(new LoginView());
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window: loginWindow
	});
	instance.add(navGroup);
	
	var voteWin = Ti.UI.createWindow({
		title:'Vote',
		backgroundColor: G.ui.theme.backgroundColor,
		barColor: $$.barColor,
		//navBarHidden: true,
		
	});
	//voteWin.add(new ArticleWebView());
	
	Ti.App.addEventListener('app:mainWin:open', function() {
		navGroup.open(voteWin);
	});
	Ti.App.fireEvent('app:show.drawer');
	return instance;
};
