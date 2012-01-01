exports.iPhoneWindow = function() {
	var styles = require
	var ToolTipView = require('ui/common/ToolTipView'),
		LoginView = require('ui/common/LoginView')
		//TeamChooserTableView = require('ui/common/TeamChooserTableView'),
		//ArticleWebView = require('ui/common/ArticleWebView');
	
	var instance = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	var loginWindow = Ti.UI.createWindow({
		title:'Login',
		backgroundColor:'#ffffff',
		barColor: styles.barColor
	});
	loginWindow.add(new LoginView());
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window: loginWindow
	});
	instance.add(navGroup);
	
	var voteWin = Ti.UI.createWindow({
		title:'Vote',
		barColor: styles.barColor
	});
	//voteWin.add(new ArticleWebView());
	
	Ti.App.addEventListener('app:login:success', function() {
		navGroup.open(voteWin);
	});
	
	return instance;
};
