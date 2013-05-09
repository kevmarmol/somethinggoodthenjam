define([
	'app',
	'models/pin-model'
], function (App, PinModel) {

	var PinsCollection = Backbone.Collection.extend({

		model: PinModel,

		url: '/windows',

		parse: function (response) {
			return _.map(response, function (data) {
				return new PinModel(data);
			});
		}

	});

	return PinsCollection;

});