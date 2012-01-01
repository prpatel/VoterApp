Ti.UI.setBackgroundColor('#ffffff');

//monkey patch "require" in the global scope
require('lib/require').monkeypatch(this);
var _ = require('lib/underscore')._;
require('lib/Date');

//globally accessible and useful data - should strive
//for one or zero global variables.
var globals = {
	osname: Ti.Platform.osname,
};

(function() {
	var WindowObject;
	if (globals.osname === 'ipad') {
		WindowObject = require('ui/ipad/iPadWindow');
	}
	else if (globals.osname === 'iphone') {
		Ti.API.log('iphone detected');
		WindowObject = require('ui/iphone/iPhoneWindow');
	}
	else {
		WindowObject = require('ui/android/AndroidWindow');
	}
	new WindowObject().open();
})();


