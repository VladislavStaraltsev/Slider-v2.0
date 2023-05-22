const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSliedIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})

document.addEventListener('keydown', event => {
	if (event.key === 'ArrowUp') {
		changeSlide('up')
	} else if (event.key === 'ArrowDown') {
		changeSlide('down')
	}
})

function changeSlide(direction) {
	if(direction === 'up') {
		activeSliedIndex++
		if (activeSliedIndex === slidesCount) {
			activeSliedIndex = 0
		}
	} else if (direction === 'down') {
		activeSliedIndex--
		if (activeSliedIndex < 0) {
			activeSliedIndex = slidesCount - 1
		}
	}

	const height = container.clientHeight

	mainSlide.style.transform = `translateY(-${activeSliedIndex * height}px)`

	sidebar.style.transform = `translateY(${activeSliedIndex * height}px)`
}