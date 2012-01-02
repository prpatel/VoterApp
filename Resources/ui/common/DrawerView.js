globals.ui.createDrawerView = function(embeddedView) {
	var drawerView = Ti.UI.createView(globals.combine(globals.ui.properties.stretch, {
		visible : false
	})), backdrop = Ti.UI.createView(globals.combine(globals.ui.properties.stretch, {
		backgroundColor : '#787878',
		opacity : 0.85
	})), drawer = Ti.UI.createView({
		top : 30,
		bottom : 30,
		// height: '100%',
		left : globals.ui.properties.platformWidth - 10,
		width : globals.ui.properties.platformWidth,
		borderRadius : 10,
		backgroundColor : G.ui.colors.greenColor
	}), closeView = Ti.UI.createView({
		width : 15,
		borderRadius : 10,
		backgroundColor : globals.ui.colors.goldColor,
		left : 0,
		top : 0,
		bottom : 0
	}), arrow = Ti.UI.createImageView({
		image : 'images/arrow_details.png',
		height : 'auto',
		width : 'auto',
		left : 2,
		right : 2
	});

	drawerView.add(backdrop);
	drawerView.add(drawer);
	closeView.add(arrow);
	drawer.add(closeView);

	drawer.add(embeddedView);

	//add logic to manage the state of the drawer
	Ti.App.addEventListener('app:show.drawer', function(e) {
		drawerView.visible = true;

		drawer.animate({
			duration : globals.ui.properties.animationDuration,
			left : 10
		}, function() {
			Ti.App.fireEvent('app:drawer.opened');
		});
	});

	Ti.App.addEventListener('app:hide.drawer', function(e) {
		drawer.animate({
			duration : globals.ui.properties.animationDuration,
			left : globals.ui.properties.platformWidth - 10
		}, function() {
			drawerView.visible = false;
		});
	});
	//clicking in the backdrop or arrow should hide also
	backdrop.addEventListener('click', function() {
		Ti.App.fireEvent('app:hide.drawer');
	});
	closeView.addEventListener('click', function() {
		Ti.App.fireEvent('app:hide.drawer');
	});
	return drawerView;
};
