define([
	'app',
	'collections/pins-collection'
], function (App, PinsCollection) {

	var WindowView = Backbone.View.extend({

		tagName: 'div',

		className: 'iframe',

		initialize: function () {
			this.render();
		},

		render: function () {

			if (!document.querySelector('.iframe')) {
				document.querySelector('#app').appendChild(this.el);
			}

			return this;
		}

	});

	return WindowView;

});