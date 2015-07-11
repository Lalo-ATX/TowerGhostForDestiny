// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "jquery":               "bower_modules/jquery/dist/jquery",
		"bootstrap":            "bower_modules/components-bootstrap/js/bootstrap",		
        "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
        "hasher":               "bower_modules/hasher/dist/js/hasher.min",        
		"underscore":           "bower_modules/underscore/underscore",
        "knockout":             "bower_modules/knockout/dist/knockout",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text":                 "bower_modules/requirejs-text/text",
		"json":                 "bower_modules/requirejs-json/json",
		"dash":                 "components/nav-bar/dash",
		"tk_i18n": 				"components/locale/tk_i18n",
		"tgd_strings": 			"components/locale/strings",
		"fastclick-ko":			"components/template/fastclick-ko",
		"fastclick-lib":		"components/template/fastclick-lib",
		"bungie":				"components/login-page/bungie",
		"Profile":				"components/home-page/Profile",
		"Item":					"components/home-page/Item",
		"tgd":					"components/home-page/tgd",
		"bootstrap-dialog":     "bower_modules/BootstrapDialog/dist/js/bootstrap-dialog"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] },
		"bootstrap-dialog": { deps: ["jquery"] },
		"dash": { deps: ["jquery"] }
    },
	callback: function(){
		require.config({
			i18n: {
				locale: "fr"
			}
		});
	}
};
