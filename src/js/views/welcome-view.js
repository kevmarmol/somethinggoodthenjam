define([
	'app',
	'text!../../templates/view/welcome.html'
], function (App, WelcomeTemplate) {

	var WelcomeView = Backbone.View.extend({

		el: '#app',

		template: WelcomeTemplate,

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.append(_.template( this.template ));

			return this;
		}

	});

	return WelcomeView;

});