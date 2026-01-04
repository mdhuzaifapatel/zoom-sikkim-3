/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // Cuando hacemos clic en cada nav_link, eliminamos la clase show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER HOME ===============*/
let swiperHome = new Swiper(".home_swiper", {
  loop: "true",
  slidesPerView: "auto",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const bgHeader = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
  ? header.classList.add("bg-header")
  : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER TESTIMONIAL ===============*/
let swipertestimonials = new Swiper(".testimonial_swiper", {
  loop: "true",
  slidesPerView: "auto",
  spaceBetween: 40,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Cuando el desplazamiento sea mayor a 350 de altura del viewport, agrega la clase show-scroll a la etiqueta a con la clase scrollup
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  reset: true, // Animation repeat
})

sr.reveal(`.home_container, .testimonial_container, .footer_container`)
sr.reveal(`.home_title`, { delay: 600 })
sr.reveal(`.home_description`, { delay: 900 })
sr.reveal(`.home_data .button`, { delay: 1200 })
sr.reveal(`.destination_card, .gallery_card`, { interval: 100 })
sr.reveal(`.join_data`, { origin: 'left' })
sr.reveal(`.join_img`, { origin: 'right' })