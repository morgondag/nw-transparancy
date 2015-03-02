// nw.js specific javascript api files
var gui = require('nw.gui');
var win = gui.Window.get();

// a shortcut object
var option = {
	key: "A+Shift", // set the key to toggle
	active: function() {
		// leave this empty and use hook
	},
	failed: function(msg) {

	}
};

// add the shortcut to the desktop
var shortcut = new gui.Shortcut(option);
gui.App.registerGlobalHotKey(shortcut);


//bind an action to the shortcuts active function
shortcut.on('active', function() {
	// simply toggle the body class for css to change
	document.querySelector('body').classList.toggle('active');
});


// with this you can remove the shortcut from the app
//gui.App.unregisterGlobalHotKey(shortcut);

// set the application position
// this example animates from left-to-right
// so the x-axis is 0 and the y axis is 100 from top
win.moveTo(0,100)
