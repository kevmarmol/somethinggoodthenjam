define([
	'app',
	'views/app-view'
], function (App, AppView) {

	var AppRouter = Backbone.Router.extend({

		routes: {
			'': 'index',
			'window/:id': 'window'
		},

		index: function () {
			var home = new AppView();
		},

		window: function () {
			var windowView = new WindowView();
		}

	});

	return AppRouter;

});