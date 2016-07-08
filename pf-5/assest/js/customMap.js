(function ( $ ) {
	$.fn.CustomMap = function( options ) {
		var settings = $.extend({
			home: { latitude: 53.339381, longitude: -6.260533 },
			text: '<div class="map-popup"><h1>Company Name</h1><br/><div class="logo"><img src="" /></div><div class="about">A web development blog for all your HTML5, WordPress and jQuery needs</div></div><div class="clear"></div>',
				icon_url: '',
			zoom: 16
		}, options );
		
		var coords = new google.maps.LatLng(settings.home.latitude, settings.home.longitude);
			
		
			
			return this.each(function() {
			var element = $(this);
			
			var options = {
				zoom: settings.zoom,
				center: coords,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: true,
				scaleControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.DEFAULT
				},
					overviewMapControl: true,
			};
			
			var map = new google.maps.Map(element[0], options);
			
			var icon = {
				url: settings.icon_url,
				origin: new google.maps.Point(0, 0)
			};
			var marker = new google.maps.Marker({
				position: coords,
				map: map,
				icon: icon,
				draggable: true
			});
			var marker = new google.maps.Marker({
position: map.getCenter(),
map: map,
});
			var info = new google.maps.InfoWindow({
				content: settings.text
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
	
			var styles = [
	{
	"featureType": "landscape.natural",
	"elementType": "geometry.fill",
	"stylers": [
	{ "color": "#505050" }
	]
	},
	
	
	{
		"featureType": "landscape.man_made",
		"stylers": [
		{ "color": "#ffffff" },
		
		]
	},
	{
		"featureType": "water",
		"stylers": [
		{ "color": "#cccccc" },
		
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
		{ "color": "#cccccc" }
		]
	}
	,{
		"elementType": "labels.text.stroke",
		"stylers": [
		{ "visibility": "off" }
		]
	}
		,{
		"elementType": "labels.text",
		"stylers": [
		
			{ "color": "#bababa" }
		]
		}
		
		,{
		"featureType": "road.local",
		"stylers": [
		{ "color": "#cccccc" }
		]
		}
		,{
		"featureType": "road.local",
		"elementType": "labels.text",
		"stylers": [
		{ "color": "#000000" }
		]
		}
		,{
		"featureType": "transit.station.bus",
		"stylers": [
		{ "saturation": 0 }
		]
		}
		,{
		"featureType": "road.highway",
		"elementType": "labels.icon",
		"stylers": [
		{ "visibility": "on" }
		]
		},{
		"featureType": "poi",
		"stylers": [
		{ "visibility": "off" }
		]
		}
	
	]
			map.setOptions({styles: styles});
		});

	};
}( jQuery ));
jQuery(document).ready(function() {
	jQuery('.userLocation').CustomMap();
});