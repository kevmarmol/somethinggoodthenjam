define([
	'app',
	'views/map',
	'views/welcome-view'
//	'text!../../templates/view/main.html'
], function (App, MapView, WelcomeView) {
	var AppView = Backbone.View.extend({

		el: '#app',

		//template: MainTemplate,

		initialize: function () {
			new MapView();
			new WelcomeView();
		}

	});

	return AppView;

});