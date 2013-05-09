define([
	'app',
	'collections/pins-collection',
	'async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCR4D2J6JYDccWUKFlx197RgzU-WnknLDM&sensor=false'
], function (App, PinsCollection) {

	var MapView = Backbone.View.extend({

		tagName: 'div',

		className: 'map',

		initialize: function () {
			this.getWindows();
			this.createMap();
			this.render();
		},

		createMap: function () {

			var options = {
				zoom: 10,
				center: new google.maps.LatLng(51.5171, 0.1062),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: false,
				panControl: false,
				streetViewControl: false
			};

			this.map = new google.maps.Map(this.el, options);

			this.windows = new google.maps.LatLngBounds(null);

			return this;

		},

		getWindows: function () {
			var self = this;
			this.pins = new PinsCollection();

			this.pins.on('add', function (model) {
				self.addWindowToMap(model.attributes);
			});

			this.pins.fetch();
			return this;
		},

		addWindowToMap: function (data) {
			var latLng = new google.maps.LatLng(data.latitude, data.longitude);
			var options = {
				id: data._id,
				icon: {
					size: new google.maps.Size(66, 57),
					url: '/src/images/lbi-marker.png'
				},
				map: this.map,
				position: latLng

			};
			var googleMarker = new google.maps.Marker(options);

			google.maps.event.addListener(googleMarker, 'click', this.onMarkerClick);

			this.map.fitBounds(this.windows.extend(latLng));

			return this;
		},

		onMarkerClick: function (event) {
			console.log(event);
			return this;
		},

		render: function () {
			document.querySelector('#app').appendChild(this.el);
			return this;
		}

	});

	return MapView;

});