window.onload = function () {
	$('.our-services-carousel-container').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		appendDots: $('.control-box'),
		appendArrows: $('.control-box'),
		variableWidth: true,
		infinite: false,
		touchThreshold: 100,
	});
};

const firstBlockObserver = document.querySelector('#about-company');
const navigationBackground = document.querySelector('.nav-background');
let options = {
	threshold: 0.8,
	rootMargin: '0px',
};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			navigationBackground.classList.add('nav-background-scrolled');
		} else {
			navigationBackground.classList.remove('nav-background-scrolled');
		}
	});
}, options);

observer.observe(firstBlockObserver);
