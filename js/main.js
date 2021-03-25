$(document).ready(function () {
	const hotelSlider = new Swiper(".hotel-slider", {
		// Optional parameters
		direction: "horizontal",
		loop: true,
		speed: 1000,
		effect: "fade",

		// Navigation arrows
		navigation: {
			nextEl: ".hotel-slider__button--next",
			prevEl: ".hotel-slider__button--prev",
		},
	});

	// Подключение клавиш влево и вправо
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

	// Подключение параллакс-эффекта
	$(document).ready(function () {
		$(".newsletter").parallax({
			imageSrc: "./img/newsletter-bg.jpeg",
			speed: "0.2",
		});
	});

	// Мобильное меню
	var menuButton = $(".menu-button");
	menuButton.on("click", function () {
		// console.log("Клик по кнопке");
		$(".navbar-bottom").toggleClass("navbar-bottom_visible");
	});

	// модальное окно
	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	modalButton.on("click", openModal);
	closeModalButton.on("click", closeModal);

	function openModal() {
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		modalOverlay.addClass("modal__overlay_visible");
		modalDialog.addClass("modal__dialog_visible");
	}
	function closeModal(event) {
		event.preventDefault();
		removeModalClass();
	}
	function removeModalClass() {
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		modalOverlay.removeClass("modal__overlay_visible");
		modalDialog.removeClass("modal__dialog_visible");
	}

	document.addEventListener("keydown", function (event) {
		if (event.code == "Escape") {
			removeModalClass();
		}
	});

	// маски
	$(".phone").mask("+7(999)999-99-99", { placeholder: "+7(999)999-99-99" });

	// обработка форм
	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				name: {
					requred: "Please specify your name",
					minlength: "The name must contain at least 3 characters",
				},
				email: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of name@domain.com",
				},
				phone: {
					required: "Phone number required",
				},
			},
		});
	});
});
