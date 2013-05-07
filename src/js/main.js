require.config({
	baseUrl: '/src/js',
	paths: {
		jQuery: 'libs/jquery/jquery.min',
		underscore: 'libs/underscore/underscore.min',
		Backbone: 'libs/backbone/backbone.min',
		text: 'libs/require/text'
	},
	shim: {
		'jQuery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'Backbone': {
			deps: ['underscore', 'jQuery'],
			exports: 'Backbone'
		}
	}
});

require([
	'app',
	'router'
], function (App, Router) {

	// initialise the app view
	App.router = new Router();

	// start HTML5 History API
	Backbone.history.start();

});