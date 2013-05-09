define([
	'app',
	'collections/pins-collection'
], function (App, PinsCollection) {

	var WindowView = Backbone.View.extend({

		tagName: 'div',

		className: 'window',

		initialize: function () {

			this.render();

		},

		render: function () {

			if (!document.querySelector('.window')) {
				document.querySelector('#app').appendChild(this.el);
				console.log(PinsCollection);
			}

			return this;
		}

	});

	return WindowView;

});