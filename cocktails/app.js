import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});

// scroll button
window.addEventListener('scroll', function () {
  var copyright = document.getElementById('copyright');
  var contentHeight = document.querySelector('.cocktails').offsetHeight;
  var scrollPosition = window.innerHeight + window.scrollY;

  if (scrollPosition >= contentHeight) {
    copyright.style.opacity = '1';
    copyright.style.transform = 'translateY(0)';
  } else {
    copyright.style.opacity = '0';
    copyright.style.transform = 'translateY(100%)';
  }
});

// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});


// Zoom 
function adjustViewportScale() {
  var viewportWidth = window.innerWidth;
  var contentWidth = document.documentElement.scrollWidth;

  var scale = viewportWidth / contentWidth;

  // Set the viewport scale
  document
    .querySelector('meta[name="viewport"]')
    .setAttribute('content', 'width=device-width, initial-scale=' + scale);
}
adjustViewportScale();
window.addEventListener('resize', adjustViewportScale);

