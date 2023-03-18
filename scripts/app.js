/** checking the span inputs and displaying them */
const mySpan = document.getElementById('typed-span');
const spanItems = mySpan.getAttribute('data-typed-items').split(',');
let index = 1;

console.log(spanItems);

function changeText(){
    mySpan.textContent = spanItems[index];
    index = (index + 1) % spanItems.length;
}

setInterval(changeText, 2000);


const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the active class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    // Add the active class to the clicked link
    this.classList.add('active');
  });
});

// Add the active class to the link corresponding to the current section
window.addEventListener('scroll', function() {
  const currentSection = document.querySelector('section.active');
  if (currentSection) {
    const currentLink = document.querySelector(`nav a[href="#${currentSection.id}"]`);
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    currentLink.classList.add('active');
  }
});


const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
const carouselPrevButton = document.querySelector('.carousel-prev');
const carouselNextButton = document.querySelector('.carousel-next');

const slideWidth = carouselSlides[0].offsetWidth;
const totalWidth = slideWidth * carouselSlides.length;

let currentSlide = 1;

function goToSlide(slideIndex) {
  carouselWrapper.style.transition = 'transform 0.5s ease-in-out';
  carouselWrapper.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function prevSlide() {
  if (currentSlide === 1) {
    currentSlide = carouselSlides.length;
    carouselWrapper.style.transition = 'none';
    carouselWrapper.style.transform = `translateX(-${totalWidth - slideWidth}px)`;
  } else {
    currentSlide--;
    goToSlide(currentSlide - 1);
  }
}

function nextSlide() {
  if (currentSlide === carouselSlides.length) {
    currentSlide = 1;
    carouselWrapper.style.transition = 'none';
    carouselWrapper.style.transform = `translateX(0px)`;
  } else {
    currentSlide++;
    goToSlide(currentSlide - 1);
  }
}

// Set automatic sliding interval
const slideInterval = setInterval(nextSlide, 5000);

carouselPrevButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
});

carouselNextButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
});
