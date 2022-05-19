const body = document.body
const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')
const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, buttonClass) => {
	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))
	body.classList.add(bodyClass)
	btnTheme.classList.add(buttonClass)
	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', buttonClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top');
	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block';
	} else {
		btnScrollTop.style.display = 'none';
	}
};

btnTheme.addEventListener('click', toggleTheme)
btnHamburger.addEventListener('click', displayList)
document.addEventListener('scroll', scrollUp)

const setBodyTheme = () => body.classList.add(getBodyTheme)
const setBtnTheme = () => btnTheme.classList.add(getBtnTheme)

setBodyTheme()
setBtnTheme()

/*image slider */
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length) {
	slideIndex = 1
  }
  if(n < 1) {
	slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}