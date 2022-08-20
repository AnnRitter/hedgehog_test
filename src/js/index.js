const swiper = new Swiper('.slider__outer-wrap', {

	direction: 'horizontal',
	loop: true,
	slidesPerView: 2,
	spaceBetween: 37,
	breakpoints: {

		991: {
			slidesPerView: 2,
		},

		768: {
			slidesPerView: 1.5,
			spaceBetween: 40,
		},

		320: {
			slidesPerView: 1.15,
			spaceBetween: 10,
		}
	},

	navigation: {
		nextEl: '.slider__button-next',
		prevEl: '.slider__button-prev',
	},

});

const burger = document.querySelector('.header__burger-lines')
const menu = document.querySelector('.burger')
const overlay = document.querySelector('.overlay')
const cross = menu.querySelector('.burger__cross')

burger.addEventListener('click', openMenu)

function openMenu(event) {
	menu.classList.add('active')
	overlay.classList.add('active')
	cross.addEventListener('click', closeMenu)
	overlay.addEventListener('click', closeMenu)
}

function closeMenu() {
	menu.classList.remove('active')
	overlay.classList.remove('active')
}