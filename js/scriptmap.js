//google maps
function init_map() {
	var myOptions = {
		zoom:16,
		center:new google.maps.LatLng(-23.62491,-46.547561099999996),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(-23.62491,-46.547561099999996)
	});
	infowindow = new google.maps.InfoWindow({
		content:'<strong>Título</strong><br>São Caetano do Sul - SP<br>'
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
	//infowindow.open(map,marker);
}
//google.maps.event.addDomListener(window, 'load', init_map);
