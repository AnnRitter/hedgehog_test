const swiper = new Swiper('.about__sliders', {

	direction: 'horizontal',
	loop: true,
	slidesPerView: 2,
	spaceBetween: 37,

	navigation: {
		nextEl: '.about__button-next',
		prevEl: '.about__button-prev',
	},

});

// console.log('working');