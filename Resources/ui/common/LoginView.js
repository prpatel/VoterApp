exports.LoginView = function(args) {

var contentView = Ti.UI.createView({
	layout: 'vertical', 
	height: 'auto',
	//borderColor: '#555',
	backgroundColor: 'transparent', 
	top: 10
});

require('ui/common/DrawerView');

	// create labels, buglobalsons, text fields
	
	var helpLabel = Titanium.UI.createLabel({
		color: G.ui.colors.goldColor,
		highlightedColor:'#0f0',
		backgroundColor:'transparent',
		width:200,
		height:'auto',
		text:'Please enter your login info',
		font: G.ui.theme.fontFamily
	});
	
	var usernameField = Titanium.UI.createTextField({
		value:'Joe Bloggs',
		color: G.ui.theme.textColor,
		backgroundColor: G.ui.theme.formFieldBackgroundColor,
		height:35,
		top: 10,
		//left:10,
		width:250,
		borderRadius: 10,
		font:{fontSize:15},
		//borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE
	});
	
	var passwordField = Titanium.UI.createTextField({
		hintText:'Enter password here',
		color: G.ui.theme.textColor,
		backgroundColor: G.ui.theme.formFieldBackgroundColor,
		height:35,
		top: 10,
		//left:10,
		width:250,
		borderRadius: 10,
		font:{fontSize:15},
		//borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE
	});
	
	var submitButton = Titanium.UI.createButton({
		color: G.ui.theme.textColor,
		backgroundColor: 'transparent',
		top: 20,
		width:100,
		height:40,
		font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		title:'Login'
	});

		var registerLabel = Ti.UI.createLabel(globals.combine(globals.ui.properties.Label, {
			text: L('If you don\'t have an account enter in all fields!') ,
			top: 10,
			textAlign:'center',
			color: '#fff'
		}));		
		
		birthdayField = Ti.UI.createTextField(globals.combine(globals.ui.properties.TextField,{
			top:10, left:0, right:0,
			hintText: 'birthday'
		})),	
		
		genderField = Ti.UI.createTextField(globals.combine(globals.ui.properties.TextField,{
			top:10, left:0, right:0,
			hintText: 'gender'
		})),	
				
		createAccount = Ti.UI.createButton(globals.combine(globals.ui.properties.Button,{
			title:L('Create Account'),
			top:10,
			width: 150
		}));


	
	contentView.add(helpLabel);
	contentView.add(usernameField);
	contentView.add(passwordField);
	contentView.add(submitButton);
	contentView.add(registerLabel);
	contentView.add(birthdayField);
	contentView.add(genderField);		
	contentView.add(createAccount);

	submitButton.addEventListener('click', function() {
		var net = require('data/network');
		net.authenticate(usernameField.value, passwordField.value);
	});		
	
	Ti.App.addEventListener('app:login:success', function(e) {
		
		setTimeout(function () {
			Ti.App.fireEvent('app:hide.drawer');
			Ti.App.fireEvent('app:mainWin:open');	
		}, 1000);
		
	});	
	Ti.App.addEventListener('app:login:failure', function(e) {
		alert('login failed, please check your password and try again');
	});		
	
	
	return globals.ui.createDrawerView(contentView);
}