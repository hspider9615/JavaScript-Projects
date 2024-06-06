// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement('.featured-center'));
  }
};

window.addEventListener('DOMContentLoaded', init);

// Scroll CopyRight

// Smooth scrolling
var isScrolling;

window.addEventListener('scroll', function (event) {
  window.clearTimeout(isScrolling);
  // Add a delay to execute the scroll end action
  isScrolling = setTimeout(function () {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;

    // Adjust the threshold (200 in this case) as needed
    if (scrollPosition > 200) {
      footer.classList.remove('hidden'); // Show the footer
    } else {
      footer.classList.add('hidden'); // Hide the footer
    }
  }, 100); // Adjust the delay (in milliseconds) as needed
});
