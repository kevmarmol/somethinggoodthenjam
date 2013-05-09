define([
	'app',
	'views/app-view',
	'views/window-view'
], function (App, AppView, WindowView) {

	var AppRouter = Backbone.Router.extend({

		routes: {
			'': 'index',
			'window/:id': 'window'
		},

		index: function () {
			var home = new AppView();
		},

		window: function (location) {
			var windowView = new WindowView();
		}

	});

	return AppRouter;

});