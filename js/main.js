const hotelSlider = new Swiper(".hotel-slider", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	speed: 2000,
	effect: "fade",

	// Navigation arrows
	navigation: {
		nextEl: ".hotel-slider__button--next",
		prevEl: ".hotel-slider__button--prev",
	},
});
document.addEventListener("keydown", function (event) {
	if (event.code == "ArrowLeft") {
		hotelSlider.slidePrev();
	}
	if (event.code == "ArrowRight") {
		hotelSlider.slideNext();
	}
});

const reviewsSlader = new Swiper(".reviews-slider", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	speed: 500,
	effect: "slide",

	// Navigation arrows
	navigation: {
		nextEl: ".reviews-slider__button--next",
		prevEl: ".reviews-slider__button--prev",
	},
});

document.addEventListener("keydown", function (event) {
	if (event.code == "ArrowLeft") {
		reviewsSlader.slidePrev();
	}
	if (event.code == "ArrowRight") {
		reviewsSlader.slideNext();
	}
});
