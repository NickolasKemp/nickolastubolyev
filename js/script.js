
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

	// spaceBetween: 200,

});


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

// add linkin, git icon to main, add hover scale up to them. Then all the same to footer
// add scroll to home by clicking logo 
// deal with slider in about. It has to be at the center or a bit right
// add hover on project in projs, and link. Add icons of git and demo
// correct hover in contact 
//check font size around the proj
