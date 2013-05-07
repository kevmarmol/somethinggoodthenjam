define([
	'app',
	'view/map',
	'text!../../templates/view/main.html'
], function (App, MapView, MainTemplate) {

	var AppView = Backbone.View.extend({

		el: '#app',

		template: MainTemplate,

		initialize: function () {
			var Map;

			this.render();

			Map = new MapView();
		},

		render: function () {
			this.$el.html(_.template(MainTemplate, {}));
		}

	});

	return AppView;

});