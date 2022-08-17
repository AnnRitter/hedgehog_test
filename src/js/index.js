const swiper = new Swiper('.slider__outer-wrap', {

	direction: 'horizontal',
	loop: true,
	slidesPerView: 2,
	spaceBetween: 37,

	navigation: {
		nextEl: '.slider__button-next',
		prevEl: '.slider__button-prev',
	},

});

// console.log('working');