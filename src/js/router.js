define([
	'app',
	'views/app-view'
], function (App, AppView) {

	var AppRouter = Backbone.Router.extend({

		routes: {
			'': 'index'
		},

		index: function () {
			var home = new AppView();
		}

	});

	return AppRouter;

});