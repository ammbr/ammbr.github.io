$(document).ready(function() {

	$('.carousel').carousel({
  		interval: 3000
	});

	//verifica se os campos de contato não estão vazios.
	$('#btn_enviar').click(function() {

		campo_vazio = false;

		$('.campo').each(function(){
			
        	if ($(this).val() == '') {

        		$(this).css({'border-color': '#A94442'});
        		campo_vazio = true;

        	}  else {
			$(this).css({'border-color': '#CCC'});
        	}
		});
		
		if(campo_vazio) return false;

	});
		
});

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
	infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);

//slider modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides[slideIndex-1] != undefined) {

	  slides[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
  }
}