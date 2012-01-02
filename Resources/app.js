Ti.UI.setBackgroundColor('#fff');

//monkey patch "require" in the global scope
require('lib/require').monkeypatch(this);
var _ = require('lib/underscore')._;
require('lib/Date');

//globally accessible and useful data - should strive
//for one or zero global variables.
var globals = {
	osname : Ti.Platform.osname,
};
globals.ui = {};
globals.os = function(/*Object*/map) {
	var def = map.def || null;
	//default function or value
	if( typeof map[globals.osname] != 'undefined') {
		if( typeof map[globals.osname] == 'function') {
			return map[globals.osname]();
		} else {
			return map[globals.osname];
		}
	} else {
		if( typeof def == 'function') {
			return def();
		} else {
			return def;
		}
	}
};
var empty = {};
function mixin(/*Object*/target, /*Object*/source) {
	var name, s, i;
	for(name in source) {
		s = source[name];
		if(!( name in target) || (target[name] !== s && (!( name in empty) || empty[name] !== s))) {
			target[name] = s;
		}
	}
	return target;
	// Object
};

globals.mixin = function(/*Object*/obj, /*Object...*/props) {
	if(!obj) {
		obj = {};
	}
	for(var i = 1, l = arguments.length; i < l; i++) {
		mixin(obj, arguments[i]);
	}
	return obj;
	// Object
};
//create a new object, combining the properties of the passed objects with the last arguments having
//priority over the first ones
globals.combine = function(/*Object*/obj, /*Object...*/props) {
	var newObj = {};
	for(var i = 0, l = arguments.length; i < l; i++) {
		mixin(newObj, arguments[i]);
	}
	return newObj;
};

function createREPL() {
	if(Ti.Platform.osname == 'android') {
		var repl = Titanium.Repl.createReplServer();
	} else if(Ti.Platform.osname == 'iphone') {
		var replserverModule = require('com.evocomputing.replserver');
		Ti.API.info("module is => " + replserverModule);
		var repl = replserverModule.createReplServer();
	}

	Ti.API.info("repl: " + repl);
	Ti.API.info("repl.port: " + repl.listenPort);
	repl.listenPort = 5061;
	Ti.API.info("repl.port: " + repl.listenPort);
	Ti.API.info("repl.isRunning: " + repl.running);

	repl.start();
}
var G = globals;
(function() {
	var WindowObject;
	if(globals.osname === 'ipad') {
		WindowObject = require('ui/ipad/iPadWindow');
	} else if(globals.osname === 'iphone') {
		Ti.API.log('iphone detected');
		WindowObject = require('ui/iphone/iPhoneWindow');
	} else {
		WindowObject = require('ui/android/AndroidWindow');
	}
	new WindowObject().open();

})();
