var carousels = document.querySelectorAll('#carousel_container .carousel_element');
var currentCarousel = 0;
var carouselInteraval = setInterval(nextCarousel, 5000);

function nextCarousel(){
	carousels[currentCarousel].className = 'carousel_element';
	currentCarousel = (currentCarousel+1) % carousels.length;
	carousels[currentCarousel].className = 'carousel_element show'
};

