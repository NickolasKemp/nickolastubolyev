
// Burger
const menuBody = document.querySelector('.menu__body');
const menuIcon = document.querySelector('.menu__icon');

menuIcon.addEventListener('click', toggleMenu)

function toggleMenu() {
	menuBody.classList.toggle('_active');
	menuIcon.classList.toggle('_active');
	document.body.classList.toggle('_lock');
}


// -------Slider-Swiper--------------


 let slidesAmount = 4.5


const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	freeMode: true,

	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.image-slider'
	},

	slidesPerView: 4.5,
	speed: 800,


});


window.addEventListener('resize',  resizeSliderBlockWidth)


function resizeSliderBlockWidth() {
	let sliderBlock = document.querySelector('.about__slider')
	let sliderBlockWidth = sliderBlock.offsetWidth5

	if (sliderBlockWidth < 500) {
		swiper.params.slidesPerView = 3.5
	} else if (sliderBlockWidth < 400) {
		swiper.params.slidesPerView = 3
	} else if (sliderBlockWidth < 300) {
		swiper.params.slidesPerView = 2
	} else if (sliderBlockWidth < 200) {
		swiper.params.slidesPerView = 1
	} else {
		swiper.params.slidesPerView = 4.5

	}
	

  swiper.update();
 }



// -----------Scroll to section------------------


const mainButton = document.querySelector('.main__action')


const menuLinks = document.querySelectorAll('.menu__link')


for (let link of menuLinks) {
	link.addEventListener('click', goToSectionByLink)
}

mainButton.addEventListener('click', goToSectionByButton)

function goToSectionByLink(e) {
	e.preventDefault()

	const targetAction = e.target
	let gotoValue
	let gotoSection

	document.body.classList.remove('_lock');
	menuBody.classList.remove('_active');
	menuIcon.classList.remove('_active');

	gotoSection = document.querySelector(targetAction.dataset.goto)
	if(gotoSection) {
		gotoValue = gotoSection.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
	} 

	window.scrollTo ({
		top: gotoValue,
		behavior: 'smooth'
	})

}


function goToSectionByButton(e) {
	e.preventDefault()

	const gotoSection = document.querySelector(mainButton.dataset.goto)
	const gotoValue = gotoSection.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

	window.scrollTo ({
		top: gotoValue,
		behavior: 'smooth'
	})

}

// -----------------projs hover--------------

const projectPreviewImgs = document.querySelectorAll('.project-preview-img')

console.log(projectPreviewImgs)


if(projectPreviewImgs.length) {
	for (let element of projectPreviewImgs) {
	const overlay = element.querySelector('.darken-overlay');
	const previewModeElement = element.querySelector('.preview-mode')

		element.addEventListener('mouseover', function addPreview(e) {
			previewModeElement.classList.add('_active')
		})

		element.addEventListener('mouseout', function() {
			previewModeElement.classList.remove('_active')

		  })

		
	}

}



