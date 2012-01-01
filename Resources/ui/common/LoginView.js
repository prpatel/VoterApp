exports.LoginView = function(args) {
	var view = Ti.UI.createView({
	    backgroundColor:'#000',
	    top:0,
	    left:0,
	    width:'100%',
	    height:'100%',
	    layout:'vertical'
	});
	// create labels, buttons, text fields
	
	var helpLabel = Titanium.UI.createLabel({
		color:'#abcdef',
		highlightedColor:'#0f0',
		backgroundColor:'transparent',
		width:200,
		height:'auto',
		text:'Please enter your login info'
	});
	
	var usernameField = Titanium.UI.createTextField({
		value:'Joe Bloggs',
		color:'#abcdef',
		backgroundColor: '#fff',
		height:35,
		top: 10,
		//left:10,
		width:250,
		borderRadius: 10,
		font:{fontSize:15},
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE
	});
	
	var passwordField = Titanium.UI.createTextField({
		hintText:'Enter password here',
		color:'#abcdef',
		backgroundColor: '#fff',
		height:35,
		top: 10,
		//left:10,
		width:250,
		borderRadius: 10,
		font:{fontSize:15},
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE
	});
	
	var submitButton = Titanium.UI.createButton({
		color:'#abcdef',
		top: 20,
		width:100,
		height:40,
		font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		title:'Login'
	});
	
	view.add(helpLabel);
	view.add(usernameField);
	view.add(passwordField);
	view.add(submitButton);
	return view;
}