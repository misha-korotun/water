let menu = document.querySelector('.nav')
let navList = document.querySelector('.nav__list')
let burger = document.querySelector('.header__burger')

burger.addEventListener('click', function () {
	burger.classList.toggle('active')
})

window.onclick = function (e) {
	if (e.target.classList.contains('active')) {
		burger.classList.add('active')
		menu.classList.add('active')
		navList.classList.add('active')
	} else {
		burger.classList.remove('active')
		menu.classList.remove('active')
		navList.classList.remove('active')
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const hero = document.querySelector('.hero')
	const header = document.querySelector('.header-wrap')
	const scrollItems = document.querySelectorAll('.scroll-item')

	const scrollAnimation = () => {
		let windowCenter = window.innerHeight / 1.2 + window.scrollY
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + el.offsetHeight / 2
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class')
			}
		})
	}

	const headerFixed = () => {
		let scrollTop = window.scrollY
		let headerCenter = hero.offsetHeight / 2

		if (scrollTop >= headerCenter) {
			header.classList.add('fixed')
			header.style.marginTop = `$ {header.offsetHeight}px`
		} else {
			header.classList.remove('fixed')
			header.style.marginTop = `0px`
		}
	}

	headerFixed()
	scrollAnimation()
	window.addEventListener('scroll', () => {
		let scroll = document.querySelector('.up')
		scroll.classList.toggle('active-top', window.scrollY >= 1000)
		document.querySelector('.up').onclick = function () {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
		scrollAnimation()
		headerFixed()
	})
})

// Slider
let sliderLine = document.querySelector('.reviews__cards-wrap')
const slider = document.querySelector('.reviews__cards')
const block = document.querySelectorAll('.reviews__card')
let sliderDots = document.querySelectorAll('.dot')
const arrowLeft = document.querySelector('.prev')
const arrowRight = document.querySelector('.next')
let btns = document.querySelectorAll('.reviews__cards-btn button')
let sliderCount = 1
let width = document.querySelector('.reviews__card').offsetWidth + 10

arrowRight.addEventListener('click', nextSlide)
arrowLeft.addEventListener('click', prevSlide)

function nextSlide() {
	sliderCount++
	if (sliderCount >= block.length) {
		sliderCount = 0
	}

	rollSlider()
	thisBlock(sliderCount)
	thisSlide(sliderCount)
}
function prevSlide() {
	sliderCount--

	if (sliderCount < 0) {
		sliderCount = block.length - 1
	}
	rollSlider()
	thisBlock(sliderCount)
	thisSlide(sliderCount)
}

sliderDots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		sliderCount = index
		slider.style.transform = 'translate(-' + sliderCount * width + 'px)'
		thisBlock(sliderCount)
		thisSlide(sliderCount)
	})
})

function rollSlider() {
	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			slider.style.transform = 'translate(-' + sliderCount * width + 'px)'
		})
	})
}

function thisSlide(index) {
	sliderDots.forEach(item => item.classList.remove('dot-active'))
	sliderDots[sliderCount].classList.add('dot-active')
	rollSlider()
}

function thisBlock(index) {
	block.forEach(item => item.classList.remove('reviews__card-active'))
	block[sliderCount].classList.add('reviews__card-active')
	rollSlider()
}
