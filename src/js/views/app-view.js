define([
	'app',
	'views/map',
	'text!../../templates/view/main.html'
], function (App, MapView, MainTemplate) {
	var AppView = Backbone.View.extend({

		el: '#app',

		template: MainTemplate,

		initialize: function () {
			new MapView();
		}

	});

	return AppView;

});