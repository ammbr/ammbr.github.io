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