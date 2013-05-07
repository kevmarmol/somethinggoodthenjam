define([
	'jQuery',
	'underscore',
	'Backbone'
], function ($, _, Backbone) {

	var app = {
		root: '/'
	};

	return _.extend(app, {}, Backbone.Events);

});