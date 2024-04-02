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
